import React, { useState, useEffect, useRef } from "react";
import { 
  UploadCloud, 
  FileText, 
  CheckCircle, 
  Download, 
  Trash2, 
  Paperclip, 
  FolderOpen 
} from "lucide-react";
import { storage } from "../services/storage";

export default function UploadsView() {
  const [title, setTitle] = useState("");
  const [subject, setSubject] = useState("math");
  const [grade, setGrade] = useState("9");
  const [province, setProvince] = useState("");
  const [notes, setNotes] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  const [uploadsList, setUploadsList] = useState([]);
  const fileInputRef = useRef(null);

  useEffect(() => {
    loadUploads();
  }, []);

  const loadUploads = async () => {
    const list = await storage.getAllUploads();
    setUploadsList(list);
  };

  const handleFileChange = (e) => {
    if (e.target.files.length > 0) {
      const file = e.target.files[0];
      setSelectedFile(file);
      if (!title) {
        setTitle(file.name.replace(/\.[^/.]+$/, ""));
      }
    }
  };

  const readFileAsDataURL = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result);
      reader.onerror = reject;
      reader.readAsDataURL(file);
    });
  };

  const handleSave = async () => {
    if (!title.trim()) {
      alert("Vui lòng nhập tên tài liệu hoặc đề thi!");
      return;
    }

    let fileData = null;
    let fileName = "";
    let fileType = "";

    if (selectedFile) {
      fileName = selectedFile.name;
      fileType = selectedFile.type;
      fileData = await readFileAsDataURL(selectedFile);
    }

    const item = {
      id: "upload-" + Date.now(),
      title: title.trim(),
      subject,
      grade,
      province: province.trim() || "Toàn quốc",
      notes: notes.trim(),
      fileName,
      fileType,
      fileData,
      createdAt: new Date().toISOString()
    };

    await storage.saveUploadItem(item);
    alert("Đã lưu tài liệu vào kho cá nhân (IndexedDB)!");
    setTitle("");
    setProvince("");
    setNotes("");
    setSelectedFile(null);
    if (fileInputRef.current) fileInputRef.current.value = "";
    loadUploads();
  };

  const handleDelete = async (id) => {
    if (window.confirm("Bạn có chắc muốn xóa tài liệu này?")) {
      await storage.deleteUploadItem(id);
      loadUploads();
    }
  };

  return (
    <div className="tab-pane active">
      <div className="section-header" style={{ marginTop: "1rem" }}>
        <div>
          <h2 className="section-title">
            <UploadCloud size={24} color="var(--primary)" /> Tải Lên & Quản Lý Kho Đề Cá Nhân
          </h2>
          <p className="section-subtitle">
            Tải lên các bộ đề PDF, hình ảnh, tài liệu do bạn tìm kiếm để lưu trữ bền vững trong trình duyệt (IndexedDB)
          </p>
        </div>
      </div>

      <div className="ai-form-card" style={{ maxWidth: 850 }}>
        <input 
          type="file" 
          ref={fileInputRef} 
          style={{ display: "none" }}
          accept=".pdf,.doc,.docx,.png,.jpg,.jpeg,.txt"
          onChange={handleFileChange}
        />
        <div className="dropzone" onClick={() => fileInputRef.current?.click()}>
          <div className="dropzone-icon">
            <UploadCloud size={48} color="var(--primary)" />
          </div>
          <h4 style={{ marginBottom: "0.5rem" }}>Kéo thả hoặc bấm để chọn tệp đề thi / tài liệu</h4>
          <p style={{ color: "var(--text-muted)", fontSize: "0.9rem" }}>
            Hỗ trợ định dạng PDF, Hình ảnh (PNG, JPG), Word (DOCX)
          </p>
          {selectedFile && (
            <div style={{ marginTop: "1rem", color: "var(--primary)", fontWeight: 700, display: "flex", alignItems: "center", justifyContent: "center", gap: 6 }}>
              <CheckCircle size={18} /> Đã chọn: {selectedFile.name} ({(selectedFile.size / 1024).toFixed(1)} KB)
            </div>
          )}
        </div>

        <div className="form-group">
          <label className="form-label">Tên tài liệu / Bộ đề *</label>
          <input 
            type="text" 
            className="form-control"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Ví dụ: Đề thi thử vào 10 THPT Chuyên Sư Phạm 2024"
          />
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "1rem" }}>
          <div className="form-group">
            <label className="form-label">Môn học</label>
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
            <label className="form-label">Khối lớp</label>
            <select 
              className="form-control"
              value={grade}
              onChange={(e) => setGrade(e.target.value)}
            >
              <option value="9">Lớp 9</option>
              <option value="8">Lớp 8</option>
              <option value="7">Lớp 7</option>
              <option value="6">Lớp 6</option>
            </select>
          </div>

          <div className="form-group">
            <label className="form-label">Tỉnh / Thành</label>
            <input 
              type="text" 
              className="form-control"
              value={province}
              onChange={(e) => setProvince(e.target.value)}
              placeholder="Ví dụ: Hải Phòng"
            />
          </div>
        </div>

        <div className="form-group">
          <label className="form-label">Ghi chú</label>
          <textarea 
            className="form-control"
            rows={2}
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            placeholder="Ghi chú về nguồn đề, dạng bài đặc biệt..."
          />
        </div>

        <button 
          className="btn-primary" 
          style={{ width: "100%", justifyContent: "center", padding: "0.85rem" }}
          onClick={handleSave}
        >
          Lưu Vào Kho Cá Nhân
        </button>
      </div>

      <div className="section-header">
        <h3 className="section-title">
          <FolderOpen size={20} color="var(--primary)" /> Tài Liệu Đã Lưu Của Bạn
        </h3>
      </div>

      <div className="cards-grid">
        {uploadsList.length === 0 ? (
          <div style={{ gridColumn: "1 / -1", textAlign: "center", padding: "2.5rem", color: "var(--text-muted)", background: "var(--bg-card)", borderRadius: "var(--radius-lg)", border: "1px solid var(--border-color)" }}>
            <div style={{ fontSize: "2.5rem", marginBottom: 8 }}>📂</div>
            <h4>Bạn chưa tải lên tài liệu nào</h4>
            <p>Hãy tải lên tài liệu cá nhân để lưu trữ và mở ôn tập bất cứ lúc nào.</p>
          </div>
        ) : (
          uploadsList.map((item) => (
            <div key={item.id} className="topic-card" style={{ borderTop: "4px solid var(--primary)" }}>
              <div className="card-top">
                <div className="badge-group">
                  <span className={`badge badge-${item.subject}`}>
                    Môn {item.subject === 'math' ? 'Toán' : (item.subject === 'eng' ? 'Anh' : 'Văn')}
                  </span>
                  <span className="badge badge-grade">Lớp {item.grade}</span>
                </div>
                <span style={{ fontSize: "0.8rem", color: "var(--text-muted)" }}>{item.province}</span>
              </div>

              <h3 className="card-title">{item.title}</h3>
              <p className="card-desc">{item.notes || "Không có ghi chú thêm."}</p>

              {item.fileName && (
                <div style={{ background: "var(--bg-main)", padding: "0.6rem", borderRadius: "var(--radius-sm)", fontSize: "0.82rem", marginBottom: "1rem", display: "flex", alignItems: "center", gap: 8 }}>
                  <Paperclip size={14} />
                  <span style={{ overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                    {item.fileName}
                  </span>
                </div>
              )}

              <div className="card-actions">
                {item.fileData && (
                  <a 
                    href={item.fileData} 
                    download={item.fileName || "tai-lieu.pdf"} 
                    className="btn-outline" 
                    style={{ fontSize: "0.85rem", padding: "0.45rem 0.85rem" }}
                  >
                    <Download size={14} /> Tải về
                  </a>
                )}
                <button 
                  className="btn-outline" 
                  style={{ color: "var(--danger)", borderColor: "rgba(239, 68, 68, 0.3)", fontSize: "0.85rem", padding: "0.45rem 0.85rem" }}
                  onClick={() => handleDelete(item.id)}
                >
                  <Trash2 size={14} /> Xóa
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
