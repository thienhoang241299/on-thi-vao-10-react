/**
 * FIREBASE / CLOUD EXAM STORAGE SERVICE
 * Quản lý lưu trữ và đồng bộ đề thi giáo viên biên soạn lên Cloud
 * Sử dụng REST API siêu nhẹ, 0 byte phụ trội, tương thích mọi môi trường
 */

const LOCAL_CLOUD_CACHE_KEY = "firebase_published_exams_cache";
const FIREBASE_CONFIG_KEY = "firebase_database_url";

// URL dự phòng mặc định (có thể tùy chỉnh trong Cài Đặt)
const DEFAULT_FIREBASE_URL = "https://on-thi-vao-10-cloud-default-rtdb.asia-southeast1.firebasedatabase.app";

class FirebaseService {
  getFirebaseUrl() {
    return localStorage.getItem(FIREBASE_CONFIG_KEY) || DEFAULT_FIREBASE_URL;
  }

  setFirebaseUrl(url) {
    if (url) {
      localStorage.setItem(FIREBASE_CONFIG_KEY, url.trim().replace(/\/$/, ""));
    } else {
      localStorage.removeItem(FIREBASE_CONFIG_KEY);
    }
  }

  // Lấy bộ nhớ đệm đề thi đã lưu cục bộ
  getLocalCache() {
    try {
      return JSON.parse(localStorage.getItem(LOCAL_CLOUD_CACHE_KEY) || "[]");
    } catch {
      return [];
    }
  }

  saveLocalCache(exams) {
    localStorage.setItem(LOCAL_CLOUD_CACHE_KEY, JSON.stringify(exams));
  }

  /**
   * Xuất bản đề thi lên Firebase Realtime Database
   */
  async publishExam(exam) {
    const publishedAt = new Date().toISOString();
    const publishedExam = {
      ...exam,
      isPublished: true,
      publishedAt,
      publisherRole: "Giáo viên biên soạn",
      viewCount: 0
    };

    // 1. Lưu ngay vào local cache để học sinh trên máy này thấy tức thì
    const currentCache = this.getLocalCache();
    const existingIndex = currentCache.findIndex((e) => e.id === publishedExam.id);
    let updatedCache;
    if (existingIndex >= 0) {
      updatedCache = [...currentCache];
      updatedCache[existingIndex] = publishedExam;
    } else {
      updatedCache = [publishedExam, ...currentCache];
    }
    this.saveLocalCache(updatedCache);

    // 2. Đồng bộ lên Firebase REST API
    const firebaseUrl = this.getFirebaseUrl();
    if (firebaseUrl) {
      try {
        const cleanId = String(publishedExam.id).replace(/[.#$[\]]/g, "_");
        const res = await fetch(`${firebaseUrl}/published_exams/${cleanId}.json`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(publishedExam)
        });
        if (!res.ok) {
          console.warn("Lưu lên Firebase trả về trạng thái:", res.status);
        }
      } catch (err) {
        console.warn("Không thể kết nối Firebase REST (đang sử dụng Local Storage Cache):", err);
      }
    }

    return publishedExam;
  }

  /**
   * Lấy danh sách toàn bộ đề thi đã được giáo viên xuất bản
   */
  async getPublishedExams() {
    const localExams = this.getLocalCache();
    const firebaseUrl = this.getFirebaseUrl();

    if (!firebaseUrl) {
      return localExams;
    }

    try {
      const res = await fetch(`${firebaseUrl}/published_exams.json`, {
        method: "GET",
        headers: { "Content-Type": "application/json" }
      });

      if (res.ok) {
        const data = await res.json();
        if (data && typeof data === "object") {
          const cloudExams = Object.values(data).filter(Boolean);

          // Hợp nhất dữ liệu cloud và local cache, ưu tiên cloud
          const map = new Map();
          cloudExams.forEach((item) => map.set(item.id, item));
          localExams.forEach((item) => {
            if (!map.has(item.id)) map.set(item.id, item);
          });

          const merged = Array.from(map.values()).sort(
            (a, b) => new Date(b.publishedAt || b.createdAt) - new Date(a.publishedAt || a.createdAt)
          );
          this.saveLocalCache(merged);
          return merged;
        }
      }
    } catch (err) {
      console.warn("Lỗi khi tải đề từ Firebase (đang dùng cache):", err);
    }

    return localExams;
  }

  /**
   * Xóa đề thi đã xuất bản
   */
  async deletePublishedExam(examId) {
    // 1. Cập nhật local cache
    const currentCache = this.getLocalCache();
    const updated = currentCache.filter((e) => e.id !== examId);
    this.saveLocalCache(updated);

    // 2. Xóa trên Firebase
    const firebaseUrl = this.getFirebaseUrl();
    if (firebaseUrl) {
      try {
        const cleanId = String(examId).replace(/[.#$[\]]/g, "_");
        await fetch(`${firebaseUrl}/published_exams/${cleanId}.json`, {
          method: "DELETE"
        });
      } catch (err) {
        console.warn("Lỗi khi xóa trên Firebase:", err);
      }
    }

    return true;
  }
}

export const firebaseService = new FirebaseService();
