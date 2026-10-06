/**
 * UTILS: XUẤT ĐỀ THI RA FILE WORD (.DOC) VÀ IN / XUẤT PDF CHUẨN A4
 * KHÔNG IN TRANG WEB, CHỈ IN / XUẤT NỘI DUNG ĐỀ THI SẠCH
 */

/**
 * Xuất tài liệu sang file Microsoft Word (.doc)
 * Tự động tạo cấu trúc Word HTML tương thích Microsoft Word và Google Docs
 */
export function exportToWord(title = "De_Thi_Vao_Lop_10", htmlContent = "") {
  // Tạo file Word dạng HTML chuẩn Office
  const cleanTitle = title.replace(/<[^>]+>/g, "").trim();
  const filename = `${cleanTitle.replace(/[^a-zA-Z0-9_\u00C0-\u024F\u1EA0-\u1EF9]/g, "_")}.doc`;

  const wordDocumentContent = `<!DOCTYPE html>
<html xmlns:o='urn:schemas-microsoft-com:office:office' xmlns:w='urn:schemas-microsoft-com:office:word' xmlns='http://www.w3.org/TR/REC-html40'>
<head>
<meta charset='utf-8'>
<title>${cleanTitle}</title>
<style>
  body {
    font-family: 'Times New Roman', serif;
    font-size: 13pt;
    line-height: 1.45;
    color: #000000;
    margin: 20mm;
  }
  table {
    width: 100%;
    border-collapse: collapse;
    margin-bottom: 12px;
  }
  td, th {
    padding: 4px 8px;
    vertical-align: top;
  }
  .exam-problem {
    margin-bottom: 14pt;
  }
  p {
    margin: 4pt 0;
  }
  h1, h2, h3, h4, h5 {
    color: #000000;
  }
  @page {
    size: A4;
    margin: 20mm 15mm 20mm 15mm;
  }
</style>
</head>
<body>
  ${htmlContent}
</body>
</html>`;

  const blob = new Blob(["\ufeff", wordDocumentContent], {
    type: "application/msword;charset=utf-8"
  });

  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

/**
 * In / Xuất PDF tài liệu sạch (chỉ xuất phần nội dung đề thi, không in trang web)
 * Sử dụng iframe ẩn độc lập để trình duyệt chỉ render phần đề thi khổ A4
 */
export function printCleanDocument(htmlContent = "", title = "Đề thi Tuyển sinh vào Lớp 10") {
  const cleanTitle = title.replace(/<[^>]+>/g, "").trim();

  // Tạo iframe ẩn
  const iframe = document.createElement("iframe");
  iframe.style.position = "fixed";
  iframe.style.right = "0";
  iframe.style.bottom = "0";
  iframe.style.width = "0";
  iframe.style.height = "0";
  iframe.style.border = "0";
  document.body.appendChild(iframe);

  const doc = iframe.contentWindow.document;
  doc.open();
  doc.write(`
    <!DOCTYPE html>
    <html lang="vi">
    <head>
      <meta charset="utf-8">
      <title>${cleanTitle}</title>
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.16.11/dist/katex.min.css">
      <style>
        @page {
          size: A4;
          margin: 15mm 15mm 15mm 15mm;
        }
        body {
          font-family: 'Times New Roman', 'Segoe UI', serif;
          font-size: 13pt;
          line-height: 1.5;
          color: #000000;
          background: #ffffff;
          margin: 0;
          padding: 0;
        }
        .exam-paper {
          width: 100% !important;
          margin: 0 !important;
          padding: 0 !important;
        }
        .exam-problem {
          margin-bottom: 14pt;
          page-break-inside: avoid;
        }
        p {
          margin: 4pt 0;
        }
        table {
          width: 100%;
          border-collapse: collapse;
          margin-bottom: 12px;
        }
        td, th {
          padding: 4px 6px;
          vertical-align: top;
        }
        svg {
          max-width: 100%;
          page-break-inside: avoid;
        }
        .katex {
          font-size: 1.05em;
          color: #000000;
        }
      </style>
    </head>
    <body>
      ${htmlContent}
    </body>
    </html>
  `);
  doc.close();

  // Chờ font và KaTeX css nạp xong rồi kích hoạt in
  setTimeout(() => {
    try {
      iframe.contentWindow.focus();
      iframe.contentWindow.print();
    } catch (e) {
      console.warn("Print via iframe failed, fallback to window.print", e);
      window.print();
    } finally {
      setTimeout(() => {
        if (document.body.contains(iframe)) {
          document.body.removeChild(iframe);
        }
      }, 1500);
    }
  }, 450);
}
