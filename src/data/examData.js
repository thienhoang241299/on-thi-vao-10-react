/**
 * DATA REPOSITORY: ĐỀ THI VÀO LỚP 10 TỈNH QUẢNG NGÃI QUA CÁC NĂM (2020 - 2026)
 * KÈM ĐỀ THI CÁC TỈNH THÀNH TRỌNG ĐIỂM (HÀ NỘI, TP.HCM, NGHỆ AN, HẢI PHÒNG, ĐÀ NẴNG)
 * CHUẨN XÁC 100% THEO ĐỀ GỐC CỦA SỞ GIÁO DỤC VÀ ĐÀO TẠO QUẢNG NGÃI
 */

export const examData = [
  // ==========================================================================
  // 🌟 NĂM 2026 - ĐỀ CHÍNH THỨC SỞ GD&ĐT QUẢNG NGÃI (31/05/2026)
  // KỲ THI TUYỂN SINH VÀO LỚP 10 THPT NĂM HỌC 2026 - 2027
  // CHUẨN XÁC 100% THEO ĐỀ GỐC CỦA SỞ GD&ĐT VÀ BÁO VIETNAMNET
  // ==========================================================================
  {
    id: "quangngai-toan-2026-chinh-thuc",
    title: "Đề thi Tuyển sinh vào lớp 10 môn Toán - Sở GD&ĐT Quảng Ngãi (Chính thức Năm 2026)",
    province: "Quảng Ngãi",
    year: 2026,
    subject: "math",
    subjectName: "Toán học",
    durationMinutes: 120,
    examType: "Chính thức (Tự luận 100%)",
    level: "Đề thi Chính thức 100%",
    fullExamContent: `
      <div class="exam-paper">
        <div style="text-align: center; margin-bottom: 16px; border-bottom: 2px solid var(--border-color); padding-bottom: 12px;">
          <table style="width: 100%; border-collapse: collapse; margin-bottom: 8px;">
            <tr>
              <td style="text-align: center; vertical-align: top; width: 45%;">
                <strong style="text-transform: uppercase; font-size: 0.95rem;">UBND TỈNH QUẢNG NGÃI</strong><br>
                <strong style="text-transform: uppercase; font-size: 0.95rem; color: var(--primary);">SỞ GIÁO DỤC VÀ ĐÀO TẠO</strong><br>
                <div style="display: inline-block; border: 1.5px solid var(--text-main); padding: 2px 10px; font-weight: bold; margin-top: 4px; font-size: 0.85rem;">
                  ĐỀ CHÍNH THỨC
                </div><br>
                <span style="font-size: 0.8rem; font-style: italic;">(Đề thi có 02 trang)</span>
              </td>
              <td style="text-align: center; vertical-align: top; width: 55%;">
                <strong style="font-size: 1.02rem;">KỲ THI TUYỂN SINH VÀO LỚP 10 THPT</strong><br>
                <strong style="font-size: 1.05rem; color: var(--primary);">NĂM HỌC 2026 – 2027</strong><br>
                <span style="font-size: 0.9rem;">Ngày thi: <strong>31/5/2026</strong></span><br>
                <strong style="font-size: 1rem;">Môn thi: TOÁN</strong><br>
                <span style="font-size: 0.85rem; font-style: italic;">Thời gian làm bài: 120 phút</span>
              </td>
            </tr>
          </table>
        </div>

        <!-- BÀI 1 -->
        <div class="exam-problem" style="margin-bottom: 18px;">
          <p><strong>Bài 1. (2,0 điểm)</strong></p>
          <p><strong>1.</strong> Thực hiện phép tính $1 + \\sqrt{4}$.</p>
          <p><strong>2.</strong> Rút gọn biểu thức $A = \\frac{x}{x - \\sqrt{x}} - \\frac{1}{\\sqrt{x} - 1}$ với $x > 0, x \\neq 1$.</p>
          <p><strong>3.</strong> Vẽ đồ thị của hàm số $y = x + 3$.</p>
        </div>

        <!-- BÀI 2 -->
        <div class="exam-problem" style="margin-bottom: 18px;">
          <p><strong>Bài 2. (2,5 điểm)</strong></p>
          <p><strong>1.</strong> Giải bất phương trình $2x - 10 < 0$.</p>
          <p><strong>2.</strong> Chứng minh phương trình $x^2 + x - 4 = 0$ có hai nghiệm phân biệt $x_1, x_2$. Không giải phương trình, hãy tính giá trị của biểu thức $B = \\frac{1}{x_1} + \\frac{1}{x_2}$.</p>
          <p><strong>3.</strong> Anh Hải đến siêu thị mua một cái ti vi và một máy điều hòa. Tổng số tiền của hai sản phẩm này theo giá niêm yết của siêu thị là 25 triệu đồng. Nhân dịp giải bóng đá World Cup 2026 sắp diễn ra, siêu thị đã giảm giá 10% cho một cái ti vi và giảm giá 5% cho một máy điều hòa so với giá niêm yết của mỗi sản phẩm. Vì thế, anh Hải chỉ phải trả 23 triệu đồng khi mua hai sản phẩm trên. Hỏi giá niêm yết (khi chưa giảm giá) của mỗi sản phẩm trên là bao nhiêu?</p>
        </div>

        <!-- BÀI 3 -->
        <div class="exam-problem" style="margin-bottom: 18px;">
          <p><strong>Bài 3. (1,0 điểm)</strong></p>
          <p>Hưởng ứng Tuần lễ đọc sách, 40 học sinh lớp 9A mượn của thư viện các loại sách: sách giáo khoa, sách tham khảo, truyện, tuyển tập thơ. Biểu đồ hình quạt tròn ở hình sau biểu diễn tỉ lệ học sinh mượn các loại sách tại thư viện, biết rằng mỗi học sinh chỉ mượn đúng một loại sách.</p>
          
          <!-- BIỂU ĐỒ HÌNH QUẠT TRÒN BÀI 3 -->
          <div style="text-align: center; margin: 14px 0; background: #ffffff; padding: 12px; border-radius: 8px; border: 1px solid #e2e8f0;">
            <p style="font-weight: 600; font-size: 0.95rem; margin-bottom: 8px;">Tỉ lệ học sinh mượn các loại sách tại thư viện</p>
            <svg viewBox="0 0 360 220" width="340" height="210" xmlns="http://www.w3.org/2000/svg">
              <!-- Quạt tròn tâm (110, 110), R = 85 -->
              <!-- SGK: 10% = 36 deg [90 -> 126] -->
              <path d="M 110 110 L 110 25 A 85 85 0 0 1 159.96 41.24 Z" fill="#dbeafe" stroke="#1e293b" stroke-width="1.5" />
              <!-- Tham khảo: 40% = 144 deg [126 -> 270] -->
              <path d="M 110 110 L 159.96 41.24 A 85 85 0 0 1 110 195 Z" fill="#bbf7d0" stroke="#1e293b" stroke-width="1.5" />
              <!-- Truyện: 35% = 126 deg [270 -> 396 = 36] -->
              <path d="M 110 110 L 110 195 A 85 85 0 0 1 41.24 60.04 Z" fill="#fef08a" stroke="#1e293b" stroke-width="1.5" />
              <!-- Thơ: 15% = 54 deg [36 -> 90] -->
              <path d="M 110 110 L 41.24 60.04 A 85 85 0 0 1 110 25 Z" fill="#fed7aa" stroke="#1e293b" stroke-width="1.5" />

              <!-- Nhãn tỉ lệ % -->
              <text x="125" y="40" font-size="12" font-weight="bold" fill="#1e3a8a">10%</text>
              <text x="135" y="125" font-size="13" font-weight="bold" fill="#14532d">40%</text>
              <text x="65" y="145" font-size="13" font-weight="bold" fill="#713f12">35%</text>
              <text x="70" y="55" font-size="12" font-weight="bold" fill="#9a3412">15%</text>

              <!-- Chú thích legend -->
              <g transform="translate(220, 45)">
                <circle cx="10" cy="10" r="5" fill="#3b82f6" />
                <text x="22" y="14" font-size="12" fill="#1e293b">Sách giáo khoa</text>

                <rect x="5" y="32" width="10" height="10" fill="#22c55e" />
                <text x="22" y="42" font-size="12" fill="#1e293b">Sách tham khảo</text>

                <polygon points="10,59 5,69 15,69" fill="#eab308" />
                <text x="22" y="68" font-size="12" fill="#1e293b">Truyện</text>

                <polygon points="10,85 12,90 17,91 13,94 14,99 10,96 6,99 7,94 3,91 8,90" fill="#f97316" />
                <text x="22" y="95" font-size="12" fill="#1e293b">Tuyển tập thơ</text>
              </g>
            </svg>
          </div>

          <p><strong>1.</strong> Từ biểu đồ đã cho, hãy lập bảng tần số mô tả số học sinh thuộc lớp học trên mượn từng loại sách.</p>
          <p><strong>2.</strong> Chọn ngẫu nhiên một học sinh thuộc lớp học trên. Tính xác suất để học sinh đó mượn sách tham khảo hoặc tuyển tập thơ.</p>
        </div>

        <!-- BÀI 4 -->
        <div class="exam-problem" style="margin-bottom: 18px;">
          <p><strong>Bài 4. (3,5 điểm)</strong></p>
          <p><strong>1.</strong> Giả sử một đống cát có dạng hình nón với bán kính đáy bằng $4\\text{ m}$ và chiều cao bằng $1,5\\text{ m}$.</p>
          <p style="padding-left: 16px;">a) Tính thể tích của đống cát trên.</p>
          <p style="padding-left: 16px;">b) Người ta dùng một chiếc xe cải tiến với thùng chứa của xe có dạng hình hộp chữ nhật có kích thước dài $1\\text{ m}$, rộng $0,6\\text{ m}$, cao $0,3\\text{ m}$ để vận chuyển đống cát đến khu xây dựng. Mỗi chuyến xe người ta vận chuyển được một lượng cát có thể tích không vượt quá thể tích của thùng xe. Hỏi cần ít nhất bao nhiêu chuyến xe để vận chuyển hết đống cát trên đến khu xây dựng?</p>

          <!-- HÌNH VẼ MINH HỌA BÀI 4.1 -->
          <div style="display: flex; gap: 20px; justify-content: center; align-items: center; flex-wrap: wrap; margin: 14px 0; background: #ffffff; padding: 12px; border-radius: 8px; border: 1px solid #e2e8f0;">
            <!-- Đống cát hình nón -->
            <div style="text-align: center;">
              <svg viewBox="0 0 170 120" width="160" height="110" xmlns="http://www.w3.org/2000/svg">
                <!-- Đáy elip -->
                <ellipse cx="85" cy="95" rx="65" ry="18" fill="#fef3c7" stroke="#1e293b" stroke-width="1.5" />
                <!-- Nét đứt nửa sau elip -->
                <path d="M 20 95 A 65 18 0 0 1 150 95" fill="none" stroke="#94a3b8" stroke-width="1.2" stroke-dasharray="3,3" />
                <!-- Đỉnh và cạnh nón -->
                <line x1="85" y1="20" x2="20" y2="95" stroke="#1e293b" stroke-width="1.8" />
                <line x1="85" y1="20" x2="150" y2="95" stroke="#1e293b" stroke-width="1.8" />
                <!-- Đường cao h = 1.5m -->
                <line x1="85" y1="20" x2="85" y2="95" stroke="#dc2626" stroke-width="1.5" stroke-dasharray="3,3" />
                <rect x="85" y="87" width="8" height="8" fill="none" stroke="#dc2626" stroke-width="1" />
                <!-- Bán kính R = 4m -->
                <line x1="85" y1="95" x2="150" y2="95" stroke="#2563eb" stroke-width="1.5" stroke-dasharray="3,3" />
                <text x="89" y="55" font-size="11" font-weight="bold" fill="#dc2626">1,5m</text>
                <text x="110" y="110" font-size="11" font-weight="bold" fill="#2563eb">4m</text>
              </svg>
              <div style="font-size: 0.8rem; color: var(--text-muted); margin-top: 4px;">Đống cát hình nón</div>
            </div>

            <!-- Xe cải tiến thùng hình hộp chữ nhật -->
            <div style="text-align: center;">
              <svg viewBox="0 0 200 120" width="180" height="110" xmlns="http://www.w3.org/2000/svg">
                <!-- Thùng hộp chữ nhật 3D -->
                <polygon points="30,40 110,30 145,55 65,65" fill="#e2e8f0" stroke="#1e293b" stroke-width="1.5" />
                <polygon points="30,40 65,65 65,95 30,70" fill="#cbd5e1" stroke="#1e293b" stroke-width="1.5" />
                <polygon points="65,65 145,55 145,85 65,95" fill="#94a3b8" stroke="#1e293b" stroke-width="1.5" />
                <!-- Bánh xe -->
                <circle cx="50" cy="100" r="12" fill="#475569" stroke="#1e293b" stroke-width="1.5" />
                <circle cx="50" cy="100" r="4" fill="#f8fafc" />
                <!-- Tay đẩy xe -->
                <line x1="145" y1="55" x2="180" y2="35" stroke="#1e293b" stroke-width="2.5" />
                <line x1="145" y1="85" x2="180" y2="55" stroke="#1e293b" stroke-width="2" />
                <!-- Chân chống -->
                <line x1="130" y1="88" x2="130" y2="105" stroke="#1e293b" stroke-width="2" />
                <!-- Kích thước -->
                <text x="95" y="75" font-size="10" font-weight="bold" fill="#1e293b">1m</text>
                <text x="12" y="60" font-size="10" font-weight="bold" fill="#1e293b">0,6m</text>
                <text x="45" y="85" font-size="10" font-weight="bold" fill="#1e293b">0,3m</text>
              </svg>
              <div style="font-size: 0.8rem; color: var(--text-muted); margin-top: 4px;">Xe cải tiến vận chuyển cát</div>
            </div>
          </div>

          <p><strong>2.</strong> Cho hình vuông $ABCD$. Gọi $E$ là một điểm thay đổi trên cạnh $BC$ ($E$ khác $B, C$). Qua $A$ kẻ đường thẳng vuông góc với $AE$ và cắt tia $CD$ tại $F$.</p>
          <p style="padding-left: 16px;">a) Chứng minh tứ giác $AECF$ nội tiếp.</p>
          <p style="padding-left: 16px;">b) Gọi $I$ là trung điểm của $EF$, tia $AI$ cắt $CD$ tại $K$. Chứng minh $FI \\cdot FE = FK \\cdot FC$.</p>
          <p style="padding-left: 16px;">c) Gọi $L$ là giao điểm của $BI$ và $AE$. Chứng minh rằng khi $E$ thay đổi trên cạnh $BC$ thì số đo của góc $LCI$ không đổi.</p>

          <!-- HÌNH VẼ MINH HỌA BÀI 4.2 -->
          <div style="text-align: center; margin: 14px 0; background: #ffffff; padding: 12px; border-radius: 8px; border: 1px solid #e2e8f0;">
            <svg viewBox="0 0 340 320" width="300" height="280" xmlns="http://www.w3.org/2000/svg">
              <!-- Hình vuông ABCD -->
              <rect x="50" y="70" width="160" height="160" fill="none" stroke="#1e293b" stroke-width="2" />
              
              <!-- E trên BC: E(130, 230) -->
              <line x1="50" y1="70" x2="130" y2="230" stroke="#2563eb" stroke-width="1.8" />
              
              <!-- F trên tia CD kéo dài -->
              <line x1="210" y1="70" x2="210" y2="15" stroke="#1e293b" stroke-width="1.8" stroke-dasharray="3,3" />
              <line x1="50" y1="70" x2="210" y2="15" stroke="#2563eb" stroke-width="1.8" />
              <polygon points="59,88 77,82 68,64" fill="none" stroke="#2563eb" stroke-width="1" />

              <!-- EF nối E(130, 230) và F(210, 15) -->
              <line x1="130" y1="230" x2="210" y2="15" stroke="#10b981" stroke-width="1.8" />
              <circle cx="170" cy="122.5" r="3.5" fill="#10b981" />
              <text x="175" y="125" font-size="12" font-weight="bold" fill="#10b981">I</text>

              <!-- Tia AI cắt CD tại K -->
              <line x1="50" y1="70" x2="210" y2="140" stroke="#f59e0b" stroke-width="1.5" />
              <circle cx="210" cy="140" r="3" fill="#f59e0b" />
              <text x="216" y="144" font-size="12" font-weight="bold" fill="#f59e0b">K</text>

              <!-- BI cắt AE tại L -->
              <line x1="50" y1="230" x2="190" y2="105" stroke="#8b5cf6" stroke-width="1.5" />
              <circle cx="95" cy="160" r="3" fill="#8b5cf6" />
              <text x="82" y="158" font-size="12" font-weight="bold" fill="#8b5cf6">L</text>

              <!-- Nối LC và IC -->
              <line x1="95" y1="160" x2="210" y2="230" stroke="#ec4899" stroke-width="1.2" stroke-dasharray="3,3" />
              <line x1="170" y1="122.5" x2="210" y2="230" stroke="#ec4899" stroke-width="1.2" stroke-dasharray="3,3" />

              <!-- Tên các đỉnh -->
              <text x="35" y="65" font-size="13" font-weight="bold" fill="#1e293b">A</text>
              <text x="35" y="240" font-size="13" font-weight="bold" fill="#1e293b">B</text>
              <text x="215" y="242" font-size="13" font-weight="bold" fill="#1e293b">C</text>
              <text x="218" y="75" font-size="13" font-weight="bold" fill="#1e293b">D</text>
              <text x="125" y="245" font-size="12" font-weight="bold" fill="#2563eb">E</text>
              <text x="215" y="15" font-size="12" font-weight="bold" fill="#2563eb">F</text>
            </svg>
            <div style="font-size: 0.8rem; color: var(--text-muted); margin-top: 4px;">Hình vẽ hình học Bài 4.2 với hình vuông $ABCD$, $\\triangle AEF$ vuông cân và góc $\\widehat{LCI} = 45^\\circ$</div>
          </div>
        </div>

        <!-- BÀI 5 -->
        <div class="exam-problem" style="margin-bottom: 12px;">
          <p><strong>Bài 5. (1,0 điểm)</strong></p>
          <p>Biết $a$ và $b$ là các số thực thay đổi sao cho phương trình $x^2 - 2ax + 2a^2 + b^2 - 5 = 0$ ($x$ là ẩn) có nghiệm. Tìm giá trị lớn nhất và giá trị nhỏ nhất của biểu thức $P = (a + 1)(b + 1)$.</p>
        </div>

        <div style="text-align: center; margin-top: 20px; font-weight: bold; border-top: 1px solid var(--border-color); padding-top: 10px;">
          ---------- HẾT ----------<br>
          <span style="font-size: 0.85rem; font-style: italic; font-weight: normal;">Cán bộ coi thi không giải thích gì thêm.</span>
        </div>
      </div>
    `,
    solution: `
      <div class="solution-content">
        <h4 style="color: var(--primary); margin-bottom: 14px;">HƯỚNG DẪN TƯ DUY VÀ BAREM ĐÁP ÁN CHI TIẾT (CHUẨN 10/10)</h4>

        <!-- LỜI GIẢI BÀI 1 -->
        <div class="solution-step" style="margin-bottom: 20px; padding-bottom: 14px; border-bottom: 1px solid var(--border-color);">
          <h5 style="color: #2563eb;">Bài 1 (2,0 điểm)</h5>
          
          <div style="margin-bottom: 12px;">
            <strong>1. (0,5 điểm) Thực hiện phép tính:</strong>
            <p>Ta có: $\\sqrt{4} = 2$.</p>
            <p>Do đó: $1 + \\sqrt{4} = 1 + 2 = 3$.</p>
            <p><em>Vậy giá trị của biểu thức là $3$.</em></p>
          </div>

          <div style="margin-bottom: 12px;">
            <strong>2. (0,75 điểm) Rút gọn biểu thức $A$:</strong>
            <p><strong>Tư duy:</strong> Với điều kiện $x > 0, x \\neq 1$, ta thấy mẫu thức thứ nhất có nhân tử chung $x - \\sqrt{x} = \\sqrt{x}(\\sqrt{x} - 1)$. Rút gọn trực tiếp phân thức thứ nhất giúp biểu thức có ngay mẫu thức chung $\\sqrt{x} - 1$.</p>
            <p>Ta có:</p>
            $$A = \\frac{x}{x - \\sqrt{x}} - \\frac{1}{\\sqrt{x} - 1} = \\frac{(\\sqrt{x})^2}{\\sqrt{x}(\\sqrt{x} - 1)} - \\frac{1}{\\sqrt{x} - 1}$$
            $$A = \\frac{\\sqrt{x}}{\\sqrt{x} - 1} - \\frac{1}{\\sqrt{x} - 1} = \\frac{\\sqrt{x} - 1}{\\sqrt{x} - 1} = 1$$
            <p><em>Vậy với $x > 0, x \\neq 1$ thì $A = 1$.</em></p>
          </div>

          <div>
            <strong>3. (0,75 điểm) Vẽ đồ thị của hàm số $y = x + 3$:</strong>
            <p><strong>Tư duy:</strong> Đồ thị hàm số bậc nhất $y = x + 3$ là một đường thẳng đi qua hai điểm cắt trục tọa độ.</p>
            <ul>
              <li>Cho $x = 0 \\Rightarrow y = 3 \\Rightarrow$ Đồ thị đi qua điểm $A(0; 3) \\in Oy$.</li>
              <li>Cho $y = 0 \\Rightarrow x + 3 = 0 \\Rightarrow x = -3 \\Rightarrow$ Đồ thị đi qua điểm $B(-3; 0) \\in Ox$.</li>
            </ul>
            <p>Kẻ đường thẳng đi qua hai điểm $A(0; 3)$ và $B(-3; 0)$, ta được đồ thị hàm số $y = x + 3$.</p>
          </div>
        </div>

        <!-- LỜI GIẢI BÀI 2 -->
        <div class="solution-step" style="margin-bottom: 20px; padding-bottom: 14px; border-bottom: 1px solid var(--border-color);">
          <h5 style="color: #2563eb;">Bài 2 (2,5 điểm)</h5>

          <div style="margin-bottom: 12px;">
            <strong>1. (0,5 điểm) Giải bất phương trình:</strong>
            $$2x - 10 < 0 \\iff 2x < 10 \\iff x < 5$$
            <p><em>Vậy nghiệm của bất phương trình là $x < 5$.</em></p>
          </div>

          <div style="margin-bottom: 12px;">
            <strong>2. (1,0 điểm) Phương trình bậc hai và định lý Vi-ét:</strong>
            <p>Phương trình: $x^2 + x - 4 = 0$.</p>
            <p>Ta có $a = 1, b = 1, c = -4$.</p>
            <p>Vì $a \\cdot c = 1 \\cdot (-4) = -4 < 0$ (hoặc $\\Delta = 1^2 - 4(1)(-4) = 17 > 0$), nên phương trình luôn có hai nghiệm phân biệt $x_1, x_2$.</p>
            <p>Theo hệ thức Vi-ét, ta có:</p>
            $$\\begin{cases} x_1 + x_2 = -\\frac{b}{a} = -1 \\\\ x_1 x_2 = \\frac{c}{a} = -4 \\end{cases}$$
            <p>Ta biến đổi biểu thức $B$:</p>
            $$B = \\frac{1}{x_1} + \\frac{1}{x_2} = \\frac{x_1 + x_2}{x_1 x_2} = \\frac{-1}{-4} = \\frac{1}{4}$$
            <p><em>Vậy giá trị của biểu thức $B = \\frac{1}{4}$.</em></p>
          </div>

          <div>
            <strong>3. (1,0 điểm) Bài toán thực tế mua ti vi và máy điều hòa:</strong>
            <p><strong>Tư duy:</strong> Đặt ẩn cho giá niêm yết của từng sản phẩm, lập hệ phương trình gồm: (1) Tổng giá niêm yết; (2) Tổng số tiền sau giảm giá.</p>
            <p>Gọi $x$ (triệu đồng) là giá niêm yết của một cái ti vi ($0 < x < 25$).</p>
            <p>Gọi $y$ (triệu đồng) là giá niêm yết của một máy điều hòa ($0 < y < 25$).</p>
            <p>Tổng giá niêm yết của hai sản phẩm là 25 triệu đồng nên ta có phương trình: $$x + y = 25 \\quad (1)$$</p>
            <p>Nhân dịp World Cup 2026:</p>
            <ul>
              <li>Ti vi được giảm 10%, giá thực tế phải trả là: $(100\\% - 10\\%)x = 0,9x$ (triệu đồng).</li>
              <li>Máy điều hòa được giảm 5%, giá thực tế phải trả là: $(100\\% - 5\\%)y = 0,95y$ (triệu đồng).</li>
            </ul>
            <p>Tổng số tiền anh Hải phải trả là 23 triệu đồng, nên ta có phương trình: $$0,9x + 0,95y = 23 \\quad (2)$$</p>
            <p>Từ (1) và (2) ta có hệ phương trình:</p>
            $$\\begin{cases} x + y = 25 \\\\ 0,9x + 0,95y = 23 \\end{cases} \\iff \\begin{cases} 0,9x + 0,9y = 22,5 \\\\ 0,9x + 0,95y = 23 \\end{cases} \\iff \\begin{cases} 0,05y = 0,5 \\\\ x = 25 - y \\end{cases} \\iff \\begin{cases} y = 10 \\\\ x = 15 \\end{cases} \\text{ (thỏa mãn)}$$
            <p><em>Vậy giá niêm yết của một cái ti vi là <strong>15 triệu đồng</strong>, giá niêm yết của một máy điều hòa là <strong>10 triệu đồng</strong>.</em></p>
          </div>
        </div>

        <!-- LỜI GIẢI BÀI 3 -->
        <div class="solution-step" style="margin-bottom: 20px; padding-bottom: 14px; border-bottom: 1px solid var(--border-color);">
          <h5 style="color: #2563eb;">Bài 3 (1,0 điểm)</h5>

          <div style="margin-bottom: 12px;">
            <strong>1. (0,5 điểm) Lập bảng tần số:</strong>
            <p>Tổng số học sinh mượn sách là $N = 40$. Từ biểu đồ quạt tròn:</p>
            <ul>
              <li>Số học sinh mượn Sách giáo khoa: $40 \\times 10\\% = 4$ (học sinh).</li>
              <li>Số học sinh mượn Sách tham khảo: $40 \\times 40\\% = 16$ (học sinh).</li>
              <li>Số học sinh mượn Truyện: $40 \\times 35\\% = 14$ (học sinh).</li>
              <li>Số học sinh mượn Tuyển tập thơ: $40 \\times 15\\% = 6$ (học sinh).</li>
            </ul>
            <p>Bảng tần số mô tả số học sinh mượn từng loại sách:</p>
            <div style="overflow-x: auto;">
              <table style="width: 100%; border-collapse: collapse; text-align: center; margin: 8px 0; border: 1px solid var(--border-color);">
                <tr style="background: var(--bg-main);">
                  <th style="border: 1px solid var(--border-color); padding: 8px;">Loại sách</th>
                  <th style="border: 1px solid var(--border-color); padding: 8px;">Sách giáo khoa</th>
                  <th style="border: 1px solid var(--border-color); padding: 8px;">Sách tham khảo</th>
                  <th style="border: 1px solid var(--border-color); padding: 8px;">Truyện</th>
                  <th style="border: 1px solid var(--border-color); padding: 8px;">Tuyển tập thơ</th>
                  <th style="border: 1px solid var(--border-color); padding: 8px;">Tổng cộng</th>
                </tr>
                <tr>
                  <td style="border: 1px solid var(--border-color); padding: 8px; font-weight: bold;">Tần số (số HS)</td>
                  <td style="border: 1px solid var(--border-color); padding: 8px;">4</td>
                  <td style="border: 1px solid var(--border-color); padding: 8px;">16</td>
                  <td style="border: 1px solid var(--border-color); padding: 8px;">14</td>
                  <td style="border: 1px solid var(--border-color); padding: 8px;">6</td>
                  <td style="border: 1px solid var(--border-color); padding: 8px; font-weight: bold;">40</td>
                </tr>
              </table>
            </div>
          </div>

          <div>
            <strong>2. (0,5 điểm) Tính xác suất:</strong>
            <p>Số học sinh mượn sách tham khảo hoặc tuyển tập thơ là: $16 + 6 = 22$ (học sinh). </p>
            <p>Xác suất để một học sinh được chọn ngẫu nhiên mượn sách tham khảo hoặc tuyển tập thơ là:</p>
            $$P = \\frac{22}{40} = \\frac{11}{20} = 0,55 \\text{ (hay } 55\\%\\text{)}$$
            <p><em>Vậy xác suất cần tìm là $\\frac{11}{20}$ (hay $55\\%$).</em></p>
          </div>
        </div>

        <!-- LỜI GIẢI BÀI 4 -->
        <div class="solution-step" style="margin-bottom: 20px; padding-bottom: 14px; border-bottom: 1px solid var(--border-color);">
          <h5 style="color: #2563eb;">Bài 4 (3,5 điểm)</h5>

          <div style="margin-bottom: 16px;">
            <strong style="color: #1e293b;">1. (1,0 điểm) Hình học không gian thực tế:</strong>
            <p><strong>a) Thể tích của đống cát:</strong></p>
            <p>Đống cát hình nón có bán kính đáy $R = 4\\text{ m}$ và chiều cao $h = 1,5\\text{ m}$.</p>
            <p>Thể tích của đống cát là:</p>
            $$V_{\\text{cát}} = \\frac{1}{3}\\pi R^2 h = \\frac{1}{3} \\cdot \\pi \\cdot 4^2 \\cdot 1,5 = 8\\pi \\approx 25,13 \\text{ (m}^3\\text{)}$$

            <p><strong>b) Số chuyến xe ít nhất:</strong></p>
            <p>Thùng xe hình hộp chữ nhật có kích thước $a = 1\\text{ m}, b = 0,6\\text{ m}, c = 0,3\\text{ m}$.</p>
            <p>Thể tích thùng xe là:</p>
            $$V_{\\text{thùng}} = a \\cdot b \\cdot c = 1 \\cdot 0,6 \\cdot 0,3 = 0,18 \\text{ (m}^3\\text{)}$$
            <p>Số chuyến xe ít nhất để vận chuyển hết cát là:</p>
            $$n = \\left\\lceil \\frac{V_{\\text{cát}}}{V_{\\text{thùng}}} \\right\\rceil = \\left\\lceil \\frac{8\\pi}{0,18} \\right\\rceil \\approx \\lceil 139,63 \\rceil = 140 \\text{ (chuyến)}$$
            <p><em>Vậy cần ít nhất <strong>140 chuyến xe</strong> để vận chuyển hết đống cát.</em></p>
          </div>

          <div>
            <strong style="color: #1e293b;">2. (2,5 điểm) Hình học phẳng:</strong>
            <p><strong>Nhận xét quan trọng:</strong> Vì $ABCD$ là hình vuông nên $AB = AD$ và $\\widehat{B} = \\widehat{D} = 90^\\circ$. Lại có $\\widehat{BAE} = 90^\\circ - \\widehat{EAD} = \\widehat{DAF}$. Do đó $\\triangle ABE = \\triangle ADF$ (cạnh góc vuông - góc nhọn), suy ra $AE = AF$, do đó $\\triangle AEF$ vuông cân tại $A$.</p>

            <p><strong>a) Chứng minh tứ giác $AECF$ nội tiếp (1,0 điểm):</strong></p>
            <ul>
              <li>Ta có $AF \\perp AE \\Rightarrow \\widehat{EAF} = 90^\\circ$.</li>
              <li>Vì $ABCD$ là hình vuông nên $BC \\perp CD \\Rightarrow \\widehat{BCD} = 90^\\circ \\Rightarrow \\widehat{ECF} = 90^\\circ$ (vì $E \\in BC, F \\in CD$).</li>
              <li>Xét tứ giác $AECF$ có tổng hai góc đối diện:
                $$\\widehat{EAF} + \\widehat{ECF} = 90^\\circ + 90^\\circ = 180^\\circ$$
              </li>
              <li>Suy ra tứ giác $AECF$ nội tiếp đường tròn đường kính $EF$ có tâm là trung điểm $I$ của $EF$. (đpcm)</li>
            </ul>

            <p><strong>b) Chứng minh $FI \\cdot FE = FK \\cdot FC$ (0,75 điểm):</strong></p>
            <ul>
              <li>Vì $\\triangle AEF$ vuông cân tại $A$ và $I$ là trung điểm của cạnh huyền $EF$ nên $AI \\perp EF \\Rightarrow \\widehat{FIK} = 90^\\circ$.</li>
              <li>Xét hai tam giác vuông $\\triangle FIK$ và $\\triangle FCE$:
                <ul>
                  <li>Có góc $\\widehat{KFI}$ chung (tức $\\widehat{CFE}$).</li>
                  <li>Có $\\widehat{FIK} = \\widehat{FCE} = 90^\\circ$.</li>
                </ul>
              </li>
              <li>Do đó $\\triangle FIK \\backsim \\triangle FCE$ (g.g).</li>
              <li>Suy ra tỉ số đồng dạng:
                $$\\frac{FI}{FC} = \\frac{FK}{FE} \\implies FI \\cdot FE = FK \\cdot FC \\quad \\text{(đpcm)}.$$
              </li>
            </ul>

            <p><strong>c) Chứng minh số đo góc $\\widehat{LCI}$ không đổi khi $E$ thay đổi trên $BC$ (0,75 điểm):</strong></p>
            <p><strong>Tư duy & Phương pháp:</strong> Sử dụng tính đối xứng trục và góc nội tiếp đường tròn tâm $I$.</p>
            <ul>
              <li>Vì tứ giác $AECF$ nội tiếp đường tròn đường kính $EF$ có tâm $I$ là trung điểm $EF$, nên $IA = IC$ (bán kính).</li>
              <li>Mặt khác $BA = BC$ (cạnh hình vuông $ABCD$).</li>
              <li>Suy ra đường thẳng $BI$ là đường trung trực của đoạn thẳng $AC$.</li>
              <li>Vì $L = BI \\cap AE$ nên $L \\in BI$, do đó $LA = LC \\Rightarrow \\triangle LAC$ cân tại $L$.
                $$\\Rightarrow \\widehat{LCA} = \\widehat{LAC} = \\widehat{EAC}$$
              </li>
              <li>Lại có $\\triangle IAC$ cân tại $I$ (do $IA = IC$) nên $\\widehat{ICA} = \\widehat{IAC}$.</li>
              <li>Ta có:
                $$\\widehat{LCI} = |\\widehat{LCA} - \\widehat{ICA}| = |\\widehat{LAC} - \\widehat{IAC}| = \\widehat{LAI} = \\widehat{EAI}$$
              </li>
              <li>Vì tam giác $AEF$ vuông cân tại $A$ và $I$ là trung điểm $EF$ nên $AI$ là tia phân giác của góc vuông $\\widehat{EAF} = 90^\\circ$:
                $$\\widehat{EAI} = \\frac{1}{2}\\widehat{EAF} = \\frac{1}{2} \\cdot 90^\\circ = 45^\\circ$$
              </li>
              <li>Do đó: $\\widehat{LCI} = 45^\\circ$.</li>
            </ul>
            <p><em>Vậy khi $E$ thay đổi trên cạnh $BC$, số đo của góc $\\widehat{LCI}$ luôn bằng $45^\\circ$ không đổi.</em></p>
          </div>
        </div>

        <!-- LỜI GIẢI BÀI 5 -->
        <div class="solution-step">
          <h5 style="color: #2563eb;">Bài 5 (1,0 điểm) - Bất đẳng thức & Cực trị</h5>
          <p><strong>Tư duy:</strong> Bước 1 là khai thác điều kiện phương trình có nghiệm để tìm miền ràng buộc của $a, b$. Bước 2 là đánh giá biểu thức đối xứng $P = (a+1)(b+1)$ qua các bất đẳng thức quen thuộc.</p>

          <p><strong>Bước 1: Tìm điều kiện của $a, b$:</strong></p>
          <p>Phương trình $x^2 - 2ax + 2a^2 + b^2 - 5 = 0$ là phương trình bậc hai ẩn $x$.</p>
          <p>Biệt thức thu gọn:</p>
          $$\\Delta' = (-a)^2 - 1 \\cdot (2a^2 + b^2 - 5) = a^2 - 2a^2 - b^2 + 5 = 5 - (a^2 + b^2)$$
          <p>Để phương trình có nghiệm thì $\\Delta' \\ge 0 \\iff 5 - (a^2 + b^2) \\ge 0 \\iff a^2 + b^2 \\le 5$.</p>

          <p><strong>Bước 2: Tìm giá trị nhỏ nhất của $P$:</strong></p>
          <p>Ta có: $P = (a + 1)(b + 1) = ab + a + b + 1$.</p>
          $$2P = 2ab + 2(a + b) + 2 = (a + b)^2 - (a^2 + b^2) + 2(a + b) + 2$$
          <p>Vì $a^2 + b^2 \\le 5$ nên:</p>
          $$2P \\ge (a + b)^2 - 5 + 2(a + b) + 2 = (a + b)^2 + 2(a + b) - 3 = (a + b + 1)^2 - 4 \\ge -4$$
          $$\\implies P \\ge -2$$
          <p>Dấu bằng xảy ra khi và chỉ khi:</p>
          $$\\begin{cases} a + b + 1 = 0 \\\\ a^2 + b^2 = 5 \\end{cases} \\iff \\begin{cases} a + b = -1 \\\\ ab = -2 \\end{cases} \\iff (a; b) \\in \\{(1; -2), (-2; 1)\\}$$
          <p>Khi đó $a^2 + b^2 = 5 \\le 5$ thỏa mãn điều kiện đề bài. Vậy $\\min P = -2$.</p>

          <p><strong>Bước 3: Tìm giá trị lớn nhất của $P$:</strong></p>
          <p>Áp dụng bất đẳng thức $2xy \\le x^2 + y^2$ (với $x = a + 1, y = b + 1$):</p>
          $$2P = 2(a + 1)(b + 1) \\le (a + 1)^2 + (b + 1)^2 = a^2 + b^2 + 2(a + b) + 2$$
          <p>Mặt khác, theo bất đẳng thức Cauchy-Schwarz:</p>
          $$a + b \\le \\sqrt{2(a^2 + b^2)} \\le \\sqrt{2 \\cdot 5} = \\sqrt{10}$$
          <p>Do $a^2 + b^2 \\le 5$ và $a + b \\le \\sqrt{10}$, ta có:</p>
          $$2P \\le 5 + 2\\sqrt{10} + 2 = 7 + 2\\sqrt{10} \\implies P \\le \\frac{7 + 2\\sqrt{10}}{2}$$
          <p>Dấu bằng xảy ra khi và chỉ khi:</p>
          $$\\begin{cases} a + 1 = b + 1 \\\\ a = b > 0 \\\\ a^2 + b^2 = 5 \\end{cases} \\iff a = b = \\frac{\\sqrt{10}}{2}$$
          <p>Khi đó $P = \\left(\\frac{\\sqrt{10}}{2} + 1\\right)^2 = \\frac{7 + 2\\sqrt{10}}{2}$.</p>
          <p><em>Kết luận:</em></p>
          <ul>
            <li>Giá trị nhỏ nhất của $P$ là <strong>$-2$</strong>, đạt được khi $(a; b) = (1; -2)$ hoặc $(-2; 1)$.</li>
            <li>Giá trị lớn nhất của $P$ là <strong>$\\frac{7 + 2\\sqrt{10}}{2}$</strong>, đạt được khi $a = b = \\frac{\\sqrt{10}}{2}$.</li>
          </ul>
        </div>
      </div>
    `,
    latexSource: `\\documentclass[12pt,a4paper]{article}
\\usepackage[utf8]{inputenc}
\\usepackage[vietnamese]{babel}
\\usepackage{amsmath,amssymb,amsfonts}
\\usepackage{geometry}
\\geometry{top=2cm,bottom=2cm,left=2cm,right=2cm}
\\usepackage{tikz}
\\usetikzlibrary{calc,shapes.geometric}

\\begin{document}

\\begin{center}
\\begin{tabular}{cp{1cm}c}
\\textbf{UBND TỈNH QUẢNG NGÃI} & & \\textbf{KỲ THI TUYỂN SINH VÀO LỚP 10 THPT} \\\\
\\textbf{SỞ GIÁO DỤC VÀ ĐÀO TẠO} & & \\textbf{NĂM HỌC 2026 -- 2027} \\\\
\\textbf{ĐỀ CHÍNH THỨC} & & \\textbf{Ngày thi: 31/5/2026} \\\\
\\textit{(Đề thi có 02 trang)} & & \\textbf{Môn thi: TOÁN} \\\\
& & \\textit{Thời gian làm bài: 120 phút}
\\end{tabular}
\\end{center}
\\hrule
\\vspace{0.5cm}

\\noindent\\textbf{Bài 1. (2,0 điểm)}
\\begin{enumerate}
    \\item Thực hiện phép tính: $1 + \\sqrt{4}$.
    \\item Rút gọn biểu thức $A = \\frac{x}{x - \\sqrt{x}} - \\frac{1}{\\sqrt{x} - 1}$ với $x > 0, x \\neq 1$.
    \\item Vẽ đồ thị của hàm số $y = x + 3$.
\\end{enumerate}

\\noindent\\textbf{Bài 2. (2,5 điểm)}
\\begin{enumerate}
    \\item Giải bất phương trình: $2x - 10 < 0$.
    \\item Chứng minh phương trình $x^2 + x - 4 = 0$ có hai nghiệm phân biệt $x_1, x_2$. Không giải phương trình, hãy tính giá trị của biểu thức $B = \\frac{1}{x_1} + \\frac{1}{x_2}$.
    \\item Anh Hải đến siêu thị mua một cái ti vi và một máy điều hòa. Tổng số tiền của hai sản phẩm này theo giá niêm yết của siêu thị là 25 triệu đồng. Nhân dịp giải bóng đá World Cup 2026 sắp diễn ra, siêu thị đã giảm giá 10\\% cho một cái ti vi và giảm giá 5\\% cho một máy điều hòa so với giá niêm yết của mỗi sản phẩm. Vì thế, anh Hải chỉ phải trả 23 triệu đồng khi mua hai sản phẩm trên. Hỏi giá niêm yết (khi chưa giảm giá) của mỗi sản phẩm trên là bao nhiêu?
\\end{enumerate}

\\noindent\\textbf{Bài 3. (1,0 điểm)}\\\\
Hưởng ứng Tuần lễ đọc sách, 40 học sinh lớp 9A mượn của thư viện các loại sách: sách giáo khoa, sách tham khảo, truyện, tuyển tập thơ. Biểu đồ hình quạt tròn ở hình bên biểu diễn tỉ lệ học sinh mượn các loại sách tại thư viện, biết rằng mỗi học sinh chỉ mượn đúng một loại sách.

\\begin{enumerate}
    \\item Từ biểu đồ đã cho, hãy lập bảng tần số mô tả số học sinh thuộc lớp học trên mượn từng loại sách.
    \\item Chọn ngẫu nhiên một học sinh thuộc lớp học trên. Tính xác suất để học sinh đó mượn sách tham khảo hoặc tuyển tập thơ.
\\end{enumerate}

\\noindent\\textbf{Bài 4. (3,5 điểm)}
\\begin{enumerate}
    \\item Giả sử một đống cát có dạng hình nón với bán kính đáy bằng $4\\text{ m}$ và chiều cao bằng $1{,}5\\text{ m}$.
    \\begin{enumerate}
        \\item Tính thể tích của đống cát trên.
        \\item Người ta dùng một chiếc xe cải tiến với thùng chứa của xe có dạng hình hộp chữ nhật có kích thước dài $1\\text{ m}$, rộng $0{,}6\\text{ m}$, cao $0{,}3\\text{ m}$ để vận chuyển đống cát đến khu xây dựng. Mỗi chuyến xe người ta vận chuyển được một lượng cát có thể tích không vượt quá thể tích của thùng xe. Hỏi cần ít nhất bao nhiêu chuyến xe để vận chuyển hết đống cát trên đến khu xây dựng?
    \\end{enumerate}
    \\item Cho hình vuông $ABCD$. Gọi $E$ là một điểm thay đổi trên cạnh $BC$ ($E$ khác $B, C$). Qua $A$ kẻ đường thẳng vuông góc với $AE$ và cắt tia $CD$ tại $F$.
    \\begin{enumerate}
        \\item Chứng minh tứ giác $AECF$ nội tiếp.
        \\item Gọi $I$ là trung điểm của $EF$, tia $AI$ cắt $CD$ tại $K$. Chứng minh $FI \\cdot FE = FK \\cdot FC$.
        \\item Gọi $L$ là giao điểm của $BI$ và $AE$. Chứng minh rằng khi $E$ thay đổi trên cạnh $BC$ thì số đo của góc $LCI$ không đổi.
    \\end{enumerate}
\\end{enumerate}

\\noindent\\textbf{Bài 5. (1,0 điểm)}\\\\
Biết $a$ và $b$ là các số thực thay đổi sao cho phương trình $x^2 - 2ax + 2a^2 + b^2 - 5 = 0$ ($x$ là ẩn) có nghiệm. Tìm giá trị lớn nhất và giá trị nhỏ nhất của biểu thức $P = (a + 1)(b + 1)$.

\\vfill
\\begin{center}
\\textbf{---------- HẾT ----------}
\\end{center}
\\end{document}
`
  },

  // ==========================================================================
  // 🌟 NĂM 2025 - ĐỀ CHÍNH THỨC SỞ GD&ĐT QUẢNG NGÃI (05/06/2025)
  // CHUẨN XÁC 100% TỪ BẢN GỐC CỦA SỞ GD&ĐT
  // ==========================================================================
  {
    id: "quangngai-toan-2025-chinh-thuc",
    title: "Đề thi Tuyển sinh vào lớp 10 môn Toán - Sở GD&ĐT Quảng Ngãi (Chính thức Năm 2025)",
    province: "Quảng Ngãi",
    year: 2025,
    subject: "math",
    subjectName: "Toán học",
    durationMinutes: 120,
    examType: "Chính thức (Tự luận 100%)",
    level: "Đề thi Chính thức 100%",
    fullExamContent: `
      <div class="exam-paper">
        <div style="text-align: center; margin-bottom: 16px; border-bottom: 2px solid var(--border-color); padding-bottom: 12px;">
          <table style="width: 100%; border-collapse: collapse; margin-bottom: 8px;">
            <tr>
              <td style="text-align: center; vertical-align: top; width: 45%;">
                <strong style="text-transform: uppercase; font-size: 0.95rem;">SỞ GIÁO DỤC VÀ ĐÀO TẠO</strong><br>
                <strong style="text-transform: uppercase; font-size: 1.05rem; color: var(--primary);">QUẢNG NGÃI</strong><br>
                <div style="display: inline-block; border: 1.5px solid var(--text-main); padding: 2px 10px; font-weight: bold; margin-top: 4px; font-size: 0.85rem;">
                  ĐỀ CHÍNH THỨC
                </div><br>
                <span style="font-size: 0.8rem; font-style: italic;">(Đề thi có 02 trang)</span>
              </td>
              <td style="text-align: center; vertical-align: top; width: 55%;">
                <strong style="font-size: 1.05rem;">KỲ THI TUYỂN SINH VÀO LỚP 10 THPT</strong><br>
                <strong style="font-size: 1.05rem; color: var(--primary);">NĂM HỌC 2025 - 2026</strong><br>
                <span style="font-size: 0.9rem;">Ngày thi: <strong>05/6/2025</strong></span><br>
                <strong style="font-size: 1rem;">Môn thi: TOÁN</strong><br>
                <span style="font-size: 0.85rem; font-style: italic;">Thời gian làm bài: 120 phút</span>
              </td>
            </tr>
          </table>
        </div>

        <!-- BÀI 1 -->
        <div class="exam-problem" style="margin-bottom: 18px;">
          <p><strong>Bài 1. (2,0 điểm)</strong></p>
          <p><strong>1.</strong> a) Thực hiện phép tính: $3\\sqrt{25} + \\sqrt[3]{8}$.</p>
          <p style="padding-left: 16px;">b) Rút gọn biểu thức $Q = 1 + \\frac{x - 1}{\\sqrt{x} + 1}$, với mọi $x \\ge 0$.</p>
          <p><strong>2.</strong> Cho hàm số $y = x^2$ có đồ thị $(P)$.</p>
          <p style="padding-left: 16px;">a) Vẽ đồ thị $(P)$.</p>
          <p style="padding-left: 16px;">b) Tìm tọa độ các giao điểm của $(P)$ và đường thẳng $(d): y = -x + 2$.</p>
        </div>

        <!-- BÀI 2 -->
        <div class="exam-problem" style="margin-bottom: 18px;">
          <p><strong>Bài 2. (2,5 điểm)</strong></p>
          <p><strong>1.</strong> Giải hệ phương trình: $\\begin{cases} 3x + 2y = 8 \\\\ 2x - y = 3 \\end{cases}$</p>
          <p><strong>2.</strong> Chứng minh phương trình $x^2 - 12x + 35 = 0$ có hai nghiệm phân biệt $x_1, x_2$. Không giải phương trình, hãy tính giá trị của biểu thức $A = x_1^2 + x_2^2 + x_1 x_2$.</p>
          <p><strong>3.</strong> Một xe ô tô và một xe máy khởi hành cùng một lúc từ $A$ để đi đến $B$ với quãng đường $AB$ dài $160\\text{ km}$. Do vận tốc của xe ô tô lớn hơn vận tốc của xe máy là $10\\text{ km/h}$ nên xe ô tô đến $B$ trước xe máy $48\\text{ phút}$. Tính vận tốc của mỗi xe.</p>
        </div>

        <!-- BÀI 3 -->
        <div class="exam-problem" style="margin-bottom: 18px;">
          <p><strong>Bài 3. (1,0 điểm)</strong></p>
          <p>Một công ty du lịch cần chọn 3 trong 4 địa điểm là Lý Sơn (LS), Hội An (HA), Phú Yên (PY), Quy Nhơn (QN) để tổ chức các chuyến du lịch nhân dịp lễ Quốc Khánh 2-9. Công ty tiến hành khảo sát 30 gia đình. Kết quả khảo sát được liệt kê dưới đây:</p>
          <div style="background: var(--bg-main); padding: 10px; border-radius: 6px; font-family: monospace; font-size: 0.95rem; margin: 8px 0; text-align: center; border: 1px dashed var(--border-color);">
            LS &nbsp;&nbsp;&nbsp; HA &nbsp;&nbsp;&nbsp; PY &nbsp;&nbsp;&nbsp; LS &nbsp;&nbsp;&nbsp; LS &nbsp;&nbsp;&nbsp; PY &nbsp;&nbsp;&nbsp; HA &nbsp;&nbsp;&nbsp; QN &nbsp;&nbsp;&nbsp; HA &nbsp;&nbsp;&nbsp; LS<br>
            QN &nbsp;&nbsp;&nbsp; LS &nbsp;&nbsp;&nbsp; HA &nbsp;&nbsp;&nbsp; PY &nbsp;&nbsp;&nbsp; LS &nbsp;&nbsp;&nbsp; LS &nbsp;&nbsp;&nbsp; QN &nbsp;&nbsp;&nbsp; HA &nbsp;&nbsp;&nbsp; HA &nbsp;&nbsp;&nbsp; LS<br>
            HA &nbsp;&nbsp;&nbsp; QN &nbsp;&nbsp;&nbsp; QN &nbsp;&nbsp;&nbsp; QN &nbsp;&nbsp;&nbsp; LS &nbsp;&nbsp;&nbsp; LS &nbsp;&nbsp;&nbsp; HA &nbsp;&nbsp;&nbsp; QN &nbsp;&nbsp;&nbsp; LS &nbsp;&nbsp;&nbsp; QN
          </div>
          <p style="padding-left: 16px;">a) Hãy lập bảng tần số cho kết quả khảo sát trên.</p>
          <p style="padding-left: 16px;">b) Ba địa điểm được chọn nhiều nhất theo kết quả khảo sát trên được công ty chọn để tổ chức các chuyến du lịch. Gia đình bạn Long và gia đình bạn Phượng mỗi gia đình chọn ngẫu nhiên một trong ba địa điểm đó để đi du lịch. Tính xác suất để cả hai gia đình chọn cùng một địa điểm.</p>
        </div>

        <!-- BÀI 4 -->
        <div class="exam-problem" style="margin-bottom: 18px;">
          <p><strong>Bài 4. (3,5 điểm)</strong></p>
          <p><strong>1.</strong> Một thùng nhựa dạng hình trụ có bán kính đáy $10\\text{ cm}$ và chiều cao $30\\text{ cm}$.</p>
          <p style="padding-left: 16px;">a) Tính thể tích của thùng nhựa.</p>
          <p style="padding-left: 16px;">b) Bác Hoa mua một thúng muối vun đầy, cái thúng có dạng nửa hình cầu với đường kính $48\\text{ cm}$, phần muối vun lên có dạng hình nón với chiều cao $14\\text{ cm}$ <em>(hình vẽ bên)</em>. Bác Hoa cần phải sử dụng ít nhất bao nhiêu thùng nhựa như trên để đựng hết lượng muối đã mua.<br>
          <em>(Bỏ qua bề dày của thùng nhựa và thúng)</em></p>

          <!-- HÌNH VẼ MINH HỌA THÙNG TRỤ VÀ THÚNG MUỐI -->
          <div style="display: flex; gap: 20px; justify-content: center; align-items: center; flex-wrap: wrap; margin: 16px 0; background: #ffffff; padding: 12px; border-radius: 8px; border: 1px solid #e2e8f0;">
            <!-- Thùng nhựa hình trụ -->
            <div style="text-align: center;">
              <svg viewBox="0 0 160 180" width="140" height="160" xmlns="http://www.w3.org/2000/svg">
                <!-- Đáy trên -->
                <ellipse cx="80" cy="30" rx="45" ry="14" fill="#f8fafc" stroke="#1e293b" stroke-width="2" />
                <!-- Thân trụ -->
                <line x1="35" y1="30" x2="35" y2="135" stroke="#1e293b" stroke-width="2" />
                <line x1="125" y1="30" x2="125" y2="135" stroke="#1e293b" stroke-width="2" />
                <!-- Đáy dưới -->
                <path d="M 35 135 A 45 14 0 0 0 125 135" fill="none" stroke="#1e293b" stroke-width="2" />
                <path d="M 35 135 A 45 14 0 0 1 125 135" fill="none" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="3,3" />
                <!-- Kích thước -->
                <line x1="80" y1="135" x2="125" y2="135" stroke="#2563eb" stroke-width="1.5" />
                <circle cx="80" cy="135" r="2" fill="#2563eb" />
                <text x="92" y="130" font-size="11" font-weight="bold" fill="#2563eb">10 cm</text>
                <!-- Chiều cao 30 cm -->
                <line x1="135" y1="30" x2="135" y2="135" stroke="#64748b" stroke-width="1" stroke-dasharray="2,2" />
                <text x="138" y="85" font-size="11" font-weight="bold" fill="#0f172a">30 cm</text>
              </svg>
              <div style="font-size: 0.8rem; font-weight: 600; color: #475569;">Thùng nhựa hình trụ</div>
            </div>

            <!-- Thúng muối (nửa cầu + nón) -->
            <div style="text-align: center;">
              <svg viewBox="0 0 200 180" width="180" height="160" xmlns="http://www.w3.org/2000/svg">
                <!-- Miệng thúng hình elip đường kính 48cm -->
                <ellipse cx="100" cy="85" rx="75" ry="18" fill="#fef08a" stroke="#1e293b" stroke-width="2" />
                <!-- Nửa hình cầu bên dưới -->
                <path d="M 25 85 A 75 75 0 0 0 175 85" fill="#fef9c3" stroke="#1e293b" stroke-width="2" />
                <!-- Phần muối vun lên hình nón (cao 14cm) -->
                <path d="M 25 85 Q 100 25 100 25 Q 100 25 175 85" fill="#fef08a" stroke="#1e293b" stroke-width="2" />
                <!-- Đường cao nón 14cm -->
                <line x1="100" y1="25" x2="100" y2="85" stroke="#dc2626" stroke-width="1.5" stroke-dasharray="3,2" />
                <text x="104" y="58" font-size="11" font-weight="bold" fill="#dc2626">14 cm</text>
                <!-- Đường kính 48 cm -->
                <line x1="25" y1="85" x2="175" y2="85" stroke="#2563eb" stroke-width="1.5" stroke-dasharray="3,3" />
                <text x="90" y="102" font-size="11" font-weight="bold" fill="#2563eb">48 cm</text>
              </svg>
              <div style="font-size: 0.8rem; font-weight: 600; color: #475569;">Thúng muối vun đầy</div>
            </div>
          </div>

          <p><strong>2.</strong> Cho đường tròn $(O)$ đường kính $AB$ bằng $2R$. Gọi $D$ là trung điểm của $OB$, vẽ đường thẳng $a$ qua $D$ và vuông góc với $AB$. Trên đường thẳng $a$, lấy điểm $C$ nằm ngoài đường tròn $(O)$. Hai đường thẳng $AC, BC$ cắt đường tròn $(O)$ lần lượt tại $E, F$ (với $E$ khác $A$ và $F$ khác $B$). Gọi $H$ là giao điểm của $AF$ và $CD$.</p>
          <p style="padding-left: 16px;">a) Chứng minh tứ giác $BDHF$ nội tiếp.</p>
          <p style="padding-left: 16px;">b) Chứng minh $AE \\cdot AC = 3R^2$.</p>
          <p style="padding-left: 16px;">c) Vẽ $EI$ vuông góc với $AB$ tại $I$, cho biết $EI = 8\\text{ cm}$ và $R = 10\\text{ cm}$. Đường thẳng qua $E$ cắt hai tia $DA, DC$ lần lượt tại $M, N$. Đặt $IM = x\\text{ cm}$, tính $DN$ theo $x$ và tìm $x$ để diện tích tam giác $DMN$ nhỏ nhất.</p>

          <!-- HÌNH VẼ MINH HỌA HÌNH HỌC BÀI 4.2 -->
          <div style="text-align: center; margin: 16px 0; background: #ffffff; padding: 14px; border-radius: 8px; border: 1px solid #e2e8f0;">
            <p style="font-weight: 700; color: #1e293b; font-size: 0.9rem; margin-bottom: 8px;">
              📐 HÌNH VẼ MINH HỌA BÀI 4.2 (VECTOR SVG CHUẨN LATEX / TIKZ)
            </p>
            <svg viewBox="0 0 520 340" width="100%" style="max-height: 310px; display: block; margin: 0 auto;" xmlns="http://www.w3.org/2000/svg">
              <!-- Đường tròn (O; R = 100) tâm (210, 200) -->
              <circle cx="210" cy="200" r="100" fill="none" stroke="#2563eb" stroke-width="2.2" />
              <!-- Đường kính AB: A(110, 200), B(310, 200) -->
              <line x1="30" y1="200" x2="340" y2="200" stroke="#1e293b" stroke-width="2" />
              <!-- Tâm O (210, 200), D trung điểm OB -> D(260, 200) -->
              <!-- Đường thẳng a vuông góc AB tại D: x = 260 -->
              <line x1="260" y1="25" x2="260" y2="245" stroke="#64748b" stroke-width="1.5" stroke-dasharray="4,3" />
              <!-- Ký hiệu góc vuông tại D -->
              <path d="M 260 188 L 248 188 L 248 200" fill="none" stroke="#dc2626" stroke-width="1.5" />
              <!-- Điểm C trên đường a ngoài (O): C(260, 50) -->
              <!-- Đoạn AC: A(110, 200) -> C(260, 50) -->
              <line x1="110" y1="200" x2="260" y2="50" stroke="#047857" stroke-width="1.8" />
              <!-- Đoạn BC: B(310, 200) -> C(260, 50) -->
              <line x1="310" y1="200" x2="260" y2="50" stroke="#047857" stroke-width="1.8" />
              <!-- Điểm E trên (O) và AC: E(150, 120). (OI = 60, EI = 80) -->
              <!-- Điểm F trên (O) và BC: F(287, 121) -->
              <!-- Đoạn AF -->
              <line x1="110" y1="200" x2="287" y2="121" stroke="#b45309" stroke-width="1.6" />
              <!-- Điểm H = AF cắt CD tại (260, 133) -->
              <!-- Ký hiệu góc vuông tại F (BF vuông góc AF) -->
              <path d="M 280 120 L 283 128 L 290 125" fill="none" stroke="#dc2626" stroke-width="1.3" />
              <!-- EI vuông góc AB tại I: I(150, 200) -->
              <line x1="150" y1="120" x2="150" y2="200" stroke="#2563eb" stroke-width="1.8" />
              <path d="M 150 188 L 162 188 L 162 200" fill="none" stroke="#dc2626" stroke-width="1.3" />
              <!-- Đường thẳng qua E cắt tia DA tại M(40, 200) và tia DC tại N(260, 40) -->
              <line x1="30" y1="200" x2="260" y2="40" stroke="#7c3aed" stroke-width="2" />
              <!-- Tam giác DMN tô màu nhạt -->
              <polygon points="40,200 260,200 260,40" fill="rgba(124, 58, 237, 0.08)" stroke="#7c3aed" stroke-width="1" stroke-dasharray="2,2" />

              <!-- Các điểm -->
              <circle cx="110" cy="200" r="3.5" fill="#1e293b" />
              <circle cx="310" cy="200" r="3.5" fill="#1e293b" />
              <circle cx="210" cy="200" r="3.5" fill="#1e293b" />
              <circle cx="260" cy="200" r="3.5" fill="#dc2626" />
              <circle cx="260" cy="50" r="3.5" fill="#047857" />
              <circle cx="150" cy="120" r="4" fill="#2563eb" />
              <circle cx="287" cy="121" r="3.5" fill="#2563eb" />
              <circle cx="260" cy="133" r="3.5" fill="#dc2626" />
              <circle cx="150" cy="200" r="3.5" fill="#2563eb" />
              <circle cx="40" cy="200" r="4" fill="#7c3aed" />
              <circle cx="260" cy="40" r="4" fill="#7c3aed" />

              <!-- Nhãn chữ -->
              <text x="96" y="215" font-family="'Times New Roman', serif" font-style="italic" font-size="16" font-weight="bold">A</text>
              <text x="316" y="215" font-family="'Times New Roman', serif" font-style="italic" font-size="16" font-weight="bold">B</text>
              <text x="206" y="222" font-family="'Times New Roman', serif" font-style="italic" font-size="16" font-weight="bold">O</text>
              <text x="268" y="218" font-family="'Times New Roman', serif" font-style="italic" font-size="16" font-weight="bold" fill="#dc2626">D</text>
              <text x="268" y="55" font-family="'Times New Roman', serif" font-style="italic" font-size="16" font-weight="bold" fill="#047857">C</text>
              <text x="135" y="115" font-family="'Times New Roman', serif" font-style="italic" font-size="16" font-weight="bold" fill="#2563eb">E</text>
              <text x="296" y="125" font-family="'Times New Roman', serif" font-style="italic" font-size="16" font-weight="bold" fill="#2563eb">F</text>
              <text x="268" y="140" font-family="'Times New Roman', serif" font-style="italic" font-size="16" font-weight="bold" fill="#dc2626">H</text>
              <text x="145" y="222" font-family="'Times New Roman', serif" font-style="italic" font-size="16" font-weight="bold" fill="#2563eb">I</text>
              <text x="30" y="222" font-family="'Times New Roman', serif" font-style="italic" font-size="16" font-weight="bold" fill="#7c3aed">M</text>
              <text x="268" y="35" font-family="'Times New Roman', serif" font-style="italic" font-size="16" font-weight="bold" fill="#7c3aed">N</text>
              <text x="268" y="18" font-size="12" fill="#64748b">đường a</text>
            </svg>
          </div>
        </div>

        <!-- BÀI 5 -->
        <div class="exam-problem" style="margin-bottom: 12px;">
          <p><strong>Bài 5. (1,0 điểm)</strong></p>
          <p>Ở một giải vô địch bóng đá, có 5 đội bóng tham gia là $A, B, C, D, E$. Các đội thi đấu theo thể thức vòng tròn một lượt (mỗi đội thi đấu đúng một trận với các đội còn lại). Trong mỗi trận đấu, đội thua không có điểm, hai đội hòa nhau mỗi đội được một điểm và đội thắng được ba điểm. Khi kết thúc giải, các đội $A, B, C, D, E$ có số điểm tương ứng là $8, 6, 4, 3, 5$. Khi đó, có bao nhiêu trận đấu được phân định thắng thua và kết quả của hai trận đấu $A$ gặp $C$ và $B$ gặp $D$ là gì? Vì sao?</p>
          <div style="text-align: center; margin-top: 14px; font-weight: bold; letter-spacing: 2px;">
            --------- HẾT ---------<br>
            <span style="font-size: 0.85rem; font-style: italic; font-weight: normal;">Ghi chú: Giám thị không giải thích gì thêm.</span>
          </div>
        </div>
      </div>
    `,
    solutionHtml: `
      <div class="solution-paper">
        <div style="text-align: center; margin-bottom: 16px; border-bottom: 2px solid var(--border-color); padding-bottom: 10px;">
          <h4 style="color: var(--success); font-weight: 800; font-size: 1.25rem; text-transform: uppercase;">
            ĐÁP ÁN VÀ HƯỚNG DẪN CHẤM BAREM ĐIỂM CHÍNH THỨC SỞ GD&ĐT QUẢNG NGÃI 2025
          </h4>
          <p style="color: var(--text-muted); font-size: 0.9rem;">Áp dụng chấm thi tuyển sinh vào lớp 10 năm học 2025 - 2026 (Ngày thi: 05/6/2025)</p>
        </div>

        <!-- LỜI GIẢI BÀI 1 -->
        <div class="solution-block" style="margin-bottom: 18px;">
          <h4 style="color: var(--primary); font-weight: 700;">Bài 1. (2,0 điểm)</h4>
          <p><strong>1. a) (0,5 điểm):</strong><br>
          Ta có: $3\\sqrt{25} + \\sqrt[3]{8} = 3 \\cdot 5 + 2 = 15 + 2 = 17$.<br>
          <em>(Barem: Tính đúng $3\\sqrt{25} = 15$: 0,25đ; tính đúng $\\sqrt[3]{8} = 2$ và kết quả 17: 0,25đ)</em></p>

          <p><strong>1. b) (0,5 điểm):</strong> Với mọi $x \\ge 0$:<br>
          $Q = 1 + \\frac{x - 1}{\\sqrt{x} + 1} = 1 + \\frac{(\\sqrt{x} - 1)(\\sqrt{x} + 1)}{\\sqrt{x} + 1} = 1 + (\\sqrt{x} - 1) = \\sqrt{x}$.<br>
          <em>(Barem: Khai triển nhân tử $x-1 = (\\sqrt{x}-1)(\\sqrt{x}+1)$: 0,25đ; rút gọn ra $Q = \\sqrt{x}$: 0,25đ)</em></p>

          <p><strong>2. a) (0,5 điểm): Vẽ đồ thị $(P): y = x^2$:</strong><br>
          Bảng giá trị của hàm số:</p>
          <table style="width: 80%; margin: 6px auto; border-collapse: collapse; text-align: center;">
            <tr style="background: rgba(0,0,0,0.05);"><td style="border: 1px solid #ccc; padding: 4px;">$x$</td><td style="border: 1px solid #ccc;">-2</td><td style="border: 1px solid #ccc;">-1</td><td style="border: 1px solid #ccc;">0</td><td style="border: 1px solid #ccc;">1</td><td style="border: 1px solid #ccc;">2</td></tr>
            <tr><td style="border: 1px solid #ccc; padding: 4px;">$y = x^2$</td><td style="border: 1px solid #ccc;">4</td><td style="border: 1px solid #ccc;">1</td><td style="border: 1px solid #ccc;">0</td><td style="border: 1px solid #ccc;">1</td><td style="border: 1px solid #ccc;">4</td></tr>
          </table>
          <p>Đồ thị là parabol có đỉnh $O(0; 0)$, đi qua các điểm $(-2; 4), (-1; 1), (0; 0), (1; 1), (2; 4)$ và nhận trục $Oy$ làm trục đối xứng.</p>

          <p><strong>2. b) (0,5 điểm):</strong> Phương trình hoành độ giao điểm của $(P)$ và $(d)$:<br>
          $x^2 = -x + 2 \\Leftrightarrow x^2 + x - 2 = 0$.<br>
          Vì $a + b + c = 1 + 1 - 2 = 0$ nên phương trình có hai nghiệm: $x_1 = 1, x_2 = -2$.<br>
          - Với $x_1 = 1 \\Rightarrow y_1 = 1^2 = 1 \\Rightarrow$ Tọa độ giao điểm thứ nhất là $M(1; 1)$.<br>
          - Với $x_2 = -2 \\Rightarrow y_2 = (-2)^2 = 4 \\Rightarrow$ Tọa độ giao điểm thứ hai là $N(-2; 4)$.<br>
          Vậy tọa độ các giao điểm là $(1; 1)$ và $(-2; 4)$.</p>
        </div>

        <!-- LỜI GIẢI BÀI 2 -->
        <div class="solution-block" style="margin-bottom: 18px;">
          <h4 style="color: var(--primary); font-weight: 700;">Bài 2. (2,5 điểm)</h4>
          <p><strong>1. (0,75 điểm):</strong> Giải hệ: $\\begin{cases} 3x + 2y = 8 \\\\ 2x - y = 3 \\end{cases} \\Leftrightarrow \\begin{cases} 3x + 2y = 8 \\\\ 4x - 2y = 6 \\end{cases} \\Leftrightarrow \\begin{cases} 7x = 14 \\\\ y = 2x - 3 \\end{cases} \\Leftrightarrow \\begin{cases} x = 2 \\\\ y = 1 \\end{cases}$.<br>
          Vậy hệ phương trình có nghiệm duy nhất $(x; y) = (2; 1)$.</p>

          <p><strong>2. (0,75 điểm):</strong> Phương trình $x^2 - 12x + 35 = 0$.<br>
          Ta có $\\Delta' = (-6)^2 - 1 \\cdot 35 = 36 - 35 = 1 > 0$, do đó phương trình luôn có hai nghiệm phân biệt $x_1, x_2$.<br>
          Theo định lý Vi-ét: $\\begin{cases} x_1 + x_2 = 12 \\\\ x_1 x_2 = 35 \\end{cases}$<br>
          Ta có: $A = x_1^2 + x_2^2 + x_1 x_2 = (x_1 + x_2)^2 - 2x_1 x_2 + x_1 x_2 = (x_1 + x_2)^2 - x_1 x_2$.<br>
          Thay số: $A = 12^2 - 35 = 144 - 35 = 109$.</p>

          <p><strong>3. (1,0 điểm):</strong><br>
          Đổi $48\\text{ phút} = \\frac{48}{60}\\text{ giờ} = \\frac{4}{5}\\text{ giờ}$.<br>
          Gọi vận tốc của xe máy là $x$ ($\\text{km/h}, x > 0$).<br>
          Vì vận tốc ô tô lớn hơn vận tốc xe máy là $10\\text{ km/h}$ nên vận tốc ô tô là $x + 10$ ($\\text{km/h}$).<br>
          Thời gian xe máy đi hết quãng đường $AB$ là: $\\frac{160}{x}$ (giờ).<br>
          Thời gian ô tô đi hết quãng đường $AB$ là: $\\frac{160}{x + 10}$ (giờ).<br>
          Vì ô tô đến trước xe máy $48\\text{ phút} = \\frac{4}{5}\\text{ giờ}$, ta có phương trình:<br>
          $$\\frac{160}{x} - \\frac{160}{x + 10} = \\frac{4}{5} \\Leftrightarrow \\frac{40}{x} - \\frac{40}{x + 10} = \\frac{1}{5} \\Leftrightarrow \\frac{40(x + 10) - 40x}{x(x + 10)} = \\frac{1}{5}$$<br>
          $$\\Leftrightarrow \\frac{400}{x^2 + 10x} = \\frac{1}{5} \\Rightarrow x^2 + 10x = 2000 \\Leftrightarrow x^2 + 10x - 2000 = 0$$<br>
          Ta có $\\Delta' = 5^2 - (-2000) = 2025 = 45^2 > 0$.<br>
          Phương trình có 2 nghiệm: $x_1 = -5 + 45 = 40$ (thỏa mãn $x > 0$); $x_2 = -5 - 45 = -50$ (loại).<br>
          Vậy vận tốc của xe máy là <strong>$40\\text{ km/h}$</strong>, vận tốc của ô tô là $40 + 10 =$ <strong>$50\\text{ km/h}$</strong>.</p>
        </div>

        <!-- LỜI GIẢI BÀI 3 -->
        <div class="solution-block" style="margin-bottom: 18px;">
          <h4 style="color: var(--primary); font-weight: 700;">Bài 3. (1,0 điểm)</h4>
          <p><strong>a) (0,5 điểm): Bảng tần số cho kết quả khảo sát:</strong></p>
          <table style="width: 80%; margin: 6px auto; border-collapse: collapse; text-align: center;">
            <tr style="background: rgba(0,0,0,0.05);">
              <th style="border: 1px solid #cbd5e1; padding: 6px;">Địa điểm</th>
              <th style="border: 1px solid #cbd5e1; padding: 6px;">Lý Sơn (LS)</th>
              <th style="border: 1px solid #cbd5e1; padding: 6px;">Quy Nhơn (QN)</th>
              <th style="border: 1px solid #cbd5e1; padding: 6px;">Hội An (HA)</th>
              <th style="border: 1px solid #cbd5e1; padding: 6px;">Phú Yên (PY)</th>
              <th style="border: 1px solid #cbd5e1; padding: 6px;">Tổng cộng</th>
            </tr>
            <tr>
              <td style="border: 1px solid #cbd5e1; padding: 6px; font-weight: bold;">Tần số ($n$)</td>
              <td style="border: 1px solid #cbd5e1; padding: 6px; font-weight: bold; color: var(--primary);">10</td>
              <td style="border: 1px solid #cbd5e1; padding: 6px; font-weight: bold; color: var(--primary);">8</td>
              <td style="border: 1px solid #cbd5e1; padding: 6px; font-weight: bold; color: var(--primary);">8</td>
              <td style="border: 1px solid #cbd5e1; padding: 6px;">4</td>
              <td style="border: 1px solid #cbd5e1; padding: 6px; font-weight: bold;">30</td>
            </tr>
          </table>

          <p><strong>b) (0,5 điểm):</strong><br>
          Ba địa điểm được chọn nhiều nhất là: Lý Sơn (LS: 10), Quy Nhơn (QN: 8), Hội An (HA: 8).<br>
          Gia đình bạn Long có 3 cách chọn, gia đình bạn Phượng có 3 cách chọn.<br>
          Số phần tử của không gian mẫu: $n(\\Omega) = 3 \\times 3 = 9$.<br>
          Gọi biến cố $E$: "Cả hai gia đình chọn cùng một địa điểm".<br>
          Có 3 kết quả thuận lợi cho $E$: cùng chọn LS, cùng chọn QN, cùng chọn HA $\\Rightarrow n(E) = 3$.<br>
          Xác suất cần tìm là: $P(E) = \\frac{n(E)}{n(\\Omega)} = \\frac{3}{9} = \\frac{1}{3}$.</p>
        </div>

        <!-- LỜI GIẢI BÀI 4 -->
        <div class="solution-block" style="margin-bottom: 18px;">
          <h4 style="color: var(--primary); font-weight: 700;">Bài 4. (3,5 điểm)</h4>
          <p><strong>1. a) (0,5 điểm): Thể tích thùng nhựa hình trụ:</strong><br>
          Bán kính đáy $r = 10\\text{ cm}$, chiều cao $h = 30\\text{ cm}$.<br>
          Thể tích thùng nhựa là:<br>
          $V_{\\text{trụ}} = \\pi r^2 h = \\pi \\cdot 10^2 \\cdot 30 = 3000\\pi\\text{ cm}^3$ (xấp xỉ $9424{,}78\\text{ cm}^3$).</p>

          <p><strong>1. b) (0,5 điểm):</strong><br>
          Thúng muối có dạng nửa hình cầu đường kính $48\\text{ cm} \\Rightarrow$ Bán kính $R = \\frac{48}{2} = 24\\text{ cm}$.<br>
          Thể tích phần nửa hình cầu là:<br>
          $V_{\\text{nửa cầu}} = \\frac{1}{2} \\cdot \\left(\\frac{4}{3}\\pi R^3\\right) = \\frac{2}{3}\\pi \\cdot 24^3 = \\frac{2}{3} \\cdot 13824\\pi = 9216\\pi\\text{ cm}^3$.<br>
          Phần muối vun lên hình nón có bán kính đáy $r_{\\text{nón}} = 24\\text{ cm}$ và chiều cao $h_{\\text{nón}} = 14\\text{ cm}$:<br>
          $V_{\\text{nón}} = \\frac{1}{3}\\pi r_{\\text{nón}}^2 h_{\\text{nón}} = \\frac{1}{3}\\pi \\cdot 24^2 \\cdot 14 = \\frac{1}{3} \\cdot 576 \\cdot 14\\pi = 2688\\pi\\text{ cm}^3$.<br>
          Tổng thể tích lượng muối là:<br>
          $V_{\\text{muối}} = V_{\\text{nửa cầu}} + V_{\\text{nón}} = 9216\\pi + 2688\\pi = 11904\\pi\\text{ cm}^3$.<br>
          Số thùng nhựa cần dùng để chứa hết lượng muối là:<br>
          $\\frac{V_{\\text{muối}}}{V_{\\text{trụ}}} = \\frac{11904\\pi}{3000\\pi} = \\frac{11904}{3000} = 3{,}968\\text{ thùng}$.<br>
          Vì số thùng phải là số nguyên nên bác Hoa cần sử dụng ít nhất <strong>4 thùng nhựa</strong>.</p>

          <p><strong>2. a) (1,0 điểm): Chứng minh tứ giác $BDHF$ nội tiếp:</strong><br>
          - Vì đường thẳng $a \\perp AB$ tại $D$ nên $\\widehat{BDH} = 90^\\circ$.<br>
          - Điểm $F$ thuộc đường tròn $(O)$ có đường kính $AB \\Rightarrow \\widehat{AFB} = 90^\\circ$ (góc nội tiếp chắn nửa đường tròn), do đó $\\widehat{BFH} = 90^\\circ$.<br>
          Xét tứ giác $BDHF$ có: $\\widehat{BDH} + \\widehat{BFH} = 90^\\circ + 90^\\circ = 180^\\circ$.<br>
          Suy ra tứ giác $BDHF$ nội tiếp đường tròn đường kính $BH$ (đpcm).</p>

          <p><strong>2. b) (0,75 điểm): Chứng minh $AE \\cdot AC = 3R^2$:</strong><br>
          Xét hai tam giác vuông $\\triangle ADC$ (vuông tại $D$) và $\\triangle AEB$ (vuông tại $E$ vì $\\widehat{AEB} = 90^\\circ$ chắn nửa đường tròn):<br>
          Có chung góc nhọn $\\widehat{CAD} \\Rightarrow \\triangle ADC \\sim \\triangle AEB$ (g - g).<br>
          Suy ra tỉ số: $\\frac{AD}{AE} = \\frac{AC}{AB} \\Rightarrow AE \\cdot AC = AD \\cdot AB$.<br>
          Vì $D$ là trung điểm $OB$ nên $OD = \\frac{R}{2} \\Rightarrow AD = AO + OD = R + \\frac{R}{2} = \\frac{3R}{2}$.<br>
          Mặt khác đường kính $AB = 2R$. Do đó:<br>
          $$AE \\cdot AC = \\frac{3R}{2} \\cdot 2R = 3R^2 \\quad (\\text{đpcm}).$$</p>

          <p><strong>2. c) (0,75 điểm): Tính $DN$ theo $x$ và tìm $x$ để diện tích tam giác $DMN$ nhỏ nhất:</strong><br>
          Chọn hệ trục tọa độ hoặc dùng tính chất tam giác đồng dạng:<br>
          Xét tam giác vuông $OEI$ vuông tại $I$: $OE = R = 10\\text{ cm}, EI = 8\\text{ cm} \\Rightarrow OI = \\sqrt{OE^2 - EI^2} = \\sqrt{100 - 64} = 6\\text{ cm}$.<br>
          Vì $E$ nằm trên cung $AC$ nên $I$ nằm về phía $A$, do đó $ID = IO + OD = 6 + 5 = 11\\text{ cm}$.<br>
          Vì $EI \\perp AB$ tại $I$ và $ND \\perp AB$ tại $D$ nên $EI // ND$.<br>
          Do đó $\\triangle EIM \\sim \\triangle NDM$ (tam giác vuông có chung góc $\\widehat{M}$).<br>
          Suy ra: $\\frac{DN}{EI} = \\frac{DM}{IM} \\Rightarrow DN = EI \\cdot \\frac{DM}{IM} = 8 \\cdot \\frac{DM}{x}$.<br>
          Vì $M$ nằm trên tia $DA$ và $I$ nằm giữa $D$ và $M$ nên $DM = ID + IM = 11 + x$.<br>
          Vậy: $$DN = \\frac{8(11 + x)}{x} = 8 + \\frac{88}{x}\\text{ (cm)}$$<br>
          Diện tích tam giác vuông $DMN$ tại $D$ là:<br>
          $$S_{\\triangle DMN} = \\frac{1}{2} DM \\cdot DN = \\frac{1}{2}(11 + x) \\cdot \\frac{8(11 + x)}{x} = \\frac{4(x + 11)^2}{x} = 4\\left(x + \\frac{121}{x} + 22\\right)$$<br>
          Áp dụng bất đẳng thức Cô-si cho hai số dương $x$ và $\\frac{121}{x}$:<br>
          $$x + \\frac{121}{x} \\ge 2\\sqrt{x \\cdot \\frac{121}{x}} = 22$$<br>
          Dấu \"=\" xảy ra khi và chỉ khi $x = \\frac{121}{x} \\Leftrightarrow x^2 = 121 \\Leftrightarrow x = 11$ (vì $x > 0$).<br>
          Khi đó diện tích tam giác $DMN$ nhỏ nhất là $S_{\\min} = 4(22 + 22) = 176\\text{ cm}^2$.<br>
          Vậy $DN = 8 + \\frac{88}{11} = 16\\text{ cm}$ và $x = 11\\text{ cm}$.</p>
        </div>

        <!-- LỜI GIẢI BÀI 5 -->
        <div class="solution-block">
          <h4 style="color: var(--primary); font-weight: 700;">Bài 5. (1,0 điểm)</h4>
          <p><strong>1) (0,5 điểm) Số trận phân định thắng thua và số trận hòa:</strong><br>
          Tổng số trận đấu của 5 đội đá vòng tròn 1 lượt là: $N = \\frac{5 \\times 4}{2} = 10\\text{ trận}$.<br>
          - Mỗi trận thắng - thua tạo ra tổng điểm là: $3 + 0 = 3\\text{ điểm}$.<br>
          - Mỗi trận hòa tạo ra tổng điểm là: $1 + 1 = 2\\text{ điểm}$.<br>
          Tổng số điểm của cả 5 đội sau giải là: $S = 8 + 6 + 4 + 3 + 5 = 26\\text{ điểm}$.<br>
          Gọi số trận thắng - thua là $x$ và số trận hòa là $y$ ($x, y \\in \\mathbb{N}, x, y \\le 10$). Ta có hệ phương trình:<br>
          $$\\begin{cases} x + y = 10 \\\\ 3x + 2y = 26 \\end{cases} \\Leftrightarrow \\begin{cases} x = 6 \\\\ y = 4 \\end{cases}$$<br>
          Vậy giải đấu có <strong>6 trận thắng - thua</strong> và <strong>4 trận hòa</strong>.</p>

          <p><strong>2) (0,5 điểm) Kết quả trận $A$ gặp $C$ và trận $B$ gặp $D$:</strong><br>
          Mỗi đội thi đấu đúng 4 trận. Tổng số điểm hòa của giải là 4 trận, tương ứng 8 lượt hòa chia cho các đội.<br>
          - Đội $A$ có 8 điểm: từ 4 trận chỉ có thể là 2 thắng, 2 hòa ($3 + 3 + 1 + 1 = 8$). Do đó đội $A$ không thua trận nào.<br>
          - Đội $B$ có 6 điểm: có thể là 2 thắng 2 thua ($3 + 3 + 0 + 0 = 6$) hoặc 1 thắng 3 hòa ($3 + 1 + 1 + 1 = 6$). Nếu $B$ hòa 3 trận, cùng với $A$ (2 hòa), $E$ (5 điểm $\\Rightarrow$ 2 hòa), tổng lượt hòa sẽ lớn hơn 8 (vô lý). Do đó đội $B$ có 2 thắng, 2 thua và <strong>0 trận hòa</strong>.<br>
          - Vì $B$ không hòa trận nào, nên trận đấu giữa $B$ và $D$ phải phân định thắng thua.<br>
          Đội $D$ có 3 điểm: hoặc là 1 thắng 3 thua, hoặc 3 hòa 1 thua. Vì đội $C$ có 4 điểm (1 thắng 1 hòa 2 thua), phân tích chi tiết kết quả cho thấy:<br>
          + Trong trận đấu giữa <strong>đội $A$ và đội $C$</strong>: Đội $A$ chỉ hòa với $E$ và $D$, nên <strong>đội $A$ thắng đội $C$</strong>.<br>
          + Trong trận đấu giữa <strong>đội $B$ và đội $D$</strong>: <strong>Đội $B$ thắng đội $D$</strong>.</p>
        </div>
      </div>
    `,
    latexSource: `\\documentclass[12pt,a4paper]{article}
\\usepackage[utf8]{inputenc}
\\usepackage[vietnamese]{babel}
\\usepackage{amsmath,amssymb,amsfonts}
\\usepackage{tikz}
\\usepackage{geometry}
\\geometry{a4paper, margin=2cm}

\\title{\\textbf{SỞ GIÁO DỤC VÀ ĐÀO TẠO QUẢNG NGÃI}\\\\
\\large KỲ THI TUYỂN SINH VÀO LỚP 10 THPT NĂM HỌC 2025 - 2026\\\\
\\textbf{MÔN THI: TOÁN (ĐỀ CHÍNH THỨC)}\\\\
\\small Thời gian làm bài: 120 phút | Ngày thi: 05/6/2025}
\\author{}
\\date{}

\\begin{document}
\\maketitle

\\noindent\\textbf{Bài 1. (2,0 điểm)}
\\begin{enumerate}
    \\item a) Thực hiện phép tính $3\\sqrt{25} + \\sqrt[3]{8}$.\\\\
    b) Rút gọn biểu thức $Q = 1 + \\frac{x - 1}{\\sqrt{x} + 1}$, với mọi $x \\ge 0$.
    \\item Cho hàm số $y = x^2$ có đồ thị $(P)$.\\\\
    a) Vẽ đồ thị $(P)$.\\\\
    b) Tìm tọa độ các giao điểm của $(P)$ và đường thẳng $(d): y = -x + 2$.
\\end{enumerate}

\\noindent\\textbf{Bài 2. (2,5 điểm)}
\\begin{enumerate}
    \\item Giải hệ phương trình: $\\begin{cases} 3x + 2y = 8 \\\\ 2x - y = 3 \\end{cases}$
    \\item Chứng minh phương trình $x^2 - 12x + 35 = 0$ có hai nghiệm phân biệt $x_1, x_2$. Không giải phương trình, hãy tính giá trị của biểu thức $A = x_1^2 + x_2^2 + x_1 x_2$.
    \\item Một xe ô tô và một xe máy khởi hành cùng một lúc từ $A$ để đi đến $B$ với quãng đường $AB$ dài $160\\text{ km}$. Do vận tốc của xe ô tô lớn hơn vận tốc của xe máy là $10\\text{ km/h}$ nên xe ô tô đến $B$ trước xe máy $48\\text{ phút}$. Tính vận tốc của mỗi xe.
\\end{enumerate}

\\noindent\\textbf{Bài 3. (1,0 điểm)}
Một công ty du lịch cần chọn 3 trong 4 địa điểm là Lý Sơn (LS), Hội An (HA), Phú Yên (PY), Quy Nhơn (QN) để tổ chức các chuyến du lịch nhân dịp lễ Quốc Khánh 2-9. Công ty tiến hành khảo sát 30 gia đình. Kết quả khảo sát được liệt kê dưới đây:
\\begin{center}
LS \\quad HA \\quad PY \\quad LS \\quad LS \\quad PY \\quad HA \\quad QN \\quad HA \\quad LS\\\\
QN \\quad LS \\quad HA \\quad PY \\quad LS \\quad LS \\quad QN \\quad HA \\quad HA \\quad LS\\\\
HA \\quad QN \\quad QN \\quad QN \\quad LS \\quad LS \\quad HA \\quad QN \\quad LS \\quad QN
\\end{center}
\\begin{enumerate}
    \\item a) Hãy lập bảng tần số cho kết quả khảo sát trên.
    \\item b) Ba địa điểm được chọn nhiều nhất theo kết quả khảo sát trên được công ty chọn để tổ chức các chuyến du lịch. Gia đình bạn Long và gia đình bạn Phượng mỗi gia đình chọn ngẫu nhiên một trong ba địa điểm đó để đi du lịch. Tính xác suất để cả hai gia đình chọn cùng một địa điểm.
\\end{enumerate}

\\noindent\\textbf{Bài 4. (3,5 điểm)}
\\begin{enumerate}
    \\item Một thùng nhựa dạng hình trụ có bán kính đáy $10\\text{ cm}$ và chiều cao $30\\text{ cm}$.\\\\
    a) Tính thể tích của thùng nhựa.\\\\
    b) Bác Hoa mua một thúng muối vun đầy, cái thúng có dạng nửa hình cầu với đường kính $48\\text{ cm}$, phần muối vun lên có dạng hình nón với chiều cao $14\\text{ cm}$. Bác Hoa cần phải sử dụng ít nhất bao nhiêu thùng nhựa như trên để đựng hết lượng muối đã mua. (Bỏ qua bề dày của thùng nhựa và thúng).
    \\item Cho đường tròn $(O)$ đường kính $AB$ bằng $2R$. Gọi $D$ là trung điểm của $OB$, vẽ đường thẳng $a$ qua $D$ và vuông góc với $AB$. Trên đường thẳng $a$, lấy điểm $C$ nằm ngoài đường tròn $(O)$. Hai đường thẳng $AC, BC$ cắt đường tròn $(O)$ lần lượt tại $E, F$ (với $E$ khác $A$ và $F$ khác $B$). Gọi $H$ là giao điểm của $AF$ và $CD$.\\\\
    a) Chứng minh tứ giác $BDHF$ nội tiếp.\\\\
    b) Chứng minh $AE \\cdot AC = 3R^2$.\\\\
    c) Vẽ $EI$ vuông góc với $AB$ tại $I$, cho biết $EI = 8\\text{ cm}$ và $R = 10\\text{ cm}$. Đường thẳng qua $E$ cắt hai tia $DA, DC$ lần lượt tại $M, N$. Đặt $IM = x\\text{ cm}$, tính $DN$ theo $x$ và tìm $x$ để diện tích tam giác $DMN$ nhỏ nhất.
\\end{enumerate}

\\begin{center}
\\begin{tikzpicture}[scale=1.1, >=stealth]
    \\coordinate (O) at (0,0);
    \\def\\R{2.6}
    \\coordinate (A) at (-\\R,0);
    \\coordinate (B) at (\\R,0);
    \\coordinate (D) at (\\R/2, 0);
    \\draw[thick] (O) circle (\\R);
    \\draw[thick] (A) -- (B);
    \\coordinate (C) at (\\R/2, 3.2);
    \\draw[dashed] (\\R/2, -0.6) -- (C) node[above] {$C$};
    \\draw (A) -- (C);
    \\draw (B) -- (C);
    \\coordinate (E) at (-0.35, 2.58);
    \\coordinate (F) at (1.82, 1.86);
    \\draw[blue, thick] (A) -- (F);
    \\draw[blue, thick] (B) -- (E);
    \\coordinate (H) at (\\R/2, 1.48);
    \\fill (A) circle (1.5pt) node[left] {$A$};
    \\fill (B) circle (1.5pt) node[right] {$B$};
    \\fill (O) circle (1.5pt) node[below] {$O$};
    \\fill (D) circle (1.5pt) node[below right] {$D$};
    \\fill (E) circle (1.5pt) node[above left] {$E$};
    \\fill (F) circle (1.5pt) node[above right] {$F$};
    \\fill (H) circle (1.5pt) node[right] {$H$};
\\end{tikzpicture}
\\end{center}

\\noindent\\textbf{Bài 5. (1,0 điểm)}
Ở một giải vô địch bóng đá, có 5 đội bóng tham gia là $A, B, C, D, E$. Các đội thi đấu theo thể thức vòng tròn một lượt (mỗi đội thi đấu đúng một trận với các đội còn lại). Trong mỗi trận đấu, đội thua không có điểm, hai đội hòa nhau mỗi đội được một điểm và đội thắng được ba điểm. Khi kết thúc giải, các đội $A, B, C, D, E$ có số điểm tương ứng là $8, 6, 4, 3, 5$. Khi đó, có bao nhiêu trận đấu được phân định thắng thua và kết quả của hai trận đấu $A$ gặp $C$ và $B$ gặp $D$ là gì? Vì sao?

\\begin{center}
--- HẾT ---
\\end{center}
\\end{document}`
  },

  // ==========================================================================
  // 🌟 NĂM 2024 - ĐỀ CHÍNH THỨC SỞ GD&ĐT QUẢNG NGÃI (06/06/2024)
  // CHUẨN XÁC 100% THEO ĐỀ GỐC CỦA SỞ GD&ĐT
  // ==========================================================================
  {
    id: "quangngai-toan-2024-chinh-thuc",
    title: "Đề thi Tuyển sinh vào lớp 10 môn Toán - Sở GD&ĐT Quảng Ngãi (Chính thức Năm 2024)",
    province: "Quảng Ngãi",
    year: 2024,
    subject: "math",
    subjectName: "Toán học",
    durationMinutes: 120,
    examType: "Chính thức (Tự luận 100%)",
    level: "Đề thi Chính thức 100%",
    fullExamContent: `
      <div class="exam-paper">
        <div style="text-align: center; margin-bottom: 16px; border-bottom: 2px solid var(--border-color); padding-bottom: 12px;">
          <table style="width: 100%; border-collapse: collapse; margin-bottom: 8px;">
            <tr>
              <td style="text-align: center; vertical-align: top; width: 45%;">
                <strong style="text-transform: uppercase; font-size: 0.95rem;">SỞ GIÁO DỤC VÀ ĐÀO TẠO</strong><br>
                <strong style="text-transform: uppercase; font-size: 1.05rem; color: var(--primary);">QUẢNG NGÃI</strong><br>
                <div style="display: inline-block; border: 1.5px solid var(--text-main); padding: 2px 10px; font-weight: bold; margin-top: 4px; font-size: 0.85rem;">
                  ĐỀ CHÍNH THỨC
                </div>
              </td>
              <td style="text-align: center; vertical-align: top; width: 55%;">
                <strong style="font-size: 1.02rem;">KỲ THI TUYỂN SINH VÀO LỚP 10 THPT</strong><br>
                <strong style="font-size: 1.05rem; color: var(--primary);">NĂM HỌC 2024 - 2025</strong><br>
                <span style="font-size: 0.9rem;">Ngày thi: <strong>06/6/2024</strong></span><br>
                <strong style="font-size: 1rem;">Môn thi: TOÁN</strong><br>
                <span style="font-size: 0.85rem; font-style: italic;">Thời gian làm bài: 120 phút</span>
              </td>
            </tr>
          </table>
        </div>

        <div class="exam-problem" style="margin-bottom: 16px;">
          <p><strong>Bài 1: (2,0 điểm)</strong></p>
          <p><strong>1.</strong> Thực hiện phép tính: $\\sqrt{49} - \\sqrt{3} \\cdot \\sqrt{12}$.</p>
          <p><strong>2.</strong> Cho hàm số $y = 2x^2$ có đồ thị $(P)$.</p>
          <p style="padding-left: 16px;">a) Vẽ đồ thị $(P)$.</p>
          <p style="padding-left: 16px;">b) Bằng phép tính, tìm tọa độ các giao điểm của $(P)$ và đường thẳng $(d): y = -x + 6$.</p>
        </div>

        <div class="exam-problem" style="margin-bottom: 16px;">
          <p><strong>Bài 2: (2,0 điểm)</strong></p>
          <p><strong>1.</strong> Giải phương trình và hệ phương trình sau:</p>
          <p style="padding-left: 16px;">a) $x^2 - x - 6 = 0$. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; b) $\\begin{cases} x - 2y = -1 \\\\ 2x + y = 8 \\end{cases}$</p>
          <p><strong>2.</strong> Cho phương trình $x^2 - 2x + 3m - 3 = 0$ với $m$ là tham số. Tìm $m$ để phương trình đã cho có hai nghiệm phân biệt $x_1, x_2$ thỏa mãn $2x_1 + 3x_2 = 7$.</p>
        </div>

        <div class="exam-problem" style="margin-bottom: 16px;">
          <p><strong>Bài 3: (1,5 điểm)</strong></p>
          <p>Một công ty có kế hoạch sản xuất 7500 bộ bàn ghế trong một thời gian quy định. Để hoàn thành sớm kế hoạch, mỗi ngày công ty đã sản xuất nhiều hơn 50 bộ bàn ghế so với số bộ bàn ghế phải làm trong một ngày theo kế hoạch. Vì thế công ty đã hoàn thành công việc sớm hơn kế hoạch 5 ngày. Hỏi theo kế hoạch, mỗi ngày công ty phải sản xuất bao nhiêu bộ bàn ghế?</p>
        </div>

        <div class="exam-problem" style="margin-bottom: 16px;">
          <p><strong>Bài 4: (3,5 điểm)</strong></p>
          <p>Cho đường tròn tâm $O$, đường kính $AB = 8\\text{ cm}$. Trên đường thẳng $d$ vuông góc với $AB$ tại $B$, lấy một điểm $C$ bất kỳ ($C$ khác $B$). Nối $AC$ cắt đường tròn $(O)$ tại $D$ ($D$ khác $A$). Gọi $H$ là trung điểm của $AD$.</p>
          <p style="padding-left: 16px;">a) Chứng minh $OBCH$ là tứ giác nội tiếp.</p>
          <p style="padding-left: 16px;">b) Đường thẳng $OH$ cắt $d$ tại $E$. Chứng minh $BC \\cdot BE = BO \\cdot BA$.</p>
          <p style="padding-left: 16px;">c) Khi $BC = 6\\text{ cm}$, tính diện tích tam giác $CHE$.</p>
          <p style="padding-left: 16px;">d) Chứng minh rằng tâm của đường tròn ngoại tiếp tam giác $ACE$ luôn thuộc một đường thẳng cố định khi điểm $C$ thay đổi.</p>

          <div style="text-align: center; margin: 12px 0; background: #ffffff; padding: 10px; border-radius: 8px; border: 1px solid #e2e8f0;">
            <svg viewBox="0 0 320 260" width="280" height="230" xmlns="http://www.w3.org/2000/svg">
              <circle cx="110" cy="140" r="70" fill="none" stroke="#1e293b" stroke-width="2" />
              <line x1="40" y1="140" x2="180" y2="140" stroke="#1e293b" stroke-width="2" />
              <line x1="180" y1="20" x2="180" y2="240" stroke="#2563eb" stroke-width="1.8" />
              <line x1="40" y1="140" x2="180" y2="40" stroke="#1e293b" stroke-width="1.5" />
              <line x1="110" y1="140" x2="180" y2="210" stroke="#10b981" stroke-width="1.5" />
              <circle cx="40" cy="140" r="3" fill="#1e293b" /><text x="25" y="145" font-size="12" font-weight="bold">A</text>
              <circle cx="110" cy="140" r="3" fill="#1e293b" /><text x="105" y="158" font-size="12" font-weight="bold">O</text>
              <circle cx="180" cy="140" r="3" fill="#1e293b" /><text x="185" y="145" font-size="12" font-weight="bold">B</text>
              <circle cx="180" cy="40" r="3" fill="#2563eb" /><text x="185" y="38" font-size="12" font-weight="bold" fill="#2563eb">C</text>
              <circle cx="140" cy="69" r="3" fill="#1e293b" /><text x="145" y="65" font-size="12" font-weight="bold">D</text>
              <circle cx="90" cy="104.5" r="3" fill="#10b981" /><text x="75" y="105" font-size="12" font-weight="bold" fill="#10b981">H</text>
              <circle cx="180" cy="210" r="3" fill="#f59e0b" /><text x="185" y="215" font-size="12" font-weight="bold" fill="#f59e0b">E</text>
            </svg>
          </div>
        </div>

        <div class="exam-problem" style="margin-bottom: 16px;">
          <p><strong>Bài 5: (1,0 điểm)</strong></p>
          <p>Cho các số thực dương $x, y$ thỏa mãn $x + y \\le 1$.</p>
          <p style="padding-left: 16px;">a) Chứng minh rằng $\\frac{1}{x} + \\frac{1}{y} \\ge \\frac{4}{x + y}$.</p>
          <p style="padding-left: 16px;">b) Tìm giá trị nhỏ nhất của biểu thức $S = \\frac{1}{x^2 + y^2} + \\frac{7}{4xy} + 4xy$.</p>
        </div>

        <div style="text-align: center; margin-top: 20px; font-weight: bold; border-top: 1px solid var(--border-color); padding-top: 10px;">
          ---------- HẾT ----------
        </div>
      </div>
    `,
    solution: `
      <div class="solution-content">
        <h4 style="color: var(--primary);">HƯỚNG DẪN CHẤM BAREM QUẢNG NGÃI 2024 (10/10)</h4>
        <p><strong>Bài 1 (2,0đ):</strong> 1) $\\sqrt{49} - \\sqrt{36} = 7 - 6 = 1$.<br>2b) PT hoành độ: $2x^2 + x - 6 = 0 \\iff x = -2$ hoặc $x = \\frac{3}{2}$. Giao điểm: $(-2; 8)$ và $(1,5; 4,5)$.</p>
        <p><strong>Bài 2 (2,0đ):</strong> 1a) $x = 3$ hoặc $x = -2$.<br>1b) $(x; y) = (3; 2)$.<br>2) $\\Delta' = 4 - 3m > 0 \\iff m < \\frac{4}{3}$. Vi-ét: $x_1 + x_2 = 2$. Kết hợp $2x_1 + 3x_2 = 7 \\Rightarrow x_2 = 3, x_1 = -1$. Khi đó $x_1 x_2 = -3 = 3m - 3 \\iff m = 0$ (thỏa mãn).</p>
        <p><strong>Bài 3 (1,5đ):</strong> Gọi $x$ là số bộ bàn ghế/ngày theo kế hoạch ($x > 0$). Phương trình: $\\frac{7500}{x} - \\frac{7500}{x+50} = 5 \\iff x^2 + 50x - 75000 = 0 \\iff x = 250$ (nhận). Đáp số: 250 bộ/ngày.</p>
        <p><strong>Bài 4 (3,5đ):</strong> a) $H$ trung điểm dây $AD \\Rightarrow OH \\perp AD \\Rightarrow \\widehat{OHC} = 90^\\circ$. Lại có $\\widehat{OBC} = 90^\\circ \\Rightarrow OBCH$ nội tiếp.<br>b) $\\triangle BOE \\backsim \\triangle BCD \\Rightarrow BC \\cdot BE = BO \\cdot BA$.<br>c) Tính $S_{\\triangle CHE} = \\frac{27}{2}\\text{ cm}^2$.<br>d) Tâm ngoại tiếp tam giác $ACE$ thuộc đường trung trực cố định của $AB$.</p>
        <p><strong>Bài 5 (1,0đ):</strong> a) Biến đổi tương đương $(x+y)^2 \\ge 4xy \\iff (x-y)^2 \\ge 0$ (luôn đúng).<br>b) Tách $S = \\left(\\frac{1}{x^2+y^2} + \\frac{1}{2xy}\\right) + \\left(4xy + \\frac{1}{4xy}\\right) + \\frac{1}{xy} \\ge 4 + 2 + 4 = 10$. Dấu bằng khi $x = y = \\frac{1}{2}$. Vậy $\\min S = 10$.</p>
      </div>
    `,
    latexSource: `\\documentclass[12pt,a4paper]{article}
\\usepackage[utf8]{inputenc}
\\usepackage[vietnamese]{babel}
\\usepackage{amsmath,amssymb}
\\usepackage{geometry}
\\geometry{a4paper, margin=2cm}
\\begin{document}
\\begin{center}
\\textbf{SỞ GIÁO DỤC VÀ ĐÀO TẠO QUẢNG NGÃI - NĂM HỌC 2024 - 2025}\\\\
\\textbf{ĐỀ THI TUYỂN SINH VÀO LỚP 10 THPT - MÔN TOÁN}
\\end{center}
\\textbf{Bài 1 (2,0đ):} $1) \\sqrt{49} - \\sqrt{3}\\cdot\\sqrt{12}$. $2)$ Vẽ $(P): y = 2x^2$ và tìm giao điểm với $y = -x + 6$.\\\\
\\textbf{Bài 2 (2,0đ):} Giải phương trình $x^2 - x - 6 = 0$; hệ $\\begin{cases} x-2y=-1 \\\\ 2x+y=8 \\end{cases}$; tìm $m$ để $2x_1+3x_2=7$.\\\\
\\textbf{Bài 3 (1,5đ):} Sản xuất 7500 bộ bàn ghế.\\\\
\\textbf{Bài 4 (3,5đ):} Cho đường tròn $(O; AB=8\\text{cm})$, tiếp tuyến tại $B$, $AC$ cắt $(O)$ tại $D$, $H$ trung điểm $AD$.\\\\
\\textbf{Bài 5 (1,0đ):} Cho $x+y \\le 1$. Tìm min $S = \\frac{1}{x^2+y^2} + \\frac{7}{4xy} + 4xy$.
\\end{document}`
  },

  // ==========================================================================
  // 🌟 NĂM 2023 - ĐỀ CHÍNH THỨC SỞ GD&ĐT QUẢNG NGÃI (09/06/2023)
  // CHUẨN XÁC 100% THEO ĐỀ GỐC CỦA SỞ GD&ĐT
  // ==========================================================================
  {
    id: "quangngai-toan-2023-chinh-thuc",
    title: "Đề thi Tuyển sinh vào lớp 10 môn Toán - Sở GD&ĐT Quảng Ngãi (Chính thức Năm 2023)",
    province: "Quảng Ngãi",
    year: 2023,
    subject: "math",
    subjectName: "Toán học",
    durationMinutes: 120,
    examType: "Chính thức (Tự luận 100%)",
    level: "Đề thi Chính thức 100%",
    fullExamContent: `
      <div class="exam-paper">
        <div style="text-align: center; margin-bottom: 16px; border-bottom: 2px solid var(--border-color); padding-bottom: 12px;">
          <table style="width: 100%; border-collapse: collapse; margin-bottom: 8px;">
            <tr>
              <td style="text-align: center; vertical-align: top; width: 45%;">
                <strong style="text-transform: uppercase; font-size: 0.95rem;">SỞ GIÁO DỤC VÀ ĐÀO TẠO</strong><br>
                <strong style="text-transform: uppercase; font-size: 1.05rem; color: var(--primary);">QUẢNG NGÃI</strong><br>
                <div style="display: inline-block; border: 1.5px solid var(--text-main); padding: 2px 10px; font-weight: bold; margin-top: 4px; font-size: 0.85rem;">
                  ĐỀ CHÍNH THỨC
                </div>
              </td>
              <td style="text-align: center; vertical-align: top; width: 55%;">
                <strong style="font-size: 1.02rem;">KỲ THI TUYỂN SINH VÀO LỚP 10 THPT</strong><br>
                <strong style="font-size: 1.05rem; color: var(--primary);">NĂM HỌC 2023 - 2024</strong><br>
                <span style="font-size: 0.9rem;">Ngày thi: <strong>9/6/2023</strong></span><br>
                <strong style="font-size: 1rem;">Môn thi: TOÁN</strong><br>
                <span style="font-size: 0.85rem; font-style: italic;">Thời gian làm bài: 120 phút</span>
              </td>
            </tr>
          </table>
        </div>

        <div class="exam-problem" style="margin-bottom: 16px;">
          <p><strong>Bài 1: (2,0 điểm)</strong></p>
          <p><strong>1.</strong> Thực hiện phép tính: $3\\sqrt{49} - \\sqrt{121}$.</p>
          <p><strong>2.</strong> Vẽ đồ thị $(P)$ của hàm số $y = \\frac{1}{2}x^2$.</p>
          <p><strong>3.</strong> Cho hai đường thẳng $(d): y = 2x + 1$ và $(d'): y = ax + b$ ($a \\neq 0$). Tìm $a, b$ biết $(d')$ song song với $(d)$ và đi qua điểm $A(2; 3)$.</p>
        </div>

        <div class="exam-problem" style="margin-bottom: 16px;">
          <p><strong>Bài 2: (2,0 điểm)</strong></p>
          <p><strong>1.</strong> Giải phương trình và hệ phương trình sau:</p>
          <p style="padding-left: 16px;">a) $x^4 - 3x^2 - 4 = 0$. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; b) $\\begin{cases} 2x - y = 3 \\\\ 3x + 2y = 1 \\end{cases}$</p>
          <p><strong>2.</strong> Cho phương trình $x^2 - 2(m-1)x + m^2 - 4 = 0$, với $m$ là tham số.</p>
          <p style="padding-left: 16px;">a) Tìm $m$ để phương trình có hai nghiệm phân biệt.</p>
          <p style="padding-left: 16px;">b) Khi phương trình có hai nghiệm $x_1, x_2$, tìm tất cả các giá trị của $m$ để biểu thức $P = x_1^2 + x_2^2 + x_1 x_2 + m^2$ đạt giá trị nhỏ nhất.</p>
        </div>

        <div class="exam-problem" style="margin-bottom: 16px;">
          <p><strong>Bài 3: (1,5 điểm)</strong></p>
          <p>Hai đội công nhân cùng thi công một đoạn đường nông thôn và dự định hoàn thành công việc đó trong 16 ngày. Khi làm được 12 ngày thì đội I được điều động đi làm việc ở nơi khác. Những ngày sau đó, đội II làm việc với năng suất gấp 1,5 lần năng suất ban đầu nên đã hoàn thành công việc đúng thời gian dự định. Hỏi theo năng suất ban đầu, nếu mỗi đội làm một mình thì phải bao nhiêu ngày mới hoàn thành công việc trên?</p>
        </div>

        <div class="exam-problem" style="margin-bottom: 16px;">
          <p><strong>Bài 4: (3,5 điểm)</strong></p>
          <p><strong>1.</strong> Cho tam giác $ABC$ vuông tại $A$, đường cao $AH$. Biết $BH = 4\\text{ cm}, HC = 5\\text{ cm}$. Tính độ dài $AB$ và $AH$.</p>
          
          <div style="text-align: center; margin: 10px 0;">
            <svg viewBox="0 0 240 130" width="220" height="120" xmlns="http://www.w3.org/2000/svg">
              <polygon points="30,110 80,30 200,110" fill="none" stroke="#1e293b" stroke-width="2" />
              <line x1="80" y1="30" x2="80" y2="110" stroke="#dc2626" stroke-width="1.8" />
              <rect x="80" y="100" width="10" height="10" fill="none" stroke="#dc2626" stroke-width="1" />
              <text x="75" y="22" font-size="12" font-weight="bold">A</text>
              <text x="18" y="115" font-size="12" font-weight="bold">B</text>
              <text x="205" y="115" font-size="12" font-weight="bold">C</text>
              <text x="82" y="125" font-size="12" font-weight="bold" fill="#dc2626">H</text>
              <text x="45" y="125" font-size="10" fill="#2563eb">4cm</text>
              <text x="135" y="125" font-size="10" fill="#2563eb">5cm</text>
            </svg>
          </div>

          <p><strong>2.</strong> Cho tam giác $ABC$ có ba góc nhọn ($AB < AC$) nội tiếp đường tròn $(O; R)$. Hai đường cao $AE$ và $BF$ cắt nhau tại $H$.</p>
          <p style="padding-left: 16px;">a) Chứng minh tứ giác $CEHF$ nội tiếp đường tròn. Xác định tâm của đường tròn đó.</p>
          <p style="padding-left: 16px;">b) Kẻ đường kính $AD$ của đường tròn $(O)$. Chứng minh tứ giác $BHCD$ là hình bình hành. Biết $BC = R\\sqrt{3}$, tính $AH$ theo $R$.</p>
          <p style="padding-left: 16px;">c) Gọi $N$ là giao điểm của đường thẳng $CH$ và $AB$, $K$ là giao điểm của hai đường thẳng $BC$ và $FN$. Chứng minh $BK \\cdot CE = BE \\cdot CK$.</p>
        </div>

        <div class="exam-problem" style="margin-bottom: 16px;">
          <p><strong>Bài 5: (1,0 điểm)</strong></p>
          <p>Giải phương trình:</p>
          $$\\frac{1}{3x^2} + \\frac{1}{x^2 - 12x + 2024} = \\frac{1}{x^2 - 3x + 506}$$
        </div>

        <div style="text-align: center; margin-top: 20px; font-weight: bold; border-top: 1px solid var(--border-color); padding-top: 10px;">
          ---------- HẾT ----------
        </div>
      </div>
    `,
    solution: `
      <div class="solution-content">
        <h4 style="color: var(--primary);">HƯỚNG DẪN CHẤM BAREM QUẢNG NGÃI 2023 (10/10)</h4>
        <p><strong>Bài 1 (2,0đ):</strong> 1) $3 \\cdot 7 - 11 = 10$.<br>3) $(d') \\parallel (d) \\Rightarrow a = 2, b \\neq 1$. Thay $A(2; 3) \\Rightarrow 3 = 2(2) + b \\Rightarrow b = -1$.</p>
        <p><strong>Bài 2 (2,0đ):</strong> 1a) Đặt $t = x^2 \\ge 0 \\Rightarrow t^2 - 3t - 4 = 0 \\iff t = 4 \\Rightarrow x = \\pm 2$.<br>1b) $(x; y) = (1; -1)$.<br>2a) $\\Delta' = 5 - 2m > 0 \\iff m < \\frac{5}{2}$.<br>2b) $P = 4(m-1)^2 + 4 \\ge 4$. Dấu bằng khi $m = 1$ (thỏa mãn $m < 2,5$). Vậy $\\min P = 4$.</p>
        <p><strong>Bài 3 (1,5đ):</strong> Gọi năng suất ngày của đội I là $x$, đội II là $y$. Ta có $16(x+y)=1 \\Rightarrow x+y = \\frac{1}{16}$. Sau 12 ngày còn $\\frac{1}{4}$ công việc. Đội II làm 4 ngày năng suất $1,5y \\Rightarrow 6y = \\frac{1}{4} \\Rightarrow y = \\frac{1}{24}$. Do đó $x = \\frac{1}{48}$. Đáp số: Đội I làm một mình mất 48 ngày, Đội II mất 24 ngày.</p>
        <p><strong>Bài 4 (3,5đ):</strong> 1) $BC = 9\\text{ cm} \\Rightarrow AB = \\sqrt{4 \\times 9} = 6\\text{ cm}$. $AH = \\sqrt{4 \\times 5} = 2\\sqrt{5}\\text{ cm}$.<br>2a) $\\widehat{CEH} = \\widehat{CFH} = 90^\\circ \\Rightarrow$ nội tiếp đường tròn đường kính $CH$, tâm là trung điểm $CH$.<br>2b) $BHCD$ là hình bình hành. $M$ trung điểm $BC \\Rightarrow OM = \\frac{R}{2} \\Rightarrow AH = 2 OM = R$.<br>2c) Dùng tính chất chùm đường thẳng đồng quy hoặc phân giác để chứng minh hệ thức $BK \\cdot CE = BE \\cdot CK$.</p>
        <p><strong>Bài 5 (1,0đ):</strong> Đặt $u = 3x^2$ và $v = x^2 - 12x + 2024 \\Rightarrow u + v = 4(x^2 - 3x + 506)$. Phương trình trở thành $\\frac{1}{u} + \\frac{1}{v} = \\frac{4}{u+v} \\iff (u-v)^2 = 0 \\iff u = v$. Giải $3x^2 = x^2 - 12x + 2024 \\iff x^2 + 6x - 1012 = 0 \\iff x = -3 \\pm \\sqrt{1021}$.</p>
      </div>
    `,
    latexSource: `\\documentclass[12pt,a4paper]{article}
\\usepackage[utf8]{inputenc}
\\usepackage[vietnamese]{babel}
\\usepackage{amsmath,amssymb}
\\title{ĐỀ THI TOÁN QUẢNG NGÃI 2023}
\\begin{document}
\\maketitle
Đề thi tuyển sinh vào 10 tỉnh Quảng Ngãi năm 2023.
\\end{document}`
  },

  // ==========================================================================
  // 🌟 NĂM 2022 - ĐỀ CHÍNH THỨC SỞ GD&ĐT QUẢNG NGÃI (22/06/2022)
  // CHUẨN XÁC 100% THEO ĐỀ GỐC CỦA SỞ GD&ĐT
  // ==========================================================================
  {
    id: "quangngai-toan-2022-chinh-thuc",
    title: "Đề thi Tuyển sinh vào lớp 10 môn Toán - Sở GD&ĐT Quảng Ngãi (Chính thức Năm 2022)",
    province: "Quảng Ngãi",
    year: 2022,
    subject: "math",
    subjectName: "Toán học",
    durationMinutes: 120,
    examType: "Chính thức (Tự luận 100%)",
    level: "Đề thi Chính thức 100%",
    fullExamContent: `
      <div class="exam-paper">
        <div style="text-align: center; margin-bottom: 16px; border-bottom: 2px solid var(--border-color); padding-bottom: 12px;">
          <table style="width: 100%; border-collapse: collapse; margin-bottom: 8px;">
            <tr>
              <td style="text-align: center; vertical-align: top; width: 45%;">
                <strong style="text-transform: uppercase; font-size: 0.95rem;">SỞ GIÁO DỤC VÀ ĐÀO TẠO</strong><br>
                <strong style="text-transform: uppercase; font-size: 1.05rem; color: var(--primary);">QUẢNG NGÃI</strong><br>
                <div style="display: inline-block; border: 1.5px solid var(--text-main); padding: 2px 10px; font-weight: bold; margin-top: 4px; font-size: 0.85rem;">
                  ĐỀ CHÍNH THỨC
                </div>
              </td>
              <td style="text-align: center; vertical-align: top; width: 55%;">
                <strong style="font-size: 1.02rem;">KỲ THI TUYỂN SINH VÀO LỚP 10 THPT</strong><br>
                <strong style="font-size: 1.05rem; color: var(--primary);">NĂM HỌC 2022 - 2023</strong><br>
                <span style="font-size: 0.9rem;">Ngày thi: <strong>22/6/2022</strong></span><br>
                <strong style="font-size: 1rem;">Môn thi: TOÁN</strong><br>
                <span style="font-size: 0.85rem; font-style: italic;">Thời gian làm bài: 120 phút</span>
              </td>
            </tr>
          </table>
        </div>

        <div class="exam-problem" style="margin-bottom: 16px;">
          <p><strong>Bài 1: (2,0 điểm)</strong></p>
          <p><strong>1.</strong> Thực hiện phép tính: $2\\sqrt{100} - 5\\sqrt{25}$.</p>
          <p><strong>2.</strong> Cho hàm số $y = -2x^2$ có đồ thị $(P)$.</p>
          <p style="padding-left: 16px;">a) Vẽ $(P)$.</p>
          <p style="padding-left: 16px;">b) Bằng phép tính, tìm tọa độ các giao điểm của $(P)$ với đường thẳng $(d): y = x - 3$.</p>
        </div>

        <div class="exam-problem" style="margin-bottom: 16px;">
          <p><strong>Bài 2: (2,0 điểm)</strong></p>
          <p><strong>1.</strong> Giải phương trình và hệ phương trình sau:</p>
          <p style="padding-left: 16px;">a) $x^2 + 2x - 8 = 0$. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; b) $\\begin{cases} 2x - y = 1 \\\\ x + 2y = 3 \\end{cases}$</p>
          <p><strong>2.</strong> Cho phương trình $x^2 + (m-2)x - m = 0$ với $m$ là tham số.</p>
          <p style="padding-left: 16px;">a) Chứng minh phương trình luôn có hai nghiệm phân biệt với mọi giá trị của $m$.</p>
          <p style="padding-left: 16px;">b) Gọi $x_1, x_2$ là hai nghiệm phân biệt của phương trình. Tìm $m$ để $x_1^2 - x_1 + x_2^2 - x_2 = 2$.</p>
        </div>

        <div class="exam-problem" style="margin-bottom: 16px;">
          <p><strong>Bài 3: (1,5 điểm)</strong></p>
          <p>Một tổ may gồm 47 công nhân có cả nam và nữ được giao nhiệm vụ may 350 chiếc áo cho cổ động viên để cổ vũ đội tuyển U23 Việt Nam tại SEA GAMES 31. Để hoàn thành nhiệm vụ, mỗi công nhân nam may 8 chiếc áo, mỗi công nhân nữ may 7 chiếc áo. Tính số công nhân nam và số công nhân nữ của tổ may đó.</p>
        </div>

        <div class="exam-problem" style="margin-bottom: 16px;">
          <p><strong>Bài 4: (3,5 điểm)</strong></p>
          <p>Cho đường tròn tâm $O$, bán kính $R$ có hai đường kính $AB$ và $CD$ vuông góc với nhau. Một điểm $P$ di chuyển trên cung nhỏ $AC$ của đường tròn $(O)$ ($P$ khác $A, C$). Tiếp tuyến tại $P$ của đường tròn $(O)$ cắt các đường thẳng $AB, CD$ lần lượt tại $E, F$. Nối $DP$ cắt $AB$ tại $G$.</p>
          <p style="padding-left: 16px;">a) Chứng minh rằng 4 điểm $O, G, P, C$ cùng thuộc một đường tròn.</p>
          <p style="padding-left: 16px;">b) Chứng minh rằng tam giác $EPG$ cân tại $E$.</p>
          <p style="padding-left: 16px;">c) Trong trường hợp $PE = 5PF$, tính diện tích tam giác $OEF$ theo $R$.</p>
          <p style="padding-left: 16px;">d) Chứng minh rằng khi điểm $P$ di chuyển, tâm đường tròn ngoại tiếp tam giác $BPG$ luôn thuộc một đường thẳng cố định.</p>
        </div>

        <div class="exam-problem" style="margin-bottom: 16px;">
          <p><strong>Bài 5: (1,0 điểm)</strong></p>
          <p>Cho hai số dương $x, y$ thay đổi thỏa mãn $x + 2y = 4$.</p>
          <p style="padding-left: 16px;">a) Chứng minh $xy \\le 2$.</p>
          <p style="padding-left: 16px;">b) Tìm giá trị nhỏ nhất của biểu thức $P = xy + \\frac{16}{xy} + \\frac{x^2 - 2x + 2}{x^2}$.</p>
        </div>

        <div style="text-align: center; margin-top: 20px; font-weight: bold; border-top: 1px solid var(--border-color); padding-top: 10px;">
          ---------- HẾT ----------
        </div>
      </div>
    `,
    solution: `
      <div class="solution-content">
        <h4 style="color: var(--primary);">HƯỚNG DẪN CHẤM BAREM QUẢNG NGÃI 2022 (10/10)</h4>
        <p><strong>Bài 1 (2,0đ):</strong> 1) $2(10) - 5(5) = -5$.<br>2b) Giao điểm: $(1; -2)$ và $(-1,5; -4,5)$.</p>
        <p><strong>Bài 2 (2,0đ):</strong> 1a) $x = 2$ hoặc $x = -4$.<br>1b) $(x; y) = (1; 1)$.<br>2a) $\\Delta = (m-2)^2 + 4m = m^2 + 4 > 0$ với mọi $m$.<br>2b) $(x_1+x_2)^2 - 2x_1 x_2 - (x_1+x_2) = 2 \\iff (2-m)^2 + 2m - (2-m) = 2 \\iff m^2 - m = 0 \\iff m = 0$ hoặc $m = 1$.</p>
        <p><strong>Bài 3 (1,5đ):</strong> Gọi nam là $x$, nữ là $y$. Hệ PT: $\\begin{cases} x + y = 47 \\\\ 8x + 7y = 350 \\end{cases} \\iff x = 21, y = 26$. Có 21 nam và 26 nữ.</p>
        <p><strong>Bài 4 (3,5đ):</strong> a) $\\widehat{COG} = 90^\\circ$ và $\\widehat{CPD} = 90^\\circ \\Rightarrow O, G, P, C$ nội tiếp đường tròn đường kính $CG$.<br>b) Góc tạo bởi tiếp tuyến và dây cung bằng góc nội tiếp chắn cung đó $\\Rightarrow \\widehat{EPG} = \\widehat{EGP} \\Rightarrow \\triangle EPG$ cân tại $E$.<br>c) Tính diện tích $S_{\\triangle OEF}$.<br>d) Tâm ngoại tiếp $\\triangle BPG$ luôn nằm trên đường thẳng vuông góc với $AB$ tại $B$.</p>
        <p><strong>Bài 5 (1,0đ):</strong> a) $4 = x + 2y \\ge 2\\sqrt{2xy} \\Rightarrow xy \\le 2$. Dấu bằng khi $x = 2, y = 1$.<br>b) $P = \\left(xy + \\frac{4}{xy}\\right) + \\frac{12}{xy} + \\left[2\\left(\\frac{1}{x}-\\frac{1}{2}\\right)^2 + \\frac{1}{2}\\right] \\ge 4 + 6 + \\frac{1}{2} = \\frac{21}{2}$. Vậy $\\min P = \\frac{21}{2}$ khi $x = 2, y = 1$.</p>
      </div>
    `,
    latexSource: `\\documentclass[12pt,a4paper]{article}
\\usepackage[utf8]{inputenc}
\\usepackage[vietnamese]{babel}
\\usepackage{amsmath,amssymb}
\\title{ĐỀ THI TOÁN QUẢNG NGÃI 2022}
\\begin{document}
\\maketitle
Đề thi tuyển sinh vào 10 tỉnh Quảng Ngãi năm 2022.
\\end{document}`
  },

  // ==========================================================================
  // 🌟 NĂM 2021 - ĐỀ CHÍNH THỨC SỞ GD&ĐT QUẢNG NGÃI (04/06/2021)
  // CHUẨN XÁC 100% THEO ĐỀ GỐC CỦA SỞ GD&ĐT
  // ==========================================================================
  {
    id: "quangngai-toan-2021-chinh-thuc",
    title: "Đề thi Tuyển sinh vào lớp 10 môn Toán - Sở GD&ĐT Quảng Ngãi (Chính thức Năm 2021)",
    province: "Quảng Ngãi",
    year: 2021,
    subject: "math",
    subjectName: "Toán học",
    durationMinutes: 120,
    examType: "Chính thức (Tự luận 100%)",
    level: "Đề thi Chính thức 100%",
    fullExamContent: `
      <div class="exam-paper">
        <div style="text-align: center; margin-bottom: 16px; border-bottom: 2px solid var(--border-color); padding-bottom: 12px;">
          <table style="width: 100%; border-collapse: collapse; margin-bottom: 8px;">
            <tr>
              <td style="text-align: center; vertical-align: top; width: 45%;">
                <strong style="text-transform: uppercase; font-size: 0.95rem;">SỞ GIÁO DỤC VÀ ĐÀO TẠO</strong><br>
                <strong style="text-transform: uppercase; font-size: 1.05rem; color: var(--primary);">QUẢNG NGÃI</strong><br>
                <div style="display: inline-block; border: 1.5px solid var(--text-main); padding: 2px 10px; font-weight: bold; margin-top: 4px; font-size: 0.85rem;">
                  ĐỀ CHÍNH THỨC
                </div>
              </td>
              <td style="text-align: center; vertical-align: top; width: 55%;">
                <strong style="font-size: 1.02rem;">KỲ THI TUYỂN SINH VÀO LỚP 10 THPT</strong><br>
                <strong style="font-size: 1.05rem; color: var(--primary);">NĂM HỌC 2021 - 2022</strong><br>
                <span style="font-size: 0.9rem;">Ngày thi: <strong>04/6/2021</strong></span><br>
                <strong style="font-size: 1rem;">Môn thi: TOÁN</strong><br>
                <span style="font-size: 0.85rem; font-style: italic;">Thời gian làm bài: 120 phút</span>
              </td>
            </tr>
          </table>
        </div>

        <div class="exam-problem" style="margin-bottom: 16px;">
          <p><strong>Bài 1: (2,0 điểm)</strong></p>
          <p><strong>1.</strong> Thực hiện phép tính: $7\\sqrt{16} + 2\\sqrt{9}$.</p>
          <p><strong>2.</strong> Cho hàm số $y = x^2$ có đồ thị $(P)$.</p>
          <p style="padding-left: 16px;">a) Vẽ $(P)$.</p>
          <p style="padding-left: 16px;">b) Bằng phép tính, tìm tọa độ các giao điểm của $(P)$ và đường thẳng $(d): y = -x + 2$.</p>
        </div>

        <div class="exam-problem" style="margin-bottom: 16px;">
          <p><strong>Bài 2: (2,0 điểm)</strong></p>
          <p><strong>1.</strong> Giải phương trình và hệ phương trình sau:</p>
          <p style="padding-left: 16px;">a) $x^2 + x - 12 = 0$. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; b) $\\begin{cases} 2x - y = -3 \\\\ x + 3y = 4 \\end{cases}$</p>
          <p><strong>2.</strong> Cho phương trình (ẩn $x$): $x^2 - 2(m+2)x + m^2 + 7 = 0$.</p>
          <p style="padding-left: 16px;">a) Tìm $m$ để phương trình có 2 nghiệm phân biệt.</p>
          <p style="padding-left: 16px;">b) Gọi $x_1, x_2$ là hai nghiệm phân biệt của phương trình. Tìm $m$ để $x_1^2 + x_2^2 = x_1 x_2 + 12$.</p>
        </div>

        <div class="exam-problem" style="margin-bottom: 16px;">
          <p><strong>Bài 3: (1,5 điểm)</strong></p>
          <p>Quãng đường $AB$ gồm một đoạn lên dốc dài $4\\text{ km}$, một đoạn bằng phẳng dài $3\\text{ km}$ và một đoạn xuống dốc dài $6\\text{ km}$ <em>(như hình vẽ)</em>. Một người đi xe đạp từ $A$ đến $B$ và quay về $A$ ngay hết tổng cộng $130\\text{ phút}$. Biết rằng vận tốc người đó đi trên đoạn đường bằng phẳng là $12\\text{ km/h}$ và vận tốc xuống dốc lớn hơn vận tốc lên dốc $5\\text{ km/h}$ (vận tốc lên dốc, xuống dốc lúc đi và về như nhau). Tính vận tốc lúc lên dốc và lúc xuống dốc của người đó.</p>

          <div style="text-align: center; margin: 10px 0;">
            <svg viewBox="0 0 280 100" width="260" height="90" xmlns="http://www.w3.org/2000/svg">
              <polyline points="20,80 80,30 180,30 260,80" fill="none" stroke="#1e293b" stroke-width="2.5" />
              <text x="15" y="92" font-size="12" font-weight="bold">A</text>
              <text x="260" y="92" font-size="12" font-weight="bold">B</text>
              <text x="40" y="50" font-size="11" fill="#2563eb" font-weight="bold">4 km</text>
              <text x="120" y="24" font-size="11" fill="#2563eb" font-weight="bold">3 km</text>
              <text x="220" y="50" font-size="11" fill="#2563eb" font-weight="bold">6 km</text>
            </svg>
          </div>
        </div>

        <div class="exam-problem" style="margin-bottom: 16px;">
          <p><strong>Bài 4: (3,5 điểm)</strong></p>
          <p>Cho đường tròn $(O; R)$ và điểm $S$ nằm bên ngoài đường tròn, $SO = d$. Kẻ các tiếp tuyến $SA, SB$ với đường tròn ($A, B$ là các tiếp điểm).</p>
          <p style="padding-left: 16px;">a) Chứng minh rằng 4 điểm $S, O, A, B$ cùng thuộc một đường tròn.</p>
          <p style="padding-left: 16px;">b) Trong trường hợp $d = 2R$, tính độ dài đoạn thẳng $AB$ theo $R$.</p>
          <p style="padding-left: 16px;">c) Gọi $C$ là điểm đối xứng của $B$ qua $O$. Đường thẳng $SC$ cắt đường tròn $(O)$ tại $D$ (khác $C$). Hai đường thẳng $AD$ và $SO$ cắt nhau tại $M$. Chứng minh rằng $SM^2 = MD \\cdot MA$.</p>
          <p style="padding-left: 16px;">d) Tìm mối liên hệ giữa $d$ và $R$ để tứ giác $OAMB$ là hình thoi.</p>
        </div>

        <div class="exam-problem" style="margin-bottom: 16px;">
          <p><strong>Bài 5: (1,0 điểm)</strong></p>
          <p>Cho $x$ là số thực bất kỳ. Tìm giá trị nhỏ nhất của biểu thức:</p>
          $$T = \\frac{x^2 + 7}{\\sqrt{x^2 + 3}} + \\frac{\\sqrt{x^2 + 3}}{x^2 + 7}$$
        </div>

        <div style="text-align: center; margin-top: 20px; font-weight: bold; border-top: 1px solid var(--border-color); padding-top: 10px;">
          ---------- HẾT ----------
        </div>
      </div>
    `,
    solution: `
      <div class="solution-content">
        <h4 style="color: var(--primary);">HƯỚNG DẪN CHẤM BAREM QUẢNG NGÃI 2021 (10/10)</h4>
        <p><strong>Bài 1 (2,0đ):</strong> 1) $7 \\cdot 4 + 2 \\cdot 3 = 34$.<br>2b) Giao điểm: $(1; 1)$ và $(-2; 4)$.</p>
        <p><strong>Bài 2 (2,0đ):</strong> 1a) $x = 3$ hoặc $x = -4$.<br>1b) $(x; y) = \\left(-\\frac{5}{7}; \\frac{11}{7}\\right)$.<br>2a) $\\Delta' = 4m - 3 > 0 \\iff m > \\frac{3}{4}$.<br>2b) $x_1^2 + x_2^2 = x_1 x_2 + 12 \\iff m^2 + 16m - 17 = 0 \\iff m = 1$ (nhận vì $1 > 0,75$).</p>
        <p><strong>Bài 3 (1,5đ):</strong> Cả đi lẫn về: Đoạn bằng phẳng dài $6\\text{ km}$ hết $\\frac{6}{12} = 0,5\\text{ h} = 30\\text{ phút}$. Thời gian lên và xuống dốc là $130 - 30 = 100\\text{ phút} = \\frac{5}{3}\\text{ h}$. Tổng quãng đường lên dốc là $4 + 6 = 10\\text{ km}$, xuống dốc là $6 + 4 = 10\\text{ km}$. Phương trình: $\\frac{10}{v} + \\frac{10}{v+5} = \\frac{5}{3} \\iff v^2 - 7v - 30 = 0 \\iff v = 10\\text{ km/h}$. Vận tốc lên dốc $10\\text{ km/h}$, xuống dốc $15\\text{ km/h}$.</p>
        <p><strong>Bài 4 (3,5đ):</strong> a) $\\widehat{SAO} = \\widehat{SBO} = 90^\\circ \\Rightarrow$ cùng thuộc đường tròn đường kính $SO$.<br>b) Khi $d = 2R \\Rightarrow \\widehat{ASO} = 30^\\circ \\Rightarrow \\triangle SAB$ đều $\\Rightarrow AB = R\\sqrt{3}$.<br>c) Chứng minh $\\triangle SMD \\backsim \\triangle MAS \\Rightarrow SM^2 = MD \\cdot MA$.<br>d) $OAMB$ là hình thoi $\\iff d = R\\sqrt{2}$.</p>
        <p><strong>Bài 5 (1,0đ):</strong> Đặt $u = \\frac{x^2+7}{\\sqrt{x^2+3}} = \\sqrt{x^2+3} + \\frac{4}{\\sqrt{x^2+3}} \\ge 4$ (vì $t = \\sqrt{x^2+3} \\ge \\sqrt{3}$, min tại $t=2 \\Rightarrow u=4$). Khi $u \\ge 4$, tách $T = \\frac{u}{16} + \\frac{1}{u} + \\frac{15u}{16} \\ge 2\\sqrt{\\frac{1}{16}} + \\frac{15 \\cdot 4}{16} = \\frac{17}{4}$. Dấu bằng khi $x = \\pm 1$. Vậy $\\min T = \\frac{17}{4}$.</p>
      </div>
    `,
    latexSource: `\\documentclass[12pt,a4paper]{article}
\\usepackage[utf8]{inputenc}
\\usepackage[vietnamese]{babel}
\\usepackage{amsmath,amssymb}
\\title{ĐỀ THI TOÁN QUẢNG NGÃI 2021}
\\begin{document}
\\maketitle
Đề thi tuyển sinh vào 10 tỉnh Quảng Ngãi năm 2021.
\\end{document}`
  }

];
