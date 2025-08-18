import "./News.scss";
import icon from "../../assets/icon.svg";
import Elcin from "../../assets/Elcin.jpeg";
import State from "../../assets/state.jpg";
import Susa from "../../assets/Susa.png";

export default function News() {
  return (
    <main>
      <section>
        <div className="news-section">
          <div className="title">
            <img src={icon} alt="news-icon" />
            <h4>Xəbərlər</h4>
          </div>
          <div className="news-images">
            <div className="right-news-item">
              <a
                className="news-link"
                href="https://culture.gov.az/az/news/news-detail/turkmenistanda-azerbaycan-milli-gunu-medeni-irsimizin-parlaq-teqdimati/2739"
                target="_blank"
                rel="noopener noreferrer"
              ></a>
              <div>
                <img src={Susa} alt="Susa-image" className="susa-image" />
              </div>
              <p className="right-news-detail">
                Türkmənistanda “Azərbaycan Milli Günü” – Mədəni <br /> İrsimizin
                Parlaq Təqdimatı
              </p>
            </div>
            <div className="right-news-item">
              <div>
                {" "}
                <img src={Elcin} alt="elcin-image" className="elcin-image" />
              </div>
              <p className="right-news-detail">
                Xalq yazıçısı Elçin Əfəndiyevlə vida mərasimi keçirilib
              </p>
              <a
                className="news-link"
                href="https://culture.gov.az/az/news/news-detail/xalq-yazicisi-elcin-efendiyevle-vida-merasimi-kecirilib/2738"
                target="_blank"
                rel="noopener noreferrer"
              ></a>
            </div>
            <div className="right-news-item">
              <div>
                <img src={State} alt="state-image" className="state-image" />
              </div>
              <p className="right-news-detail">Elçin İlyas oğlu Əfəndiyev</p>
              <a
                className="news-link"
                href="https://culture.gov.az/az/news/news-detail/elcin-ilyas-oglu-efendiyev/2737"
                target="_blank"
                rel="noopener noreferrer"
              ></a>
            </div>
          </div>
          <div className="read-button">
            <a href="culture.gov.az/az/news" target="_blank">
              <button>Bütün xəbərlər</button>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
