/**
 * STORAGE SERVICE (LocalStorage & IndexedDB)
 */

const DB_NAME = "OnThiVao10ReactDB";
const DB_VERSION = 1;
const STORE_UPLOADS = "userUploads";
const STORE_AI_EXAMS = "aiGeneratedExams";

class StorageService {
  constructor() {
    this.db = null;
    this.initIndexedDB();
  }

  async initIndexedDB() {
    return new Promise((resolve, reject) => {
      const request = indexedDB.open(DB_NAME, DB_VERSION);

      request.onupgradeneeded = (event) => {
        const db = event.target.result;
        if (!db.objectStoreNames.contains(STORE_UPLOADS)) {
          db.createObjectStore(STORE_UPLOADS, { keyPath: "id" });
        }
        if (!db.objectStoreNames.contains(STORE_AI_EXAMS)) {
          db.createObjectStore(STORE_AI_EXAMS, { keyPath: "id" });
        }
      };

      request.onsuccess = (event) => {
        this.db = event.target.result;
        resolve(this.db);
      };

      request.onerror = (event) => {
        console.error("IndexedDB error:", event.target.error);
        reject(event.target.error);
      };
    });
  }

  // API Key
  getApiKey() {
    return localStorage.getItem("gemini_api_key") || "";
  }

  setApiKey(key) {
    if (key) {
      localStorage.setItem("gemini_api_key", key.trim());
    } else {
      localStorage.removeItem("gemini_api_key");
    }
  }

  // Theme
  getTheme() {
    return localStorage.getItem("app_theme") || "light";
  }

  setTheme(theme) {
    localStorage.setItem("app_theme", theme);
  }

  // Lịch sử thi
  getHistory() {
    try {
      return JSON.parse(localStorage.getItem("exam_history") || "[]");
    } catch {
      return [];
    }
  }

  saveHistory(record) {
    const history = this.getHistory();
    history.unshift({
      ...record,
      id: "hist-" + Date.now(),
      createdAt: new Date().toISOString()
    });
    localStorage.setItem("exam_history", JSON.stringify(history.slice(0, 50)));
  }

  // Bookmarks
  getBookmarks() {
    try {
      return JSON.parse(localStorage.getItem("user_bookmarks") || "[]");
    } catch {
      return [];
    }
  }

  toggleBookmark(itemId) {
    let bookmarks = this.getBookmarks();
    if (bookmarks.includes(itemId)) {
      bookmarks = bookmarks.filter(id => id !== itemId);
    } else {
      bookmarks.push(itemId);
    }
    localStorage.setItem("user_bookmarks", JSON.stringify(bookmarks));
    return bookmarks.includes(itemId);
  }

  // Uploads
  async saveUploadItem(item) {
    if (!this.db) await this.initIndexedDB();
    return new Promise((resolve, reject) => {
      const tx = this.db.transaction(STORE_UPLOADS, "readwrite");
      const store = tx.objectStore(STORE_UPLOADS);
      const req = store.put(item);
      req.onsuccess = () => resolve(item);
      req.onerror = () => reject(req.error);
    });
  }

  async getAllUploads() {
    if (!this.db) await this.initIndexedDB();
    return new Promise((resolve, reject) => {
      const tx = this.db.transaction(STORE_UPLOADS, "readonly");
      const store = tx.objectStore(STORE_UPLOADS);
      const req = store.getAll();
      req.onsuccess = () => resolve(req.result || []);
      req.onerror = () => reject(req.error);
    });
  }

  async deleteUploadItem(id) {
    if (!this.db) await this.initIndexedDB();
    return new Promise((resolve, reject) => {
      const tx = this.db.transaction(STORE_UPLOADS, "readwrite");
      const store = tx.objectStore(STORE_UPLOADS);
      const req = store.delete(id);
      req.onsuccess = () => resolve(true);
      req.onerror = () => reject(req.error);
    });
  }

  // AI Exams
  async saveAiExam(exam) {
    if (!this.db) await this.initIndexedDB();
    return new Promise((resolve, reject) => {
      const tx = this.db.transaction(STORE_AI_EXAMS, "readwrite");
      const store = tx.objectStore(STORE_AI_EXAMS);
      const req = store.put(exam);
      req.onsuccess = () => resolve(exam);
      req.onerror = () => reject(req.error);
    });
  }

  async getAllAiExams() {
    if (!this.db) await this.initIndexedDB();
    return new Promise((resolve, reject) => {
      const tx = this.db.transaction(STORE_AI_EXAMS, "readonly");
      const store = tx.objectStore(STORE_AI_EXAMS);
      const req = store.getAll();
      req.onsuccess = () => resolve(req.result || []);
      req.onerror = () => reject(req.error);
    });
  }
}

export const storage = new StorageService();
