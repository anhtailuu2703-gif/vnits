import { useEffect, useState } from "react";
import "./floating.css";

export default function FloatingButtons() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowTop(window.scrollY > 200);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="floating">
      {/* BACK TO TOP */}
      {showTop && (
        <button className="btn top" onClick={scrollTop}>
          ↑
        </button>
      )}

      {/* MESSENGER */}
      <a
        href="https://m.me/112112617099374"
        target="_blank"
        className="btn messenger"
      >
        💬
      </a>
    </div>
  );
}