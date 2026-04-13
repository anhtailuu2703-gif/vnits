import "./HeroFeature.css";
import ImgDevice from "../../assets/home1-e1589887012648.png";
export default function FeatureSection() {
  return (
    <section className="hero-feature">

      <div className="overlay" />

      <div className="container">

        {/* TITLE */}
        <h1 className="title">
          ĐƯỢC THIẾT KẾ ĐỂ MANG LẠI
        </h1>

        {/* CONTENT */}
        <div className="content">

          {/* LEFT IMAGE */}
          <div className="left">
            <img src={ImgDevice} alt="device" />
          </div>

          {/* RIGHT TEXT */}
          <div className="right">

            <div className="item">
              <span />
              <div>
                <h3>DỄ DÀNG GIÁM SÁT</h3>
                <p>
                  Giao diện điều khiển - cảnh báo (Dashboard) tích hợp toàn bộ thiết bị,
                  hỗ trợ giám sát realtime.
                </p>
              </div>
            </div>

            <div className="item">
              <span />
              <div>
                <h3>TỐI ƯU CHI PHÍ</h3>
                <p>
                  Thiết kế giải pháp phù hợp với yêu cầu và ngân sách doanh nghiệp.
                </p>
              </div>
            </div>

            <div className="item">
              <span />
              <div>
                <h3>ĐẢM BẢO DỊCH VỤ</h3>
                <p>
                  Cam kết hỗ trợ sau bán hàng, đảm bảo hệ thống hoạt động ổn định.
                </p>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}