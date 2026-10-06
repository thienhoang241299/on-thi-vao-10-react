import React from "react";
import { 
  GraduationCap, 
  BookOpen, 
  FileText, 
  Clock, 
  Sparkles, 
  UploadCloud, 
  Moon, 
  Sun, 
  Settings 
} from "lucide-react";

export default function Header({ 
  currentTab, 
  onSelectTab, 
  theme, 
  onToggleTheme, 
  onOpenSettings 
}) {
  const navTabs = [
    { id: "library", label: "Tài Liệu 6 - 9", icon: BookOpen },
    { id: "exam-repo", label: "Đề Thi Các Tỉnh", icon: FileText },
    { id: "exam-room", label: "Phòng Thi Thử", icon: Clock },
    { id: "ai-generator", label: "AI Sinh Đề", icon: Sparkles },
    { id: "uploads", label: "Tải Lên & Kho Riêng", icon: UploadCloud },
  ];

  return (
    <header className="app-header">
      <div className="header-container">
        <div className="brand" onClick={() => onSelectTab("library")}>
          <div className="brand-icon">
            <GraduationCap size={24} />
          </div>
          <div>
            <span>ÔnThi10</span>
            <span className="brand-badge">React Pro</span>
          </div>
        </div>

        <nav className="main-nav">
          {navTabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = currentTab === tab.id;
            return (
              <button
                key={tab.id}
                className={`nav-item ${isActive ? "active" : ""}`}
                onClick={() => onSelectTab(tab.id)}
              >
                <Icon size={18} />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </nav>

        <div className="header-actions">
          <button 
            className="btn-icon" 
            onClick={onToggleTheme} 
            title="Đổi giao diện Sáng / Tối"
          >
            {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button 
            className="btn-icon" 
            onClick={onOpenSettings} 
            title="Cài đặt API Gemini"
          >
            <Settings size={18} />
          </button>
        </div>
      </div>
    </header>
  );
}
