import React from "react";
import styles from "./solutions.module.css";
import ImgMesa from "../../assets/Mesa-de-trabajo-1.png";
import ImgSecurity from "../../assets/security.png";
import ImgIntegration from "../../assets/server.png";

const Solutions: React.FC = () => {
  return (
    <section id="solutions" className={styles.solutions} >
      <h2 className={styles.title}>CÁC GIẢI PHÁP CÔNG NGHỆ THÔNG TIN</h2>

      <div className={styles.grid}>
        {/* Card 1 */}
        <div className={styles.card}>
          <div className={styles.image}>
            <img
              src={ImgSecurity}
              alt="Hạ tầng CNTT"
            />
          </div>
          <h3>Hạ Tầng Công nghệ thông tin</h3>
          <p>
            Chúng tôi cung cấp giải pháp thi công hạ tầng mạng LAN cho doanh
            nghiệp. Tư vấn – thiết kế – triển khai hệ thống CNTT chuyên nghiệp.
          </p>
        </div>

        {/* Card 2 */}
        <div className={styles.card}>
          <div className={styles.image}>
            <img
              src={ImgIntegration}
              alt="Giải pháp an ninh"
            />
          </div>
          <h3>Giải pháp an ninh</h3>
          <p>
            Giám sát, điều hành và quản trị toàn bộ hệ thống an ninh cho tòa nhà,
            nhà máy, doanh nghiệp với độ tin cậy cao.
          </p>
        </div>

        {/* Card 3 */}
        <div className={styles.card}>
          <div className={styles.image}>
            <img
              src={ImgMesa}
              alt="Giải pháp tích hợp"
            />
          </div>
          <h3>Giải pháp tích hợp</h3>
          <p>
            Giải pháp tích hợp tổng thể thông minh, hiện đại và phù hợp với từng
            mô hình doanh nghiệp.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Solutions;