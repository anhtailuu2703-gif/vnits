import React from "react";
import styles from "./Benefits.module.css";
import { FaRocket, FaUsers, FaCogs, FaChartLine } from "react-icons/fa";
import ImgBene from "../../assets/home1-e1589887012648.png";

const benefitsList = [
  { icon: <FaRocket />, text: "Fast Deployment" },
  { icon: <FaUsers />, text: "Expert Team" },
  { icon: <FaCogs />, text: "Custom Solutions" },
  { icon: <FaChartLine />, text: "Business Growth" },
];

const Benefits: React.FC = () => {
  return (
    <section className={styles.benefits}>
      <div className={styles.header}>
        <h2>ĐƯỢC THIẾT KẾ ĐỂ MANG LẠI</h2>
        <p>Những giá trị cốt lõi giúp doanh nghiệp của bạn thành công.</p>
      </div>
      <div className={styles.container}>
        <div className={styles.left}>
          <img
            src={ImgBene}
            alt="Benefits Illustration"
          />
        </div>
        <div className={styles.right}>
          <ul>
            {benefitsList.map((item, index) => (
              <li key={index}>
                <span className={styles.icon}>{item.icon}</span>
                {item.text}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Benefits;