import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import LibraryView from "./views/LibraryView";
import ExamRepoView from "./views/ExamRepoView";
import ExamRoomView from "./views/ExamRoomView";
import AiGeneratorView from "./views/AiGeneratorView";
import UploadsView from "./views/UploadsView";
import DetailModal from "./components/DetailModal";
import SettingsModal from "./components/SettingsModal";
import { storage } from "./services/storage";

export default function App() {
  const [currentTab, setCurrentTab] = useState("library");
  const [activeExam, setActiveExam] = useState(null);
  const [theme, setTheme] = useState(() => storage.getTheme());
  const [detailModal, setDetailModal] = useState({ isOpen: false, title: "", html: "", latexSource: "" });
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    storage.setTheme(theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  const handleStartExam = (exam) => {
    setActiveExam(exam);
    setCurrentTab("exam-room");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleOpenDetail = ({ title, html, latexSource = "" }) => {
    setDetailModal({ isOpen: true, title, html, latexSource });
  };

  const handleCloseDetail = () => {
    setDetailModal({ isOpen: false, title: "", html: "", latexSource: "" });
  };

  return (
    <>
      <Header
        currentTab={currentTab}
        onSelectTab={(tab) => {
          setCurrentTab(tab);
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
        theme={theme}
        onToggleTheme={toggleTheme}
        onOpenSettings={() => setIsSettingsOpen(true)}
      />

      <main className="main-content">
        {currentTab === "library" && (
          <LibraryView
            onOpenDetail={handleOpenDetail}
            onGoToExamRepo={() => setCurrentTab("exam-repo")}
          />
        )}

        {currentTab === "exam-repo" && (
          <ExamRepoView
            onOpenDetail={handleOpenDetail}
            onStartExam={handleStartExam}
          />
        )}

        {currentTab === "exam-room" && (
          <ExamRoomView
            exam={activeExam}
            onGoToRepo={() => setCurrentTab("exam-repo")}
          />
        )}

        {currentTab === "ai-generator" && (
          <AiGeneratorView 
            onStartExam={handleStartExam} 
            onOpenDetail={handleOpenDetail}
          />
        )}

        {currentTab === "uploads" && <UploadsView />}
      </main>

      {/* Modals */}
      <DetailModal
        isOpen={detailModal.isOpen}
        onClose={handleCloseDetail}
        title={detailModal.title}
        contentHtml={detailModal.html}
      />

      <SettingsModal
        isOpen={isSettingsOpen}
        onClose={() => setIsSettingsOpen(false)}
      />
    </>
  );
}
