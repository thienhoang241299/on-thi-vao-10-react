import React, { useState, useEffect } from "react";
import { 
  Sparkles, 
  BookOpen, 
  BarChart, 
  Layers, 
  MapPin, 
  Play, 
  Printer, 
  Loader2, 
  Clock 
} from "lucide-react";
import { generateExam } from "../services/aiService";
import { storage } from "../services/storage";
import KaTeXRenderer from "../components/KaTeXRenderer";

export default function AiGeneratorView({ onStartExam }) {
  const [subject, setSubject] = useState("math");
  const [level, setLevel] = useState("Tiêu chuẩn (Mục tiêu 7 - 8.5 điểm)");
  const [examType, setExamType] = useState("Trắc nghiệm kết hợp Tự luận");
  const [provinceStyle, setProvinceStyle] = useState("Quảng Ngãi");

  const [loading, setLoading] = useState(false);
  const [currentExam, setCurrentExam] = useState(null);
  const [savedExams, setSavedExams] = useState([]);

  useEffect(() => {
    loadSavedExams();
  }, []);

  const loadSavedExams = async () => {
    const list = await storage.getAllAiExams();
    setSavedExams(list);
  };

  const handleGenerate = async () => {
    setLoading(true);
    try {
      const exam = await generateExam({
        subject,
        level,
        examType,
        provinceStyle
      });
      setCurrentExam(exam);
      await loadSavedExams();
    } catch (err) {
      console.error(err);
      alert("Đã xảy ra lỗi khi tạo đề.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="tab-pane active">
      <div className="section-header" style={{ marginTop: "1rem" }}>
        <div>
          <h2 className="section-title">
            <Sparkles size={24} color="var(--primary)" /> AI Trợ Lý Sinh Đề Thi Vào Lớp 10
          </h2>
          <p className="section-subtitle">
            Tự động biên soạn đề thi theo chuẩn ma trận kiến thức tuyển sinh của các Sở GD&ĐT
          </p>
        </div>
      </div>

      <div className="ai-form-card">
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
          <div className="form-group">
            <label className="form-label">
              <BookOpen size={16} /> Môn thi
            </label>
            <select 
              className="form-control"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
            >
              <option value="math">Toán học</option>
              <option value="eng">Tiếng Anh</option>
              <option value="lit">Ngữ Văn</option>
            </select>
          </div>

          <div className="form-group">
            <label className="form-label">
              <BarChart size={16} /> Mức độ phân loại
            </label>
            <select 
              className="form-control"
              value={level}
              onChange={(e) => setLevel(e.target.value)}
            >
              <option value="Tiêu chuẩn (Mục tiêu 7 - 8.5 điểm)">Tiêu chuẩn (Mục tiêu 7 - 8.5 điểm)</option>
              <option value="Cơ bản tốt nghiệp (Mục tiêu 5 - 6.5 điểm)">Cơ bản tốt nghiệp (Mục tiêu 5 - 6.5 điểm)</option>
              <option value="Nâng cao / Chuyên (Mục tiêu 9 - 10 điểm)">Nâng cao / Chuyên (Mục tiêu 9 - 10 điểm)</option>
            </select>
          </div>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
          <div className="form-group">
            <label className="form-label">
              <Layers size={16} /> Hình thức thi
            </label>
            <select 
              className="form-control"
              value={examType}
              onChange={(e) => setExamType(e.target.value)}
            >
              <option value="Trắc nghiệm kết hợp Tự luận">Trắc nghiệm kết hợp Tự luận</option>
              <option value="Trắc nghiệm 100%">Trắc nghiệm 100%</option>
              <option value="Tự luận 100%">Tự luận 100%</option>
            </select>
          </div>

          <div className="form-group">
            <label className="form-label">
              <MapPin size={16} /> Phong cách đề tỉnh thành
            </label>
            <select 
              className="form-control"
              value={provinceStyle}
              onChange={(e) => setProvinceStyle(e.target.value)}
            >
              <option value="Quảng Ngãi">🌟 Sở GD&ĐT Quảng Ngãi</option>
              <option value="Hà Nội">Sở GD&ĐT Hà Nội</option>
              <option value="TP. Hồ Chí Minh">Sở GD&ĐT TP. Hồ Chí Minh (Toán thực tế)</option>
              <option value="Đà Nẵng">Sở GD&ĐT Đà Nẵng</option>
              <option value="Toàn quốc">Chuẩn chung Bộ GD&ĐT</option>
            </select>
          </div>
        </div>

        <div style={{ textAlign: "center", marginTop: "1rem" }}>
          <button 
            className="btn-primary" 
            style={{ padding: "0.85rem 2.2rem", fontSize: "1.05rem", margin: "0 auto" }}
            onClick={handleGenerate}
            disabled={loading}
          >
            {loading ? (
              <>
                <Loader2 size={18} className="animate-spin" /> Đang Phân Tích Ma Trận & Biên Soạn...
              </>
            ) : (
              <>
                <Sparkles size={18} /> Tạo Bộ Đề Ngay
              </>
            )}
          </button>
        </div>
      </div>

      {/* Generated Result */}
      {currentExam && (
        <div className="exam-panel" style={{ border: "2px solid var(--primary)", marginBottom: "2rem" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1rem" }}>
            <span className={`badge badge-${currentExam.subject}`}>AI Đã Sinh Đề Thành Công</span>
            <span style={{ fontSize: "0.85rem", color: "var(--text-muted)" }}>
              {new Date(currentExam.createdAt).toLocaleTimeString()}
            </span>
          </div>
          <h3 style={{ fontSize: "1.3rem", marginBottom: "1rem", color: "var(--primary)" }}>
            {currentExam.title}
          </h3>

          <div style={{ marginBottom: "1.5rem" }}>
            <KaTeXRenderer html={currentExam.fullExamContent} />
          </div>

          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
            {currentExam.quizQuestions && currentExam.quizQuestions.length > 0 && (
              <button className="btn-primary" onClick={() => onStartExam(currentExam)}>
                <Play size={16} /> Làm bài thi thử ngay ({currentExam.quizQuestions.length} câu)
              </button>
            )}
            <button className="btn-outline" onClick={() => window.print()}>
              <Printer size={16} /> In / Tải PDF
            </button>
          </div>
        </div>
      )}

      {/* Saved Exams List */}
      <div className="exam-panel">
        <h3 style={{ fontSize: "1.15rem", marginBottom: "1rem", display: "flex", alignItems: "center", gap: 8 }}>
          <Clock size={18} /> Các bộ đề AI đã tạo gần đây
        </h3>
        {savedExams.length === 0 ? (
          <p style={{ color: "var(--text-muted)", fontSize: "0.9rem" }}>Chưa có bộ đề nào được tạo.</p>
        ) : (
          savedExams.slice(0, 6).map((item) => (
            <div 
              key={item.id} 
              style={{
                padding: "0.85rem",
                background: "var(--bg-main)",
                borderRadius: "var(--radius-md)",
                marginBottom: "0.75rem",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center"
              }}
            >
              <div>
                <strong style={{ fontSize: "0.95rem", display: "block" }}>{item.title}</strong>
                <span style={{ fontSize: "0.78rem", color: "var(--text-muted)" }}>
                  {new Date(item.createdAt).toLocaleDateString()} - Môn {item.subjectName}
                </span>
              </div>
              <button 
                className="btn-outline" 
                style={{ fontSize: "0.8rem", padding: "0.4rem 0.75rem" }}
                onClick={() => setCurrentExam(item)}
              >
                Xem lại
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
