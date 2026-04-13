import "./InfrastructurePage.css";
import ImgBanner from "../assets/ha-tang-mang.jpg";
import ImgGp from "../assets/gp_anninh.png";
import imgbanle from "../assets/ban-le.jpg";
import imggiaoduc from "../assets/giao-duc.jpg";
import imgvanphong from "../assets/van-phong.jpg";
import imgnhamay from "../assets/nha-may.jpg";
import imgnhahang from "../assets/nha-hang.jpg";
import imgkhachsan from "../assets/khach-san.jpg";
import ImgSevrvice from "../assets/service_solution.jpg";

export default function InfrastructurePage() {
    return (
        <div className="inf-page">
            {/* HERO */}
            <section className="inf-hero">
                <div className="inf-hero-left">
                    <span>Enterprising Features</span>
                    <h1>HẠ TẦNG CÔNG NGHỆ THÔNG TIN</h1>
                    <p>IT INFRASTRUCTURE</p>
                </div>

                <div className="inf-hero-right">
                    <img src={ImgBanner} alt="banner" />
                </div>
            </section>

            {/* INTRO TEXT */}
            <section className="inf-intro">
                <p>
                    Chúng tôi cung cấp giải pháp thi công hạ tầng mạng LAN cho doanh nghiệp.
                    Tư vấn- thiết kế- thi công mạng LAN, lắp đặt, đấu nối hạ tầng,
                    các thành phần của hệ thống cáp cấu trúc cho các nhà hàng, building, văn phòng, trường đại học, nhà máy...
                    giúp khách hàng có được một cơ sở hạ tầng hiện đại,
                    tuân thủ theo các tiêu chuẩn trên thế giới,
                    bảo đảm chi phí đầu tư, cho phép dễ dàng triển khai, tích hợp,
                    nâng cấp mở rộng các thiết bị và các ứng dụng một cách dễ dàng với hiệu quả cao nhất
                </p>
            </section>

            {/* ABOUT 2 COLUMN */}
            <section className="inf-about">
                <div className="inf-about-left">
                    <img src={ImgGp} alt="an ninh" />
                </div>

                <div className="inf-about-right">
                    <h3>Thiết kế hoàn thiện & khả năng tích hợp cao</h3>
                    <ul>
                        <li>Giải pháp trọn gói linh hoạt theo nhu cầu</li>
                        <li>Tối ưu chi phí nhưng vẫn đảm bảo tiêu chuẩn</li>
                        <li>Đảm bảo ổn định, bảo mật và an toàn hệ thống</li>
                        <li>Chuyển giao tài liệu và hướng dẫn đầy đủ</li>
                    </ul>
                </div>
            </section>

            {/* GRID IMAGE */}
            <section className="inf-grid">
                <div className="inf-card">
                    <img src={imgbanle} alt="bán lẻ" />
                    <p>Bán lẻ</p>
                </div>

                <div className="inf-card">
                    <img src={imggiaoduc} alt="giáo dục" />
                    <p>Giáo dục</p>
                </div>

                <div className="inf-card">
                    <img src={imgvanphong} alt="văn phòng" />
                    <p>Văn phòng</p>
                </div>

                <div className="inf-card">
                    <img src={imgnhamay} alt="nhà máy" />
                    <p>Nhà máy</p>
                </div>

                <div className="inf-card">
                    <img src={imgnhahang} alt="nhà hàng" />
                    <p>Nhà hàng</p>
                </div>

                <div className="inf-card">
                    <img src={imgkhachsan} alt="khách sạn" />
                    <p>Khách sạn</p>
                </div>
            </section>

            {/* SERVICE */}
            <section className="inf-service">
                <div className="inf-service-left">
                    <h2>Dịch vụ & Giải pháp</h2>

                    <ul>
                        <li>Tư vấn, thiết kế hạ tầng mạng LAN</li>
                        <li>Thi công, triển khai hệ thống</li>
                        <li>Cung cấp thiết bị IT</li>
                    </ul>

                    <ul>
                        <li>Sử dụng công nghệ hiện đại</li>
                        <li>Hạ tầng: Commscope, Datwyler</li>
                        <li>Thiết bị: Cisco, Aruba, Ruckus</li>
                    </ul>
                </div>

                <div className="inf-service-right">
                    <img src={ImgSevrvice} alt="dịch vụ" />
                </div>
            </section>
        </div>
    );
}