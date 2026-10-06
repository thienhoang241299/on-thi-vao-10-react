import React, { useState } from "react";
import { 
  BookOpen, 
  Search, 
  Bookmark, 
  ArrowRight, 
  Sparkles, 
  Layers 
} from "lucide-react";
import { curriculumData } from "../data/curriculumData";
import { storage } from "../services/storage";
import KaTeXRenderer from "../components/KaTeXRenderer";

export default function LibraryView({ onOpenDetail, onGoToExamRepo }) {
  const [selectedSubject, setSelectedSubject] = useState("all");
  const [selectedGrade, setSelectedGrade] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [bookmarkedIds, setBookmarkedIds] = useState(() => storage.getBookmarks());

  const handleToggleBookmark = (id) => {
    storage.toggleBookmark(id);
    setBookmarkedIds(storage.getBookmarks());
  };

  const filteredItems = curriculumData.filter((item) => {
    if (selectedSubject !== "all" && item.subject !== selectedSubject) return false;
    if (selectedGrade !== "all" && item.grade !== parseInt(selectedGrade)) return false;
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase().trim();
      const matchTitle = item.title.toLowerCase().includes(q);
      const matchCat = item.category.toLowerCase().includes(q);
      const matchSummary = item.summary.toLowerCase().includes(q);
      return matchTitle || matchCat || matchSummary;
    }
    return true;
  });

  return (
    <div className="tab-pane active">
      {/* Hero Banner */}
      <div className="hero-banner">
        <div className="hero-grid">
          <div>
            <h1 className="hero-title">Kho Tài Liệu Ôn Tập Nền Tảng Vào Lớp 10</h1>
            <p className="hero-desc">
              Tổng hợp toàn bộ kiến thức trọng tâm Toán, Ngữ Văn, Tiếng Anh từ lớp 6 đến lớp 9 trên nền tảng React. Hệ thống hóa công thức, sơ đồ tư duy và phương pháp giải chuẩn barem.
            </p>
            <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
              <button 
                className="btn-primary" 
                onClick={() => document.getElementById("library-filters-bar")?.scrollIntoView({ behavior: "smooth" })}
                style={{ background: "#ffffff", color: "var(--primary)" }}
              >
                <Search size={16} /> Khám phá chuyên đề
              </button>
              <button 
                className="btn-outline" 
                onClick={onGoToExamRepo}
                style={{ borderColor: "rgba(255,255,255,0.4)", color: "#ffffff" }}
              >
                <BookOpen size={16} /> Xem đề thi các tỉnh
              </button>
            </div>
          </div>
          <div className="hero-stats">
            <div className="stat-card">
              <span className="stat-number">3</span>
              <span className="stat-label">Môn Cốt Lõi</span>
            </div>
            <div className="stat-card">
              <span className="stat-number">4</span>
              <span className="stat-label">Khối Lớp (6 - 9)</span>
            </div>
            <div className="stat-card">
              <span className="stat-number">100%</span>
              <span className="stat-label">Barem Tuyển Sinh</span>
            </div>
          </div>
        </div>
      </div>

      {/* Filter Bar */}
      <div className="filter-bar" id="library-filters-bar">
        <div className="filter-group">
          <span style={{ fontSize: "0.85rem", fontWeight: 700, color: "var(--text-muted)" }}>Môn học:</span>
          <button 
            className={`filter-btn ${selectedSubject === "all" ? "active" : ""}`}
            onClick={() => setSelectedSubject("all")}
          >
            Tất cả
          </button>
          <button 
            className={`filter-btn ${selectedSubject === "math" ? "active" : ""}`}
            data-subject="math"
            onClick={() => setSelectedSubject("math")}
          >
            📐 Toán học
          </button>
          <button 
            className={`filter-btn ${selectedSubject === "lit" ? "active" : ""}`}
            data-subject="lit"
            onClick={() => setSelectedSubject("lit")}
          >
            📖 Ngữ Văn
          </button>
          <button 
            className={`filter-btn ${selectedSubject === "eng" ? "active" : ""}`}
            data-subject="eng"
            onClick={() => setSelectedSubject("eng")}
          >
            🌐 Tiếng Anh
          </button>
        </div>

        <div className="filter-group">
          <span style={{ fontSize: "0.85rem", fontWeight: 700, color: "var(--text-muted)" }}>Khối lớp:</span>
          <select 
            className="form-control" 
            style={{ width: "auto", padding: "0.45rem 1rem" }}
            value={selectedGrade}
            onChange={(e) => setSelectedGrade(e.target.value)}
          >
            <option value="all">Tất cả các lớp (6 - 9)</option>
            <option value="9">Lớp 9 (Trọng tâm tuyển sinh)</option>
            <option value="8">Lớp 8 (Nền tảng)</option>
            <option value="7">Lớp 7 (Hình học & Định lý)</option>
            <option value="6">Lớp 6 (Cơ sở tư duy)</option>
          </select>
        </div>

        <div className="search-box">
          <Search size={16} className="search-icon" />
          <input 
            type="text" 
            className="search-input" 
            placeholder="Tìm kiếm công thức, ngữ pháp, bài thơ..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      {/* Section Header */}
      <div className="section-header">
        <div>
          <h2 className="section-title">
            <Sparkles size={20} color="var(--primary)" /> Chuyên Đề Kiến Thức Trọng Tâm
          </h2>
          <p className="section-subtitle">Tóm tắt lý thuyết, mẹo ghi nhớ và các bẫy thường gặp trong đề thi</p>
        </div>
      </div>

      {/* Cards Grid */}
      <div className="cards-grid">
        {filteredItems.length === 0 ? (
          <div style={{ gridColumn: "1 / -1", textAlign: "center", padding: "3rem", color: "var(--text-muted)" }}>
            <div style={{ fontSize: "2.5rem", marginBottom: 8 }}>🔍</div>
            <h4>Không tìm thấy chuyên đề phù hợp</h4>
            <p>Hãy thử tìm từ khóa khác hoặc bỏ lọc bộ lọc hiện tại.</p>
          </div>
        ) : (
          filteredItems.map((item) => {
            const isBookmarked = bookmarkedIds.includes(item.id);
            return (
              <div key={item.id} className="topic-card" data-subject={item.subject}>
                <div className="card-top">
                  <div className="badge-group">
                    <span className={`badge badge-${item.subject}`}>
                      {item.subjectName}
                    </span>
                    <span className="badge badge-grade">Lớp {item.grade}</span>
                  </div>
                  <button 
                    className="btn-icon"
                    style={{ width: 32, height: 32, color: isBookmarked ? "var(--warning)" : "var(--text-muted)" }}
                    onClick={() => handleToggleBookmark(item.id)}
                    title={isBookmarked ? "Bỏ lưu" : "Lưu lại"}
                  >
                    <Bookmark size={16} fill={isBookmarked ? "currentColor" : "none"} />
                  </button>
                </div>

                <h3 className="card-title">{item.title}</h3>
                <p className="card-desc">{item.summary}</p>

                <div className="card-keypoints">
                  <ul>
                    {item.keypoints.map((pt, idx) => (
                      <li key={idx}>
                        <KaTeXRenderer html={pt} />
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="card-actions">
                  <span style={{ fontSize: "0.8rem", color: "var(--text-muted)", fontWeight: 600, display: "flex", alignItems: "center", gap: 4 }}>
                    <Layers size={14} /> {item.category}
                  </span>
                  <button 
                    className="btn-primary"
                    onClick={() => onOpenDetail({
                      title: `${item.subjectName} Lớp ${item.grade}: ${item.title}`,
                      html: `
                        <div style="background: var(--bg-main); padding: 12px; border-radius: 8px; margin-bottom: 16px;">
                          <strong>Chuyên đề:</strong> ${item.category}<br>
                          <p style="margin-top: 6px; color: var(--text-muted);">${item.summary}</p>
                        </div>
                        <div>${item.contentHtml}</div>
                      `,
                      latexSource: item.latexSource
                    })}
                  >
                    Học ngay <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}
