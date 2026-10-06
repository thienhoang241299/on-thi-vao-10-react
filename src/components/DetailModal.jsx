import React from "react";
import { X, Printer, FileText } from "lucide-react";
import KaTeXRenderer from "./KaTeXRenderer";
import { exportToWord, printCleanDocument } from "../utils/exportUtils";

export default function DetailModal({ isOpen, onClose, title, contentHtml }) {
  if (!isOpen) return null;

  const handlePrintPdf = () => {
    printCleanDocument(contentHtml, title);
  };

  const handleExportWord = () => {
    exportToWord(title, contentHtml);
  };

  return (
    <div className="modal-overlay active" onClick={onClose}>
      <div 
        className="modal-container" 
        style={{ maxWidth: "920px", maxHeight: "90vh", display: "flex", flexDirection: "column" }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="modal-header" style={{ alignItems: "center" }}>
          <div>
            <h3 className="modal-title" style={{ fontSize: "1.15rem", fontWeight: 700 }}>
              {title}
            </h3>
          </div>
          <button className="btn-icon" onClick={onClose} title="Đóng">
            <X size={20} />
          </button>
        </div>

        <div className="modal-body" style={{ flex: 1, overflowY: "auto", padding: "1.25rem" }}>
          <KaTeXRenderer html={contentHtml} />
        </div>

        <div className="modal-footer" style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: "8px" }}>
          <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
            <button 
              className="btn-outline" 
              onClick={handlePrintPdf}
              style={{ display: "flex", alignItems: "center", gap: "6px" }}
              title="Xuất riêng phần nội dung đề thi ra file PDF chuẩn A4 (không in trang web)"
            >
              <Printer size={16} /> 🖨️ Xuất PDF
            </button>
            <button 
              className="btn-outline" 
              onClick={handleExportWord}
              style={{ display: "flex", alignItems: "center", gap: "6px" }}
              title="Tải đề thi về dưới dạng file Microsoft Word (.doc) để chỉnh sửa và in ấn"
            >
              <FileText size={16} color="var(--primary)" /> 📄 Tải file Word (.doc)
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
