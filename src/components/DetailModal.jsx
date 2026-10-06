import React, { useState } from "react";
import { X, Printer, Copy, Check, Download, FileCode, Eye } from "lucide-react";
import KaTeXRenderer from "./KaTeXRenderer";

export default function DetailModal({ isOpen, onClose, title, contentHtml, latexSource = "" }) {
  const [activeTab, setActiveTab] = useState("preview"); // 'preview' | 'latex'
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  // Fallback LaTeX generator nếu chưa có sẵn latexSource
  const effectiveLatex = latexSource || `\\documentclass[12pt,a4paper]{article}
\\usepackage[utf8]{inputenc}
\\usepackage[vietnamese]{babel}
\\usepackage{amsmath,amssymb,amsfonts}
\\usepackage{tikz}
\\usepackage{geometry}
\\geometry{a4paper, margin=2cm}

\\title{${title.replace(/<[^>]+>/g, "")}}
\\author{Hệ thống Ôn thi Tuyển sinh vào Lớp 10}
\\date{\\today}

\\begin{document}
\\maketitle

% Nội dung chuyển ngữ tự động từ hệ thống
${title}

\\end{document}`;

  const handleCopyLatex = async () => {
    try {
      await navigator.clipboard.writeText(effectiveLatex);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // Fallback cho trình duyệt cũ
      const textarea = document.createElement("textarea");
      textarea.value = effectiveLatex;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand("copy");
      document.body.removeChild(textarea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  const handleDownloadTex = () => {
    const filename = `${title.replace(/[^a-zA-Z0-9_\u00C0-\u024F\u1EA0-\u1EF9]/g, "_")}.tex`;
    const blob = new Blob([effectiveLatex], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const hasExamPaper = contentHtml && contentHtml.includes("exam-paper");

  const handlePrint = () => {
    if (activeTab !== "preview") {
      setActiveTab("preview");
      setTimeout(() => window.print(), 180);
    } else {
      window.print();
    }
  };

  return (
    <div className="modal-overlay active" onClick={onClose}>
      <div 
        className={`modal-container ${hasExamPaper ? "has-exam-paper" : ""}`}
        style={{ maxWidth: "920px", maxHeight: "90vh", display: "flex", flexDirection: "column" }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="modal-header" style={{ alignItems: "center" }}>
          <div>
            <h3 className="modal-title" style={{ fontSize: "1.15rem", fontWeight: 700 }}>
              {title}
            </h3>
            <div style={{ display: "flex", gap: "6px", marginTop: "6px" }}>
              <button 
                className={`filter-btn ${activeTab === "preview" ? "active" : ""}`}
                style={{ padding: "0.25rem 0.75rem", fontSize: "0.8rem", display: "flex", alignItems: "center", gap: "4px" }}
                onClick={() => setActiveTab("preview")}
              >
                <Eye size={14} /> Xem hiển thị (Có hình vẽ & KaTeX)
              </button>
              <button 
                className={`filter-btn ${activeTab === "latex" ? "active" : ""}`}
                style={{ padding: "0.25rem 0.75rem", fontSize: "0.8rem", display: "flex", alignItems: "center", gap: "4px" }}
                onClick={() => setActiveTab("latex")}
              >
                <FileCode size={14} /> Mã nguồn LaTeX (.tex)
              </button>
            </div>
          </div>
          <button className="btn-icon" onClick={onClose} title="Đóng">
            <X size={20} />
          </button>
        </div>

        <div className="modal-body" style={{ flex: 1, overflowY: "auto", padding: "1.25rem" }}>
          {activeTab === "preview" ? (
            <KaTeXRenderer html={contentHtml} />
          ) : (
            <div className="latex-code-viewer">
              <div style={{ 
                display: "flex", 
                justifyContent: "space-between", 
                alignItems: "center", 
                marginBottom: "8px",
                padding: "8px 12px",
                background: "var(--bg-main)",
                borderRadius: "6px",
                fontSize: "0.85rem",
                color: "var(--text-muted)"
              }}>
                <span>📄 Định dạng LaTeX chuẩn (Hỗ trợ TikZ hình học & KaTeX)</span>
                <span style={{ fontWeight: 600 }}>Tương thích: Overleaf, TeXmaker, PDFLaTeX</span>
              </div>
              <pre style={{
                background: "var(--bg-card)",
                color: "var(--text-main)",
                padding: "1rem",
                borderRadius: "8px",
                border: "1px solid var(--border-color)",
                fontFamily: "Consolas, 'Courier New', monospace",
                fontSize: "0.85rem",
                lineHeight: "1.6",
                overflowX: "auto",
                whiteSpace: "pre-wrap",
                wordBreak: "break-word"
              }}>
                {effectiveLatex}
              </pre>
            </div>
          )}
        </div>

        <div className="modal-footer" style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: "8px" }}>
          <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
            <button 
              className="btn-outline" 
              onClick={handleCopyLatex}
              style={{ display: "flex", alignItems: "center", gap: "6px" }}
              title="Sao chép toàn bộ mã LaTeX (.tex) vào bộ nhớ tạm"
            >
              {copied ? <Check size={16} color="var(--success)" /> : <Copy size={16} />}
              {copied ? "Đã sao chép LaTeX!" : "Sao chép LaTeX (.tex)"}
            </button>
            <button 
              className="btn-outline" 
              onClick={handleDownloadTex}
              style={{ display: "flex", alignItems: "center", gap: "6px" }}
              title="Tải tệp mã nguồn .tex để mở trong Overleaf hoặc TeXStudio"
            >
              <Download size={16} /> Tải file .tex
            </button>
            <button 
              className="btn-outline" 
              onClick={handlePrint}
              style={{ display: "flex", alignItems: "center", gap: "6px" }}
              title="Chỉ in hoặc Xuất PDF phần Đề thi chuẩn A4 (ẩn đáp án và giao diện web)"
            >
              <Printer size={16} /> 🖨️ Xuất PDF Đề Thi
            </button>
          </div>
          <button className="btn-primary" onClick={onClose}>
            Đóng
          </button>
        </div>
      </div>
    </div>
  );
}
