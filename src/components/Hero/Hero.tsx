import React, { useEffect, useRef } from "react";
import "./Hero.css";

const Hero: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;

    const resize = () => {
      const rect = canvas.parentElement!.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);

      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      canvas.style.width = rect.width + "px";
      canvas.style.height = rect.height + "px";

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    resize();
    window.addEventListener("resize", resize);

    /* 👉 VỊ TRÍ ANTEN (CHỈNH Ở ĐÂY) */
    const antenna = {
      x: () => canvas.width / (window.devicePixelRatio || 1) * 0.72, // % ngang
      y: () => canvas.height / (window.devicePixelRatio || 1) * 0.52 // % dọc
    };

    let waves: { radius: number; alpha: number }[] = [];

    const createWave = () => {
      waves.push({ radius: 0, alpha: 0.6 });
    };

    setInterval(createWave, 900);

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      waves.forEach((wave) => {
        ctx.beginPath();
        ctx.arc(antenna.x(), antenna.y(), wave.radius, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(0, 170, 255, ${wave.alpha})`;
        ctx.lineWidth = 2;
        ctx.stroke();

        wave.radius += 1.2;
        wave.alpha -= 0.003;
      });

      waves = waves.filter((w) => w.alpha > 0);

      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <section className="hero">
      <div className="hero-bg" />
      <canvas ref={canvasRef} className="hero-canvas" />
      <div className="hero-overlay" />

      <div className="hero-content">
        <div className="hero-inner">
          <h1>Nhà cung cấp Giải pháp <br />Hạ tầng Công nghệ thông tin và Hệ thống An ninh</h1>
          <p>Các Giải pháp toàn diện về Hạ tầng kết nối mạng,<br /> Hệ thống an ninh kiểm soát của chúng tôi đáp ứng đầy đủ và tối ưu yêu cầu kinh doanh của bạn</p>
          {/* CTA BUTTON */}
          <div className="hero-actions">
            <a href="#contact" className="btn-primary">
              Liên hệ ngay
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;