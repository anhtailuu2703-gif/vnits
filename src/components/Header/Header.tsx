import { useEffect, useState } from "react";
import "./Header.css";
import ImgLogo from "../../assets/vnits_logo.png";
import { Link } from "react-router-dom";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`site-header ${scrolled ? "scrolled" : ""}`}>
      <div className="header-inner">
        {/* LOGO */}
        <div className="logo"><Link to="/" onClick={() => window.scrollTo({top: 0, behavior: "smooth"})}><img src={ImgLogo} alt="VNITS Logo" style={{width: 100}} /></Link></div>

        {/* MENU */}
        <nav className={`main-nav ${open ? "open" : ""}`}>
          <Link to="/giai-phap-ha-tang-cntt">Giải pháp hạ tầng CNTT</Link>
          <Link to="/giai-phap-an-ninh">GIẢI PHÁP AN NINH</Link>
          <Link to="/giai-phap-tich-hop">GIẢI PHÁP TÍCH HỢP</Link>
        </nav>

        {/* HAMBURGER */}
        <div
          className={`menu-toggle ${open ? "active" : ""}`}
          onClick={() => setOpen(!open)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </header>
  );
}