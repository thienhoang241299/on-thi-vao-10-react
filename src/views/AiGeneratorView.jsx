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
  FileText,
  Lock,
  Unlock,
  ShieldCheck,
  CloudUpload,
  CheckCircle2,
  Trash2,
  Eye,
  KeyRound
} from "lucide-react";
import { generateExam } from "../services/aiService";
import { storage } from "../services/storage";
import { firebaseService } from "../services/firebaseService";
import KaTeXRenderer from "../components/KaTeXRenderer";
import { exportToWord, printCleanDocument } from "../utils/exportUtils";
import TrafficStatsDashboard from "../components/TrafficStatsDashboard";
import { analyticsService } from "../services/analyticsService";

export default function AiGeneratorView({ onStartExam, _onOpenDetail }) {
  // Authentication State
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    return sessionStorage.getItem("teacher_authenticated") === "true";
  });
  const [inputPin, setInputPin] = useState("");
  const [authError, setAuthError] = useState("");

  // Change PIN modal state
  const [isChangingPin, setIsChangingPin] = useState(false);
  const [newPin, setNewPin] = useState("");

  // Generator form state
  const [subject, setSubject] = useState("math");
  const [level, setLevel] = useState("Tiêu chuẩn (Mục tiêu 7 - 8.5 điểm)");
  const [examType, setExamType] = useState("Trắc nghiệm kết hợp Tự luận");
  const [provinceStyle, setProvinceStyle] = useState("Quảng Ngãi");
  const [generatorMethod, setGeneratorMethod] = useState("auto");

  const [loading, setLoading] = useState(false);
  const [currentExam, setCurrentExam] = useState(null);
  const [isPublishing, setIsPublishing] = useState(false);
  const [publishSuccessMsg, setPublishSuccessMsg] = useState("");

  // Cloud Published Exams list
  const [cloudExams, setCloudExams] = useState([]);
  const [loadingCloud, setLoadingCloud] = useState(false);

  useEffect(() => {
    if (isAuthenticated) {
      loadCloudExams();
    }
  }, [isAuthenticated]);

  const loadCloudExams = async () => {
    setLoadingCloud(true);
    try {
      const list = await firebaseService.getPublishedExams();
      setCloudExams(list);
    } catch (err) {
      console.error(err);
    } finally {
      setLoadingCloud(false);
    }
  };

  const handleUnlock = (e) => {
    e.preventDefault();
    const currentPin = storage.getTeacherPin();
    if (inputPin.trim() === currentPin) {
      setIsAuthenticated(true);
      sessionStorage.setItem("teacher_authenticated", "true");
      setAuthError("");
      setInputPin("");
    } else {
      setAuthError("Mật khẩu không chính xác. Mật khẩu mặc định là: gv2026");
    }
  };

  const handleLock = () => {
    setIsAuthenticated(false);
    sessionStorage.removeItem("teacher_authenticated");
    setCurrentExam(null);
  };

  const handleChangePin = (e) => {
    e.preventDefault();
    if (!newPin.trim()) {
      alert("Vui lòng nhập mật khẩu mới.");
      return;
    }
    storage.setTeacherPin(newPin.trim());
    setIsChangingPin(false);
    setNewPin("");
    alert("Đã cập nhật mật khẩu Giáo Viên thành công!");
  };

  const handleGenerate = async () => {
    setLoading(true);
    setPublishSuccessMsg("");
    try {
      const exam = await generateExam({
        subject,
        level,
        examType,
        provinceStyle,
        preferredMethod: generatorMethod
      });
      setCurrentExam(exam);
      analyticsService.trackAiGeneration();
    } catch (err) {
      console.error(err);
      alert(err.message || "Đã xảy ra lỗi khi tạo đề.");
    } finally {
      setLoading(false);
    }
  };

  const handlePublishToCloud = async () => {
    if (!currentExam) return;
    setIsPublishing(true);
    try {
      await firebaseService.publishExam(currentExam);
      setPublishSuccessMsg("Đã xuất bản đề thi lên Cloud Firebase thành công! Học sinh vào tab 'Đề Thi Các Tỉnh' sẽ thấy ngay.");
      await loadCloudExams();
    } catch (err) {
      console.error(err);
      alert("Lỗi khi xuất bản lên Cloud.");
    } finally {
      setIsPublishing(false);
    }
  };

  const handleDeleteCloudExam = async (examId) => {
    if (window.confirm("Bạn có chắc chắn muốn gỡ đề thi này khỏi Cloud Firebase của học sinh?")) {
      await firebaseService.deletePublishedExam(examId);
      await loadCloudExams();
      if (currentExam && currentExam.id === examId) {
        setPublishSuccessMsg("");
      }
    }
  };

  // MÀN HÌNH KHÓA BẢO VỆ MẬT KHẨU GIÁO VIÊN
  if (!isAuthenticated) {
    return (
      <div className="tab-pane active" style={{ maxWidth: 540, margin: "2rem auto" }}>
        {/* Widget Đo Lường Lưu Lượng Ngay Tại Cổng Vào */}
        <TrafficStatsDashboard compact={true} />

        <div className="exam-panel" style={{ textAlign: "center", padding: "2.5rem 2rem", boxShadow: "var(--shadow-lg)" }}>
          <div style={{
            width: 64,
            height: 64,
            borderRadius: "50%",
            background: "var(--primary-light)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            margin: "0 auto 1.2rem"
          }}>
            <Lock size={32} color="var(--primary)" />
          </div>

          <h2 style={{ fontSize: "1.35rem", marginBottom: "0.5rem" }}>
            Cổng Biên Soạn Đề Tuyển Sinh
          </h2>
          <span className="badge badge-warning" style={{ fontSize: "0.8rem", marginBottom: "1rem" }}>
            🔒 DÀNH RIÊNG CHO GIÁO VIÊN
          </span>

          <p style={{ color: "var(--text-muted)", fontSize: "0.9rem", lineHeight: 1.6, marginBottom: "1.5rem" }}>
            Chức năng tạo đề thi thông minh có kèm <strong>hình vẽ vector SVG chuẩn</strong> được khóa bảo vệ nhằm tối ưu tài nguyên hệ thống. Đề thi do thầy cô tạo sẽ được xuất bản lên <strong>Cloud Firebase</strong> để toàn bộ học sinh cùng học tập mà không cần tạo lại.
          </p>

          <form onSubmit={handleUnlock}>
            <div className="form-group" style={{ textAlign: "left", marginBottom: "1.2rem" }}>
              <label className="form-label" style={{ fontWeight: 600 }}>
                <KeyRound size={16} /> Mật khẩu giáo viên:
              </label>
              <input
                type="password"
                className="form-control"
                placeholder="Nhập mã PIN hoặc mật khẩu..."
                value={inputPin}
                onChange={(e) => setInputPin(e.target.value)}
                autoFocus
                style={{ fontSize: "1rem", letterSpacing: "1px" }}
              />
              {authError && (
                <p style={{ color: "var(--danger)", fontSize: "0.85rem", marginTop: "0.5rem" }}>
                  {authError}
                </p>
              )}
            </div>

            <button
              type="submit"
              className="btn-primary"
              style={{ width: "100%", justifyContent: "center", padding: "0.75rem", fontSize: "1rem" }}
            >
              <Unlock size={18} /> Mở Khóa Biên Soạn Đề
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="tab-pane active">
      {/* Teacher Top Bar */}
      <div style={{
        background: "var(--bg-card)",
        border: "1px solid var(--border-color)",
        borderRadius: "var(--radius-md)",
        padding: "0.75rem 1.25rem",
        marginTop: "1rem",
        marginBottom: "1.25rem",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "wrap",
        gap: "0.75rem"
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <ShieldCheck size={20} color="var(--success)" />
          <strong style={{ fontSize: "0.95rem" }}>Khu Vực Giáo Viên Đang Hoạt Động</strong>
          <span className="badge badge-success" style={{ fontSize: "0.75rem" }}>Đã xác thực</span>
        </div>
        <div style={{ display: "flex", gap: "0.5rem" }}>
          <button
            className="btn-outline"
            style={{ fontSize: "0.85rem", padding: "0.35rem 0.75rem" }}
            onClick={() => setIsChangingPin(!isChangingPin)}
          >
            <KeyRound size={14} /> Đổi Mật Khẩu
          </button>
          <button
            className="btn-outline"
            style={{ fontSize: "0.85rem", padding: "0.35rem 0.75rem", color: "var(--danger)" }}
            onClick={handleLock}
            title="Khóa lại khi rời máy tính"
          >
            <Lock size={14} /> Khóa Lại
          </button>
        </div>
      </div>

      {/* Dashboard Giám Sát Lưu Lượng Trang Web Cho Giáo Viên */}
      <TrafficStatsDashboard compact={false} />

      {/* Change PIN Panel */}
      {isChangingPin && (
        <div className="exam-panel" style={{ marginBottom: "1.25rem", border: "1.5px dashed var(--primary)" }}>
          <h4 style={{ fontSize: "1rem", marginBottom: "0.75rem" }}>Đổi mật khẩu giáo viên</h4>
          <form onSubmit={handleChangePin} style={{ display: "flex", gap: "0.75rem", alignItems: "center" }}>
            <input
              type="text"
              className="form-control"
              style={{ maxWidth: 260 }}
              placeholder="Nhập mật khẩu mới..."
              value={newPin}
              onChange={(e) => setNewPin(e.target.value)}
            />
            <button type="submit" className="btn-primary" style={{ padding: "0.5rem 1rem" }}>
              Lưu Mật Khẩu
            </button>
            <button type="button" className="btn-outline" onClick={() => setIsChangingPin(false)}>
              Hủy
            </button>
          </form>
        </div>
      )}

      {/* Generator Header */}
      <div className="section-header">
        <div>
          <h2 className="section-title">
            <Sparkles size={24} color="var(--primary)" /> Biên Soạn Đề Thi Vào Lớp 10 (Có Hình Vẽ SVG)
          </h2>
          <p className="section-subtitle">
            Hệ thống sinh đề kèm hình vẽ vector hình học sắc nét (hình nón, trụ, cát tuyến, tiếp tuyến đường tròn). Đề tạo xong có thể xuất bản lên Cloud Firebase để học sinh truy cập ngay.
          </p>
        </div>
      </div>

      {/* Generator Form */}
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
              <option value="math">Toán học (Có kèm hình vẽ vector SVG)</option>
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
              <option value="Quảng Ngãi">🌟 Sở GD&ĐT Quảng Ngãi (Đề 2026 Chuẩn)</option>
              <option value="Hà Nội">Sở GD&ĐT Hà Nội</option>
              <option value="TP. Hồ Chí Minh">Sở GD&ĐT TP. Hồ Chí Minh (Toán thực tế)</option>
              <option value="Đà Nẵng">Sở GD&ĐT Đà Nẵng</option>
              <option value="Toàn quốc">Chuẩn chung Bộ GD&ĐT</option>
            </select>
          </div>
        </div>

        {/* Nguồn Sinh Đề / Phương thức AI */}
        <div className="form-group" style={{ marginTop: "0.5rem", background: "var(--bg-main)", padding: "0.85rem", borderRadius: "var(--radius-md)", border: "1px solid var(--border-color)" }}>
          <label className="form-label" style={{ fontWeight: 700, marginBottom: "0.5rem" }}>
            <Sparkles size={16} color="var(--primary)" /> Công nghệ biên soạn đề:
          </label>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "0.75rem" }}>
            <label style={{ display: "flex", alignItems: "center", gap: 8, cursor: "pointer", fontSize: "0.9rem" }}>
              <input 
                type="radio" 
                name="genMethod" 
                value="auto" 
                checked={generatorMethod === "auto"} 
                onChange={(e) => setGeneratorMethod(e.target.value)} 
              />
              <span><strong>🤖 Tự Động:</strong> Dùng Gemini nếu có Key, tự chuyển Ma Trận nếu chưa có</span>
            </label>
            <label style={{ display: "flex", alignItems: "center", gap: 8, cursor: "pointer", fontSize: "0.9rem" }}>
              <input 
                type="radio" 
                name="genMethod" 
                value="matrix" 
                checked={generatorMethod === "matrix"} 
                onChange={(e) => setGeneratorMethod(e.target.value)} 
              />
              <span><strong>📐 Smart Matrix:</strong> Ma trận chuẩn Sở GD&ĐT (Miễn phí 100%, 0 tốn token)</span>
            </label>
            <label style={{ display: "flex", alignItems: "center", gap: 8, cursor: "pointer", fontSize: "0.9rem" }}>
              <input 
                type="radio" 
                name="genMethod" 
                value="gemini" 
                checked={generatorMethod === "gemini"} 
                onChange={(e) => setGeneratorMethod(e.target.value)} 
              />
              <span><strong>✨ Gemini API:</strong> Sinh đề độc nhất theo thời gian thực (Cần API Key)</span>
            </label>
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
                <Loader2 size={18} className="animate-spin" /> Đang Biên Soạn Đề & Dựng Hình Vẽ SVG...
              </>
            ) : (
              <>
                <Sparkles size={18} /> Tạo Bộ Đề Thi Mới (Có Hình Vẽ)
              </>
            )}
          </button>
        </div>
      </div>

      {/* Generated Result */}
      {currentExam && (
        <div className="exam-panel" style={{ border: "2px solid var(--primary)", marginBottom: "2rem" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1rem", flexWrap: "wrap", gap: "0.5rem" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "8px", flexWrap: "wrap" }}>
              <span className={`badge badge-${currentExam.subject}`}>Bộ Đề Vừa Biên Soạn Xong</span>
              {currentExam.generationMethod === "gemini" ? (
                <span className="badge" style={{ background: "#7c3aed", color: "#ffffff", fontWeight: 700 }}>
                  ✨ Google Gemini AI (API Key)
                </span>
              ) : (
                <span className="badge" style={{ background: "#0284c7", color: "#ffffff", fontWeight: 700 }}>
                  📐 Smart Matrix (Ma Trận Đề Chuẩn)
                </span>
              )}
            </div>
            <span style={{ fontSize: "0.85rem", color: "var(--text-muted)" }}>
              {new Date(currentExam.createdAt).toLocaleTimeString()}
            </span>
          </div>

          <h3 style={{ fontSize: "1.3rem", marginBottom: "1rem", color: "var(--primary)" }}>
            {currentExam.title}
          </h3>

          {/* Action buttons & Publish */}
          <div style={{
            background: "var(--bg-main)",
            padding: "1rem",
            borderRadius: "var(--radius-md)",
            marginBottom: "1.5rem",
            display: "flex",
            gap: "0.75rem",
            flexWrap: "wrap",
            alignItems: "center"
          }}>
            {/* Publish to Cloud Button */}
            <button
              className="btn-primary"
              style={{ background: "var(--success)", borderColor: "var(--success)", padding: "0.6rem 1.2rem" }}
              onClick={handlePublishToCloud}
              disabled={isPublishing}
              title="Lưu bộ đề lên Firebase để toàn bộ học sinh mở tab Thư Viện Đề Thi là thấy ngay"
            >
              {isPublishing ? (
                <>
                  <Loader2 size={16} className="animate-spin" /> Đang Lưu Lên Cloud...
                </>
              ) : (
                <>
                  <CloudUpload size={16} /> 🚀 Xuất Bản Lên Kho Đề Học Sinh (Cloud Firebase)
                </>
              )}
            </button>

            <button
              className="btn-outline"
              onClick={() => printCleanDocument(currentExam.fullExamContent, currentExam.title)}
              style={{ display: "flex", alignItems: "center", gap: "6px" }}
              title="Xuất riêng đề thi sạch ra PDF A4 có sẵn hình vẽ vector SVG sắc nét"
            >
              <Printer size={16} /> 🖨️ Xuất PDF Đề Thi
            </button>

            <button
              className="btn-outline"
              onClick={() => exportToWord(currentExam.title, currentExam.fullExamContent)}
              style={{ display: "flex", alignItems: "center", gap: "6px" }}
              title="Tải đề thi file Word (.doc) chuẩn MathML"
            >
              <FileText size={16} color="var(--primary)" /> 📄 Tải file Word (.doc)
            </button>

            {currentExam.quizQuestions && currentExam.quizQuestions.length > 0 && (
              <button className="btn-outline" onClick={() => onStartExam(currentExam)}>
                <Play size={16} /> Làm bài thử
              </button>
            )}
          </div>

          {publishSuccessMsg && (
            <div style={{
              background: "#dcfce7",
              color: "#166534",
              padding: "0.85rem 1rem",
              borderRadius: "var(--radius-md)",
              marginBottom: "1.2rem",
              display: "flex",
              alignItems: "center",
              gap: "8px",
              fontWeight: 600
            }}>
              <CheckCircle2 size={18} /> {publishSuccessMsg}
            </div>
          )}

          {/* Exam Content Preview */}
          <div style={{ marginBottom: "1.5rem" }}>
            <KaTeXRenderer html={currentExam.fullExamContent} />
          </div>

          {/* Solution Preview */}
          {currentExam.solutionHtml && (
            <div style={{ marginTop: "1.5rem", borderTop: "1px dashed var(--border-color)", paddingTop: "1rem" }}>
              <h4 style={{ color: "var(--primary)", marginBottom: "0.5rem" }}>Lời giải chi tiết & Barem:</h4>
              <KaTeXRenderer html={currentExam.solutionHtml} />
            </div>
          )}
        </div>
      )}

      {/* Cloud Published Exams List */}
      <div className="exam-panel">
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1rem", flexWrap: "wrap", gap: "0.5rem" }}>
          <h3 style={{ fontSize: "1.15rem", display: "flex", alignItems: "center", gap: 8 }}>
            <CloudUpload size={20} color="var(--primary)" /> Danh sách đề thi đã xuất bản lên Cloud Firebase
          </h3>
          <button className="btn-outline" style={{ fontSize: "0.8rem", padding: "0.3rem 0.6rem" }} onClick={loadCloudExams}>
            Làm mới danh sách
          </button>
        </div>

        <p style={{ color: "var(--text-muted)", fontSize: "0.88rem", marginBottom: "1rem" }}>
          Toàn bộ các đề thi dưới đây được lưu trữ trên Cloud. Mọi học sinh mở ứng dụng đều thấy và có thể xem, in PDF hoặc tải Word trực tiếp mà không cần bấm tạo đề lại.
        </p>

        {loadingCloud ? (
          <div style={{ textAlign: "center", padding: "2rem", color: "var(--text-muted)" }}>
            <Loader2 size={24} className="animate-spin" style={{ margin: "0 auto 8px" }} />
            Đang tải dữ liệu từ Cloud Firebase...
          </div>
        ) : cloudExams.length === 0 ? (
          <div style={{ textAlign: "center", padding: "2rem", color: "var(--text-muted)", background: "var(--bg-main)", borderRadius: "var(--radius-md)" }}>
            <p>Chưa có bộ đề nào được xuất bản lên Cloud. Thầy cô hãy bấm "Tạo Bộ Đề Thi Mới" ở trên và nhấn "🚀 Xuất Bản Lên Kho Đề Học Sinh".</p>
          </div>
        ) : (
          <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
            {cloudExams.map((item) => (
              <div
                key={item.id}
                style={{
                  padding: "1rem",
                  background: "var(--bg-main)",
                  borderRadius: "var(--radius-md)",
                  border: "1px solid var(--border-color)",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  flexWrap: "wrap",
                  gap: "0.75rem"
                }}
              >
                <div>
                  <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "4px", flexWrap: "wrap" }}>
                    <span className="badge badge-success" style={{ fontSize: "0.75rem" }}>Đã lên Cloud</span>
                    {item.generationMethod === "gemini" ? (
                      <span className="badge" style={{ background: "#7c3aed", color: "#ffffff", fontSize: "0.75rem", fontWeight: 700 }}>
                        ✨ Gemini AI
                      </span>
                    ) : (
                      <span className="badge" style={{ background: "#0284c7", color: "#ffffff", fontSize: "0.75rem", fontWeight: 700 }}>
                        📐 Smart Matrix
                      </span>
                    )}
                    <strong style={{ fontSize: "1rem" }}>{item.title}</strong>
                  </div>
                  <span style={{ fontSize: "0.8rem", color: "var(--text-muted)" }}>
                    Môn: {item.subjectName || item.subject} | Ngày đăng: {new Date(item.publishedAt || item.createdAt).toLocaleString()} | Phong cách: {item.province || "Chung"}
                  </span>
                </div>

                <div style={{ display: "flex", gap: "0.5rem", alignItems: "center" }}>
                  <button
                    className="btn-outline"
                    style={{ fontSize: "0.82rem", padding: "0.4rem 0.75rem" }}
                    onClick={() => setCurrentExam(item)}
                    title="Xem lại chi tiết trong trình soạn thảo"
                  >
                    <Eye size={14} /> Xem lại
                  </button>
                  <button
                    className="btn-outline"
                    style={{ fontSize: "0.82rem", padding: "0.4rem 0.75rem" }}
                    onClick={() => printCleanDocument(item.fullExamContent, item.title)}
                    title="Xuất PDF"
                  >
                    <Printer size={14} /> PDF
                  </button>
                  <button
                    className="btn-outline"
                    style={{ fontSize: "0.82rem", padding: "0.4rem 0.75rem" }}
                    onClick={() => exportToWord(item.title, item.fullExamContent)}
                    title="Tải Word"
                  >
                    <FileText size={14} /> Word
                  </button>
                  <button
                    className="btn-outline"
                    style={{ fontSize: "0.82rem", padding: "0.4rem 0.6rem", color: "var(--danger)", borderColor: "var(--danger)" }}
                    onClick={() => handleDeleteCloudExam(item.id)}
                    title="Xóa đề này khỏi Cloud"
                  >
                    <Trash2 size={14} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
