import React, { useState, useEffect } from "react";
import { X, Check, Sliders } from "lucide-react";
import { storage } from "../services/storage";

export default function SettingsModal({ isOpen, onClose }) {
  const [apiKey, setApiKey] = useState("");

  useEffect(() => {
    if (isOpen) {
      setApiKey(storage.getApiKey());
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleSave = () => {
    storage.setApiKey(apiKey);
    alert("Đã lưu cài đặt API Key Gemini thành công!");
    onClose();
  };

  return (
    <div className="modal-overlay active" onClick={onClose}>
      <div className="modal-container" style={{ maxWidth: 520 }} onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h3 className="modal-title" style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <Sliders size={20} color="var(--primary)" /> Cài Đặt AI & Hệ Thống
          </h3>
          <button className="btn-icon" onClick={onClose}>
            <X size={20} />
          </button>
        </div>
        <div className="modal-body">
          <p style={{ fontSize: "0.92rem", color: "var(--text-muted)", marginBottom: 16 }}>
            Ứng dụng đã tích hợp sẵn <strong>Bộ Smart Generator Offline</strong> để tự tạo đề bất cứ lúc nào không cần mạng. Nếu bạn muốn AI tạo đề độc nhất theo thời gian thực từ Google Gemini, hãy dán API Key:
          </p>
          <div className="form-group">
            <label className="form-label">Gemini API Key (Tùy chọn):</label>
            <input
              type="password"
              className="form-control"
              value={apiKey}
              onChange={(e) => setApiKey(e.target.value)}
              placeholder="AIzaSy..."
            />
            <small style={{ color: "var(--text-muted)", display: "block", marginTop: 6 }}>
              Khóa API được lưu an toàn trong trình duyệt (LocalStorage) và chỉ dùng gọi trực tiếp tới Google.
            </small>
          </div>
        </div>
        <div className="modal-footer">
          <button className="btn-primary" onClick={handleSave}>
            <Check size={18} /> Lưu Cài Đặt
          </button>
        </div>
      </div>
    </div>
  );
}
