/**
 * AI EXAM GENERATION SERVICE
 * Hỗ trợ Gemini API + Smart Matrix Generator ngẫu nhiên phong phú
 */

import { storage } from "./storage";

// KHO MA TRẬN ĐỀ TOÁN VÀO 10 NGẪU NHIÊN ĐA DẠNG
const MATH_EXAM_VARIANTS = [
  // ĐỀ 1: Phong cách Đại số rút gọn + Vi-ét tham số + Chuyển động ca nô + Đường tròn tiếp tuyến
  {
    code: "TOAN-MT01",
    buildExam: (prov, lvl) => ({
      fullExamContent: `
        <div class="exam-paper">
          <div style="text-align: center; margin-bottom: 16px; border-bottom: 2px solid var(--border-color); padding-bottom: 12px;">
            <table style="width: 100%; border-collapse: collapse; margin-bottom: 8px;">
              <tr>
                <td style="text-align: center; vertical-align: top; width: 45%;">
                  <strong style="text-transform: uppercase; font-size: 0.95rem;">SỞ GIÁO DỤC VÀ ĐÀO TẠO</strong><br>
                  <strong style="text-transform: uppercase; font-size: 1rem; color: var(--primary);">${prov.toUpperCase()}</strong><br>
                  <div style="display: inline-block; border: 1.5px solid var(--text-main); padding: 2px 10px; font-weight: bold; margin-top: 4px; font-size: 0.85rem;">
                    ĐỀ THI THỬ VÀO 10 (AI SMART MATRIX)
                  </div><br>
                  <span style="font-size: 0.8rem; font-style: italic;">Mã đề: MT-101 | Mức độ: ${lvl}</span>
                </td>
                <td style="text-align: center; vertical-align: top; width: 55%;">
                  <strong style="font-size: 1.05rem;">KỲ THI TUYỂN SINH VÀO LỚP 10 THPT</strong><br>
                  <strong style="font-size: 1rem; color: var(--primary);">MÔN THI: TOÁN</strong><br>
                  <span style="font-size: 0.85rem; font-style: italic;">Thời gian làm bài: 120 phút (Không kể phát đề)</span>
                </td>
              </tr>
            </table>
          </div>

          <div class="exam-problem">
            <p><strong>Bài 1 (2,0 điểm):</strong></p>
            <p>1. Thực hiện phép tính: $2\\sqrt{18} - \\sqrt{50} + \\frac{6}{\\sqrt{2}}$.</p>
            <p>2. Cho biểu thức $P = \\left(\\frac{1}{\\sqrt{x}-1} - \\frac{1}{\\sqrt{x}}\\right) : \\left(\\frac{\\sqrt{x}+1}{\\sqrt{x}-2} - \\frac{\\sqrt{x}+2}{\\sqrt{x}-1}\\right)$ với $x > 0, x \\ne 1, x \\ne 4$.</p>
            <p style="padding-left: 16px;">a) Rút gọn biểu thức $P$.</p>
            <p style="padding-left: 16px;">b) Tìm các giá trị của $x$ để $P > \\frac{1}{6}$.</p>
          </div>

          <div class="exam-problem">
            <p><strong>Bài 2 (2,0 điểm):</strong></p>
            <p>1. Giải hệ phương trình: $\\begin{cases} 3x - 2y = 7 \\\\ 2x + 3y = 9 \\end{cases}$</p>
            <p>2. Cho phương trình bậc hai $x^2 - 2(m-1)x + m^2 - 3m = 0$ ($m$ là tham số).</p>
            <p style="padding-left: 16px;">a) Tìm $m$ để phương trình có hai nghiệm phân biệt $x_1, x_2$.</p>
            <p style="padding-left: 16px;">b) Tìm tất cả các giá trị của $m$ để $x_1^2 + x_2^2 + x_1 x_2 = 7$.</p>
          </div>

          <div class="exam-problem">
            <p><strong>Bài 3 (1,5 điểm):</strong></p>
            <p>Một ca nô xuôi dòng từ bến sông $A$ đến bến sông $B$ cách nhau $60\\text{ km}$, sau đó ngược dòng trở về $A$. Thời gian đi xuôi dòng ít hơn thời gian đi ngược dòng là $40\\text{ phút}$. Biết rằng vận tốc của dòng nước là $3\\text{ km/h}$. Tính vận tốc thực của ca nô khi nước yên lặng.</p>
          </div>

          <div class="exam-problem">
            <p><strong>Bài 4 (3,5 điểm):</strong></p>
            <p>Cho đường tròn $(O; R)$ và điểm $M$ nằm ngoài đường tròn. Từ $M$ kẻ hai tiếp tuyến $MA, MB$ với $(O)$ ($A, B$ là hai tiếp điểm). Kẻ cát tuyến $MCD$ không đi qua $O$ ($C$ nằm giữa $M$ và $D$). Gọi $H$ là giao điểm của $OM$ và $AB$.</p>
            <p style="padding-left: 16px;">a) Chứng minh tứ giác $MAOB$ nội tiếp và $OM \\perp AB$.</p>
            <p style="padding-left: 16px;">b) Chứng minh $MC \\cdot MD = MH \\cdot MO = MA^2$.</p>
            <p style="padding-left: 16px;">c) Tia phân giác góc $\\widehat{CAD}$ cắt $CD$ tại $I$. Chứng minh tam giác $MAI$ cân tại $M$.</p>

            <!-- HÌNH VẼ MINH HỌA BÀI 4 (TOAN-MT01) -->
            <div style="text-align: center; margin: 16px 0; background: #ffffff; padding: 12px; border-radius: 8px; border: 1px solid #e2e8f0;">
              <svg viewBox="0 0 380 240" width="340" height="215" xmlns="http://www.w3.org/2000/svg">
                <circle cx="240" cy="120" r="80" fill="#f8fafc" stroke="#1e293b" stroke-width="2" />
                <circle cx="240" cy="120" r="3" fill="#1e293b" />
                <text x="246" y="125" font-size="12" font-weight="bold" fill="#1e293b">O</text>
                
                <circle cx="50" cy="120" r="3.5" fill="#dc2626" />
                <text x="35" y="125" font-size="13" font-weight="bold" fill="#dc2626">M</text>
                
                <line x1="50" y1="120" x2="190" y2="52" stroke="#2563eb" stroke-width="1.8" />
                <line x1="50" y1="120" x2="190" y2="188" stroke="#2563eb" stroke-width="1.8" />
                <circle cx="190" cy="52" r="3.5" fill="#2563eb" />
                <text x="188" y="44" font-size="12" font-weight="bold" fill="#2563eb">A</text>
                <circle cx="190" cy="188" r="3.5" fill="#2563eb" />
                <text x="188" y="204" font-size="12" font-weight="bold" fill="#2563eb">B</text>
                
                <line x1="240" y1="120" x2="190" y2="52" stroke="#64748b" stroke-width="1.2" stroke-dasharray="3,3" />
                <line x1="240" y1="120" x2="190" y2="188" stroke="#64748b" stroke-width="1.2" stroke-dasharray="3,3" />
                
                <line x1="50" y1="120" x2="240" y2="120" stroke="#1e293b" stroke-width="1.5" />
                <line x1="190" y1="52" x2="190" y2="188" stroke="#059669" stroke-width="1.5" />
                <circle cx="190" cy="120" r="3" fill="#059669" />
                <text x="195" y="115" font-size="11" font-weight="bold" fill="#059669">H</text>
                
                <line x1="50" y1="120" x2="310" y2="48" stroke="#d97706" stroke-width="1.5" />
                <circle cx="168" cy="86" r="3" fill="#d97706" />
                <text x="160" y="80" font-size="11" font-weight="bold" fill="#d97706">C</text>
                <circle cx="285" cy="52" r="3" fill="#d97706" />
                <text x="290" y="48" font-size="11" font-weight="bold" fill="#d97706">D</text>
                
                <line x1="190" y1="52" x2="210" y2="74" stroke="#8b5cf6" stroke-width="1.2" stroke-dasharray="2,2" />
                <line x1="50" y1="120" x2="210" y2="74" stroke="#8b5cf6" stroke-width="1.5" />
                <circle cx="210" cy="74" r="3" fill="#8b5cf6" />
                <text x="215" y="82" font-size="11" font-weight="bold" fill="#8b5cf6">I</text>
              </svg>
              <div style="font-size: 0.82rem; color: var(--text-muted); margin-top: 4px;">Hình vẽ: Hai tiếp tuyến $MA, MB$ và cát tuyến $MCD$ tới đường tròn $(O)$</div>
            </div>
          </div>

          <div class="exam-problem">
            <p><strong>Bài 5 (1,0 điểm):</strong></p>
            <p>Cho hai số thực dương $a, b$ thỏa mãn $a + b \\le 2$. Tìm giá trị nhỏ nhất của biểu thức:</p>
            $$Q = \\frac{1}{a^2 + b^2} + \\frac{3}{ab} + 4ab$$
          </div>
        </div>
      `,
      solutionHtml: `
        <div class="solution-content">
          <h4 style="color: var(--primary);">HƯỚNG DẪN CHẤM BAREM MÃ ĐỀ MT-101</h4>
          <p><strong>Bài 1:</strong> 1) $2\\sqrt{18} - \\sqrt{50} + \\frac{6}{\\sqrt{2}} = 6\\sqrt{2} - 5\\sqrt{2} + 3\\sqrt{2} = 4\\sqrt{2}$.<br>2a) Rút gọn được $P = \\frac{\\sqrt{x}-2}{3\\sqrt{x}}$.<br>2b) $P > \\frac{1}{6} \\iff \\frac{\\sqrt{x}-2}{3\\sqrt{x}} > \\frac{1}{6} \\iff 2\\sqrt{x} - 4 > \\sqrt{x} \\iff \\sqrt{x} > 4 \\iff x > 16$.</p>
          <p><strong>Bài 2:</strong> 1) Nhân chéo giải ra $(x; y) = (3; 1)$.<br>2a) $\\Delta' = (m-1)^2 - (m^2 - 3m) = m + 1 > 0 \\iff m > -1$.<br>2b) $x_1^2 + x_2^2 + x_1 x_2 = (x_1+x_2)^2 - x_1 x_2 = 4(m-1)^2 - (m^2 - 3m) = 3m^2 - 5m + 4 = 7 \\iff 3m^2 - 5m - 3 = 0$. Tìm $m$ thỏa điều kiện.</p>
          <p><strong>Bài 3:</strong> Đổi $40\\text{ phút} = \\frac{2}{3}\\text{ h}$. Phương trình: $\\frac{60}{v - 3} - \\frac{60}{v + 3} = \\frac{2}{3} \\iff v^2 - 9 = 540 \\iff v = 27\\text{ km/h}$.</p>
          <p><strong>Bài 4:</strong> a) Tổng hai góc đối $90^\\circ + 90^\\circ = 180^\\circ$. $OM$ là trung trực của $AB$.<br>b) Hệ thức lượng trong tam giác vuông $OMA$: $MA^2 = MH \\cdot MO$ và $\\triangle MAC \\backsim \\triangle MDA$.<br>c) Tính chất góc ngoài và góc tạo bởi tiếp tuyến và dây cung.</p>
          <p><strong>Bài 5:</strong> Tách $Q = \\left(\\frac{1}{a^2+b^2} + \\frac{1}{2ab}\\right) + \\left(4ab + \\frac{4}{ab}\\right) + \\frac{1}{2ab}$. Áp dụng BĐT Cauchy-Schwarz và AM-GM, $\\min Q = 10$ khi $a = b = 1$.</p>
        </div>
      `
    })
  },

  // ĐỀ 2: Phong cách Hàm số bậc nhất & Parabol + Năng suất công việc + Hình học đường kính vuông góc
  {
    code: "TOAN-MT02",
    buildExam: (prov, lvl) => ({
      fullExamContent: `
        <div class="exam-paper">
          <div style="text-align: center; margin-bottom: 16px; border-bottom: 2px solid var(--border-color); padding-bottom: 12px;">
            <table style="width: 100%; border-collapse: collapse; margin-bottom: 8px;">
              <tr>
                <td style="text-align: center; vertical-align: top; width: 45%;">
                  <strong style="text-transform: uppercase; font-size: 0.95rem;">SỞ GIÁO DỤC VÀ ĐÀO TẠO</strong><br>
                  <strong style="text-transform: uppercase; font-size: 1rem; color: var(--primary);">${prov.toUpperCase()}</strong><br>
                  <div style="display: inline-block; border: 1.5px solid var(--text-main); padding: 2px 10px; font-weight: bold; margin-top: 4px; font-size: 0.85rem;">
                    ĐỀ THI THỬ VÀO 10 (AI SMART MATRIX)
                  </div><br>
                  <span style="font-size: 0.8rem; font-style: italic;">Mã đề: MT-204 | Mức độ: ${lvl}</span>
                </td>
                <td style="text-align: center; vertical-align: top; width: 55%;">
                  <strong style="font-size: 1.05rem;">KỲ THI TUYỂN SINH VÀO LỚP 10 THPT</strong><br>
                  <strong style="font-size: 1rem; color: var(--primary);">MÔN THI: TOÁN</strong><br>
                  <span style="font-size: 0.85rem; font-style: italic;">Thời gian làm bài: 120 phút</span>
                </td>
              </tr>
            </table>
          </div>

          <div class="exam-problem">
            <p><strong>Bài 1 (2,0 điểm):</strong></p>
            <p>1. Tính giá trị biểu thức: $A = \\sqrt{(2-\\sqrt{5})^2} + \\sqrt{20}$.</p>
            <p>2. Cho hàm số $y = -x^2$ có đồ thị $(P)$ và đường thẳng $(d): y = 2x - 3$.</p>
            <p style="padding-left: 16px;">a) Vẽ đồ thị $(P)$.</p>
            <p style="padding-left: 16px;">b) Tìm tọa độ các giao điểm của $(P)$ và $(d)$ bằng phép tính.</p>
          </div>

          <div class="exam-problem">
            <p><strong>Bài 2 (2,0 điểm):</strong></p>
            <p>1. Giải phương trình: $x^4 - 7x^2 - 18 = 0$.</p>
            <p>2. Cho phương trình $x^2 - (2m+1)x + m^2 + m - 2 = 0$.</p>
            <p style="padding-left: 16px;">a) Chứng minh phương trình luôn có hai nghiệm phân biệt với mọi $m$.</p>
            <p style="padding-left: 16px;">b) Tìm $m$ để $|x_1 - x_2| = 3$.</p>
          </div>

          <div class="exam-problem">
            <p><strong>Bài 3 (1,5 điểm):</strong></p>
            <p>Theo kế hoạch, hai tổ công nhân cùng làm chung một công việc thì hoàn thành trong 12 giờ. Nhưng sau khi hai tổ làm chung được 4 giờ thì tổ 1 được điều đi làm việc khác, tổ 2 tiếp tục làm một mình trong 10 giờ nữa thì hoàn thành được $\\frac{7}{10}$ công việc. Hỏi nếu làm một mình từ đầu thì mỗi tổ mất bao nhiêu giờ để hoàn thành công việc?</p>
          </div>

          <div class="exam-problem">
            <p><strong>Bài 4 (3,5 điểm):</strong></p>
            <p>Cho tam giác $ABC$ nhọn ($AB < AC$) nội tiếp đường tròn $(O; R)$. Ba đường cao $AD, BE, CF$ cắt nhau tại trực tâm $H$.</p>
            <p style="padding-left: 16px;">a) Chứng minh tứ giác $BCEF$ và tứ giác $AFHE$ nội tiếp.</p>
            <p style="padding-left: 16px;">b) Kẻ đường kính $AK$ của đường tròn $(O)$. Chứng minh tam giác $ABD$ đồng dạng với tam giác $AKC$, từ đó suy ra $AB \\cdot AC = 2R \\cdot AD$.</p>
            <p style="padding-left: 16px;">c) Gọi $M$ là trung điểm của cạnh $BC$. Chứng minh $H, M, K$ thẳng hàng và $AH = 2 OM$.</p>
          <!-- HÌNH VẼ MINH HỌA BÀI 4 (TOAN-MT02) -->
          <div style="text-align: center; margin: 16px 0; background: #ffffff; padding: 12px; border-radius: 8px; border: 1px solid #e2e8f0;">
            <svg viewBox="0 0 340 280" width="300" height="250" xmlns="http://www.w3.org/2000/svg">
              <circle cx="170" cy="140" r="100" fill="#f8fafc" stroke="#1e293b" stroke-width="2" />
              <circle cx="170" cy="140" r="3" fill="#1e293b" />
              <text x="175" y="145" font-size="12" font-weight="bold" fill="#1e293b">O</text>
              
              <polygon points="170,40 80,195 260,195" fill="none" stroke="#2563eb" stroke-width="2" />
              <circle cx="170" cy="40" r="3.5" fill="#2563eb" /><text x="165" y="32" font-size="13" font-weight="bold" fill="#2563eb">A</text>
              <circle cx="80" cy="195" r="3.5" fill="#2563eb" /><text x="65" y="205" font-size="13" font-weight="bold" fill="#2563eb">B</text>
              <circle cx="260" cy="195" r="3.5" fill="#2563eb" /><text x="268" y="205" font-size="13" font-weight="bold" fill="#2563eb">C</text>
              
              <line x1="170" y1="40" x2="170" y2="195" stroke="#dc2626" stroke-width="1.5" />
              <circle cx="170" cy="195" r="3" fill="#dc2626" /><text x="175" y="210" font-size="11" font-weight="bold" fill="#dc2626">D</text>
              
              <line x1="80" y1="195" x2="220" y2="110" stroke="#dc2626" stroke-width="1.5" />
              <circle cx="220" cy="110" r="3" fill="#dc2626" /><text x="228" y="112" font-size="11" font-weight="bold" fill="#dc2626">E</text>
              
              <line x1="260" y1="195" x2="125" y2="118" stroke="#dc2626" stroke-width="1.5" />
              <circle cx="125" cy="118" r="3" fill="#dc2626" /><text x="110" y="118" font-size="11" font-weight="bold" fill="#dc2626">F</text>
              
              <circle cx="170" cy="143" r="3.5" fill="#dc2626" />
              <text x="156" y="142" font-size="12" font-weight="bold" fill="#dc2626">H</text>
              
              <line x1="170" y1="40" x2="170" y2="240" stroke="#059669" stroke-width="1.5" stroke-dasharray="3,3" />
              <circle cx="170" cy="240" r="3.5" fill="#059669" /><text x="165" y="258" font-size="12" font-weight="bold" fill="#059669">K</text>
              
              <line x1="80" y1="195" x2="170" y2="240" stroke="#059669" stroke-width="1.2" stroke-dasharray="2,2" />
              <line x1="260" y1="195" x2="170" y2="240" stroke="#059669" stroke-width="1.2" stroke-dasharray="2,2" />
              <text x="180" y="190" font-size="11" font-weight="bold" fill="#d97706">M</text>
            </svg>
            <div style="font-size: 0.82rem; color: var(--text-muted); margin-top: 4px;">Hình vẽ: Tam giác nhọn $ABC$ nội tiếp $(O)$, trực tâm $H$ và đường kính $AK$</div>
          </div>
          </div>

          <div class="exam-problem">
            <p><strong>Bài 5 (1,0 điểm):</strong></p>
            <p>Giải phương trình: $x^2 + 4x + 7 = (x + 4)\\sqrt{x^2 + 7}$.</p>
          </div>
        </div>
      `,
      solutionHtml: `
        <div class="solution-content">
          <h4 style="color: var(--primary);">HƯỚNG DẪN CHẤM BAREM MÃ ĐỀ MT-204</h4>
          <p><strong>Bài 1:</strong> 1) $\\sqrt{(2-\\sqrt{5})^2} + 2\\sqrt{5} = \\sqrt{5} - 2 + 2\\sqrt{5} = 3\\sqrt{5} - 2$.<br>2b) Hoành độ giao điểm: $-x^2 = 2x - 3 \\iff x^2 + 2x - 3 = 0 \\iff x = 1$ hoặc $x = -3$. Tọa độ: $(1; -1)$ và $(-3; -9)$.</p>
          <p><strong>Bài 2:</strong> 1) Đặt $t = x^2 \\ge 0 \\Rightarrow t^2 - 7t - 18 = 0 \\iff t = 9 \\Rightarrow x = \\pm 3$.<br>2a) $\\Delta = (2m+1)^2 - 4(m^2+m-2) = 9 > 0$ với mọi $m$.<br>2b) $|x_1 - x_2| = \\sqrt{\\Delta} = 3$ luôn thỏa mãn với mọi $m$.</p>
          <p><strong>Bài 3:</strong> 1 giờ hai tổ làm $\\frac{1}{12}$ công việc. 4 giờ làm $\\frac{4}{12} = \\frac{1}{3}$. Tổ 2 làm trong 10 giờ được $\\frac{7}{10} - \\frac{1}{3} = \\frac{11}{30}$ công việc $\\Rightarrow$ 1 giờ tổ 2 làm $\\frac{11}{300}$. Đáp số: Tổ 1 mất 20 giờ, tổ 2 mất 30 giờ (hoặc giải hệ PT ra kết quả chính xác).</p>
          <p><strong>Bài 4:</strong> a) Các góc nhìn cạnh bằng $90^\\circ$.<br>b) Góc $\\widehat{ACK} = 90^\\circ$ chắn nửa đường tròn. Hai tam giác vuông đồng dạng do $\\widehat{ABC} = \\widehat{AKC}$.<br>c) Chứng minh $BHCK$ là hình bình hành có hai đường chéo $BC$ và $HK$ cắt nhau tại trung điểm $M$.</p>
          <p><strong>Bài 5:</strong> Đặt $u = \\sqrt{x^2+7} > 0$, phương trình trở thành $u^2 - (x+4)u + 4x = 0 \\iff (u - x)(u - 4) = 0$. Giải ra nghiệm.</p>
        </div>
      `
    })
  },

  // ĐỀ 3: Phong cách Thống kê thực tế + Hình nón/trụ + Hệ thức lượng + Cực trị
  {
    code: "TOAN-MT03",
    buildExam: (prov, lvl) => ({
      fullExamContent: `
        <div class="exam-paper">
          <div style="text-align: center; margin-bottom: 16px; border-bottom: 2px solid var(--border-color); padding-bottom: 12px;">
            <table style="width: 100%; border-collapse: collapse; margin-bottom: 8px;">
              <tr>
                <td style="text-align: center; vertical-align: top; width: 45%;">
                  <strong style="text-transform: uppercase; font-size: 0.95rem;">SỞ GIÁO DỤC VÀ ĐÀO TẠO</strong><br>
                  <strong style="text-transform: uppercase; font-size: 1rem; color: var(--primary);">${prov.toUpperCase()}</strong><br>
                  <div style="display: inline-block; border: 1.5px solid var(--text-main); padding: 2px 10px; font-weight: bold; margin-top: 4px; font-size: 0.85rem;">
                    ĐỀ THI THỬ VÀO 10 (AI SMART MATRIX)
                  </div><br>
                  <span style="font-size: 0.8rem; font-style: italic;">Mã đề: MT-308 | Mức độ: ${lvl}</span>
                </td>
                <td style="text-align: center; vertical-align: top; width: 55%;">
                  <strong style="font-size: 1.05rem;">KỲ THI TUYỂN SINH VÀO LỚP 10 THPT</strong><br>
                  <strong style="font-size: 1rem; color: var(--primary);">MÔN THI: TOÁN</strong><br>
                  <span style="font-size: 0.85rem; font-style: italic;">Thời gian làm bài: 120 phút</span>
                </td>
              </tr>
            </table>
          </div>

          <div class="exam-problem">
            <p><strong>Bài 1 (2,0 điểm):</strong></p>
            <p>1. Thực hiện phép tính: $\\frac{3}{\\sqrt{5}-2} - \\sqrt{20} - \\sqrt{(1-\\sqrt{5})^2}$.</p>
            <p>2. Rút gọn biểu thức $M = \\left(\\frac{\\sqrt{x}}{\\sqrt{x}+3} + \\frac{3}{\\sqrt{x}-3}\\right) : \\frac{x+9}{x-9}$ với $x \\ge 0, x \\ne 9$.</p>
          </div>

          <div class="exam-problem">
            <p><strong>Bài 2 (2,0 điểm):</strong></p>
            <p>1. Giải hệ phương trình: $\\begin{cases} 4x + y = 11 \\\\ 3x - 2y = 0 \\end{cases}$</p>
            <p>2. Cho phương trình $x^2 - 4x + m - 1 = 0$. Tìm $m$ để phương trình có hai nghiệm phân biệt $x_1, x_2$ thỏa mãn:</p>
            $$\\frac{x_1}{x_2} + \\frac{x_2}{x_1} = 6$$
          </div>

          <div class="exam-problem">
            <p><strong>Bài 3 (1,5 điểm):</strong></p>
            <p>Một xí nghiệp may theo hợp đồng phải may 1200 bộ quần áo trong một thời gian quy định. Nhờ cải tiến kỹ thuật, mỗi ngày xí nghiệp may được nhiều hơn 10 bộ so với kế hoạch, do đó xí nghiệp đã hoàn thành sớm hơn dự định 4 ngày. Hỏi theo kế hoạch, mỗi ngày xí nghiệp phải may bao nhiêu bộ quần áo?</p>
          </div>

          <div class="exam-problem">
            <p><strong>Bài 4 (3,5 điểm):</strong></p>
            <p><strong>1.</strong> Một chiếc nón lá có đường sinh dài $30\text{ cm}$ và bán kính đáy bằng $20\text{ cm}$. Tính diện tích lá cọ cần dùng để phủ kín mặt ngoài của chiếc nón lá đó (lấy $\pi \approx 3,14$, bỏ qua phần viền mép).</p>
            <p><strong>2.</strong> Cho nửa đường tròn tâm $O$ đường kính $AB$. Lấy điểm $C$ trên nửa đường tròn ($C$ khác $A, B$). Kẻ tiếp tuyến $Ax, By$ với nửa đường tròn. Tiếp tuyến tại $C$ cắt $Ax, By$ lần lượt tại $M$ và $N$.</p>
            <p style="padding-left: 16px;">a) Chứng minh tứ giác $AMCO$ nội tiếp và $MN = AM + BN$.</p>
            <p style="padding-left: 16px;">b) Chứng minh tam giác $MON$ vuông tại $O$ và $AM \cdot BN = R^2$.</p>
            <p style="padding-left: 16px;">c) $AN$ cắt $BM$ tại $K$. Chứng minh $CK \perp AB$.</p>

            <!-- HÌNH VẼ MINH HỌA BÀI 4.1 & 4.2 (TOAN-MT03) -->
            <div style="display: flex; gap: 20px; justify-content: center; align-items: center; flex-wrap: wrap; margin: 14px 0; background: #ffffff; padding: 12px; border-radius: 8px; border: 1px solid #e2e8f0;">
              <!-- Hình nón lá -->
              <div style="text-align: center;">
                <svg viewBox="0 0 180 135" width="160" height="120" xmlns="http://www.w3.org/2000/svg">
                  <ellipse cx="90" cy="110" rx="70" ry="20" fill="#fef3c7" stroke="#1e293b" stroke-width="1.8" />
                  <path d="M 20 110 A 70 20 0 0 1 160 110" fill="none" stroke="#94a3b8" stroke-width="1.2" stroke-dasharray="3,3" />
                  <line x1="90" y1="15" x2="20" y2="110" stroke="#1e293b" stroke-width="2" />
                  <line x1="90" y1="15" x2="160" y2="110" stroke="#1e293b" stroke-width="2" />
                  <line x1="90" y1="15" x2="90" y2="110" stroke="#dc2626" stroke-width="1.5" stroke-dasharray="3,3" />
                  <line x1="90" y1="110" x2="160" y2="110" stroke="#2563eb" stroke-width="1.8" stroke-dasharray="3,3" />
                  <text x="105" y="125" font-size="11" font-weight="bold" fill="#2563eb">R = 20cm</text>
                  <text x="125" y="60" font-size="11" font-weight="bold" fill="#1e293b">l = 30cm</text>
                </svg>
                <div style="font-size: 0.8rem; color: var(--text-muted); margin-top: 4px;">Minh họa chiếc nón lá</div>
              </div>

              <!-- Nửa đường tròn 3 tiếp tuyến -->
              <div style="text-align: center;">
                <svg viewBox="0 0 280 160" width="240" height="135" xmlns="http://www.w3.org/2000/svg">
                  <path d="M 40 140 A 80 80 0 0 1 200 140 Z" fill="#f0f9ff" stroke="#1e293b" stroke-width="1.8" />
                  <line x1="40" y1="140" x2="200" y2="140" stroke="#1e293b" stroke-width="2" />
                  <circle cx="120" cy="140" r="3" fill="#1e293b" /><text x="118" y="155" font-size="11" font-weight="bold" fill="#1e293b">O</text>
                  <circle cx="40" cy="140" r="3" fill="#1e293b" /><text x="28" y="155" font-size="11" font-weight="bold" fill="#1e293b">A</text>
                  <circle cx="200" cy="140" r="3" fill="#1e293b" /><text x="205" y="155" font-size="11" font-weight="bold" fill="#1e293b">B</text>
                  <line x1="40" y1="140" x2="40" y2="30" stroke="#2563eb" stroke-width="1.5" />
                  <line x1="200" y1="140" x2="200" y2="30" stroke="#2563eb" stroke-width="1.5" />
                  <circle cx="90" cy="67" r="3" fill="#dc2626" /><text x="88" y="58" font-size="11" font-weight="bold" fill="#dc2626">C</text>
                  <line x1="40" y1="110" x2="200" y2="40" stroke="#059669" stroke-width="1.8" />
                  <circle cx="40" cy="110" r="3" fill="#059669" /><text x="25" y="112" font-size="11" font-weight="bold" fill="#059669">M</text>
                  <circle cx="200" cy="40" r="3" fill="#059669" /><text x="206" y="42" font-size="11" font-weight="bold" fill="#059669">N</text>
                </svg>
                <div style="font-size: 0.8rem; color: var(--text-muted); margin-top: 4px;">Nửa đường tròn & 3 tiếp tuyến</div>
              </div>
            </div>
          </div>

          <div class="exam-problem">
            <p><strong>Bài 5 (1,0 điểm):</strong></p>
            <p>Cho các số thực dương $x, y$ thỏa mãn $x + y = 1$. Tìm giá trị nhỏ nhất của biểu thức:</p>
            $$P = \\frac{1}{x^2 + y^2} + \\frac{1}{2xy}$$
          </div>
        </div>
      `,
      solutionHtml: `
        <div class="solution-content">
          <h4 style="color: var(--primary);">HƯỚNG DẪN CHẤM BAREM MÃ ĐỀ MT-308</h4>
          <p><strong>Bài 1:</strong> 1) $\\frac{3(\\sqrt{5}+2)}{1} - 2\\sqrt{5} - (\\sqrt{5}-1) = 3\\sqrt{5} + 6 - 2\\sqrt{5} - \\sqrt{5} + 1 = 7$.<br>2) $M = \\frac{x+9}{x-9} \\cdot \\frac{x-9}{x+9} = 1$.</p>
          <p><strong>Bài 2:</strong> 1) Nghiệm $(x; y) = (2; 3)$.<br>2) $\\Delta' = 4 - (m-1) = 5 - m > 0 \\iff m < 5$. Ta có $\\frac{x_1^2+x_2^2}{x_1 x_2} = \\frac{16-2(m-1)}{m-1} = 6 \\iff 18 - 2m = 6m - 6 \\iff 8m = 24 \\iff m = 3$ (thỏa mãn).</p>
          <p><strong>Bài 3:</strong> Gọi năng suất kế hoạch là $x$ (bộ/ngày, $x > 0$). Phương trình: $\\frac{1200}{x} - \\frac{1200}{x+10} = 4 \\iff x^2 + 10x - 3000 = 0 \\iff x = 50$ (nhận) hoặc $x = -60$ (loại). Kế hoạch may 50 bộ/ngày.</p>
          <p><strong>Bài 4:</strong> 1) Diện tích xung quanh hình nón: $S_{xq} = \\pi R l = 3,14 \\times 20 \\times 30 = 1884\\text{ cm}^2$.<br>2a) Tính chất tiếp tuyến cắt nhau: $MC = MA, NC = NB \\Rightarrow MN = AM + BN$.<br>2b) $OM, ON$ là phân giác hai góc kề bù $\\Rightarrow \\widehat{MON} = 90^\\circ$. Hệ thức lượng trong tam giác vuông: $MC \\cdot NC = OC^2 \\Rightarrow AM \\cdot BN = R^2$.<br>2c) Dùng định lý Thales để suy ra $CK$ song song với $AM$ nên $CK \\perp AB$.</p>
          <p><strong>Bài 5:</strong> Áp dụng BĐT Cauchy-Schwarz: $P = \\frac{1}{x^2+y^2} + \\frac{1}{2xy} \\ge \\frac{4}{(x+y)^2} = \\frac{4}{1^2} = 4$. Dấu bằng xảy ra khi $x = y = \\frac{1}{2}$. Vậy $\\min P = 4$.</p>
        </div>
      `
    })
  },

  // ĐỀ 4: Phong cách Tuyển sinh 2026 chuẩn (Hình trụ 3D + Đường tròn tứ giác nội tiếp)
  {
    code: "TOAN-MT04",
    buildExam: (prov, lvl) => ({
      fullExamContent: `
        <div class="exam-paper">
          <div style="text-align: center; margin-bottom: 16px; border-bottom: 2px solid var(--border-color); padding-bottom: 12px;">
            <table style="width: 100%; border-collapse: collapse; margin-bottom: 8px;">
              <tr>
                <td style="text-align: center; vertical-align: top; width: 45%;">
                  <strong style="text-transform: uppercase; font-size: 0.95rem;">SỞ GIÁO DỤC VÀ ĐÀO TẠO</strong><br>
                  <strong style="text-transform: uppercase; font-size: 1rem; color: var(--primary);">${prov.toUpperCase()}</strong><br>
                  <div style="display: inline-block; border: 1.5px solid var(--text-main); padding: 2px 10px; font-weight: bold; margin-top: 4px; font-size: 0.85rem;">
                    ĐỀ PHÁT TRIỂN TUYỂN SINH 2026
                  </div><br>
                  <span style="font-size: 0.8rem; font-style: italic;">Mã đề: MT-405 | Mức độ: ${lvl}</span>
                </td>
                <td style="text-align: center; vertical-align: top; width: 55%;">
                  <strong style="font-size: 1.05rem;">KỲ THI TUYỂN SINH VÀO LỚP 10 THPT</strong><br>
                  <strong style="font-size: 1rem; color: var(--primary);">MÔN THI: TOÁN</strong><br>
                  <span style="font-size: 0.85rem; font-style: italic;">Thời gian làm bài: 120 phút (Đề có hình vẽ minh họa)</span>
                </td>
              </tr>
            </table>
          </div>

          <div class="exam-problem">
            <p><strong>Bài 1 (2,0 điểm):</strong></p>
            <p>1. Thực hiện phép tính: $\\sqrt{48} - 2\\sqrt{75} + \\sqrt{108} - \\frac{6}{\\sqrt{3}}$.</p>
            <p>2. Rút gọn biểu thức $A = \\left(\\frac{x-2\\sqrt{x}}{x-4} - \\frac{1}{\\sqrt{x}+2}\\right) : \\frac{\\sqrt{x}-1}{\\sqrt{x}+2}$ với $x \\ge 0, x \\ne 4, x \\ne 1$.</p>
          </div>

          <div class="exam-problem">
            <p><strong>Bài 2 (2,0 điểm):</strong></p>
            <p>1. Giải hệ phương trình: $\\begin{cases} 2x + 3y = 12 \\\\ 3x - y = 7 \\end{cases}$</p>
            <p>2. Cho phương trình bậc hai: $x^2 - 2(m-1)x + 2m - 5 = 0$ ($m$ là tham số).</p>
            <p style="padding-left: 16px;">a) Chứng minh phương trình luôn có hai nghiệm phân biệt $x_1, x_2$ với mọi $m$.</p>
            <p style="padding-left: 16px;">b) Tìm tất cả các giá trị của $m$ để $(x_1 - x_2)^2 + 4x_1 x_2 = 16$.</p>
          </div>

          <div class="exam-problem">
            <p><strong>Bài 3 (1,5 điểm):</strong></p>
            <p>Hai lớp 9A và 9B của một trường THCS cùng tham gia phong trào trồng cây xanh. Theo kế hoạch, cả hai lớp phải trồng tổng cộng $360$ cây. Thực tế, lớp 9A đã trồng vượt mức $10\\%$, lớp 9B trồng vượt mức $15\\%$, do đó cả hai lớp đã trồng được tất cả $404$ cây. Hỏi theo kế hoạch, mỗi lớp phải trồng bao nhiêu cây xanh?</p>
          </div>

          <div class="exam-problem">
            <p><strong>Bài 4 (3,5 điểm):</strong></p>
            <p><strong>1. (Toán thực tế)</strong> Một bồn chứa nước sinh hoạt bằng inox có dạng hình trụ với chiều cao $h = 2\\text{ m}$ và đường kính đáy bằng $1,6\\text{ m}$ (bán kính $R = 0,8\\text{ m}$).</p>
            <p style="padding-left: 16px;">a) Tính thể tích bồn nước trên theo đơn vị mét khối (lấy $\\pi \\approx 3,14$, làm tròn đến chữ số thập phân thứ hai).</p>
            <p style="padding-left: 16px;">b) Biết mỗi mét khối nước bằng $1000$ lít. Hỏi bồn nước đó có thể chứa tối đa bao nhiêu lít nước?</p>

            <!-- HÌNH VẼ MINH HỌA HÌNH TRỤ 3D VÀ HÌNH HỌC PHẲNG -->
            <div style="display: flex; gap: 20px; justify-content: center; align-items: center; flex-wrap: wrap; margin: 14px 0; background: #ffffff; padding: 12px; border-radius: 8px; border: 1px solid #e2e8f0;">
              <!-- Bồn nước hình trụ -->
              <div style="text-align: center;">
                <svg viewBox="0 0 170 170" width="150" height="150" xmlns="http://www.w3.org/2000/svg">
                  <!-- Đáy trên -->
                  <ellipse cx="85" cy="35" rx="55" ry="16" fill="#e0f2fe" stroke="#0284c7" stroke-width="2" />
                  <!-- Thân trụ -->
                  <rect x="30" y="35" width="110" height="85" fill="#f0f9ff" stroke="none" />
                  <line x1="30" y1="35" x2="30" y2="120" stroke="#0284c7" stroke-width="2" />
                  <line x1="140" y1="35" x2="140" y2="120" stroke="#0284c7" stroke-width="2" />
                  <!-- Đáy dưới nét liền nửa trước -->
                  <path d="M 30 120 A 55 16 0 0 0 140 120" fill="#bae6fd" stroke="#0284c7" stroke-width="2" />
                  <!-- Đáy dưới nét đứt nửa sau -->
                  <path d="M 30 120 A 55 16 0 0 1 140 120" fill="none" stroke="#94a3b8" stroke-width="1.2" stroke-dasharray="3,3" />
                  <!-- Chiều cao h = 2m -->
                  <line x1="85" y1="35" x2="85" y2="120" stroke="#dc2626" stroke-width="1.5" stroke-dasharray="3,3" />
                  <text x="90" y="80" font-size="11" font-weight="bold" fill="#dc2626">h = 2m</text>
                  <!-- Bán kính R = 0.8m -->
                  <line x1="85" y1="35" x2="140" y2="35" stroke="#2563eb" stroke-width="1.5" />
                  <text x="95" y="30" font-size="11" font-weight="bold" fill="#2563eb">R = 0,8m</text>
                </svg>
                <div style="font-size: 0.8rem; color: var(--text-muted); margin-top: 4px;">Bồn nước hình trụ</div>
              </div>

              <!-- Đường tròn tiếp tuyến cát tuyến -->
              <div style="text-align: center;">
                <svg viewBox="0 0 280 170" width="250" height="150" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="160" cy="85" r="60" fill="#f8fafc" stroke="#1e293b" stroke-width="1.8" />
                  <circle cx="160" cy="85" r="2.5" fill="#1e293b" /><text x="165" y="88" font-size="11" font-weight="bold" fill="#1e293b">O</text>
                  <circle cx="30" cy="85" r="3" fill="#dc2626" /><text x="18" y="88" font-size="11" font-weight="bold" fill="#dc2626">A</text>
                  <!-- 2 tiếp tuyến AB, AC -->
                  <line x1="30" y1="85" x2="135" y2="33" stroke="#2563eb" stroke-width="1.6" />
                  <line x1="30" y1="85" x2="135" y2="137" stroke="#2563eb" stroke-width="1.6" />
                  <circle cx="135" cy="33" r="3" fill="#2563eb" /><text x="133" y="25" font-size="11" font-weight="bold" fill="#2563eb">B</text>
                  <circle cx="135" cy="137" r="3" fill="#2563eb" /><text x="133" y="150" font-size="11" font-weight="bold" fill="#2563eb">C</text>
                  <!-- Cát tuyến ADE -->
                  <line x1="30" y1="85" x2="215" y2="50" stroke="#059669" stroke-width="1.5" />
                  <circle cx="112" cy="72" r="2.5" fill="#059669" /><text x="108" y="65" font-size="10" font-weight="bold" fill="#059669">D</text>
                  <circle cx="203" cy="52" r="2.5" fill="#059669" /><text x="207" y="50" font-size="10" font-weight="bold" fill="#059669">E</text>
                </svg>
                <div style="font-size: 0.8rem; color: var(--text-muted); margin-top: 4px;">Hai tiếp tuyến và cát tuyến</div>
              </div>
            </div>

            <p><strong>2.</strong> Từ điểm $A$ nằm ngoài đường tròn $(O; R)$, kẻ hai tiếp tuyến $AB, AC$ với đường tròn ($B, C$ là hai tiếp điểm). Kẻ cát tuyến $ADE$ không đi qua $O$ ($D$ nằm giữa $A$ và $E$).</p>
            <p style="padding-left: 16px;">a) Chứng minh tứ giác $ABOC$ nội tiếp một đường tròn.</p>
            <p style="padding-left: 16px;">b) Chứng minh $AB^2 = AD \\cdot AE$.</p>
            <p style="padding-left: 16px;">c) Gọi $H$ là giao điểm của $OA$ và $BC$. Chứng minh tứ giác $DHOE$ nội tiếp.</p>
          </div>

          <div class="exam-problem">
            <p><strong>Bài 5 (1,0 điểm):</strong></p>
            <p>Cho $a, b, c$ là ba số thực dương thỏa mãn $a + b + c = 3$. Tìm giá trị lớn nhất của biểu thức:</p>
            $$P = \\frac{ab}{\\sqrt{c + ab}} + \\frac{bc}{\\sqrt{a + bc}} + \\frac{ca}{\\sqrt{b + ca}}$$
          </div>
        </div>
      `,
      solutionHtml: `
        <div class="solution-content">
          <h4 style="color: var(--primary);">HƯỚNG DẪN CHẤM BAREM MÃ ĐỀ MT-405</h4>
          <p><strong>Bài 1:</strong> 1) $4\\sqrt{3} - 10\\sqrt{3} + 6\\sqrt{3} - 2\\sqrt{3} = -2\\sqrt{3}$.<br>2) $A = \\frac{\\sqrt{x}(\\sqrt{x}-2)}{(\\sqrt{x}-2)(\\sqrt{x}+2)} - \\frac{1}{\\sqrt{x}+2} = \\frac{\\sqrt{x}-1}{\\sqrt{x}+2}$. Chia cho $\\frac{\\sqrt{x}-1}{\\sqrt{x}+2}$ được $A = 1$.</p>
          <p><strong>Bài 2:</strong> 1) Hệ có nghiệm duy nhất $(x; y) = (3; 2)$.<br>2a) $\\Delta' = (m-1)^2 - (2m-5) = m^2 - 4m + 6 = (m-2)^2 + 2 > 0$ với mọi $m$.<br>2b) $(x_1-x_2)^2 + 4x_1 x_2 = (x_1+x_2)^2 = 4(m-1)^2 = 16 \\iff (m-1)^2 = 4 \\iff m = 3$ hoặc $m = -1$.</p>
          <p><strong>Bài 3:</strong> Gọi số cây lớp 9A và 9B phải trồng lần lượt là $x, y$ (cây, $x, y \\in \\mathbb{N}^*$). Hệ phương trình: $\\begin{cases} x + y = 360 \\\\ 1,1x + 1,15y = 404 \\end{cases}$. Giải hệ tìm được $x = 200$ cây (lớp 9A) và $y = 160$ cây (lớp 9B).</p>
          <p><strong>Bài 4:</strong> 1) Thể tích bồn nước hình trụ: $V = \\pi R^2 h = 3,14 \\times (0,8)^2 \\times 2 \\approx 4,02\\text{ m}^3 = 4020\\text{ lít}$.<br>2a) $\\widehat{ABO} + \\widehat{ACO} = 90^\\circ + 90^\\circ = 180^\\circ$. Tứ giác $ABOC$ nội tiếp đường tròn đường kính $AO$.<br>2b) $\\triangle ABD \\backsim \\triangle AEB$ (g.g) $\\Rightarrow \\frac{AB}{AE} = \\frac{AD}{AB} \\Rightarrow AB^2 = AD \\cdot AE$.<br>2c) Hệ thức lượng trong tam giác vuông $ABO$: $AB^2 = AH \\cdot AO \\Rightarrow AH \\cdot AO = AD \\cdot AE$. Suy ra $\\triangle AHD \\backsim \\triangle AEO$, dẫn đến tứ giác $DHOE$ nội tiếp.</p>
          <p><strong>Bài 5:</strong> Thay $c = c(a+b+c)/3$... Sử dụng BĐT Cauchy-Schwarz, ta tìm được $\\max P = \\frac{3}{2}$ khi $a = b = c = 1$.</p>
        </div>
      `
    })
  }
];

// KHO MA TRẬN ĐỀ VĂN VÀO 10 NGẪU NHIÊN ĐA DẠNG
const LIT_EXAM_VARIANTS = [
  {
    code: "VAN-01",
    author: "Chính Hữu",
    work: "Đồng chí",
    topicNLXH: "Ý nghĩa của tinh thần đoàn kết và sẻ chia trong khó khăn.",
    buildExam: (prov, lvl) => ({
      fullExamContent: `
        <div class="exam-paper">
          <h4 style="text-align: center; font-weight: bold; margin-bottom: 8px;">ĐỀ THI TUYỂN SINH VÀO LỚP 10 THPT (MA TRẬN AI)<br>MÔN THI: NGỮ VĂN - PHONG CÁCH ${prov.toUpperCase()}</h4>
          <p style="text-align: center; font-size: 0.85rem; color: #64748b; margin-bottom: 12px;">Thời gian làm bài: 120 phút - Mức độ: ${lvl}</p>
          <hr style="margin: 8px 0; border: 0; border-top: 1px solid #ccc;">

          <p><strong>PHẦN I: ĐỌC HIỂU (3,0 điểm)</strong></p>
          <p>Đọc đoạn trích sau và thực hiện các yêu cầu:</p>
          <blockquote style="font-style: italic; background: var(--bg-main); padding: 10px; border-left: 3px solid var(--primary); margin: 8px 0;">
            "Sức mạnh của một con người không nằm ở việc anh ta chưa từng vấp ngã, mà ở việc anh ta biết đứng dậy sau mỗi lần thất bại. Nghịch cảnh là người thầy nghiêm khắc nhưng công bằng, tôi luyện bản lĩnh và nuôi dưỡng lòng kiên trì. Khi bạn dũng cảm đối mặt với bão giông, bạn sẽ nhận ra tiềm năng của bản thân vô hạn hơn bạn từng nghĩ rất nhiều."
          </blockquote>
          <p>1. Xác định phương thức biểu đạt chính của đoạn trích.</p>
          <p>2. Theo tác giả, sức mạnh của một con người nằm ở điều gì?</p>
          <p>3. Chỉ ra và nêu tác dụng của biện pháp tu từ được sử dụng trong câu: <em>"Nghịch cảnh là người thầy nghiêm khắc nhưng công bằng..."</em></p>
          <p>4. Em có đồng tình với quan điểm: <em>"Nghịch cảnh tôi luyện bản lĩnh con người"</em> không? Vì sao?</p>

          <p style="margin-top: 16px;"><strong>PHẦN II: NGHỊ LUẬN XÃ HỘI (2,0 điểm)</strong></p>
          <p>Viết một đoạn văn khoảng 200 chữ trình bày suy nghĩ của em về: <strong>Ý nghĩa của sự kiên trì và tinh thần vượt khó trong cuộc sống của tuổi trẻ hôm nay</strong>.</p>

          <p style="margin-top: 16px;"><strong>PHẦN III: NGHỊ LUẬN VĂN HỌC (5,0 điểm)</strong></p>
          <p>Cảm nhận của em về vẻ đẹp của tình đồng chí, đồng đội gắn bó keo sơn qua đoạn thơ sau trong bài thơ <em>"Đồng chí"</em> của nhà thơ Chính Hữu:</p>
          <blockquote style="font-style: italic; background: var(--bg-main); padding: 10px; border-left: 3px solid var(--primary); margin: 8px 0;">
            "Ruộng nương anh gửi bạn thân cày,<br>
            Gian nhà không mặc kệ gió lung lay.<br>
            Giếng nước gốc đa nhớ người ra lính.<br>
            Anh với tôi biết từng cơn ớn lạnh,<br>
            Sốt run người vầng trán ướt mồ hôi.<br>
            Áo anh rách vai<br>
            Quần tôi có vài mảnh vá<br>
            Miệng cười buốt giá<br>
            Chân không giày<br>
            Thương nhau tay nắm lấy bàn tay."
          </blockquote>
        </div>
      `,
      solutionHtml: `
        <div class="solution-content">
          <h4 style="color: var(--primary);">HƯỚNG DẪN CHẤM BAREM NGỮ VĂN (MÃ ĐỀ VAN-01)</h4>
          <p><strong>Phần I (3,0đ):</strong> 1. PTBĐ chính: Nghị luận. 2. Sức mạnh nằm ở việc biết đứng dậy sau mỗi lần thất bại. 3. So sánh ẩn dụ: "Nghịch cảnh là người thầy..." giúp cụ thể hóa vai trò của khó khăn trong việc rèn luyện ý chí. 4. Học sinh nêu quan điểm rõ ràng, lập luận thuyết phục.</p>
          <p><strong>Phần II (2,0đ):</strong> Đảm bảo cấu trúc đoạn văn 200 chữ: Nêu vấn đề -> Giải thích kiên trì -> Bàn luận vai trò (giúp chạm tới ước mơ, rèn luyện bản lĩnh) -> Dẫn chứng thực tế -> Phản đề -> Bài học hành động.</p>
          <p><strong>Phần III (5,0đ):</strong> Mở bài giới thiệu tác giả Chính Hữu, bài thơ Đồng chí và đoạn trích. Thân bài: Luận điểm 1: Tinh thần hy sinh, gác lại tình riêng vì đại nghĩa. Luận điểm 2: Đồng cam cộng khổ chia sẻ gian lao thử thách của chiến tranh. Luận điểm 3: Tình thương yêu chân thành sâu sắc ("Thương nhau tay nắm lấy bàn tay"). Đánh giá nghệ thuật và liên hệ bản thân.</p>
        </div>
      `
    })
  },
  {
    code: "VAN-02",
    author: "Nguyễn Thành Long",
    work: "Lặng lẽ Sa Pa",
    topicNLXH: "Khát vọng cống hiến thầm lặng của thế hệ trẻ.",
    buildExam: (prov, lvl) => ({
      fullExamContent: `
        <div class="exam-paper">
          <h4 style="text-align: center; font-weight: bold; margin-bottom: 8px;">ĐỀ THI TUYỂN SINH VÀO LỚP 10 THPT (MA TRẬN AI)<br>MÔN THI: NGỮ VĂN - PHONG CÁCH ${prov.toUpperCase()}</h4>
          <p style="text-align: center; font-size: 0.85rem; color: #64748b; margin-bottom: 12px;">Thời gian làm bài: 120 phút - Mức độ: ${lvl}</p>
          <hr style="margin: 8px 0; border: 0; border-top: 1px solid #ccc;">

          <p><strong>PHẦN I: ĐỌC HIỂU (3,0 điểm)</strong></p>
          <p>Đọc ngữ liệu về giá trị của lòng biết ơn và sự sẻ chia trong kỷ nguyên số, trả lời 4 câu hỏi nhận biết, thông hiểu và vận dụng.</p>

          <p style="margin-top: 16px;"><strong>PHẦN II: NGHỊ LUẬN XÃ HỘI (2,0 điểm)</strong></p>
          <p>Viết đoạn văn khoảng 200 chữ bàn về: <strong>Lối sống cống hiến và trách nhiệm của tuổi trẻ đối với quê hương, đất nước</strong>.</p>

          <p style="margin-top: 16px;"><strong>PHẦN III: NGHỊ LUẬN VĂN HỌC (5,0 điểm)</strong></p>
          <p>Phân tích vẻ đẹp nhân vật anh thanh niên trong tác phẩm <em>"Lặng lẽ Sa Pa"</em> của nhà văn Nguyễn Thành Long qua lý tưởng sống, lòng say mê công việc và sự cởi mở, hiếu khách.</p>
        </div>
      `,
      solutionHtml: `
        <div class="solution-content">
          <h4 style="color: var(--primary);">HƯỚNG DẪN CHẤM BAREM NGỮ VĂN (MÃ ĐỀ VAN-02)</h4>
          <p>Phân tích nhân vật Anh thanh niên: Hoàn cảnh sống một mình trên đỉnh Yên Sơn 2600m; Tinh thần trách nhiệm cao độ với công việc đo gió đo mưa; Quan niệm sống đúng đắn và đẹp đẽ; Tấm lòng cởi mở, chân thành và đức tính khiêm tốn.</p>
        </div>
      `
    })
  }
];

// KHO MA TRẬN ĐỀ TIẾNG ANH VÀO 10
const ENG_EXAM_VARIANTS = [
  {
    code: "ENG-01",
    buildExam: (prov, lvl) => ({
      fullExamContent: `
        <div class="exam-paper">
          <h4 style="text-align: center; font-weight: bold; margin-bottom: 8px;">ĐỀ THI TUYỂN SINH VÀO LỚP 10 THPT (MA TRẬN AI)<br>MÔN THI: TIẾNG ANH - PHONG CÁCH ${prov.toUpperCase()}</h4>
          <p style="text-align: center; font-size: 0.85rem; color: #64748b; margin-bottom: 12px;">Thời gian: 60 phút - Mức độ: ${lvl}</p>
          <hr style="margin: 8px 0; border: 0; border-top: 1px solid #ccc;">

          <p><strong>SECTION I: PHONETICS (1.0 pt)</strong></p>
          <p>1. Choose the word whose underlined part is pronounced differently:<br>A. invi<u>t</u>ed &nbsp;&nbsp;&nbsp; B. look<u>ed</u> &nbsp;&nbsp;&nbsp; C. stopp<u>ed</u> &nbsp;&nbsp;&nbsp; D. laugh<u>ed</u></p>
          <p>2. Choose the word with different stress pattern:<br>A. pollution &nbsp;&nbsp;&nbsp; B. natural &nbsp;&nbsp;&nbsp; C. energy &nbsp;&nbsp;&nbsp; D. dangerous</p>

          <p style="margin-top: 12px;"><strong>SECTION II: VOCABULARY & GRAMMAR (4.0 pts)</strong></p>
          <p>3. If we don't save water, there _______ a severe shortage in the near future.<br>A. will be &nbsp;&nbsp;&nbsp; B. is &nbsp;&nbsp;&nbsp; C. would be &nbsp;&nbsp;&nbsp; D. was</p>
          <p>4. The doctor advised me _______ fast food and do more exercises.<br>A. avoiding &nbsp;&nbsp;&nbsp; B. to avoid &nbsp;&nbsp;&nbsp; C. avoid &nbsp;&nbsp;&nbsp; D. avoided</p>
          <p>5. She wishes she _______ around the world with her best friends.<br>A. can travel &nbsp;&nbsp;&nbsp; B. could travel &nbsp;&nbsp;&nbsp; C. will travel &nbsp;&nbsp;&nbsp; D. travels</p>
          <p>6. Ba is very tired, _______ he has to stay up late to finish his homework.<br>A. although &nbsp;&nbsp;&nbsp; B. because &nbsp;&nbsp;&nbsp; C. but &nbsp;&nbsp;&nbsp; D. so</p>

          <p style="margin-top: 12px;"><strong>SECTION III: READING COMPREHENSION (3.0 pts)</strong></p>
          <p>Read the passage about renewable energy sources (Solar power, wind power) and answer the questions.</p>

          <p style="margin-top: 12px;"><strong>SECTION IV: WRITING & TRANSFORMATION (2.0 pts)</strong></p>
          <p>Rewrite sentences keeping the same meaning:<br>1. "I am practicing English every day," Mai said.<br>$\\rightarrow$ Mai said that...<br>2. People speak English in many countries.<br>$\\rightarrow$ English is...</p>
        </div>
      `,
      solutionHtml: `
        <div class="solution-content">
          <h4 style="color: var(--primary);">ANSWER KEY & EXPLANATIONS - ENG-01</h4>
          <p>1. A (/ɪd/ vs /t/) &nbsp;|&nbsp; 2. A (stress 2nd vs 1st) &nbsp;|&nbsp; 3. A (First Conditional) &nbsp;|&nbsp; 4. B (advise sb to V) &nbsp;|&nbsp; 5. B (Wish present) &nbsp;|&nbsp; 6. C (Contrast)</p>
          <p>Writing: 1. Mai said that she was practicing English every day. 2. English is spoken in many countries.</p>
        </div>
      `
    })
  }
];

export async function generateExam({ subject, level, examType, provinceStyle, preferredMethod = "auto" }) {
  const apiKey = storage.getApiKey();

  // Nếu người dùng chọn dùng Gemini hoặc chọn auto mà đã có API Key
  if ((preferredMethod === "gemini" || preferredMethod === "auto") && apiKey && apiKey.trim().length > 15) {
    try {
      const exam = await generateViaGemini(apiKey, subject, level, examType, provinceStyle);
      await storage.saveAiExam(exam);
      return exam;
    } catch (err) {
      console.warn("Gemini API error, fallback to Smart Generator:", err);
      if (preferredMethod === "gemini") {
        throw new Error("Không thể kết nối Gemini API. Vui lòng kiểm tra lại API Key hoặc hạn mức Google AI Studio.");
      }
    }
  }

  if (preferredMethod === "gemini" && (!apiKey || apiKey.trim().length <= 15)) {
    throw new Error("Chưa cấu hình Gemini API Key. Vui lòng vào Cài đặt để nhập API Key, hoặc chuyển sang chế độ 'Ma Trận Chuẩn (Offline)'.");
  }

  // Chế độ Smart Matrix với ma trận chuẩn ngẫu nhiên
  await new Promise(r => setTimeout(r, 600));
  const localExam = generateViaSmartMatrix(subject, level, examType, provinceStyle);
  await storage.saveAiExam(localExam);
  return localExam;
}

async function generateViaGemini(apiKey, subject, level, examType, provinceStyle) {
  const subjectName = subject === 'math' ? 'Toán học' : (subject === 'eng' ? 'Tiếng Anh' : 'Ngữ Văn');
  const prompt = `Bạn là chuyên gia ra đề tuyển sinh vào lớp 10 của Sở GD&ĐT ${provinceStyle}.
Hãy biên soạn 1 bộ đề thi thử vào lớp 10 môn ${subjectName}, mức độ ${level}, hình thức ${examType}.
Đề thi phải có câu hỏi mới lạ, kèm lời giải chi tiết và mã LaTeX (.tex) hoàn chỉnh.
ĐẶC BIỆT CHÚ Ý VỀ HÌNH VẼ: Đối với câu Hình học phẳng hoặc bài toán thực tế hình không gian (nón, trụ, bồn nước, đống cát...), BẮT BUỘC bạn phải nhúng thẻ hình vẽ vector SVG sắc nét: <svg viewBox="0 0 340 240" width="300" height="210" xmlns="http://www.w3.org/2000/svg">...</svg> trực tiếp vào nội dung HTML của đề thi và lời giải để học sinh quan sát trực quan như đề thi thật.
Trả về định dạng JSON thuần túy (không markdown) với cấu trúc:
{
  "title": "Tên đề thi kèm mã đề ngẫu nhiên",
  "fullExamContent": "HTML đề thi có công thức LaTeX $...$, $$...$$",
  "solutionHtml": "HTML lời giải chi tiết",
  "latexSource": "Mã LaTeX .tex hoàn chỉnh"
}`;

  const res = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${apiKey}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      contents: [{ parts: [{ text: prompt }] }],
      generationConfig: { responseMimeType: "application/json" }
    })
  });

  if (!res.ok) throw new Error("API failed with status " + res.status);
  const data = await res.json();
  const text = data.candidates[0].content.parts[0].text;
  const exam = JSON.parse(text);
  exam.id = "ai-gen-" + Date.now();
  exam.subject = subject;
  exam.subjectName = subjectName;
  exam.province = provinceStyle;
  exam.durationMinutes = subject === 'eng' ? 60 : 120;
  exam.createdAt = new Date().toISOString();
  exam.generationMethod = "gemini";
  exam.generatorLabel = "Google Gemini AI (API Key)";
  return exam;
}

function generateViaSmartMatrix(subject, level, examType, provinceStyle) {
  const timestamp = Date.now();
  const randomSuffix = Math.floor(100 + Math.random() * 900); // 3 chữ số ngẫu nhiên
  const id = `ai-gen-${timestamp}-${randomSuffix}`;
  const subjectLabels = { math: "Toán học", eng: "Tiếng Anh", lit: "Ngữ Văn" };

  let examDataGenerated;

  if (subject === "math") {
    // Chọn ngẫu nhiên từ kho ma trận đề toán
    const variantIndex = Math.floor(Math.random() * MATH_EXAM_VARIANTS.length);
    const variant = MATH_EXAM_VARIANTS[variantIndex];
    const generated = variant.buildExam(provinceStyle, level);
    examDataGenerated = {
      title: `Đề thi thử Vào Lớp 10 [AI Generator] - Môn Toán học (Mã đề: ${variant.code}-${randomSuffix})`,
      fullExamContent: generated.fullExamContent,
      solutionHtml: generated.solutionHtml,
      latexSource: `\\documentclass[12pt,a4paper]{article}
\\usepackage[utf8]{inputenc}
\\usepackage[vietnamese]{babel}
\\usepackage{amsmath,amssymb,amsfonts}
\\usepackage{geometry}
\\geometry{a4paper, margin=2cm}
\\title{ĐỀ THI THỬ VÀO 10 MÔN TOÁN - MÃ ĐỀ ${variant.code}-${randomSuffix}}
\\begin{document}
\\maketitle
${variant.code} - Khảo sát chất lượng tuyển sinh vào lớp 10.
\\end{document}`
    };
  } else if (subject === "lit") {
    const variantIndex = Math.floor(Math.random() * LIT_EXAM_VARIANTS.length);
    const variant = LIT_EXAM_VARIANTS[variantIndex];
    const generated = variant.buildExam(provinceStyle, level);
    examDataGenerated = {
      title: `Đề thi thử Vào Lớp 10 [AI Generator] - Môn Ngữ Văn (Mã đề: ${variant.code}-${randomSuffix})`,
      fullExamContent: generated.fullExamContent,
      solutionHtml: generated.solutionHtml,
      latexSource: `\\documentclass[12pt,a4paper]{article}
\\title{ĐỀ THI THỬ VÀO 10 MÔN NGỮ VĂN - MÃ ĐỀ ${variant.code}-${randomSuffix}}
\\begin{document}
\\maketitle
Nghị luận tác phẩm ${variant.work} của ${variant.author}.
\\end{document}`
    };
  } else {
    const variantIndex = Math.floor(Math.random() * ENG_EXAM_VARIANTS.length);
    const variant = ENG_EXAM_VARIANTS[variantIndex];
    const generated = variant.buildExam(provinceStyle, level);
    examDataGenerated = {
      title: `Đề thi thử Vào Lớp 10 [AI Generator] - Môn Tiếng Anh (Mã đề: ${variant.code}-${randomSuffix})`,
      fullExamContent: generated.fullExamContent,
      solutionHtml: generated.solutionHtml,
      latexSource: `\\documentclass[12pt,a4paper]{article}
\\title{ENGLISH PRACTICE TEST GRADE 10 - CODE ${variant.code}-${randomSuffix}}
\\begin{document}
\\maketitle
Entrance Exam for High School English.
\\end{document}`
    };
  }

  return {
    id,
    title: examDataGenerated.title,
    subject,
    subjectName: subjectLabels[subject],
    durationMinutes: subject === 'eng' ? 60 : 120,
    examType,
    province: provinceStyle,
    createdAt: new Date().toISOString(),
    fullExamContent: examDataGenerated.fullExamContent,
    solutionHtml: examDataGenerated.solutionHtml,
    latexSource: examDataGenerated.latexSource,
    quizQuestions: [],
    generationMethod: "matrix",
    generatorLabel: "Smart Matrix (Ma Trận Chuẩn)"
  };
}
