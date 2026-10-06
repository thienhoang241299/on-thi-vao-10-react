import React, { useState, useEffect } from "react";
import { 
  Landmark, 
  Clock, 
  FileCheck, 
  Eye, 
  Key, 
  Play, 
  MapPin, 
  Search, 
  Star,
  Sparkles,
  CloudCheck,
  GraduationCap
} from "lucide-react";
import { examData } from "../data/examData";
import { firebaseService } from "../services/firebaseService";

export default function ExamRepoView({ onOpenDetail, onStartExam }) {
  const [selectedSubject, setSelectedSubject] = useState("all");
  const [selectedProvince, setSelectedProvince] = useState("all");
  const [selectedYear, setSelectedYear] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [filterTeacherOnly, setFilterTeacherOnly] = useState(false);

  // Cloud published exams from Teacher
  const [cloudExams, setCloudExams] = useState([]);

  useEffect(() => {
    loadCloudExams();
  }, []);

  const loadCloudExams = async () => {
    try {
      const list = await firebaseService.getPublishedExams();
      setCloudExams(list || []);
    } catch (err) {
      console.warn("Lỗi tải đề từ Cloud:", err);
    }
  };

  // Chuẩn hóa và gộp danh sách đề
  const teacherExamsFormatted = cloudExams.map((item) => ({
    ...item,
    isTeacherPublished: true,
    province: item.province || "Quảng Ngãi",
    year: item.year || new Date(item.publishedAt || item.createdAt || Date.now()).getFullYear(),
    examType: item.examType || "Giáo viên biên soạn",
    durationMinutes: item.durationMinutes || (item.subject === "eng" ? 60 : 120)
  }));

  // Gộp đề thi chính thức và đề thi giáo viên biên soạn (đưa đề giáo viên lên đầu)
  const allExams = [...teacherExamsFormatted, ...examData];

  // Danh sách các tỉnh thành
  const rawProvinces = Array.from(new Set(allExams.map((e) => e.province).filter(Boolean)));
  const provinces = [
    "Quảng Ngãi",
    ...rawProvinces.filter((p) => p !== "Quảng Ngãi")
  ];

  // Danh sách các năm
  const years = Array.from(new Set(allExams.map((e) => e.year).filter(Boolean))).sort((a, b) => b - a);

  const filteredExams = allExams.filter((item) => {
    if (filterTeacherOnly && !item.isTeacherPublished) return false;
    if (selectedSubject !== "all" && item.subject !== selectedSubject) return false;
    if (selectedProvince !== "all" && item.province !== selectedProvince) return false;
    if (selectedYear !== "all" && item.year !== parseInt(selectedYear)) return false;
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase().trim();
      const matchTitle = (item.title || "").toLowerCase().includes(q);
      const matchProv = (item.province || "").toLowerCase().includes(q);
      return matchTitle || matchProv;
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
            Tuyển tập đề thi chính thức Quảng Ngãi và các tỉnh thành (có đáp án, barem, hình vẽ vector) cùng các bộ đề do <strong>Giáo viên biên soạn từ Cloud Firebase</strong>
          </p>
        </div>
      </div>

      {/* Filter Bar */}
      <div className="filter-bar">
        <div className="filter-group">
          {/* Lọc nhanh: Đề Giáo Viên Biên Soạn (Cloud Firebase) */}
          <button 
            className={`filter-btn ${filterTeacherOnly ? "active" : ""}`}
            style={{ 
              borderColor: "#10b981", 
              fontWeight: 700, 
              display: "flex", 
              alignItems: "center", 
              gap: 5,
              background: filterTeacherOnly ? "#10b981" : "#ecfdf5",
              color: filterTeacherOnly ? "#ffffff" : "#047857"
            }}
            onClick={() => setFilterTeacherOnly(!filterTeacherOnly)}
          >
            <Sparkles size={14} fill={filterTeacherOnly ? "#ffffff" : "currentColor"} /> 
            Đề Giáo Viên Biên Soạn ({teacherExamsFormatted.length})
          </button>

          {/* Quick Filter: Quảng Ngãi */}
          <button 
            className={`filter-btn ${!filterTeacherOnly && selectedProvince === "Quảng Ngãi" ? "active" : ""}`}
            style={{ 
              borderColor: "var(--primary)", 
              fontWeight: 700, 
              display: "flex", 
              alignItems: "center", 
              gap: 4,
              background: !filterTeacherOnly && selectedProvince === "Quảng Ngãi" ? "var(--primary)" : "var(--primary-light)",
              color: !filterTeacherOnly && selectedProvince === "Quảng Ngãi" ? "#ffffff" : "var(--primary)"
            }}
            onClick={() => {
              setFilterTeacherOnly(false);
              setSelectedProvince(selectedProvince === "Quảng Ngãi" ? "all" : "Quảng Ngãi");
            }}
          >
            <Star size={14} fill={selectedProvince === "Quảng Ngãi" ? "#ffffff" : "currentColor"} /> Đề Thi Quảng Ngãi
          </button>

          <button 
            className={`filter-btn ${!filterTeacherOnly && selectedSubject === "all" ? "active" : ""}`}
            onClick={() => {
              setFilterTeacherOnly(false);
              setSelectedSubject("all");
            }}
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
            onChange={(e) => {
              setSelectedProvince(e.target.value);
              setFilterTeacherOnly(false);
            }}
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
            placeholder="Tìm theo tên đề, tỉnh, từ khóa..."
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
            <p>Hãy điều chỉnh lại bộ lọc hoặc từ khóa tìm kiếm.</p>
          </div>
        ) : (
          filteredExams.map((item) => {
            const hasQuiz = item.quizQuestions && item.quizQuestions.length > 0;
            const isTeacher = !!item.isTeacherPublished;
            const isQuangNgai = item.province === "Quảng Ngãi";

            return (
              <div 
                key={item.id} 
                className="exam-card"
                style={
                  isTeacher 
                    ? { border: "2px solid #10b981", boxShadow: "0 4px 14px rgba(16, 185, 129, 0.15)" }
                    : isQuangNgai 
                    ? { border: "1.5px solid var(--primary)", boxShadow: "var(--shadow-md)" } 
                    : {}
                }
              >
                <div className="exam-meta-bar">
                  {isTeacher ? (
                    <div style={{ display: "flex", gap: "6px", alignItems: "center", flexWrap: "wrap" }}>
                      <span 
                        className="exam-province-badge"
                        style={{ background: "#10b981", color: "#ffffff", fontWeight: 700 }}
                      >
                        <Sparkles size={13} color="#ffffff" /> Đề Giáo Viên
                      </span>
                      {item.generationMethod === "gemini" ? (
                        <span 
                          className="exam-province-badge"
                          style={{ background: "#7c3aed", color: "#ffffff", fontWeight: 700 }}
                        >
                          ✨ Gemini AI
                        </span>
                      ) : (
                        <span 
                          className="exam-province-badge"
                          style={{ background: "#0284c7", color: "#ffffff", fontWeight: 700 }}
                        >
                          📐 Smart Matrix
                        </span>
                      )}
                    </div>
                  ) : (
                    <span 
                      className="exam-province-badge"
                      style={isQuangNgai ? { background: "var(--primary)", color: "#ffffff" } : {}}
                    >
                      <MapPin size={14} color={isQuangNgai ? "#ffffff" : "var(--primary)"} /> 
                      {item.province} {isQuangNgai ? "🌟" : ""}
                    </span>
                  )}
                  <span className="exam-year">Năm {item.year}</span>
                </div>

                <h3 className="exam-title" style={{ minHeight: "2.8rem" }}>
                  {item.title}
                </h3>

                <div className="exam-info-chips">
                  <span className="info-chip">
                    <Clock size={14} /> {item.durationMinutes} phút
                  </span>
                  <span className="info-chip">
                    <FileCheck size={14} /> {item.examType}
                  </span>
                  <span className="info-chip" style={{ color: "var(--success)", fontWeight: 600 }}>
                    Có hình vẽ & Barem
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
                      html: item.solutionHtml || "<p>Chưa cập nhật đáp án cho đề này.</p>",
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
