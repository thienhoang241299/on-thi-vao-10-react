import React, { useState, useEffect } from "react";
import { 
  FileText, 
  Send, 
  HelpCircle, 
  Trophy, 
  ArrowLeft 
} from "lucide-react";
import { storage } from "../services/storage";
import KaTeXRenderer from "../components/KaTeXRenderer";

export default function ExamRoomView({ exam, onGoToRepo }) {
  const [userAnswers, setUserAnswers] = useState({});
  const [timeLeft, setTimeLeft] = useState(60 * 60);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showResultModal, setShowResultModal] = useState(false);
  const [scoreData, setScoreData] = useState(null);

  useEffect(() => {
    if (exam) {
      setUserAnswers({});
      setIsSubmitted(false);
      setShowResultModal(false);
      setTimeLeft((exam.durationMinutes || 60) * 60);
    }
  }, [exam]);

  useEffect(() => {
    if (!exam || isSubmitted) return;

    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          handleSubmitExam();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [exam, isSubmitted]);

  if (!exam) {
    return (
      <div className="tab-pane active">
        <div className="exam-panel" style={{ textAlign: "center", padding: "5rem 1rem", color: "var(--text-muted)" }}>
          <FileText size={56} style={{ margin: "0 auto 1rem", opacity: 0.4 }} />
          <h3>Chưa chọn bài thi nào</h3>
          <p style={{ margin: "0.5rem 0 1.5rem" }}>
            Hãy sang mục <strong>"Đề Thi Các Tỉnh"</strong> hoặc <strong>"AI Sinh Đề"</strong> và bấm <strong>"Thi thử"</strong> để bắt đầu làm bài.
          </p>
          <button className="btn-primary" onClick={onGoToRepo} style={{ margin: "0 auto" }}>
            <ArrowLeft size={16} /> Đến Thư Viện Đề Thi
          </button>
        </div>
      </div>
    );
  }

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;
  const questions = exam.quizQuestions || [];

  const handleSelectOption = (qid, key) => {
    if (isSubmitted) return;
    setUserAnswers((prev) => ({ ...prev, [qid]: key }));
  };

  const handleSubmitExam = () => {
    if (isSubmitted) return;
    setIsSubmitted(true);

    let correctCount = 0;
    questions.forEach((q) => {
      if (userAnswers[q.id] === q.correct) {
        correctCount++;
      }
    });

    const score = ((correctCount / (questions.length || 1)) * 10).toFixed(1);
    const result = {
      score,
      correctCount,
      total: questions.length,
      examTitle: exam.title,
      subject: exam.subject
    };

    setScoreData(result);
    setShowResultModal(true);

    storage.saveHistory({
      examTitle: exam.title,
      subject: exam.subject,
      score,
      correctCount,
      totalQuestions: questions.length
    });
  };

  return (
    <div className="tab-pane active">
      <div className="section-header" style={{ marginTop: "1rem" }}>
        <div>
          <h2 className="section-title">
            <Trophy size={24} color="var(--primary)" /> Phòng Thi Thử Trực Tuyến
          </h2>
          <p className="section-subtitle">{exam.title}</p>
        </div>
      </div>

      <div className="exam-room-layout">
        {/* Main Panel */}
        <div className="exam-panel">
          {questions.map((q, idx) => {
            const selectedKey = userAnswers[q.id];
            return (
              <div key={q.id} id={`question-${q.id}`} className="question-card">
                <div className="question-number">
                  <HelpCircle size={18} /> Câu {idx + 1}:
                </div>
                <div className="question-text">
                  <KaTeXRenderer html={`${q.question || ""} ${q.text || ""}`} />
                </div>

                <div className="options-list">
                  {q.options.map((opt) => {
                    let borderStyle = undefined;
                    let bgStyle = undefined;

                    if (isSubmitted) {
                      if (opt.key === q.correct) {
                        borderStyle = "2px solid var(--success)";
                        bgStyle = "rgba(16, 185, 129, 0.15)";
                      } else if (opt.key === selectedKey && selectedKey !== q.correct) {
                        borderStyle = "2px solid var(--danger)";
                        bgStyle = "rgba(239, 68, 68, 0.15)";
                      }
                    }

                    return (
                      <div
                        key={opt.key}
                        className={`option-item ${selectedKey === opt.key ? "selected" : ""}`}
                        style={{ border: borderStyle, background: bgStyle }}
                        onClick={() => handleSelectOption(q.id, opt.key)}
                      >
                        <div className="option-key">{opt.key}</div>
                        <div className="option-content">
                          <KaTeXRenderer html={opt.text} />
                        </div>
                      </div>
                    );
                  })}
                </div>

                {isSubmitted && (
                  <div style={{ marginTop: "1rem", padding: "1rem", background: "var(--bg-main)", borderRadius: "var(--radius-md)", borderLeft: "4px solid var(--success)" }}>
                    <strong style={{ color: "var(--success)" }}>
                      💡 Lời giải chi tiết:
                    </strong>
                    <div style={{ marginTop: "0.35rem", fontSize: "0.92rem" }}>
                      <KaTeXRenderer html={q.explanation || "Không có giải thích chi tiết."} />
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Sidebar */}
        <div className="exam-sidebar-panel">
          <div className="timer-box">
            <div className="timer-label">Thời gian còn lại</div>
            <div 
              className="timer-value" 
              style={{ color: timeLeft <= 300 ? "#ef4444" : "#38bdf8" }}
            >
              {String(minutes).padStart(2, "0")}:{String(seconds).padStart(2, "0")}
            </div>
          </div>

          <h4 style={{ fontSize: "0.95rem", marginBottom: "0.75rem", fontWeight: 700 }}>
            Bảng câu hỏi:
          </h4>
          <div className="palette-grid">
            {questions.map((q, idx) => {
              const isAnswered = !!userAnswers[q.id];
              return (
                <button
                  key={q.id}
                  className={`palette-btn ${isAnswered ? "answered" : ""}`}
                  onClick={() => {
                    const el = document.getElementById(`question-${q.id}`);
                    el?.scrollIntoView({ behavior: "smooth", block: "center" });
                  }}
                >
                  {idx + 1}
                </button>
              );
            })}
          </div>

          {!isSubmitted ? (
            <button
              className="btn-primary"
              style={{ width: "100%", justifyContent: "center", padding: "0.85rem", background: "var(--secondary)" }}
              onClick={() => {
                if (window.confirm("Bạn có chắc chắn muốn nộp bài thi ngay bây giờ?")) {
                  handleSubmitExam();
                }
              }}
            >
              <Send size={16} /> Nộp Bài & Chấm Điểm
            </button>
          ) : (
            <div style={{ textAlign: "center", color: "var(--success)", fontWeight: 700, padding: "0.5rem 0" }}>
              Đã hoàn thành bài thi!
            </div>
          )}
        </div>
      </div>

      {/* Result Modal */}
      {showResultModal && scoreData && (
        <div className="modal-overlay active" onClick={() => setShowResultModal(false)}>
          <div className="modal-container" style={{ maxWidth: 450 }} onClick={(e) => e.stopPropagation()}>
            <div className="modal-body" style={{ textAlign: "center", padding: "2.5rem 1.5rem" }}>
              <Trophy size={48} color="var(--warning)" style={{ margin: "0 auto 1rem" }} />
              <h2 style={{ fontSize: "1.5rem", marginBottom: "0.5rem" }}>Kết Quả Bài Thi</h2>
              <div style={{ fontSize: "3.5rem", fontWeight: 800, color: scoreData.score >= 8 ? "var(--success)" : "var(--primary)" }}>
                {scoreData.score} <span style={{ fontSize: "1.5rem", color: "var(--text-muted)" }}>/ 10</span>
              </div>
              <p style={{ fontWeight: 600, marginTop: "0.5rem" }}>
                Đúng {scoreData.correctCount} / {scoreData.total} câu hỏi.
              </p>
              <button 
                className="btn-primary" 
                style={{ margin: "1.5rem auto 0" }}
                onClick={() => setShowResultModal(false)}
              >
                Xem Chi Tiết Từng Câu
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
