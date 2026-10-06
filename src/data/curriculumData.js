/**
 * DATA REPOSITORY: TÀI LIỆU ÔN TẬP TOÁN - VĂN - ANH (LỚP 6 ĐẾN LỚP 9)
 * ĐẶC BIỆT CHUYÊN SÂU TOÁN HỌC THI VÀO LỚP 10
 * CẤU TRÚC CHUẨN 4 PHẦN:
 * 1. I. LÝ THUYẾT & CÔNG THỨC TRỌNG TÂM
 * 2. II. PHƯƠNG PHÁP & CÁCH LÀM TỪNG DẠNG BÀI
 * 3. III. VÍ DỤ MẪU KÈM LỜI GIẢI CHI TIẾT
 * 4. IV. HÌNH VẼ MINH HỌA / ĐỒ THỊ TRỰC QUAN (SVG VECTOR LATEX/TIKZ)
 * KÈM THEO MÃ NGUỒN LATEX (.TEX) XUẤT PDF CHUẨN
 */

export const curriculumData = [
  // ==========================================================================
  // 📐 CHUYÊN ĐỀ 1: CĂN THỨC BẬC HAI & 7 DẠNG TOÁN PHỤ (LỚP 9)
  // ==========================================================================
  {
    id: "math-g9-can-thuc",
    grade: 9,
    subject: "math",
    subjectName: "Toán học",
    title: "Căn bậc hai, Căn thức & 7 Dạng bài toán phụ sau rút gọn",
    category: "Đại số 9 (Chắc chắn thi - Câu 1)",
    summary: "Nắm trọn 2,0 điểm đầu tiên trong đề thi: Điều kiện xác định, quy đồng rút gọn và 7 dạng câu hỏi phụ (tính giá trị, tìm x để P = k, tìm x nguyên, so sánh P với số, tìm Min/Max).",
    keypoints: [
      "Điều kiện: $\\sqrt{A}$ có nghĩa $\\Leftrightarrow A \\ge 0$; Mẫu thức $\\ne 0$",
      "Hằng đẳng thức căn: $\\sqrt{A^2} = |A|$; Trục căn thức nhân lượng liên hợp",
      "Dạng 1 (Tìm $x$ nguyên để $P \\in \\mathbb{Z}$): Tách $P = \\text{phần nguyên} + \\frac{\\text{hằng số}}{\\text{mẫu}}$",
      "Dạng 2 (Tìm $x$ bất kỳ để $P \\in \\mathbb{Z}$): Chặn miền giá trị $a < P < b$",
      "Dạng 3 (So sánh $P$ với số $m$ hoặc $\\sqrt{P}$): Xét dấu của hiệu $P - m$"
    ],
    contentHtml: `
      <div class="topic-detail">
        <h3 style="color: var(--primary); border-bottom: 2px solid var(--border-color); padding-bottom: 8px;">
          I. LÝ THUYẾT & CÔNG THỨC TRỌNG TÂM
        </h3>
        <p><strong>1. Điều kiện xác định (ĐKXĐ):</strong></p>
        <ul>
          <li>Biểu thức $\\sqrt{A}$ xác định $\\Leftrightarrow A \\ge 0$.</li>
          <li>Biểu thức $\\frac{1}{\\sqrt{A}}$ xác định $\\Leftrightarrow A > 0$.</li>
          <li>Biểu thức $\\frac{A}{B}$ xác định $\\Leftrightarrow B \\ne 0$.</li>
        </ul>
        <p><strong>2. Các công thức biến đổi căn thức cơ bản:</strong></p>
        <ul>
          <li>$\\sqrt{A^2} = |A| = \\begin{cases} A & \\text{khi } A \\ge 0 \\\\ -A & \\text{khi } A < 0 \\end{cases}$</li>
          <li>$\\sqrt{A \\cdot B} = \\sqrt{A} \\cdot \\sqrt{B}$ ($A \\ge 0, B \\ge 0$); $\\sqrt{\\frac{A}{B}} = \\frac{\\sqrt{A}}{\\sqrt{B}}$ ($A \\ge 0, B > 0$)</li>
          <li>Khử mẫu: $\\sqrt{\\frac{A}{B}} = \\frac{\\sqrt{AB}}{|B|}$ ($AB \\ge 0, B \\ne 0$)</li>
          <li>Trục căn thức ở mẫu: $\\frac{C}{\\sqrt{A} \\pm \\sqrt{B}} = \\frac{C(\\sqrt{A} \\mp \\sqrt{B})}{A - B}$ ($A \\ne B, A \\ge 0, B \\ge 0$)</li>
        </ul>

        <h3 style="color: var(--primary); border-bottom: 2px solid var(--border-color); padding-bottom: 8px; margin-top: 24px;">
          II. PHƯƠNG PHÁP & CÁCH LÀM TỪNG DẠNG BÀI
        </h3>
        <div style="background: var(--bg-card); border: 1px solid var(--border-color); border-radius: 8px; padding: 14px; margin-bottom: 12px;">
          <h4 style="color: #2563eb; margin: 0 0 6px 0;">🎯 Dạng 1: Rút gọn biểu thức chứa căn thức</h4>
          <p><strong>Bước 1:</strong> Tìm ĐKXĐ nếu đề bài chưa cho.</p>
          <p><strong>Bước 2:</strong> Phân tích các mẫu thức thành nhân tử để xác định Mẫu thức chung (MTC).</p>
          <p><strong>Bước 3:</strong> Quy đồng mẫu, thực hiện các phép cộng, trừ, nhân, chia, rút gọn các nhân tử chung ở cả tử và mẫu.</p>
          <p><em>Bẫy cần tránh:</em> Quên đổi dấu khi trước phân thức có dấu trừ $(-)$.</p>
        </div>

        <div style="background: var(--bg-card); border: 1px solid var(--border-color); border-radius: 8px; padding: 14px; margin-bottom: 12px;">
          <h4 style="color: #2563eb; margin: 0 0 6px 0;">🎯 Dạng 2: Tìm $x$ nguyên để biểu thức $P$ nhận giá trị nguyên ($x \\in \\mathbb{Z} \\Rightarrow P \\in \\mathbb{Z}$)</h4>
          <p><strong>Phương pháp:</strong> Chia tử cho mẫu để tách $P$ về dạng: $P = c + \\frac{k}{Q(\\sqrt{x})}$ (với $c, k \\in \\mathbb{Z}$).</p>
          <p>Để $P \\in \\mathbb{Z}$ thì $\\frac{k}{Q(\\sqrt{x})} \\in \\mathbb{Z} \\Leftrightarrow Q(\\sqrt{x}) \\in \\text{Ư}(k)$. Lập bảng xét các ước của $k$, tìm $x$ và đối chiếu với ĐKXĐ và điều kiện $x \\in \\mathbb{Z}$.</p>
        </div>

        <div style="background: var(--bg-card); border: 1px solid var(--border-color); border-radius: 8px; padding: 14px; margin-bottom: 12px;">
          <h4 style="color: #2563eb; margin: 0 0 6px 0;">🎯 Dạng 3: So sánh biểu thức $P$ với hằng số $m$ hoặc so sánh $P$ với $\\sqrt{P}$</h4>
          <p><strong>Phương pháp:</strong></p>
          <ul>
            <li>So sánh $P$ với số $m$: Xét dấu của hiệu $P - m$. Nếu $P - m > 0 \\Rightarrow P > m$; nếu $P - m < 0 \\Rightarrow P < m$.</li>
            <li>So sánh $P$ với $\\sqrt{P}$ (với điều kiện $P > 0$): Xét hiệu $P - \\sqrt{P} = \\sqrt{P}(\\sqrt{P} - 1)$. Dấu của hiệu phụ thuộc vào $\\sqrt{P} - 1$.</li>
          </ul>
        </div>

        <h3 style="color: var(--primary); border-bottom: 2px solid var(--border-color); padding-bottom: 8px; margin-top: 24px;">
          III. VÍ DỤ MẪU KÈM LỜI GIẢI CHI TIẾT
        </h3>
        <div style="background: rgba(37, 99, 235, 0.05); border-left: 4px solid var(--primary); padding: 14px; border-radius: 0 8px 8px 0; margin-bottom: 16px;">
          <p><strong>Ví dụ 1 (Đề thi tuyển sinh vào 10):</strong> Cho hai biểu thức $A = \\frac{\\sqrt{x}}{\\sqrt{x}+3}$ và $B = \\frac{\\sqrt{x}+1}{\\sqrt{x}-3} - \\frac{11\\sqrt{x}-3}{x-9}$ với $x \\ge 0, x \\ne 9$.</p>
          <p>a) Tính giá trị của $A$ khi $x = 16$.<br>
          b) Rút gọn biểu thức $B$.<br>
          c) Tìm các giá trị nguyên của $x$ để biểu thức $P = A \\cdot B$ nhận giá trị nguyên.</p>
          
          <p style="font-weight: 700; color: var(--success); margin-top: 10px;">LỜI GIẢI CHI TIẾT:</p>
          <p><strong>a)</strong> Thay $x = 16$ (thỏa mãn ĐKXĐ) vào $A$:<br>
          $A = \\frac{\\sqrt{16}}{\\sqrt{16}+3} = \\frac{4}{4+3} = \\frac{4}{7}$. Vậy khi $x = 16$ thì $A = \\frac{4}{7}$.</p>

          <p><strong>b)</strong> Rút gọn $B$: Với $x \\ge 0, x \\ne 9$, ta có $x - 9 = (\\sqrt{x}-3)(\\sqrt{x}+3)$.<br>
          $B = \\frac{(\\sqrt{x}+1)(\\sqrt{x}+3) - (11\\sqrt{x}-3)}{(\\sqrt{x}-3)(\\sqrt{x}+3)} = \\frac{x + 4\\sqrt{x} + 3 - 11\\sqrt{x} + 3}{(\\sqrt{x}-3)(\\sqrt{x}+3)}$<br>
          $B = \\frac{x - 7\\sqrt{x} + 6}{(\\sqrt{x}-3)(\\sqrt{x}+3)} = \\frac{(\\sqrt{x}-1)(\\sqrt{x}-6)}{(\\sqrt{x}-3)(\\sqrt{x}+3)}$.</p>

          <p><strong>c)</strong> Tìm $x$ nguyên để $P$ nguyên:<br>
          $P = A + B$ hoặc xét biểu thức $P = \\frac{\\sqrt{x}-1}{\\sqrt{x}+3} = 1 - \\frac{4}{\\sqrt{x}+3}$.<br>
          Để $P \\in \\mathbb{Z}$ thì $\\frac{4}{\\sqrt{x}+3} \\in \\mathbb{Z} \\Rightarrow (\\sqrt{x}+3) \\in \\text{Ư}(4) = \\{\\pm 1, \\pm 2, \\pm 4\\}$.<br>
          Vì $x \\ge 0 \\Rightarrow \\sqrt{x} + 3 \\ge 3$, do đó chỉ có trường hợp $\\sqrt{x} + 3 = 4 \\Leftrightarrow \\sqrt{x} = 1 \\Leftrightarrow x = 1$ (thỏa mãn ĐKXĐ).<br>
          Vậy $x = 1$ là giá trị duy nhất cần tìm.</p>
        </div>

        <h3 style="color: var(--primary); border-bottom: 2px solid var(--border-color); padding-bottom: 8px; margin-top: 24px;">
          IV. HÌNH VẼ MINH HỌA & SƠ ĐỒ TƯ DUY
        </h3>
        <div style="text-align: center; margin: 16px 0; background: #ffffff; border: 1px solid #e2e8f0; border-radius: 10px; padding: 14px;">
          <svg viewBox="0 0 540 180" width="100%" style="max-height: 170px; display: block; margin: 0 auto;" xmlns="http://www.w3.org/2000/svg">
            <rect x="10" y="20" width="150" height="60" rx="8" fill="#dbeafe" stroke="#2563eb" stroke-width="2" />
            <text x="85" y="48" font-family="sans-serif" font-size="13" font-weight="bold" fill="#1e40af" text-anchor="middle">Bước 1: Tìm ĐKXĐ</text>
            <text x="85" y="66" font-family="sans-serif" font-size="11" fill="#475569" text-anchor="middle">Căn $\ge 0$, mẫu $\ne 0$</text>

            <line x1="160" y1="50" x2="195" y2="50" stroke="#2563eb" stroke-width="2" marker-end="url(#arrow)" />

            <rect x="195" y="20" width="150" height="60" rx="8" fill="#dcfce7" stroke="#16a34a" stroke-width="2" />
            <text x="270" y="48" font-family="sans-serif" font-size="13" font-weight="bold" fill="#166534" text-anchor="middle">Bước 2: Phân tích & MTC</text>
            <text x="270" y="66" font-family="sans-serif" font-size="11" fill="#475569" text-anchor="middle">Đưa về hằng đẳng thức</text>

            <line x1="345" y1="50" x2="380" y2="50" stroke="#16a34a" stroke-width="2" marker-end="url(#arrow)" />

            <rect x="380" y="20" width="150" height="60" rx="8" fill="#fef3c7" stroke="#d97706" stroke-width="2" />
            <text x="455" y="48" font-family="sans-serif" font-size="13" font-weight="bold" fill="#92400e" text-anchor="middle">Bước 3: Rút gọn tối giản</text>
            <text x="455" y="66" font-family="sans-serif" font-size="11" fill="#475569" text-anchor="middle">Triệt tiêu nhân tử chung</text>

            <rect x="120" y="110" width="300" height="50" rx="8" fill="#f1f5f9" stroke="#64748b" stroke-width="1.5" stroke-dasharray="4,3" />
            <text x="270" y="132" font-family="sans-serif" font-size="12" font-weight="bold" fill="#334155" text-anchor="middle">Bước 4: Giải 7 dạng toán phụ sau rút gọn</text>
            <text x="270" y="148" font-family="sans-serif" font-size="11" fill="#64748b" text-anchor="middle">Luôn đối chiếu nghiệm với ĐKXĐ ban đầu!</text>
          </svg>
        </div>
      </div>
    `,
    latexSource: `\\documentclass[12pt,a4paper]{article}
\\usepackage[utf8]{inputenc}
\\usepackage[vietnamese]{babel}
\\usepackage{amsmath,amssymb}
\\usepackage{tikz}
\\usepackage{geometry}
\\geometry{a4paper, margin=2cm}

\\title{CHUYÊN ĐỀ: CĂN THỨC BẬC HAI \\& 7 DẠNG TOÁN PHỤ THI VÀO 10}
\\author{Tủ sách Ôn thi Tuyển sinh vào Lớp 10}
\\date{}

\\begin{document}
\\maketitle

\\section{LÝ THUYẾT \\& CÔNG THỨC TRỌNG TÂM}
\\begin{itemize}
    \\item $\\sqrt{A}$ xác định $\\Leftrightarrow A \\ge 0$.
    \\item $\\sqrt{A^2} = |A| = A$ khi $A \\ge 0$ và $-A$ khi $A < 0$.
    \\item Trục căn thức: $\\frac{C}{\\sqrt{A} \\pm \\sqrt{B}} = \\frac{C(\\sqrt{A} \\mp \\sqrt{B})}{A - B}$.
\\end{itemize}

\\section{PHƯƠNG PHÁP GIẢI TỪNG DẠNG BÀI}
\\subsection{Dạng 1: Rút gọn biểu thức}
Quy đồng mẫu thức chung, cẩn thận dấu trừ trước phân thức.
\\subsection{Dạng 2: Tìm $x$ nguyên để $P$ nguyên}
Tách $P = c + \\frac{k}{Q(\\sqrt{x})}$, ép $Q(\\sqrt{x}) \\in \\text{Ư}(k)$.
\\subsection{Dạng 3: So sánh $P$ với số $m$}
Xét dấu của hiệu $P - m$.

\\section{VÍ DỤ MẪU}
Cho $P = \\frac{\\sqrt{x}-1}{\\sqrt{x}+3} = 1 - \\frac{4}{\\sqrt{x}+3}$. Tìm $x$ nguyên để $P$ nguyên.
\\end{document}`
  },

  // ==========================================================================
  // 📐 CHUYÊN ĐỀ 2: PHƯƠNG TRÌNH BẬC HAI & HỆ THỨC VI-ÉT (LỚP 9)
  // ==========================================================================
  {
    id: "math-g9-pt-bac-hai-viet",
    grade: 9,
    subject: "math",
    subjectName: "Toán học",
    title: "Phương trình bậc hai, Định lý Vi-ét & Biện luận tham số m",
    category: "Đại số 9 (Trọng tâm phân loại)",
    summary: "Công thức nghiệm thu gọn, định lý Vi-ét thuận - đảo, hệ thức đối xứng và bất đối xứng, tìm m để 2 nghiệm cùng dấu, trái dấu, hai nghiệm nguyên hoặc thỏa mãn đẳng thức.",
    keypoints: [
      "Công thức: $\\Delta = b^2 - 4ac$; $\\Delta' = b'^2 - ac$ (với $b = 2b'$)",
      "Hệ thức Vi-ét: $S = x_1 + x_2 = -\\frac{b}{a}$, $P = x_1 x_2 = \\frac{c}{a}$",
      "Hệ thức đối xứng: $x_1^2 + x_2^2 = S^2 - 2P$; $x_1^3 + x_2^3 = S(S^2 - 3P)$; $|x_1 - x_2| = \\sqrt{S^2 - 4P}$",
      "Điều kiện 2 nghiệm: Trái dấu ($ac < 0$); Cùng dấu dương ($\\Delta \\ge 0, S > 0, P > 0$); Cùng dấu âm ($\\Delta \\ge 0, S < 0, P > 0$)",
      "Hệ thức không đối xứng: Kết hợp $x_1 + x_2 = S$ với hệ thức đề bài để giải hệ tìm $x_1, x_2$ theo $m$, rồi thế vào $x_1 x_2 = P$"
    ],
    contentHtml: `
      <div class="topic-detail">
        <h3 style="color: var(--primary); border-bottom: 2px solid var(--border-color); padding-bottom: 8px;">
          I. LÝ THUYẾT & CÔNG THỨC TRỌNG TÂM
        </h3>
        <p>Cho phương trình bậc hai: $ax^2 + bx + c = 0$ ($a \\ne 0$).</p>
        <p><strong>1. Biệt thức Delta:</strong></p>
        <ul>
          <li>$\\Delta = b^2 - 4ac$. Nếu $\\Delta > 0$, phương trình có 2 nghiệm phân biệt: $x_{1,2} = \\frac{-b \\pm \\sqrt{\\Delta}}{2a}$.</li>
          <li>Nếu $\\Delta = 0$, phương trình có nghiệm kép: $x_1 = x_2 = -\\frac{b}{2a}$.</li>
          <li>Nếu $\\Delta < 0$, phương trình vô nghiệm.</li>
          <li>Khi $b = 2b'$: $\\Delta' = b'^2 - ac$. Nghiệm: $x_{1,2} = \\frac{-b' \\pm \\sqrt{\\Delta'}}{a}$.</li>
        </ul>
        <p><strong>2. Định lý Vi-ét:</strong></p>
        <p>Nếu phương trình có hai nghiệm $x_1, x_2$ (khi $\\Delta \\ge 0$), ta có:</p>
        <p style="text-align: center; font-weight: bold; font-size: 1.1rem; color: var(--primary);">$$S = x_1 + x_2 = -\\frac{b}{a}, \\quad P = x_1 x_2 = \\frac{c}{a}$$</p>

        <h3 style="color: var(--primary); border-bottom: 2px solid var(--border-color); padding-bottom: 8px; margin-top: 24px;">
          II. PHƯƠNG PHÁP & CÁCH LÀM TỪNG DẠNG BÀI
        </h3>
        <div style="background: var(--bg-card); border: 1px solid var(--border-color); border-radius: 8px; padding: 14px; margin-bottom: 12px;">
          <h4 style="color: #2563eb; margin: 0 0 6px 0;">🎯 Dạng 1: Hệ thức đối xứng giữa hai nghiệm</h4>
          <p>Biến đổi đưa về tổng $S = x_1 + x_2$ và tích $P = x_1 x_2$:</p>
          <ul>
            <li>$x_1^2 + x_2^2 = (x_1+x_2)^2 - 2x_1x_2 = S^2 - 2P$</li>
            <li>$\\frac{1}{x_1} + \\frac{1}{x_2} = \\frac{x_1 + x_2}{x_1 x_2} = \\frac{S}{P}$</li>
            <li>$x_1^3 + x_2^3 = (x_1+x_2)(x_1^2 - x_1x_2 + x_2^2) = S(S^2 - 3P)$</li>
            <li>$|x_1 - x_2| = \\sqrt{(x_1-x_2)^2} = \\sqrt{S^2 - 4P}$</li>
          </ul>
        </div>

        <div style="background: var(--bg-card); border: 1px solid var(--border-color); border-radius: 8px; padding: 14px; margin-bottom: 12px;">
          <h4 style="color: #2563eb; margin: 0 0 6px 0;">🎯 Dạng 2: Hệ thức không đối xứng (Ví dụ: $2x_1 + 3x_2 = 5$)</h4>
          <p><strong>Bước 1:</strong> Tìm điều kiện để phương trình có 2 nghiệm: $\\Delta \\ge 0$ (hoặc $\\Delta > 0$).</p>
          <p><strong>Bước 2:</strong> Kết hợp hệ thức đề bài $2x_1 + 3x_2 = 5$ với phương trình tổng Vi-ét $x_1 + x_2 = S(m)$ thành một hệ phương trình bậc nhất 2 ẩn.</p>
          <p><strong>Bước 3:</strong> Giải hệ tìm $x_1, x_2$ theo tham số $m$.</p>
          <p><strong>Bước 4:</strong> Thay $x_1, x_2$ vào phương trình tích Vi-ét $x_1 x_2 = P(m)$ để giải tìm $m$.</p>
          <p><strong>Bước 5:</strong> Đối chiếu với điều kiện $\\Delta$ ở Bước 1.</p>
        </div>

        <h3 style="color: var(--primary); border-bottom: 2px solid var(--border-color); padding-bottom: 8px; margin-top: 24px;">
          III. VÍ DỤ MẪU KÈM LỜI GIẢI CHI TIẾT
        </h3>
        <div style="background: rgba(37, 99, 235, 0.05); border-left: 4px solid var(--primary); padding: 14px; border-radius: 0 8px 8px 0;">
          <p><strong>Ví dụ 2:</strong> Cho phương trình $x^2 - 2(m-1)x + m^2 - 2m = 0$. Tìm $m$ để phương trình có hai nghiệm phân biệt $x_1, x_2$ thỏa mãn: $(x_1 - 1)^2 + (x_2 - 1)^2 = 10$.</p>
          <p style="font-weight: 700; color: var(--success); margin-top: 8px;">LỜI GIẢI CHI TIẾT:</p>
          <p>1. Điều kiện 2 nghiệm phân biệt: $\\Delta' = (m-1)^2 - (m^2 - 2m) = m^2 - 2m + 1 - m^2 + 2m = 1 > 0$ (luôn đúng với mọi $m$).</p>
          <p>2. Theo Vi-ét: $x_1 + x_2 = 2(m-1)$ và $x_1 x_2 = m^2 - 2m$.</p>
          <p>3. Khai triển hệ thức: $(x_1 - 1)^2 + (x_2 - 1)^2 = 10 \\Leftrightarrow x_1^2 + x_2^2 - 2(x_1+x_2) + 2 = 10$<br>
          $\\Leftrightarrow (x_1+x_2)^2 - 2x_1x_2 - 2(x_1+x_2) - 8 = 0$.</p>
          <p>Thay $S, P$ vào: $4(m-1)^2 - 2(m^2-2m) - 4(m-1) - 8 = 0 \\Leftrightarrow 2m^2 - 8m = 0 \\Leftrightarrow 2m(m-4) = 0$.<br>
          Suy ra $m = 0$ hoặc $m = 4$. Cả hai giá trị đều thỏa mãn.</p>
        </div>
      </div>
    `,
    latexSource: `\\documentclass[12pt,a4paper]{article}
\\usepackage[utf8]{inputenc}
\\usepackage[vietnamese]{babel}
\\usepackage{amsmath,amssymb}
\\title{CHUYÊN ĐỀ: PHƯƠNG TRÌNH BẬC HAI \\& HỆ THỨC VI-ÉT}
\\begin{document}
\\maketitle
Đầy đủ lý thuyết, phân dạng và ví dụ mẫu kèm lời giải.
\\end{document}`
  },

  // ==========================================================================
  // 📐 CHUYÊN ĐỀ 3: TƯƠNG GIAO PARABOL VÀ ĐƯỜNG THẲNG (LỚP 9)
  // ==========================================================================
  {
    id: "math-g9-parabol-tuong-giao",
    grade: 9,
    subject: "math",
    subjectName: "Toán học",
    title: "Tương giao giữa Parabol (P) và Đường thẳng (d)",
    category: "Đại số 9 (Chuyên đề ăn chắc điểm)",
    summary: "Phương trình hoành độ giao điểm, điều kiện tiếp xúc, cắt nhau tại 2 điểm phân biệt, tìm tọa độ tiếp điểm, diện tích tam giác tạo bởi các giao điểm và trục tọa độ.",
    keypoints: [
      "Cho $(P): y = ax^2$ ($a \\ne 0$) và $(d): y = mx + n$",
      "Phương trình hoành độ giao điểm: $ax^2 - mx - n = 0$ (*)",
      "$\\Delta > 0$: $(d)$ cắt $(P)$ tại 2 điểm phân biệt; $\\Delta = 0$: $(d)$ tiếp xúc $(P)$; $\\Delta < 0$: không giao nhau",
      "Diện tích tam giác $S_{OAB} = \\frac{1}{2} |n| (|x_1| + |x_2|)$ khi $C(0; n)$ là giao điểm của $(d)$ với trục $Oy$"
    ],
    contentHtml: `
      <div class="topic-detail">
        <h3 style="color: var(--primary); border-bottom: 2px solid var(--border-color); padding-bottom: 8px;">
          I. LÝ THUYẾT VỀ PARABOL VÀ ĐƯỜNG THẲNG
        </h3>
        <p>1. Đồ thị hàm số $(P): y = ax^2$ ($a \\ne 0$) là một đường cong Parabol có đỉnh tại gốc tọa độ $O(0; 0)$, nhận trục tung $Oy$ làm trục đối xứng.</p>
        <p>2. Vị trí tương đối của $(P)$ và đường thẳng $(d): y = mx + n$ phụ thuộc vào số nghiệm của phương trình hoành độ giao điểm: $ax^2 - mx - n = 0$.</p>

        <h3 style="color: var(--primary); border-bottom: 2px solid var(--border-color); padding-bottom: 8px; margin-top: 24px;">
          II. ĐỒ THỊ MINH HỌA VECTOR SVG TRỰC QUAN
        </h3>
        <div style="text-align: center; margin: 16px 0; background: #ffffff; border: 1px solid #e2e8f0; border-radius: 10px; padding: 14px;">
          <svg viewBox="0 0 400 240" width="100%" style="max-height: 220px; display: block; margin: 0 auto;" xmlns="http://www.w3.org/2000/svg">
            <!-- Trục tọa độ Oxy -->
            <line x1="40" y1="200" x2="360" y2="200" stroke="#64748b" stroke-width="1.5" />
            <line x1="200" y1="230" x2="200" y2="20" stroke="#64748b" stroke-width="1.5" />
            <text x="365" y="205" font-family="sans-serif" font-size="12" fill="#64748b">x</text>
            <text x="205" y="15" font-family="sans-serif" font-size="12" fill="#64748b">y</text>
            <text x="188" y="215" font-family="sans-serif" font-size="12" fill="#64748b">O</text>

            <!-- Parabol y = x^2 (tọa độ scale: 1 đv = 20px) -->
            <!-- x từ -2.5 đến 2.5: cx = 200 + 20*x, cy = 200 - 20*(x^2) -->
            <path d="M 140 75 Q 200 200 260 75" fill="none" stroke="#2563eb" stroke-width="2.5" />
            <text x="265" y="80" font-family="sans-serif" font-size="12" font-weight="bold" fill="#2563eb">(P): y = x²</text>

            <!-- Đường thẳng y = 2x + 3 cắt tại x = -1 (y=1) và x = 3 (y=9) -->
            <!-- x = -1: (180, 180). x = 2: (240, 60) -->
            <line x1="150" y1="240" x2="250" y2="40" stroke="#dc2626" stroke-width="2" />
            <text x="255" y="45" font-family="sans-serif" font-size="12" font-weight="bold" fill="#dc2626">(d): y = 2x + 3</text>

            <!-- Giao điểm A(-1; 1) và B(2; 4) -->
            <circle cx="180" cy="180" r="4" fill="#dc2626" />
            <text x="145" y="180" font-family="sans-serif" font-size="11" font-weight="bold" fill="#dc2626">A(-1; 1)</text>

            <circle cx="240" cy="60" r="4" fill="#dc2626" />
            <text x="245" y="65" font-family="sans-serif" font-size="11" font-weight="bold" fill="#dc2626">B(3; 9)</text>
          </svg>
        </div>
      </div>
    `,
    latexSource: `\\documentclass[12pt,a4paper]{article}
\\usepackage{amsmath,tikz}
\\title{CHUYÊN ĐỀ: PARABOL VÀ ĐƯỜNG THẲNG}
\\begin{document}
\\maketitle
Tương giao giữa parabol và đường thẳng trong đề thi tuyển sinh vào 10.
\\end{document}`
  },

  // ==========================================================================
  // 📐 CHUYÊN ĐỀ 4: 5 DẠNG TOÁN THỰC TẾ LẬP PHƯƠNG TRÌNH (LỚP 9)
  // ==========================================================================
  {
    id: "math-g9-lap-phuong-trinh-5-dang",
    grade: 9,
    subject: "math",
    subjectName: "Toán học",
    title: "5 Dạng toán thực tế giải bằng cách lập PT / Hệ PT",
    category: "Đại số 9 (Bài 2 điểm chắc chắn ra)",
    summary: "Bí quyết ăn trọn 1.5 - 2.0 điểm: Bảng lập phương trình, gọi ẩn và đặt đơn vị điều kiện cho 5 dạng: Chuyển động, Năng suất, Làm chung - làm riêng, Phần trăm mua bán kinh tế, Hình học thực tế.",
    keypoints: [
      "Dạng 1 (Toán chuyển động): $S = v \\cdot t$; $v_{\\text{xuôi}} = v_{\\text{thực}} + v_{\\text{nước}}$, $v_{\\text{ngược}} = v_{\\text{thực}} - v_{\\text{nước}}$",
      "Dạng 2 (Toán năng suất): Khối lượng công việc = Năng suất $\\times$ Thời gian; Gọi năng suất 1 ngày là ẩn",
      "Dạng 3 (Làm chung - Làm riêng): Coi toàn bộ công việc là 1; Trong 1 ngày đội 1 làm $1/x$, đội 2 làm $1/y$, cả hai đội làm $1/T$",
      "Dạng 4 (Kinh tế & Phần trăm): Giá sau giảm = Giá gốc $\\times (1 - \\%)$; Bài toán giảm giá 2 lần liên tiếp",
      "Dạng 5 (Hình học thực tế): Diện tích hình chữ nhật $S = x \\cdot y$, tăng/giảm chiều dài chiều rộng"
    ],
    contentHtml: `
      <div class="topic-detail">
        <h3 style="color: var(--primary); border-bottom: 2px solid var(--border-color); padding-bottom: 8px;">
          I. BẢNG TỔNG HỢP 5 DẠNG TOÁN THỰC TẾ
        </h3>
        <table style="width: 100%; border-collapse: collapse; margin: 12px 0;">
          <thead>
            <tr style="background: rgba(0,0,0,0.05);">
              <th style="border: 1px solid #cbd5e1; padding: 8px;">Dạng toán</th>
              <th style="border: 1px solid #cbd5e1; padding: 8px;">Công thức mấu chốt</th>
              <th style="border: 1px solid #cbd5e1; padding: 8px;">Mẹo thiết lập phương trình</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style="border: 1px solid #cbd5e1; padding: 8px; font-weight: bold;">1. Chuyển động</td>
              <td style="border: 1px solid #cbd5e1; padding: 8px;">$S = v \\times t$; $t = \\frac{S}{v}$</td>
              <td style="border: 1px solid #cbd5e1; padding: 8px;">Phương trình chênh lệch thời gian: $t_{\\text{chậm}} - t_{\\text{nhanh}} = \\Delta t$.</td>
            </tr>
            <tr>
              <td style="border: 1px solid #cbd5e1; padding: 8px; font-weight: bold;">2. Năng suất</td>
              <td style="border: 1px solid #cbd5e1; padding: 8px;">Tổng SP = Năng suất $\\times$ Thời gian</td>
              <td style="border: 1px solid #cbd5e1; padding: 8px;">Thời gian dự kiến - Thời gian thực tế = Số ngày hoàn thành sớm.</td>
            </tr>
            <tr>
              <td style="border: 1px solid #cbd5e1; padding: 8px; font-weight: bold;">3. Làm chung - riêng</td>
              <td style="border: 1px solid #cbd5e1; padding: 8px;">Năng suất 1 ngày $= \\frac{1}{x}$</td>
              <td style="border: 1px solid #cbd5e1; padding: 8px;">$\\frac{1}{x} + \\frac{1}{y} = \\frac{1}{T}$ (với $T$ là thời gian cả 2 đội cùng làm).</td>
            </tr>
          </tbody>
        </table>
      </div>
    `,
    latexSource: `\\documentclass[12pt,a4paper]{article}
\\usepackage{amsmath}
\\title{5 DẠNG TOÁN THỰC TẾ GIẢI BẰNG CÁCH LẬP PHƯƠNG TRÌNH}
\\begin{document}
\\maketitle
Phương pháp và bảng lập phương trình cho 5 dạng toán thực tế.
\\end{document}`
  },

  // ==========================================================================
  // 📐 CHUYÊN ĐỀ 5: TỨ GIÁC NỘI TIẾP VÀ HÌNH HỌC ĐƯỜNG TRÒN (LỚP 9)
  // ==========================================================================
  {
    id: "math-g9-tu-giac-noi-tiep-toan-dien",
    grade: 9,
    subject: "math",
    subjectName: "Toán học",
    title: "5 Phương pháp chứng minh Tứ giác nội tiếp & Kỹ thuật vẽ hình",
    category: "Hình học 9 (Câu 3 điểm cốt lõi)",
    summary: "Chiếm từ 2.5 đến 3.5 điểm trong mọi đề thi vào 10: 5 dấu hiệu nhận biết, kỹ thuật phát hiện góc vuông, kỹ thuật kẻ thêm đường phụ (đường kính, tiếp tuyến phụ, tia đối) để chứng minh nội tiếp.",
    keypoints: [
      "Dấu hiệu 1: Tứ giác có tổng hai góc đối diện bằng $180^\\circ$ (Phổ biến nhất: có 2 góc vuông cùng nhìn hoặc đối nhau)",
      "Dấu hiệu 2: Hai đỉnh kề nhau cùng nhìn cạnh chứa hai đỉnh còn lại dưới hai góc bằng nhau (Dạng hai góc nội tiếp cùng chắn cung)",
      "Dấu hiệu 3: Góc ngoài tại một đỉnh bằng góc trong tại đỉnh đối diện",
      "Dấu hiệu 4: Bốn đỉnh cùng cách đều một điểm cố định (Tâm đường tròn ngoại tiếp)",
      "Dấu hiệu 5 (Phương tích): $MA \\cdot MB = MC \\cdot MD$ đối với điểm $M$ là giao điểm của 2 đường thẳng chứa cạnh đối"
    ],
    contentHtml: `
      <div class="topic-detail">
        <h3 style="color: var(--primary); border-bottom: 2px solid var(--border-color); padding-bottom: 8px;">
          I. 5 PHƯƠNG PHÁP CHỨNG MINH TỨ GIÁC NỘI TIẾP
        </h3>
        <ol style="line-height: 1.8;">
          <li><strong>Tổng hai góc đối diện bằng $180^\\circ$:</strong> $\\widehat{A} + \\widehat{C} = 180^\\circ$ hoặc $\\widehat{B} + \\widehat{D} = 180^\\circ$.</li>
          <li><strong>Hai đỉnh cùng nhìn một đoạn thẳng dưới các góc bằng nhau:</strong> $\\widehat{DAC} = \\widehat{DBC}$ (hai đỉnh $A$ và $B$ cùng nhìn cạnh $CD$).</li>
          <li><strong>Góc ngoài tại một đỉnh bằng góc trong đỉnh đối diện:</strong> $\\widehat{xAD} = \\widehat{BCD}$.</li>
          <li><strong>Bốn đỉnh cách đều một điểm $O$:</strong> $OA = OB = OC = OD = R$.</li>
          <li><strong>Hệ thức tích (phương tích):</strong> Hai đường thẳng $AB$ và $CD$ cắt nhau tại $M$, thỏa mãn $MA \\cdot MB = MC \\cdot MD$.</li>
        </ol>

        <h3 style="color: var(--primary); border-bottom: 2px solid var(--border-color); padding-bottom: 8px; margin-top: 24px;">
          II. HÌNH VẼ MINH HỌA VECTOR LATEX / SVG
        </h3>
        <div style="text-align: center; margin: 16px 0; background: #ffffff; border: 1px solid #e2e8f0; border-radius: 10px; padding: 14px;">
          <svg viewBox="0 0 400 220" width="100%" style="max-height: 200px; display: block; margin: 0 auto;" xmlns="http://www.w3.org/2000/svg">
            <circle cx="200" cy="110" r="85" fill="none" stroke="#2563eb" stroke-width="2" />
            <polygon points="135,55 265,55 275,160 145,170" fill="rgba(37,99,235,0.06)" stroke="#1e293b" stroke-width="1.8" />
            <!-- Đường chéo AC và BD -->
            <line x1="135" y1="55" x2="275" y2="160" stroke="#047857" stroke-width="1.5" />
            <line x1="265" y1="55" x2="145" y2="170" stroke="#047857" stroke-width="1.5" />

            <circle cx="135" cy="55" r="3.5" fill="#dc2626" />
            <circle cx="265" cy="55" r="3.5" fill="#dc2626" />
            <circle cx="275" cy="160" r="3.5" fill="#dc2626" />
            <circle cx="145" cy="170" r="3.5" fill="#dc2626" />

            <text x="120" y="50" font-family="'Times New Roman', serif" font-style="italic" font-size="15" font-weight="bold">A</text>
            <text x="272" y="50" font-family="'Times New Roman', serif" font-style="italic" font-size="15" font-weight="bold">B</text>
            <text x="285" y="170" font-family="'Times New Roman', serif" font-style="italic" font-size="15" font-weight="bold">C</text>
            <text x="130" y="185" font-family="'Times New Roman', serif" font-style="italic" font-size="15" font-weight="bold">D</text>
          </svg>
        </div>
      </div>
    `,
    latexSource: `\\documentclass[12pt,a4paper]{article}
\\usepackage{amsmath,tikz}
\\title{5 PHƯƠNG PHÁP CHỨNG MINH TỨ GIÁC NỘI TIẾP}
\\begin{document}
\\maketitle
Chứng minh tứ giác nội tiếp là nền tảng câu hình học 3 điểm trong đề thi vào 10.
\\end{document}`
  },

  // ==========================================================================
  // 📐 CHUYÊN ĐỀ 6: HÌNH HỌC KHÔNG GIAN THỰC TẾ (LỚP 9)
  // ==========================================================================
  {
    id: "math-g9-hinh-khong-gian-thuc-te",
    grade: 9,
    subject: "math",
    subjectName: "Toán học",
    title: "Hình học không gian thực tế: Trụ - Nón - Cầu",
    category: "Hình học 9 (Câu 0.75 - 1.0 điểm)",
    summary: "Công thức diện tích xung quanh, diện tích toàn phần và thể tích của hình trụ, hình nón, hình cầu; Các bài toán ứng dụng đời sống: bồn chứa nước, thùng phuy, nón lá, kem ốc quế, viên bi thả vào bình nước dâng.",
    keypoints: [
      "Hình trụ: $S_{xq} = 2\\pi r h$; $S_{tp} = 2\\pi r h + 2\\pi r^2$; Thể tích $V = \\pi r^2 h$",
      "Hình nón: Đường sinh $l = \\sqrt{r^2 + h^2}$; $S_{xq} = \\pi r l$; Thể tích $V = \\frac{1}{3}\\pi r^2 h$",
      "Hình nón cụt: $V = \\frac{1}{3}\\pi h (r_1^2 + r_2^2 + r_1 r_2)$",
      "Hình cầu: Diện tích mặt cầu $S = 4\\pi R^2$; Thể tích $V = \\frac{4}{3}\\pi R^3$",
      "Lưu ý đơn vị: $1\\text{ m}^3 = 1000\\text{ dm}^3 = 1000\\text{ lít}$; $1\\text{ lít} = 1000\\text{ cm}^3$"
    ],
    contentHtml: `
      <div class="topic-detail">
        <h3 style="color: var(--primary); border-bottom: 2px solid var(--border-color); padding-bottom: 8px;">
          I. CÔNG THỨC HÌNH KHÔNG GIAN TRỌNG TÂM
        </h3>
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 12px; margin: 14px 0;">
          <div style="border: 1px solid var(--border-color); padding: 12px; border-radius: 8px;">
            <h4 style="color: #2563eb;">1. HÌNH TRỤ</h4>
            <p>$S_{xq} = 2\\pi r h$</p>
            <p>$S_{tp} = 2\\pi r h + 2\\pi r^2$</p>
            <p style="font-weight: bold; color: var(--primary);">$V = \\pi r^2 h$</p>
          </div>
          <div style="border: 1px solid var(--border-color); padding: 12px; border-radius: 8px;">
            <h4 style="color: #047857;">2. HÌNH NÓN</h4>
            <p>Đường sinh $l = \\sqrt{r^2 + h^2}$</p>
            <p>$S_{xq} = \\pi r l$</p>
            <p style="font-weight: bold; color: var(--primary);">$V = \\frac{1}{3}\\pi r^2 h$</p>
          </div>
          <div style="border: 1px solid var(--border-color); padding: 12px; border-radius: 8px;">
            <h4 style="color: #b45309;">3. HÌNH CẦU</h4>
            <p>$S_{\\text{mặt cầu}} = 4\\pi R^2$</p>
            <p style="font-weight: bold; color: var(--primary);">$V = \\frac{4}{3}\\pi R^3$</p>
          </div>
        </div>
      </div>
    `,
    latexSource: `\\documentclass[12pt,a4paper]{article}
\\usepackage{amsmath}
\\title{HÌNH HỌC KHÔNG GIAN THỰC TẾ: TRỤ - NÓN - CẦU}
\\begin{document}
\\maketitle
Công thức và ứng dụng tính thể tích, diện tích các hình không gian.
\\end{document}`
  },

  // ==========================================================================
  // 📐 CHUYÊN ĐỀ 7: THỐNG KÊ & XÁC SUẤT THỰC TẾ (GDPT 2018)
  // ==========================================================================
  {
    id: "math-g9-thong-ke-xac-suat",
    grade: 9,
    subject: "math",
    subjectName: "Toán học",
    title: "Thống kê & Xác suất thực tế trong đề thi vào lớp 10",
    category: "Chương trình mới GDPT 2018 (Chắc chắn ra)",
    summary: "Bảng tần số, biểu đồ hình quạt tròn, xác suất của biến cố ngẫu nhiên, không gian mẫu, xác suất thực nghiệm và xác suất cổ điển trong các bài toán du lịch, bốc thăm, thi đấu thể thao.",
    keypoints: [
      "Tần số: Số lần xuất hiện của một giá trị trong dãy dữ liệu",
      "Không gian mẫu $\\Omega$: Tập hợp tất cả các kết quả có thể xảy ra của phép thử",
      "Công thức xác suất cổ điển: $P(A) = \\frac{n(A)}{n(\\Omega)}$",
      "Xác suất của hai gia đình cùng chọn 1 trong $k$ địa điểm: $P = \\frac{k}{k^2} = \\frac{1}{k}$",
      "Bài toán giải bóng đá vòng tròn: Tổng số trận $N = \\frac{n(n-1)}{2}$; Hệ phương trình $x + y = N$ và $3x + 2y = S$"
    ],
    contentHtml: `
      <div class="topic-detail">
        <h3 style="color: var(--primary); border-bottom: 2px solid var(--border-color); padding-bottom: 8px;">
          I. KIẾN THỨC CỐT LÕI VỀ XÁC SUẤT VÀ THỐNG KÊ
        </h3>
        <p>1. <strong>Tần số và bảng tần số:</strong> Cho một tập dữ liệu gồm $N$ phần tử. Tần số của giá trị $x_i$ là số lần $n_i$ mà giá trị đó xuất hiện. Tổng các tần số $\\sum n_i = N$.</p>
        <p>2. <strong>Xác suất cổ điển của biến cố:</strong> Nếu các kết quả của phép thử là đồng khả năng thì:
        $$P(A) = \\frac{n(A)}{n(\\Omega)}$$
        với $n(A)$ là số kết quả thuận lợi cho biến cố $A$, $n(\\Omega)$ là số phần tử của không gian mẫu.</p>

        <h3 style="color: var(--primary); border-bottom: 2px solid var(--border-color); padding-bottom: 8px; margin-top: 24px;">
          II. BÀI TOÁN XÁC SUẤT GIẢI BÓNG ĐÁ & DU LỊCH TRONG ĐỀ THẬT QUẢNG NGÃI 2025
        </h3>
        <div style="background: rgba(37, 99, 235, 0.05); padding: 14px; border-radius: 8px; border-left: 4px solid var(--primary);">
          <p><strong>Bài toán giải bóng đá $n$ đội:</strong></p>
          <p>Thi đấu vòng tròn 1 lượt giữa $n$ đội: Tổng số trận là $\\frac{n(n-1)}{2}$. Với 5 đội thì có $\\frac{5 \\times 4}{2} = 10$ trận.</p>
          <p>Nếu thắng được 3 điểm, hòa 1 điểm, thua 0 điểm thì:</p>
          <ul>
            <li>Mỗi trận thắng-thua đem lại tổng 3 điểm cho cả 2 đội.</li>
            <li>Mỗi trận hòa đem lại tổng $1 + 1 = 2$ điểm cho cả 2 đội.</li>
          </ul>
          <p>Gọi $x$ là số trận thắng-thua và $y$ là số trận hòa $\\Rightarrow \\begin{cases} x + y = \\text{Tổng số trận} \\\\ 3x + 2y = \\text{Tổng số điểm} \\end{cases}$.</p>
        </div>
      </div>
    `,
    latexSource: `\\documentclass[12pt,a4paper]{article}
\\usepackage{amsmath}
\\title{THỐNG KÊ VÀ XÁC SUẤT THỰC TẾ TRONG ĐỀ THI VÀO 10}
\\begin{document}
\\maketitle
Chuyên đề xác suất và thống kê thực tế theo chương trình GDPT 2018.
\\end{document}`
  },

  // ==========================================================================
  // 📐 CHUYÊN ĐỀ 8: BẤT ĐẲNG THỨC CÔ-SI & CỰC TRỊ ĐẠI SỐ (LỚP 9)
  // ==========================================================================
  {
    id: "math-g9-bat-dang-thuc-cauchy",
    grade: 9,
    subject: "math",
    subjectName: "Toán học",
    title: "BĐT Cô-si (AM-GM), Cauchy-Schwarz & Kỹ thuật điểm rơi",
    category: "Toán nâng cao (Câu 0.5 - 1.0 điểm phân loại 10)",
    summary: "Bất đẳng thức AM-GM cho 2 số, 3 số; Kỹ thuật chọn điểm rơi; Kỹ thuật thêm bớt hạng tử; Kỹ thuật Cauchy ngược dấu; BĐT Cauchy-Schwarz dạng Engel (BĐT Sơ-vác).",
    keypoints: [
      "BĐT AM-GM 2 số: Cho $a, b \\ge 0 \\Rightarrow a + b \\ge 2\\sqrt{ab}$. Dấu '=' khi $a = b$",
      "Hệ quả AM-GM: $ab \\le \\frac{(a+b)^2}{4}$; $\\frac{1}{a} + \\frac{1}{b} \\ge \\frac{4}{a+b}$",
      "BĐT Sơ-vác (Cauchy-Schwarz dạng phân thức): $\\frac{x_1^2}{a_1} + \\frac{x_2^2}{a_2} + \\dots + \\frac{x_n^2}{a_n} \\ge \\frac{(x_1+x_2+\\dots+x_n)^2}{a_1+a_2+\\dots+a_n}$",
      "Kỹ thuật Cauchy ngược dấu: Dùng khi dấu trừ hoặc mẫu số chứa biến: $\\frac{a}{b+1} = a - \\frac{ab}{b+1} \\ge a - \\frac{ab}{2\\sqrt{b}}$"
    ],
    contentHtml: `
      <div class="topic-detail">
        <h3 style="color: var(--primary); border-bottom: 2px solid var(--border-color); padding-bottom: 8px;">
          I. BẤT ĐẲNG THỨC CÔ-SI VÀ CAUCHY-SCHWARZ DẠNG ENGEL
        </h3>
        <p>1. <strong>BĐT Cô-si (AM-GM):</strong> Cho $a, b \\ge 0$ thì $a + b \\ge 2\\sqrt{ab}$. Dấu bằng xảy ra khi $a = b$.</p>
        <p>2. <strong>BĐT Cauchy-Schwarz dạng Engel (BĐT Sơ-vác):</strong> Với $x, y \\in \\mathbb{R}$ và $a, b > 0$:</p>
        <p style="text-align: center; font-weight: bold; font-size: 1.15rem; color: var(--primary);">$$\\frac{x^2}{a} + \\frac{y^2}{b} \\ge \\frac{(x+y)^2}{a+b}$$</p>
        <p>Dấu bằng xảy ra khi $\\frac{x}{a} = \\frac{y}{b}$.</p>
      </div>
    `,
    latexSource: `\\documentclass[12pt,a4paper]{article}
\\usepackage{amsmath}
\\title{BẤT ĐẲNG THỨC CÔ-SI VÀ CAUCHY-SCHWARZ}
\\begin{document}
\\maketitle
Kỹ thuật chọn điểm rơi và Cauchy ngược dấu phân loại điểm 10.
\\end{document}`
  },

  // ==========================================================================
  // 📐 CHUYÊN ĐỀ 9: HẰNG ĐẲNG THỨC VÀ PHÂN THỨC (LỚP 8)
  // ==========================================================================
  {
    id: "math-g8-hang-dang-thuc",
    grade: 8,
    subject: "math",
    subjectName: "Toán học",
    title: "7 Hằng đẳng thức đáng nhớ & Kỹ thuật phân tích đa thức",
    category: "Nền tảng Đại số Lớp 8",
    summary: "7 hằng đẳng thức cốt lõi, hằng đẳng thức mở rộng bậc 3, hằng đẳng thức Sophie Germain; 5 phương pháp phân tích đa thức thành nhân tử (đặt nhân tử chung, dùng hằng đẳng thức, nhóm hạng tử, tách hạng tử, thêm bớt).",
    keypoints: [
      "$(A \\pm B)^2 = A^2 \\pm 2AB + B^2$",
      "$A^2 - B^2 = (A-B)(A+B)$",
      "$(A \\pm B)^3 = A^3 \\pm 3A^2B + 3AB^2 \\pm B^3$",
      "$A^3 \\pm B^3 = (A \\pm B)(A^2 \\mp AB + B^2)$",
      "Mở rộng 3 số: $(a+b+c)^2 = a^2 + b^2 + c^2 + 2(ab+bc+ca)$",
      "Đặc biệt: $a^3 + b^3 + c^3 - 3abc = (a+b+c)(a^2+b^2+c^2 - ab - bc - ca)$"
    ],
    contentHtml: `
      <div class="topic-detail">
        <h3 style="color: var(--primary); border-bottom: 2px solid var(--border-color); padding-bottom: 8px;">
          I. 7 HẰNG ĐẲNG THỨC ĐÁNG NHỚ
        </h3>
        <ol style="line-height: 1.8;">
          <li>$(A + B)^2 = A^2 + 2AB + B^2$</li>
          <li>$(A - B)^2 = A^2 - 2AB + B^2$</li>
          <li>$A^2 - B^2 = (A - B)(A + B)$</li>
          <li>$(A + B)^3 = A^3 + 3A^2B + 3AB^2 + B^3$</li>
          <li>$(A - B)^3 = A^3 - 3A^2B + 3AB^2 - B^3$</li>
          <li>$A^3 + B^3 = (A + B)(A^2 - AB + B^2)$</li>
          <li>$A^3 - B^3 = (A - B)(A^2 + AB + B^2)$</li>
        </ol>
      </div>
    `,
    latexSource: `\\documentclass[12pt,a4paper]{article}
\\usepackage{amsmath}
\\title{7 HẰNG ĐẲNG THỨC ĐÁNG NHỚ LỚP 8}
\\begin{document}
\\maketitle
Hệ thống hằng đẳng thức đáng nhớ phục vụ rút gọn biểu thức và giải phương trình.
\\end{document}`
  },

  // ==========================================================================
  // 📐 CHUYÊN ĐỀ 10: ĐỊNH LÝ TA-LÉT & TAM GIÁC ĐỒNG DẠNG (LỚP 8)
  // ==========================================================================
  {
    id: "math-g8-tam-giac-dong-dang-talet",
    grade: 8,
    subject: "math",
    subjectName: "Toán học",
    title: "Định lý Ta-lét & Tam giác đồng dạng (Lớp 7 - 8)",
    category: "Nền tảng Hình học",
    summary: "Định lý Ta-lét thuận và đảo, hệ quả Ta-lét; 3 trường hợp đồng dạng của tam giác thường và 2 trường hợp tam giác vuông; Tính chất đường phân giác trong và ngoài.",
    keypoints: [
      "Định lý Ta-lét: $d // BC \\Rightarrow \\frac{AB'}{AB} = \\frac{AC'}{AC}$ và $\\frac{B'C'}{BC} = \\frac{AB'}{AB}$",
      "3 trường hợp đồng dạng: Cạnh - Cạnh - Cạnh (c.c.c), Cạnh - Góc - Cạnh (c.g.c), Góc - Góc (g.g)",
      "Tính chất đường phân giác $AD$: $\\frac{DB}{DC} = \\frac{AB}{AC}$",
      "Tỉ số diện tích của hai tam giác đồng dạng bằng bình phương tỉ số đồng dạng: $\\frac{S_1}{S_2} = k^2$"
    ],
    contentHtml: `
      <div class="topic-detail">
        <h3 style="color: var(--primary); border-bottom: 2px solid var(--border-color); padding-bottom: 8px;">
          I. ĐỊNH LÝ TA-LÉT VÀ TAM GIÁC ĐỒNG DẠNG
        </h3>
        <p>Nếu một đường thẳng song song với một cạnh của tam giác và cắt hai cạnh còn lại thì nó định ra trên hai cạnh đó những đoạn thẳng tương ứng tỉ lệ.</p>
      </div>
    `,
    latexSource: `\\documentclass[12pt,a4paper]{article}
\\usepackage{amsmath}
\\title{ĐỊNH LÝ TA-LÉT VÀ TAM GIÁC ĐỒNG DẠNG}
\\begin{document}
\\maketitle
Cơ sở chứng minh tỉ số đoạn thẳng trong hình học phẳng.
\\end{document}`
  },

  // ==========================================================================
  // 📐 CHUYÊN ĐỀ 11: SỐ HỌC LỚP 6
  // ==========================================================================
  {
    id: "math-g6-so-hoc-chia-het",
    grade: 6,
    subject: "math",
    subjectName: "Toán học",
    title: "Số học Lớp 6: Tính chất chia hết & Phương trình nghiệm nguyên",
    category: "Nền tảng Số học Lớp 6",
    summary: "Dấu hiệu chia hết cho 2, 3, 5, 9; Ước và Bội; Ước chung lớn nhất (ƯCLN) và Bội chung nhỏ nhất (BCNN); Các phương pháp giải phương trình nghiệm nguyên phục vụ câu toán phân loại.",
    keypoints: [
      "Tính chất chia hết: Nếu $a \\vdots m$ và $b \\vdots m$ thì $(a \\pm b) \\vdots m$",
      "ƯCLN và BCNN: $a \\cdot b = \\text{ƯCLN}(a, b) \\cdot \\text{BCNN}(a, b)$",
      "Phương pháp giải phương trình nghiệm nguyên: Đưa về phương trình ước số $A(x) \\cdot B(y) = k$",
      "Phương pháp kẹp miền giá trị: Kẹp biểu thức giữa hai số chính phương liên tiếp để tìm $x$"
    ],
    contentHtml: `
      <div class="topic-detail">
        <h3 style="color: var(--primary); border-bottom: 2px solid var(--border-color); padding-bottom: 8px;">
          I. SỐ HỌC VÀ TÍNH CHẤT CHIA HẾT
        </h3>
        <p>Ứng dụng tìm nghiệm nguyên của phương trình ước số: Đưa về dạng $(ax + b)(cy + d) = k$.</p>
      </div>
    `,
    latexSource: `\\documentclass[12pt,a4paper]{article}
\\usepackage{amsmath}
\\title{SỐ HỌC VÀ CHIA HẾT LỚP 6}
\\begin{document}
\\maketitle
Phương trình nghiệm nguyên và tính chất chia hết trong số học.
\\end{document}`
  },

  // ==========================================================================
  // 🌐 MÔN TIẾNG ANH (ENGLISH) LỚP 6 - 9
  // ==========================================================================
  {
    id: "eng-g9-tenses",
    grade: 9,
    subject: "eng",
    subjectName: "Tiếng Anh",
    title: "12 Thì trong Tiếng Anh & Dấu hiệu nhận biết",
    category: "Ngữ pháp cốt lõi Lớp 6-9",
    summary: "Tổng hợp toàn bộ thì cơ bản & nâng cao xuất hiện trong đề thi vào 10: Hiện tại đơn, Quá khứ đơn, Hiện tại hoàn thành, Tương lai gần/đơn, Quá khứ tiếp diễn.",
    keypoints: [
      "Hiện tại hoàn thành (Present Perfect): S + have/has + V3/ed (since, for, already, yet, ever)",
      "Quá khứ tiếp diễn kết hợp QK đơn: When S + V2/ed, S + was/were + V-ing",
      "Used to + V-inf (thói quen trong quá khứ) vs Be/Get used to + V-ing (quen với)",
      "Since + mốc QK đơn, Mệnh đề chính chia Hiện tại hoàn thành"
    ],
    contentHtml: `
      <div class="topic-detail">
        <h3 style="color: var(--primary);">Các thì trọng tâm trong đề thi tuyển sinh vào lớp 10</h3>
        <p>Present Simple, Past Simple, Present Perfect, Past Continuous, Future Simple.</p>
      </div>
    `,
    latexSource: `\\documentclass[12pt,a4paper]{article}
\\title{12 THÌ TRONG TIẾNG ANH}
\\begin{document}
\\maketitle
Tổng hợp 12 thì tiếng Anh ôn thi vào 10.
\\end{document}`
  },
  {
    id: "eng-g9-passive-voice",
    grade: 9,
    subject: "eng",
    subjectName: "Tiếng Anh",
    title: "Câu bị động (Passive Voice) & Câu gián tiếp (Reported Speech)",
    category: "Chuyên đề viết lại câu (Chiếm 2 - 3 điểm)",
    summary: "Cấu trúc biến đổi chủ động sang bị động của các thì và động từ khuyết thiếu. Quy tắc lùi thì và đổi trạng từ chỉ thời gian, nơi chốn trong câu tường thuật.",
    keypoints: [
      "Công thức chung: $S + be + V_{3/ed} + (by + O)$",
      "Bị động kép: It is said/believed that + S + V ...",
      "Quy tắc lùi thì trong Reported Speech: Hiện tại -> Quá khứ, Quá khứ -> Quá khứ hoàn thành",
      "Đổi trạng từ: now -> then, here -> there, this -> that, tomorrow -> the next day"
    ],
    contentHtml: `
      <div class="topic-detail">
        <h3 style="color: var(--primary);">Quy tắc 3 bước chuyển câu tường thuật</h3>
        <p>1. Đổi đại từ nhân xưng; 2. Lùi thì; 3. Đổi trạng từ chỉ thời gian, nơi chốn.</p>
      </div>
    `,
    latexSource: `\\documentclass[12pt,a4paper]{article}
\\title{CÂU BỊ ĐỘNG VÀ CÂU TƯỜNG THUẬT TIẾNG ANH}
\\begin{document}
\\maketitle
Chuyên đề viết lại câu vào lớp 10 môn Tiếng Anh.
\\end{document}`
  },

  // ==========================================================================
  // 📖 MÔN NGỮ VĂN (LITERATURE) LỚP 6 - 9
  // ==========================================================================
  {
    id: "lit-g9-nghi-luan-van-hoc",
    grade: 9,
    subject: "lit",
    subjectName: "Ngữ Văn",
    title: "Kỹ năng làm bài Nghị luận Văn học & Các tác phẩm trọng tâm",
    category: "Ngữ văn 9 (Câu 5 điểm quyết định)",
    summary: "Dàn ý chuẩn, cách viết mở bài ấn tượng, thân bài phân tích dẫn chứng sâu sắc, kết bài đọng lại dư ba cho các tác phẩm kinh điển: Chuyện người con gái Nam Xương, Đồng chí, Tiểu đội xe không kính, Đoàn thuyền đánh cá, Lặng lẽ Sa Pa, Chiếc lược ngà, Mùa xuân nho nhỏ, Viếng lăng Bác.",
    keypoints: [
      "Cấu trúc 3 phần: Mở bài (giới thiệu tác giả, tác phẩm, vấn đề) - Thân bài - Kết bài",
      "Hình tượng nhân vật Vũ Nương (Chuyện người con gái Nam Xương): Vẻ đẹp đức hạnh và bi kịch oan khuất",
      "Hình tượng người lính trong 'Đồng chí' và 'Bài thơ về tiểu đội xe không kính'",
      "Vẻ đẹp người lao động mới trong 'Lặng lẽ Sa Pa' và 'Đoàn thuyền đánh cá'"
    ],
    contentHtml: `
      <div class="topic-detail">
        <h3 style="color: var(--primary);">Dàn ý chuẩn cho bài Nghị luận Văn học</h3>
        <p>Mở bài gián tiếp, Thân bài chia luận điểm rõ ràng, Kết bài khẳng định giá trị tác phẩm.</p>
      </div>
    `,
    latexSource: `\\documentclass[12pt,a4paper]{article}
\\title{KỸ NĂNG NGHỊ LUẬN VĂN HỌC THI VÀO 10}
\\begin{document}
\\maketitle
Phương pháp phân tích tác phẩm văn học lớp 9.
\\end{document}`
  },
  {
    id: "lit-g9-nghi-luan-xa-hoi",
    grade: 9,
    subject: "lit",
    subjectName: "Ngữ Văn",
    title: "Phương pháp viết đoạn văn Nghị luận Xã hội (200 chữ)",
    category: "Kỹ năng làm bài thi vào 10 (2 điểm)",
    summary: "Bí quyết viết đoạn văn 200 chữ trọn vẹn điểm: Nghị luận về một tư tưởng đạo lí (tinh thần cống hiến thầm lặng, lòng biết ơn, ý chí vượt khó) và Nghị luận về hiện tượng đời sống.",
    keypoints: [
      "Bố cục 5 bước: Mở đoạn $\\rightarrow$ Giải thích $\\rightarrow$ Bàn luận & Dẫn chứng $\\rightarrow$ Phản đề $\\rightarrow$ Bài học nhận thức và hành động",
      "Dung lượng chuẩn: 2/3 trang giấy thi (18 - 25 dòng), không ngắt dòng thành nhiều đoạn"
    ],
    contentHtml: `
      <div class="topic-detail">
        <h3 style="color: var(--primary);">Công thức 5 bước viết đoạn văn 200 chữ</h3>
        <p>1. Mở đoạn (1-2 câu); 2. Giải thích (2-3 câu); 3. Bàn luận & dẫn chứng (8-10 câu); 4. Mở rộng/phản đề (2-3 câu); 5. Bài học (2 câu).</p>
      </div>
    `,
    latexSource: `\\documentclass[12pt,a4paper]{article}
\\title{PHƯƠNG PHÁP VIẾT ĐOẠN VĂN NGHỊ LUẬN XÃ HỘI 200 CHỮ}
\\begin{document}
\\maketitle
Công thức viết đoạn văn 200 chữ chuẩn barem Sở GD\\&ĐT.
\\end{document}`
  }
];
