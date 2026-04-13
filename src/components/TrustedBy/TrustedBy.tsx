import { useNavigate } from "react-router-dom";
import "./TrustedBy.css";
import ImgTheG from "../../assets/the-gangs.jpg";
import FTU from "../../assets/FTU.jpg";
import Savina from "../../assets/LOGO SAVINA - 6000px.png"
import Toancau from "../../assets/toancau-1.jpg"
import Vingroup from "../../assets/vingroup-logo.png"
import Enjoy from "../../assets/enjoyhotel.png"
import Cuchi from "../../assets/images.webp"
import { motion, useAnimationFrame, useMotionValue } from "framer-motion";
import { useRef } from "react";

const logos = [
  { id: "the-gangs", img: ImgTheG },
  { id: "ftu", img: FTU },
  { id: "savina", img: Savina },
  { id: "toan-cau", img: Toancau },
  { id: "vin-group", img: Vingroup },
  { id: "en-joy", img: Enjoy },
  { id: "cu-chi", img: Cuchi },
];

export default function LogoSlider() {
  const navigate = useNavigate();
  const x = useMotionValue(0);
  const speed = 0.5; // tốc độ

  const containerRef = useRef<HTMLDivElement>(null);

  // 🔥 auto chạy vô hạn
  useAnimationFrame(() => {
    let current = x.get();
    current -= speed;

    const width = containerRef.current?.scrollWidth || 0;

    // 🔥 loop thật (không giật)
    if (Math.abs(current) >= width / 2) {
      current = 0;
    }

    x.set(current);
  });

  return (
    <div className="logo-slider">
      <motion.div className="logo-track"
        ref={containerRef}
        style={{ x }}
        drag="x"
        dragConstraints={{ left: -1000, right: 0 }}
        whileTap={{ cursor: "grabbing" }}
      >
        {[...logos, ...logos, ...logos].map((logo, i) => (
          <div
            className="logo-item"
            key={i}
            onClick={() => {
              navigate(`/project/${logo.id}`);
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          >
            <img src={logo.img} alt="logo" />
          </div>
        ))}
      </motion.div>
    </div>
  );
}