import React, { useState, useEffect } from "react";
import { X, Check, Sliders, KeyRound, Cloud, Sparkles } from "lucide-react";
import { storage } from "../services/storage";
import { firebaseService } from "../services/firebaseService";

export default function SettingsModal({ isOpen, onClose }) {
  const [apiKey, setApiKey] = useState("");
  const [teacherPin, setTeacherPin] = useState("gv2026");
  const [firebaseUrl, setFirebaseUrl] = useState("");

  useEffect(() => {
    if (isOpen) {
      setApiKey(storage.getApiKey());
      setTeacherPin(storage.getTeacherPin());
      setFirebaseUrl(firebaseService.getFirebaseUrl());
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleSave = () => {
    storage.setApiKey(apiKey);
    storage.setTeacherPin(teacherPin);
    firebaseService.setFirebaseUrl(firebaseUrl);
    alert("Đã lưu các cài đặt hệ thống thành công!");
    onClose();
  };

  return (
    <div className="modal-overlay active" onClick={onClose}>
      <div className="modal-container" style={{ maxWidth: 540 }} onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h3 className="modal-title" style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <Sliders size={20} color="var(--primary)" /> Cài Đặt Hệ Thống & Giáo Viên
          </h3>
          <button className="btn-icon" onClick={onClose}>
            <X size={20} />
          </button>
        </div>

        <div className="modal-body" style={{ maxHeight: "75vh", overflowY: "auto" }}>
          {/* Mật khẩu Giáo Viên */}
          <div className="form-group" style={{ marginBottom: "1.25rem", borderBottom: "1px solid var(--border-color)", paddingBottom: "1rem" }}>
            <label className="form-label" style={{ fontWeight: 600, display: "flex", alignItems: "center", gap: 6 }}>
              <KeyRound size={16} color="var(--primary)" /> Mật khẩu Giáo Viên (Mã PIN):
            </label>
            <input
              type="text"
              className="form-control"
              value={teacherPin}
              onChange={(e) => setTeacherPin(e.target.value)}
              placeholder="gv2026"
            />
            <small style={{ color: "var(--text-muted)", display: "block", marginTop: 4 }}>
              Dùng để khóa và mở chức năng "Biên Soạn Đề (GV)" tránh học sinh bấm tạo đề hao tốn tài nguyên. (Mặc định: <strong>gv2026</strong>)
            </small>
          </div>

          {/* Firebase Database URL */}
          <div className="form-group" style={{ marginBottom: "1.25rem", borderBottom: "1px solid var(--border-color)", paddingBottom: "1rem" }}>
            <label className="form-label" style={{ fontWeight: 600, display: "flex", alignItems: "center", gap: 6 }}>
              <Cloud size={16} color="#10b981" /> Firebase Realtime Database URL:
            </label>
            <input
              type="text"
              className="form-control"
              value={firebaseUrl}
              onChange={(e) => setFirebaseUrl(e.target.value)}
              placeholder="https://your-project-default-rtdb.firebaseio.com"
            />
            <small style={{ color: "var(--text-muted)", display: "block", marginTop: 4 }}>
              Địa chỉ cơ sở dữ liệu Firebase Realtime Database để đồng bộ đề thi cho toàn bộ học sinh trên mọi thiết bị. Hệ thống đã có sẵn địa chỉ mặc định kết nối tức thì.
            </small>
          </div>

          {/* Google Gemini API Key */}
          <div className="form-group">
            <label className="form-label" style={{ fontWeight: 600, display: "flex", alignItems: "center", gap: 6 }}>
              <Sparkles size={16} color="var(--primary)" /> Gemini API Key (Tùy chọn nâng cao):
            </label>
            <input
              type="password"
              className="form-control"
              value={apiKey}
              onChange={(e) => setApiKey(e.target.value)}
              placeholder="AIzaSy..."
            />
            <small style={{ color: "var(--text-muted)", display: "block", marginTop: 4 }}>
              Hệ thống đã có sẵn <strong>Bộ Smart Generator Offline</strong> tạo đề có sẵn hình vẽ vector SVG cực đẹp không tốn mạng. Nếu muốn AI Gemini sinh đề trực tuyến độc nhất, hãy dán API Key tại đây.
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
