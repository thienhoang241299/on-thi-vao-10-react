import React, { useState, useEffect } from "react";
import {
  Activity,
  Users,
  Eye,
  Sparkles,
  TrendingUp,
  RefreshCw,
  CloudCheck,
  ChevronDown,
  ChevronUp,
  BarChart3,
  Globe,
  Layers
} from "lucide-react";
import { analyticsService } from "../services/analyticsService";

export default function TrafficStatsDashboard({ compact = false }) {
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(false);
  const [isExpanded, setIsExpanded] = useState(!compact);

  const fetchStats = async () => {
    setLoading(true);
    try {
      const data = await analyticsService.getCombinedStats();
      setStats(data);
    } catch (e) {
      console.error("Lỗi khi tải thống kê lưu lượng:", e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchStats();
  }, []);

  if (!stats) {
    return (
      <div
        style={{
          padding: "1rem",
          background: "var(--bg-card)",
          borderRadius: "var(--radius-md)",
          border: "1px solid var(--border-color)",
          marginBottom: "1.25rem",
          display: "flex",
          alignItems: "center",
          gap: "8px",
          color: "var(--text-muted)"
        }}
      >
        <RefreshCw size={16} className="animate-spin" />
        <span style={{ fontSize: "0.85rem" }}>Đang đồng bộ lưu lượng truy cập...</span>
      </div>
    );
  }

  // Nếu ở chế độ nhỏ gọn (dùng cho màn hình khóa hoặc thanh status bar)
  if (compact && !isExpanded) {
    return (
      <div
        style={{
          background: "var(--bg-card)",
          border: "1px solid var(--border-color)",
          borderRadius: "var(--radius-md)",
          padding: "0.85rem 1.25rem",
          marginBottom: "1.25rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "0.75rem",
          boxShadow: "var(--shadow-sm)"
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <div
            style={{
              width: 32,
              height: 32,
              borderRadius: "50%",
              background: "var(--primary-light)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "var(--primary)"
            }}
          >
            <Activity size={18} />
          </div>
          <div>
            <div style={{ fontSize: "0.85rem", fontWeight: 600 }}>
              Lưu Lượng Web: <strong>{stats.todayVisits}</strong> lượt hôm nay / <strong>{stats.totalVisits}</strong> tổng lượt xem
            </div>
            <div style={{ fontSize: "0.75rem", color: "var(--text-muted)" }}>
              {stats.uniqueVisitors} thiết bị đã truy cập • {stats.aiGenerations} lượt tạo đề AI
            </div>
          </div>
        </div>

        <button
          className="btn-outline"
          style={{ fontSize: "0.8rem", padding: "0.3rem 0.6rem" }}
          onClick={() => setIsExpanded(true)}
        >
          <BarChart3 size={14} /> Xem Chi Tiết <ChevronDown size={14} />
        </button>
      </div>
    );
  }

  // Tính max trong 7 ngày để scale chiều cao cột biểu đồ
  const maxDayCount = Math.max(...stats.last7Days.map((d) => d.count), 1);

  // Danh sách phân bổ chuyên mục
  const tabNames = {
    "library": { label: "Tài liệu 6 - 9", color: "#3b82f6" },
    "exam-repo": { label: "Đề thi các tỉnh", color: "#10b981" },
    "exam-room": { label: "Phòng thi thử", color: "#f59e0b" },
    "uploads": { label: "Tải lên & Kho riêng", color: "#8b5cf6" },
    "ai-generator": { label: "Biên soạn đề AI", color: "#ec4899" }
  };

  const totalTabViews = Object.values(stats.viewsByTab).reduce((sum, v) => sum + v, 0) || 1;

  return (
    <div
      style={{
        background: "var(--bg-card)",
        border: "1px solid var(--border-color)",
        borderRadius: "var(--radius-lg)",
        padding: "1.25rem",
        marginBottom: "1.5rem",
        boxShadow: "var(--shadow-md)",
        position: "relative",
        overflow: "hidden"
      }}
    >
      {/* Header bar của Dashboard */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "0.75rem",
          paddingBottom: "1rem",
          borderBottom: "1px solid var(--border-color)",
          marginBottom: "1.25rem"
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <div
            style={{
              padding: "8px",
              borderRadius: "var(--radius-md)",
              background: "var(--primary-light)",
              color: "var(--primary)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center"
            }}
          >
            <Activity size={20} />
          </div>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <h3 style={{ fontSize: "1.05rem", fontWeight: 700, margin: 0 }}>
                Giám Sát Lưu Lượng & Tình Hình Sử Dụng Website
              </h3>
              <span
                style={{
                  fontSize: "0.72rem",
                  padding: "2px 8px",
                  borderRadius: "var(--radius-full)",
                  background: stats.isCloudSynced ? "rgba(16, 185, 129, 0.15)" : "var(--primary-light)",
                  color: stats.isCloudSynced ? "var(--success)" : "var(--primary)",
                  fontWeight: 600,
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "4px"
                }}
              >
                {stats.isCloudSynced ? (
                  <>
                    <CloudCheck size={12} /> Cloud Realtime
                  </>
                ) : (
                  <>
                    <Globe size={12} /> Local & Cloud Sync
                  </>
                )}
              </span>
            </div>
            <p style={{ margin: "2px 0 0", fontSize: "0.8rem", color: "var(--text-muted)" }}>
              Dữ liệu lưu lượng truy cập thực tế của học sinh và thầy cô trên trang web
            </p>
          </div>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <button
            className="btn-outline"
            onClick={fetchStats}
            disabled={loading}
            title="Làm mới thống kê từ Cloud"
            style={{ fontSize: "0.82rem", padding: "0.35rem 0.75rem", gap: "6px" }}
          >
            <RefreshCw size={14} className={loading ? "animate-spin" : ""} />
            Làm mới
          </button>
          {compact && (
            <button
              className="btn-outline"
              onClick={() => setIsExpanded(false)}
              title="Thu gọn"
              style={{ fontSize: "0.82rem", padding: "0.35rem 0.5rem" }}
            >
              <ChevronUp size={16} />
            </button>
          )}
        </div>
      </div>

      {/* 4 Cards Chỉ Số Chính */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
          gap: "1rem",
          marginBottom: "1.5rem"
        }}
      >
        {/* Card 1: Tổng lượt xem */}
        <div
          style={{
            background: "var(--bg-main)",
            border: "1px solid var(--border-color)",
            borderRadius: "var(--radius-md)",
            padding: "1rem",
            position: "relative"
          }}
        >
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "0.5rem" }}>
            <span style={{ fontSize: "0.78rem", fontWeight: 600, color: "var(--text-muted)" }}>
              TỔNG LƯỢT XEM
            </span>
            <Eye size={16} color="var(--primary)" />
          </div>
          <div style={{ fontSize: "1.65rem", fontWeight: 800, color: "var(--text-main)", lineHeight: 1.1 }}>
            {stats.totalVisits.toLocaleString("vi-VN")}
          </div>
          <div style={{ fontSize: "0.75rem", color: "var(--success)", marginTop: "6px", display: "flex", alignItems: "center", gap: 3 }}>
            <TrendingUp size={12} /> Tương tác toàn trang
          </div>
        </div>

        {/* Card 2: Lượt xem hôm nay */}
        <div
          style={{
            background: "var(--bg-main)",
            border: "1px solid var(--border-color)",
            borderRadius: "var(--radius-md)",
            padding: "1rem"
          }}
        >
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "0.5rem" }}>
            <span style={{ fontSize: "0.78rem", fontWeight: 600, color: "var(--text-muted)" }}>
              HÔM NAY
            </span>
            <Activity size={16} color="#10b981" />
          </div>
          <div style={{ fontSize: "1.65rem", fontWeight: 800, color: "var(--text-main)", lineHeight: 1.1 }}>
            {stats.todayVisits.toLocaleString("vi-VN")}
          </div>
          <div style={{ fontSize: "0.75rem", color: "var(--text-muted)", marginTop: "6px" }}>
            Lượt truy cập trong ngày
          </div>
        </div>

        {/* Card 3: Khách truy cập */}
        <div
          style={{
            background: "var(--bg-main)",
            border: "1px solid var(--border-color)",
            borderRadius: "var(--radius-md)",
            padding: "1rem"
          }}
        >
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "0.5rem" }}>
            <span style={{ fontSize: "0.78rem", fontWeight: 600, color: "var(--text-muted)" }}>
              THIẾT BỊ / KHÁCH
            </span>
            <Users size={16} color="#f59e0b" />
          </div>
          <div style={{ fontSize: "1.65rem", fontWeight: 800, color: "var(--text-main)", lineHeight: 1.1 }}>
            {stats.uniqueVisitors.toLocaleString("vi-VN")}
          </div>
          <div style={{ fontSize: "0.75rem", color: "var(--text-muted)", marginTop: "6px" }}>
            Thiết bị độc bản ghi nhận
          </div>
        </div>

        {/* Card 4: Đề tạo AI */}
        <div
          style={{
            background: "var(--bg-main)",
            border: "1px solid var(--border-color)",
            borderRadius: "var(--radius-md)",
            padding: "1rem"
          }}
        >
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "0.5rem" }}>
            <span style={{ fontSize: "0.78rem", fontWeight: 600, color: "var(--text-muted)" }}>
              ĐỀ TẠO BẰNG AI
            </span>
            <Sparkles size={16} color="#8b5cf6" />
          </div>
          <div style={{ fontSize: "1.65rem", fontWeight: 800, color: "var(--text-main)", lineHeight: 1.1 }}>
            {stats.aiGenerations.toLocaleString("vi-VN")}
          </div>
          <div style={{ fontSize: "0.75rem", color: "var(--text-muted)", marginTop: "6px" }}>
            Lượt biên soạn đề AI
          </div>
        </div>
      </div>

      {/* Phần 2: Biểu đồ cột 7 ngày gần nhất & Phân bổ chuyên mục */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "1.25rem",
          background: "var(--bg-main)",
          border: "1px solid var(--border-color)",
          borderRadius: "var(--radius-md)",
          padding: "1.25rem"
        }}
      >
        {/* Biểu đồ 7 ngày */}
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: "6px", marginBottom: "1rem" }}>
            <BarChart3 size={16} color="var(--primary)" />
            <span style={{ fontSize: "0.85rem", fontWeight: 700 }}>
              Xu Hướng Truy Cập (7 Ngày Gần Nhất)
            </span>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "flex-end",
              justifyContent: "space-between",
              height: 120,
              gap: 8,
              paddingBottom: 22,
              position: "relative",
              borderBottom: "1px dashed var(--border-color)"
            }}
          >
            {stats.last7Days.map((d, index) => {
              const heightPercent = Math.max(Math.round((d.count / maxDayCount) * 100), 12);
              const isToday = index === stats.last7Days.length - 1;

              return (
                <div
                  key={d.dateKey}
                  style={{
                    flex: 1,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    height: "100%",
                    justifyContent: "flex-end"
                  }}
                  title={`${d.label}: ${d.count} lượt truy cập`}
                >
                  <span
                    style={{
                      fontSize: "0.72rem",
                      fontWeight: 700,
                      color: isToday ? "var(--primary)" : "var(--text-muted)",
                      marginBottom: 4
                    }}
                  >
                    {d.count}
                  </span>
                  <div
                    style={{
                      width: "100%",
                      maxWidth: 24,
                      height: `${heightPercent}%`,
                      background: isToday
                        ? "linear-gradient(180deg, var(--primary) 0%, #312e81 100%)"
                        : "linear-gradient(180deg, #94a3b8 0%, #64748b 100%)",
                      borderRadius: "4px 4px 0 0",
                      transition: "height 0.4s ease",
                      boxShadow: isToday ? "0 2px 8px var(--primary-glow)" : "none"
                    }}
                  />
                  <span
                    style={{
                      position: "absolute",
                      bottom: 0,
                      fontSize: "0.68rem",
                      color: isToday ? "var(--primary)" : "var(--text-muted)",
                      fontWeight: isToday ? 700 : 500,
                      whiteSpace: "nowrap"
                    }}
                  >
                    {d.label}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Phân bổ các chuyên mục */}
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: "6px", marginBottom: "0.85rem" }}>
            <Layers size={16} color="#0d9488" />
            <span style={{ fontSize: "0.85rem", fontWeight: 700 }}>
              Lưu Lượng Theo Từng Mục
            </span>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
            {Object.keys(tabNames).map((tabKey) => {
              const info = tabNames[tabKey];
              const count = stats.viewsByTab[tabKey] || 0;
              const percent = Math.round((count / totalTabViews) * 100) || 0;

              return (
                <div key={tabKey}>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      fontSize: "0.78rem",
                      marginBottom: 3
                    }}
                  >
                    <span style={{ color: "var(--text-main)", fontWeight: 500 }}>
                      {info.label}
                    </span>
                    <span style={{ color: "var(--text-muted)", fontWeight: 600 }}>
                      {count} ({percent}%)
                    </span>
                  </div>
                  <div
                    style={{
                      width: "100%",
                      height: 6,
                      background: "var(--border-color)",
                      borderRadius: "var(--radius-full)",
                      overflow: "hidden"
                    }}
                  >
                    <div
                      style={{
                        width: `${Math.max(percent, count > 0 ? 4 : 0)}%`,
                        height: "100%",
                        background: info.color,
                        borderRadius: "var(--radius-full)",
                        transition: "width 0.5s ease"
                      }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
