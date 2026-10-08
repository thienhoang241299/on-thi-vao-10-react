/**
 * ANALYTICS & TRAFFIC TRACKING SERVICE
 * Đo lường lưu lượng truy cập toàn trang web & khu vực biên soạn đề AI
 * Cơ chế 2 lớp: Lưu cục bộ (LocalStorage) tức thì + Đồng bộ Cloud (Firebase Realtime Database)
 */

import { firebaseService } from "./firebaseService";

const STORAGE_KEYS = {
  VISITOR_ID: "analytics_visitor_id",
  LOCAL_STATS: "analytics_local_stats",
  SESSION_START: "analytics_session_start",
  LAST_PING: "analytics_last_ping"
};

// Khởi tạo visitor ID duy nhất cho mỗi trình duyệt
const getOrCreateVisitorId = () => {
  let id = localStorage.getItem(STORAGE_KEYS.VISITOR_ID);
  if (!id) {
    id = "vis_" + Math.random().toString(36).substring(2, 10) + Date.now().toString(36);
    localStorage.setItem(STORAGE_KEYS.VISITOR_ID, id);
  }
  return id;
};

// Lấy ngày định dạng YYYY-MM-DD theo giờ địa phương
const getTodayKey = () => {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, "0");
  const day = String(now.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
};

class AnalyticsService {
  constructor() {
    this.visitorId = getOrCreateVisitorId();
    this.todayKey = getTodayKey();
    this.sessionStartTime = Date.now();
    this.initialized = false;
  }

  /**
   * Lấy dữ liệu thống kê từ LocalStorage
   */
  getLocalStats() {
    try {
      const raw = localStorage.getItem(STORAGE_KEYS.LOCAL_STATS);
      if (raw) {
        const parsed = JSON.parse(raw);
        // Đảm bảo cấu trúc đầy đủ
        return {
          totalVisits: parsed.totalVisits || 0,
          uniqueVisitors: parsed.uniqueVisitors || 1,
          aiGenerationsCount: parsed.aiGenerationsCount || 0,
          viewsByTab: parsed.viewsByTab || {
            "library": 0,
            "exam-repo": 0,
            "exam-room": 0,
            "uploads": 0,
            "ai-generator": 0
          },
          dailyVisits: parsed.dailyVisits || {},
          lastVisit: parsed.lastVisit || new Date().toISOString()
        };
      }
    } catch (e) {
      console.warn("Lỗi đọc analytics cache:", e);
    }

    // Giá trị khởi tạo mặc định nếu chưa có
    const defaultStats = {
      totalVisits: 1,
      uniqueVisitors: 1,
      aiGenerationsCount: 0,
      viewsByTab: {
        "library": 1,
        "exam-repo": 0,
        "exam-room": 0,
        "uploads": 0,
        "ai-generator": 0
      },
      dailyVisits: {
        [this.todayKey]: 1
      },
      lastVisit: new Date().toISOString()
    };
    this.saveLocalStats(defaultStats);
    return defaultStats;
  }

  saveLocalStats(stats) {
    try {
      localStorage.setItem(STORAGE_KEYS.LOCAL_STATS, JSON.stringify(stats));
    } catch (e) {
      console.warn("Lỗi lưu analytics local:", e);
    }
  }

  /**
   * Khởi động phiên truy cập khi mở app
   */
  initSession() {
    if (this.initialized) return;
    this.initialized = true;

    const stats = this.getLocalStats();
    const today = getTodayKey();

    // Tăng tổng số lượt truy cập trên máy
    stats.totalVisits = (stats.totalVisits || 0) + 1;
    stats.dailyVisits[today] = (stats.dailyVisits[today] || 0) + 1;
    stats.lastVisit = new Date().toISOString();
    this.saveLocalStats(stats);

    // Đồng bộ tăng đếm lên Firebase Cloud (chạy nền)
    this.syncVisitToCloud(today);
  }

  /**
   * Đo lường khi người dùng vào một Tab / Trang cụ thể
   */
  trackPageView(tabId) {
    const stats = this.getLocalStats();
    const today = getTodayKey();

    if (!stats.viewsByTab) {
      stats.viewsByTab = {};
    }
    stats.viewsByTab[tabId] = (stats.viewsByTab[tabId] || 0) + 1;
    stats.dailyVisits[today] = (stats.dailyVisits[today] || 0) + 1;
    stats.totalVisits = (stats.totalVisits || 0) + 1;
    stats.lastVisit = new Date().toISOString();

    this.saveLocalStats(stats);

    // Đồng bộ lên Cloud
    this.syncPageViewToCloud(tabId);
  }

  /**
   * Đo lường khi bấm tạo đề thi bằng AI
   */
  trackAiGeneration() {
    const stats = this.getLocalStats();
    stats.aiGenerationsCount = (stats.aiGenerationsCount || 0) + 1;
    this.saveLocalStats(stats);

    // Gửi lên Cloud
    const firebaseUrl = firebaseService.getFirebaseUrl();
    if (firebaseUrl) {
      fetch(`${firebaseUrl}/analytics/counters/ai_generations.json`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(Date.now())
      }).catch(() => {});
    }
  }

  /**
   * Đồng bộ lượt truy cập lên Firebase
   */
  async syncVisitToCloud(today) {
    const firebaseUrl = firebaseService.getFirebaseUrl();
    if (!firebaseUrl) return;

    try {
      // Ghi ping phiên gần nhất của visitor
      const visitorPing = {
        lastSeen: new Date().toISOString(),
        today,
        userAgent: navigator.userAgent.substring(0, 100)
      };

      // Ghi nhận sự kiện nhẹ nhàng không block
      fetch(`${firebaseUrl}/analytics/visitors/${this.visitorId}.json`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(visitorPing)
      }).catch(() => {});
    } catch {
      // Bỏ qua lỗi mạng
    }
  }

  /**
   * Đồng bộ lượt xem tab lên Firebase
   */
  async syncPageViewToCloud(tabId) {
    const firebaseUrl = firebaseService.getFirebaseUrl();
    if (!firebaseUrl) return;

    try {
      const today = getTodayKey();
      fetch(`${firebaseUrl}/analytics/tab_views/${tabId}/${today}.json`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(Date.now())
      }).catch(() => {});
    } catch {
      // Ignored
    }
  }

  /**
   * Lấy số liệu thống kê tổng hợp (Kết hợp Firebase Cloud & LocalStorage)
   */
  async getCombinedStats() {
    const local = this.getLocalStats();
    const today = getTodayKey();
    const firebaseUrl = firebaseService.getFirebaseUrl();

    let cloudData = null;
    let isCloudSynced = false;

    if (firebaseUrl) {
      try {
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 3500);

        const res = await fetch(`${firebaseUrl}/analytics.json`, {
          signal: controller.signal
        });
        clearTimeout(timeoutId);

        if (res.ok) {
          cloudData = await res.json();
          if (cloudData) {
            isCloudSynced = true;
          }
        }
      } catch (err) {
        // Fallback silently to local cache
        console.warn("Không kết nối được Firebase Analytics, chuyển sang Local stats:", err);
      }
    }

    // Tính toán số lượng khách truy cập và lượt xem từ Cloud nếu có
    let totalVisits = local.totalVisits || 0;
    let todayVisits = local.dailyVisits[today] || 0;
    let uniqueVisitors = 1;
    let aiGenerations = local.aiGenerationsCount || 0;
    let tabViews = { ...local.viewsByTab };

    if (cloudData && typeof cloudData === "object") {
      // Đếm số lượng visitors trên cloud
      if (cloudData.visitors && typeof cloudData.visitors === "object") {
        const vList = Object.values(cloudData.visitors);
        uniqueVisitors = Math.max(vList.length, 1);
        
        // Đếm số lượt truy cập hôm nay trên toàn cloud
        const todayCount = vList.filter(v => v && v.today === today).length;
        if (todayCount > todayVisits) {
          todayVisits = todayCount;
        }

        // Ước lượng tổng lượt truy cập đa người dùng
        const cloudTotalVisits = vList.length * 3 + Object.keys(cloudData.tab_views || {}).length * 2;
        if (cloudTotalVisits > totalVisits) {
          totalVisits = cloudTotalVisits;
        }
      }

      // Đếm tab views từ cloud
      if (cloudData.tab_views && typeof cloudData.tab_views === "object") {
        Object.keys(cloudData.tab_views).forEach(tab => {
          const tabObj = cloudData.tab_views[tab];
          if (tabObj && typeof tabObj === "object") {
            const count = Object.keys(tabObj).length;
            tabViews[tab] = Math.max(tabViews[tab] || 0, count);
          }
        });
      }

      if (cloudData.counters && cloudData.counters.ai_generations) {
        aiGenerations = Math.max(aiGenerations, 1);
      }
    }

    // Đảm bảo số liệu 7 ngày gần nhất hiển thị trực quan
    const last7Days = [];
    for (let i = 6; i >= 0; i--) {
      const d = new Date();
      d.setDate(d.getDate() - i);
      const y = d.getFullYear();
      const m = String(d.getMonth() + 1).padStart(2, "0");
      const dayStr = String(d.getDate()).padStart(2, "0");
      const key = `${y}-${m}-${dayStr}`;
      const label = i === 0 ? "Hôm nay" : `${dayStr}/${m}`;
      
      let val = local.dailyVisits[key] || 0;
      if (i === 0 && todayVisits > val) val = todayVisits;

      last7Days.push({
        dateKey: key,
        label,
        count: val
      });
    }

    return {
      totalVisits: Math.max(totalVisits, todayVisits, 1),
      todayVisits: Math.max(todayVisits, 1),
      uniqueVisitors,
      aiGenerations,
      viewsByTab: tabViews,
      last7Days,
      lastVisit: local.lastVisit,
      isCloudSynced
    };
  }
}

export const analyticsService = new AnalyticsService();
