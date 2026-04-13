import { motion, type Variants } from "framer-motion";
import "./Features.css";
import ImgFeat from "../../assets/Asset-30-e1590749294538.png";

const fadeUp: Variants = {
  hidden: {
    opacity: 0,
    y: 60
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

export default function FeatureSection() {
  return (
    <section className="feature-section">
      {/* Arrow */}
      <motion.div
        className="arrow"
        variants={fadeUp}
        initial="hidden"
        animate="visible"
      >
        ↓
      </motion.div>

      {/* Title */}
      <p className="feature-subtitle">Enterprising Features</p>

      <h2 className="feature-title">
        GIẢI PHÁP CÔNG NGHỆ THÔNG TIN VÀ AN NINH TOÀN DIỆN
      </h2>

      <p className="feature-desc">
        Cải thiện hiệu năng, độ ổn định của hệ thống mạng, hệ thống Wifi mạnh mẽ
        và hệ thống giám sát an ninh tin cậy với giải pháp của ITSEC.
      </p>

      <h3 className="feature-heading">
        UNIFIED IT & SECURITY SOLUTION (UISS)
      </h3>

      {/* Content */}
      <div className="feature-content">
        <img src={ImgFeat} alt="building" className="building" />
      </div>
    </section>
  );
}