import "./IntegrationPage.css";
import imgInteg from "../assets/Asset-1-1.png";
import ImgNhaMay from "../assets/nha-may.jpg";
import ImgOffice from "../assets/office-building.jpg";
import ImgVilla from "../assets/biet-thu.jpg";
import ImgIndustrial from "../assets/khu-cong-nghiep.jpg";

export default function IntegrationPage() {
    return (
        <div className="integration-page">
            {/* HERO */}
            <section className="integration-hero">
                <div className="integration-hero-left green">
                    <span>Enterprising Features</span>
                    <h1>GIẢI PHÁP TÍCH HỢP</h1>
                    <p>System Integration</p>
                </div>

                <div className="integration-hero-right">
                    <img src={imgInteg} alt="Integration Banner" />
                </div>
            </section>

            {/* INTRO */}
            <section className="integration-intro">
                <h2>Giải pháp tích hợp</h2>
                <p>
                    Chúng tôi giúp doanh nghiệp tối ưu chi phí nhờ khả năng tích hợp linh
                    hoạt các công nghệ, thiết bị và dịch vụ phù hợp. Giải pháp giúp tối ưu
                    hóa vận hành và phát triển bền vững.
                </p>

                <div className="integration-line"></div>
            </section>

            {/* MAIN CARD */}
            <section className="integration-card-section">
                <div className="integration-card">
                    {/* LEFT GRID */}
                    <div className="integration-card-left">
                        <div className="integration-grid">
                            <div className="integration-item">
                                <img src={ImgNhaMay} alt="Factory" />
                                <p>Nhà máy</p>
                            </div>

                            <div className="integration-item">
                                <img src={ImgOffice} alt="Office Building" />
                                <p>Office Building</p>
                            </div>

                            <div className="integration-item">
                                <img src={ImgVilla} alt="Villa" />
                                <p>Khu biệt thự</p>
                            </div>

                            <div className="integration-item">
                                <img src={ImgIndustrial} alt="Industrial Area" />
                                <p>Khu công nghiệp</p>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT CONTENT */}
                    <div className="integration-card-right">
                        <h3>
                            Giải pháp tích hợp tổng thể thông minh, hiện đại và phù hợp.
                        </h3>

                        <ul>
                            <li>Công nghệ lưu trữ và máy chủ</li>
                            <li>Các giải pháp ảo hóa máy chủ</li>
                            <li>Hội nghị truyền hình (Video Conference)</li>
                            <li>Màn hình tương tác (Digital Signage)</li>
                            <li>Phòng Lab Multimedia</li>
                        </ul>
                    </div>
                </div>
            </section>
        </div>
    );
}