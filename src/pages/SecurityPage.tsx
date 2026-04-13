import "./SecurityPage.css";
import ImgSecurity from "../assets/giai_phap_an_ninh.jpg";
import ImgNhaMay from "../assets/nha-may.jpg";
import ImgSystem from "../assets/gp_anninh.png";
import ImgOffice from "../assets/office-building.jpg";
import ImgVilla from "../assets/biet-thu.jpg";
import ImgIndustrial from "../assets/khu-cong-nghiep.jpg";

export default function SecurityPage() {
  return (
    <div className="security-page">
      {/* HERO */}
      <section className="security-hero">
        <div className="security-hero-left green">
          <span>Enterprising Features</span>
          <h1>GIẢI PHÁP AN NINH</h1>
          <p>Security Solutions</p>
        </div>

        <div className="security-hero-right">
          <img src={ImgSecurity} alt="Security" />
        </div>
      </section>

      {/* CONTENT */}
      <section className="security-content">
        <p className="security-desc">
          Giám sát, điều hành, quản trị toàn bộ hệ thống an ninh của tòa nhà,
          sử dụng các công nghệ hiện đại giúp đảm bảo an toàn tối đa.
        </p>

        <h2>
          Giải pháp an ninh tổng thể thông minh, hiện đại và phù hợp.
        </h2>

        <div className="security-main">
          {/* LEFT */}
          <div className="security-left">
            <ul>
              <li>Hệ thống kiểm soát truy cập (Access Control)</li>
              <li>Nhận dạng vân tay, khuôn mặt, thẻ từ</li>
              <li>Giám sát tập trung, lưu trữ dữ liệu</li>
              <li>Hệ thống kiểm soát bãi xe thông minh</li>
              <li>Kết hợp RFID + camera nhận diện</li>
              <li>Hệ thống báo cáo, tính tiền</li>
            </ul>

            <ul>
              <li>Hệ thống cảnh báo sớm (Alarm)</li>
              <li>Tích hợp báo cháy, báo xâm nhập</li>
              <li>Cảnh báo qua SMS, Email, gọi điện</li>
            </ul>
          </div>

          {/* RIGHT IMAGE */}
          <div className="security-right">
            <img src={ImgSystem} alt="Security System" />
          </div>
        </div>
      </section>

      {/* GRID + ADVANTAGE */}
      <section className="security-bottom">
        {/* GRID */}
        <div className="security-grid">
          <div className="security-card">
            <img src={ImgNhaMay} alt="Factory" />
            <p>Nhà máy</p>
          </div>

          <div className="security-card">
            <img src={ImgOffice} alt="Office Building" />
            <p>Office Building</p>
          </div>

          <div className="security-card">
            <img src={ImgVilla} alt="Villa" />
            <p>Khu biệt thự</p>
          </div>

          <div className="security-card">
            <img src={ImgIndustrial} alt="Industrial Area" />
            <p>Khu công nghiệp</p>
          </div>
        </div>

        {/* GREEN BOX */}
        <div className="security-advantage">
          <h3>Key Advantages of Our Solution</h3>
          <p>
            Đầu tư công nghệ phù hợp giúp bảo vệ con người và tài sản. Hệ thống
            kiểm soát truy cập và giám sát hiện đại mang lại sự an toàn tuyệt đối,
            đồng thời tối ưu vận hành doanh nghiệp.
          </p>
        </div>
      </section>
    </div>
  );
}