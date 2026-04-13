import "./AboutSection.css";

export default function AboutSection() {
  return (
    <section id="about" className="about-section">

      <div className="container">

        {/* TITLE */}
        <div className="about-header">
          <h2>Giới thiệu</h2>
          <p>
            Giải pháp hạ tầng mạng – Wifi – Camera chuyên nghiệp cho doanh nghiệp
          </p>
        </div>

        {/* MAIN */}
        <div className="about-main">

          {/* LEFT */}
          <div className="about-text">
            <p>
              Chúng tôi cung cấp giải pháp hạ tầng mạng, Wifi và hệ thống giám sát
              toàn diện, giúp doanh nghiệp vận hành ổn định và an toàn.
            </p>

            <p>
              Từ tư vấn, thiết kế đến thi công và vận hành, mọi hệ thống đều được
              xây dựng theo tiêu chuẩn hiện đại, dễ mở rộng và tối ưu chi phí.
            </p>

            <div className="about-highlight">
              ✔ Triển khai nhanh chóng
              ✔ Hoạt động ổn định
              ✔ Hỗ trợ 24/7
            </div>

            <button className="btn-primary" onClick={() => {
              document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
            }}>
              Liên hệ tư vấn
            </button>
          </div>

          {/* RIGHT */}
          <div className="about-image">
            <img src="/images/about.jpg" alt="" />
          </div>

        </div>

        {/* FEATURES */}
        <div className="about-features">

          <div className="feature">
            <div className="icon">📡</div>
            <h4>Hạ tầng mạng</h4>
            <p>Thiết kế & triển khai LAN chuyên nghiệp</p>
          </div>

          <div className="feature">
            <div className="icon">📶</div>
            <h4>Wifi doanh nghiệp</h4>
            <p>Phủ sóng mạnh, ổn định toàn khu vực</p>
          </div>

          <div className="feature">
            <div className="icon">🎥</div>
            <h4>Camera giám sát</h4>
            <p>Quản lý an ninh realtime 24/7</p>
          </div>
        </div>
      </div>
    </section>
  );
}