import React, { useState } from "react";
import { 
  Landmark, 
  Clock, 
  FileCheck, 
  Eye, 
  Key, 
  Play, 
  MapPin, 
  Search, 
  Star 
} from "lucide-react";
import { examData } from "../data/examData";

export default function ExamRepoView({ onOpenDetail, onStartExam }) {
  const [selectedSubject, setSelectedSubject] = useState("all");
  const [selectedProvince, setSelectedProvince] = useState("all");
  const [selectedYear, setSelectedYear] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  // Đưa Quảng Ngãi lên đầu danh sách tỉnh thành
  const rawProvinces = Array.from(new Set(examData.map((e) => e.province)));
  const provinces = [
    "Quảng Ngãi",
    ...rawProvinces.filter((p) => p !== "Quảng Ngãi")
  ];

  // Sắp xếp các năm giảm dần
  const years = Array.from(new Set(examData.map((e) => e.year))).sort((a, b) => b - a);

  const filteredExams = examData.filter((item) => {
    if (selectedSubject !== "all" && item.subject !== selectedSubject) return false;
    if (selectedProvince !== "all" && item.province !== selectedProvince) return false;
    if (selectedYear !== "all" && item.year !== parseInt(selectedYear)) return false;
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase().trim();
      return item.title.toLowerCase().includes(q) || item.province.toLowerCase().includes(q);
    }
    return true;
  });

  return (
    <div className="tab-pane active">
      <div className="section-header" style={{ marginTop: "1rem" }}>
        <div>
          <h2 className="section-title">
            <Landmark size={24} color="var(--primary)" /> Thư Viện Đề Thi Tuyển Sinh Vào Lớp 10
          </h2>
          <p className="section-subtitle">
            Tuyển tập đề thi chính thức qua các năm của Quảng Ngãi, Hà Nội, TP.HCM, Nghệ An có đáp án & barem chi tiết
          </p>
        </div>
      </div>

      {/* Filter Bar */}
      <div className="filter-bar">
        <div className="filter-group">
          {/* Quick Filter: Quảng Ngãi */}
          <button 
            className={`filter-btn ${selectedProvince === "Quảng Ngãi" ? "active" : ""}`}
            style={{ 
              borderColor: "var(--primary)", 
              fontWeight: 700, 
              display: "flex", 
              alignItems: "center", 
              gap: 4,
              background: selectedProvince === "Quảng Ngãi" ? "var(--primary)" : "var(--primary-light)",
              color: selectedProvince === "Quảng Ngãi" ? "#ffffff" : "var(--primary)"
            }}
            onClick={() => setSelectedProvince(selectedProvince === "Quảng Ngãi" ? "all" : "Quảng Ngãi")}
          >
            <Star size={14} fill={selectedProvince === "Quảng Ngãi" ? "#ffffff" : "currentColor"} /> Đề Thi Quảng Ngãi
          </button>

          <button 
            className={`filter-btn ${selectedSubject === "all" ? "active" : ""}`}
            onClick={() => setSelectedSubject("all")}
          >
            Tất cả môn
          </button>
          <button 
            className={`filter-btn ${selectedSubject === "math" ? "active" : ""}`}
            data-subject="math"
            onClick={() => setSelectedSubject("math")}
          >
            Toán học
          </button>
          <button 
            className={`filter-btn ${selectedSubject === "lit" ? "active" : ""}`}
            data-subject="lit"
            onClick={() => setSelectedSubject("lit")}
          >
            Ngữ Văn
          </button>
          <button 
            className={`filter-btn ${selectedSubject === "eng" ? "active" : ""}`}
            data-subject="eng"
            onClick={() => setSelectedSubject("eng")}
          >
            Tiếng Anh
          </button>
        </div>

        <div className="filter-group">
          <select 
            className="form-control" 
            style={{ width: "auto", padding: "0.45rem 1rem", fontWeight: 600 }}
            value={selectedProvince}
            onChange={(e) => setSelectedProvince(e.target.value)}
          >
            <option value="all">Tất cả tỉnh / thành</option>
            {provinces.map((p) => (
              <option key={p} value={p}>
                {p === "Quảng Ngãi" ? "🌟 Quảng Ngãi (Ưu tiên)" : p}
              </option>
            ))}
          </select>

          <select 
            className="form-control" 
            style={{ width: "auto", padding: "0.45rem 1rem" }}
            value={selectedYear}
            onChange={(e) => setSelectedYear(e.target.value)}
          >
            <option value="all">Tất cả các năm (2020 - 2026)</option>
            {years.map((y) => (
              <option key={y} value={y}>Năm {y}</option>
            ))}
          </select>
        </div>

        <div className="search-box">
          <Search size={16} className="search-icon" />
          <input 
            type="text" 
            className="search-input" 
            placeholder="Tìm theo tỉnh hoặc từ khóa..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      {/* Grid */}
      <div className="exam-grid">
        {filteredExams.length === 0 ? (
          <div style={{ gridColumn: "1 / -1", textAlign: "center", padding: "3rem", color: "var(--text-muted)" }}>
            <div style={{ fontSize: "2.5rem", marginBottom: 8 }}>📑</div>
            <h4>Không có đề thi phù hợp với bộ lọc</h4>
            <p>Hãy điều chỉnh lại tỉnh thành hoặc môn học.</p>
          </div>
        ) : (
          filteredExams.map((item) => {
            const hasQuiz = item.quizQuestions && item.quizQuestions.length > 0;
            const isQuangNgai = item.province === "Quảng Ngãi";
            return (
              <div 
                key={item.id} 
                className="exam-card"
                style={isQuangNgai ? { border: "1.5px solid var(--primary)", boxShadow: "var(--shadow-md)" } : {}}
              >
                <div className="exam-meta-bar">
                  <span 
                    className="exam-province-badge"
                    style={isQuangNgai ? { background: "var(--primary)", color: "#ffffff" } : {}}
                  >
                    <MapPin size={14} color={isQuangNgai ? "#ffffff" : "var(--primary)"} /> 
                    {item.province} {isQuangNgai ? "🌟" : ""}
                  </span>
                  <span className="exam-year">Năm {item.year}</span>
                </div>

                <h3 className="exam-title">{item.title}</h3>

                <div className="exam-info-chips">
                  <span className="info-chip">
                    <Clock size={14} /> {item.durationMinutes} phút
                  </span>
                  <span className="info-chip">
                    <FileCheck size={14} /> {item.examType}
                  </span>
                  <span className="info-chip" style={{ color: "var(--success)", fontWeight: 600 }}>
                    Có barem chi tiết
                  </span>
                </div>

                <div className="exam-footer">
                  <button 
                    className="btn-outline" 
                    style={{ flex: 1 }}
                    onClick={() => onOpenDetail({
                      title: item.title,
                      html: item.fullExamContent,
                      latexSource: item.latexSource
                    })}
                  >
                    <Eye size={16} /> Xem đề
                  </button>
                  <button 
                    className="btn-outline" 
                    style={{ flex: 1 }}
                    onClick={() => onOpenDetail({
                      title: `Đáp án & Barem: ${item.title}`,
                      html: item.solutionHtml,
                      latexSource: item.solutionLatex || item.latexSource
                    })}
                  >
                    <Key size={16} /> Đáp án
                  </button>
                  {hasQuiz && (
                    <button 
                      className="btn-primary" 
                      title="Thi thử trực tuyến tính giờ"
                      onClick={() => onStartExam(item)}
                    >
                      <Play size={16} /> Thi thử
                    </button>
                  )}
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}
