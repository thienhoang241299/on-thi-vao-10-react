/**
 * UTILS: XUẤT ĐỀ THI RA FILE WORD (.DOC) VÀ IN / XUẤT PDF CHUẨN A4
 * TỰ ĐỘNG CHUYỂN ĐỔI TẤT CẢ CÔNG THỨC LATEX SANG KATEX / MATHML
 * KHÔNG IN TRANG WEB, CHỈ XUẤT ĐỀ THI CHUẨN ĐẸP 100%
 */

import katex from "katex";

/**
 * Chuyển đổi toàn bộ công thức $...$ và $$...$$ trong chuỗi HTML thành KaTeX / MathML
 */
export function renderMathInHtml(rawHtml = "") {
  if (!rawHtml) return "";
  const tempDiv = document.createElement("div");
  tempDiv.innerHTML = rawHtml;

  const walker = document.createTreeWalker(
    tempDiv,
    NodeFilter.SHOW_TEXT,
    null,
    false
  );

  const textNodes = [];
  let currentNode;
  while ((currentNode = walker.nextNode())) {
    // Giữ nguyên các text node nằm trong thẻ SVG
    if (currentNode.parentElement && currentNode.parentElement.closest("svg")) {
      continue;
    }
    textNodes.push(currentNode);
  }

  textNodes.forEach((node) => {
    const text = node.nodeValue;
    if (!text || (!text.includes("$") && !text.includes("\\("))) return;

    const regex = /(\$\$[\s\S]*?\$\$|\$[^\$]+?\$)/g;
    if (!regex.test(text)) return;
    regex.lastIndex = 0;

    const fragment = document.createDocumentFragment();
    let lastIndex = 0;
    let match;

    while ((match = regex.exec(text)) !== null) {
      const matchStart = match.index;
      const matchEnd = regex.lastIndex;

      if (matchStart > lastIndex) {
        fragment.appendChild(
          document.createTextNode(text.substring(lastIndex, matchStart))
        );
      }

      const rawFormula = match[0];
      const isDisplay = rawFormula.startsWith("$$");
      const formula = isDisplay
        ? rawFormula.slice(2, -2).trim()
        : rawFormula.slice(1, -1).trim();

      const span = document.createElement("span");
      try {
        katex.render(formula, span, {
          displayMode: isDisplay,
          throwOnError: false,
          strict: false,
          output: "htmlAndMathml"
        });
        fragment.appendChild(span);
      } catch {
        fragment.appendChild(document.createTextNode(rawFormula));
      }

      lastIndex = matchEnd;
    }

    if (lastIndex < text.length) {
      fragment.appendChild(
        document.createTextNode(text.substring(lastIndex))
      );
    }

    if (node.parentNode) {
      node.parentNode.replaceChild(fragment, node);
    }
  });

  return tempDiv.innerHTML;
}

/**
 * Xuất tài liệu sang file Microsoft Word (.doc)
 * Tự động chuyển đổi toàn bộ công thức LaTeX thành MathML để Microsoft Word hiển thị công thức chuẩn xác
 */
export function exportToWord(title = "De_Thi_Vao_Lop_10", htmlContent = "") {
  const cleanTitle = title.replace(/<[^>]+>/g, "").trim();
  const filename = `${cleanTitle.replace(/[^a-zA-Z0-9_\u00C0-\u024F\u1EA0-\u1EF9]/g, "_")}.doc`;

  // Chuyển đổi toàn bộ LaTeX $...$ sang HTML + MathML
  const renderedBody = renderMathInHtml(htmlContent);

  const wordDocumentContent = `<!DOCTYPE html>
<html xmlns:o='urn:schemas-microsoft-com:office:office' xmlns:w='urn:schemas-microsoft-com:office:word' xmlns:m='http://schemas.microsoft.com/office/2004/12/omml' xmlns='http://www.w3.org/TR/REC-html40'>
<head>
<meta charset='utf-8'>
<title>${cleanTitle}</title>
<style>
  @page Section1 {
    size: 595.3pt 841.9pt; /* Khổ A4 */
    margin: 54.0pt 54.0pt 54.0pt 54.0pt;
    mso-header-margin: 36.0pt;
    mso-footer-margin: 36.0pt;
    mso-paper-source: 0;
  }
  div.Section1 {
    page: Section1;
  }
  body {
    font-family: 'Times New Roman', serif;
    font-size: 13pt;
    line-height: 1.45;
    color: #000000;
  }
  table {
    width: 100%;
    border-collapse: collapse;
    margin-bottom: 12pt;
  }
  td, th {
    padding: 4pt 6pt;
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
    margin: 6pt 0;
  }
  math {
    font-family: 'Cambria Math', 'Times New Roman', serif;
    font-size: 13pt;
  }
  /* Word đọc MathML rất tốt, ẩn phần HTML KaTeX thừa khi mở trong Word */
  .katex-html {
    display: none;
  }
  .katex-mathml {
    display: inline;
  }
  svg {
    max-width: 100%;
  }
</style>
</head>
<body>
  <div class="Section1">
    ${renderedBody}
  </div>
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
 * Tự động dịch toàn bộ công thức toán LaTeX sang KaTeX trước khi in
 */
export function printCleanDocument(htmlContent = "", title = "Đề thi Tuyển sinh vào Lớp 10") {
  const cleanTitle = title.replace(/<[^>]+>/g, "").trim();

  // Dịch toán LaTeX trước khi nạp vào iframe in
  const renderedBody = renderMathInHtml(htmlContent);

  // Thu thập toàn bộ style và link css hiện có trên trang (bao gồm cả KaTeX fonts)
  const existingStyles = Array.from(
    document.querySelectorAll("style, link[rel='stylesheet']")
  )
    .map((el) => el.outerHTML)
    .join("\n");

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
      ${existingStyles}
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.16.11/dist/katex.min.css">
      <style>
        @page {
          size: A4;
          margin: 15mm 15mm 15mm 15mm;
        }
        body {
          font-family: 'Times New Roman', 'Segoe UI', serif !important;
          font-size: 13pt !important;
          line-height: 1.5 !important;
          color: #000000 !important;
          background: #ffffff !important;
          margin: 0 !important;
          padding: 0 !important;
        }
        .exam-paper {
          width: 100% !important;
          margin: 0 !important;
          padding: 0 !important;
        }
        .exam-problem {
          margin-bottom: 14pt !important;
          page-break-inside: avoid;
        }
        p {
          margin: 4pt 0 !important;
        }
        table {
          width: 100% !important;
          border-collapse: collapse !important;
          margin-bottom: 12px !important;
        }
        td, th {
          padding: 4px 6px !important;
          vertical-align: top !important;
        }
        svg {
          max-width: 100% !important;
          page-break-inside: avoid;
        }
        .katex {
          font-size: 1.05em !important;
          color: #000000 !important;
        }
        .katex-html {
          display: inline-block !important;
        }
        .katex-mathml {
          display: none !important;
        }
      </style>
    </head>
    <body>
      <div class="exam-paper">
        ${renderedBody}
      </div>
    </body>
    </html>
  `);
  doc.close();

  // Chờ KaTeX render và font nạp hoàn tất rồi kích hoạt Print dialog
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
