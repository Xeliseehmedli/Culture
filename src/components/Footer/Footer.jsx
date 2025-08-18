import "./Footer.scss";
import Logo from "../../assets/Logo.svg";
import facebook from "../../assets/facebook.svg";
import instagram from "../../assets/instagram.svg";
import twitter from "../../assets/xcom.svg";
import youtube from "../../assets/youtube.svg";
import linkedin from "../../assets/linkedin.svg";
export default function Footer() {
  return (
    <footer>
      <div>
        <div className="footer-content">
          <img src={Logo} alt="logo" />
          <div className="footer-divider"></div>
          <div className="footer-text">
            <div className="contact-info">
              <p>Əlaqə vasitələri</p>
              <nav className="contact-nav">
                <ul>
                  <li>
                    <a href="#home">
                      Ünvan: AZ1000, Bakı, Səbail r., Ü. Hacıbəyli, 84
                    </a>
                  </li>
                  <li>
                    <a href="#about">E-poçt: info@culture.gov.az</a>
                  </li>
                  <li>
                    <a href="#projects">Telefon: (+99412) 147</a>
                  </li>
                  <li>
                    <a href="#projects">Telefon: (+99412) 493-43-98</a>
                  </li>
                  <li>
                    <a href="#projects">Telefon: (+99412) 493-30-02</a>
                  </li>
                  <li>
                    <a href="#projects">Faks: (+99412) 493-56-05</a>
                  </li>
                </ul>
              </nav>
            </div>

            <div className="contact-info">
              <p className="info-text">Vətəndaşlar üçün</p>
              <nav className="contact-nav">
                <ul>
                  <li>
                    <a href="">Elektron müraciət</a>
                  </li>
                  <li>
                    <a href="">Tez-tez verilən suallar</a>
                  </li>
                  <li>
                    <a href="">Vətəndaş qəbulu</a>
                  </li>
                  <li>
                    <a href="">İşə qəbul</a>
                  </li>
                </ul>
              </nav>
            </div>

            <div className="footer-divider2"></div>

            <div className="subscribe">
              <label htmlFor="email">Abunə olun</label>
              <div className="input-wrapper">
                <input
                  type="text"
                  name="email"
                  id="email"
                  placeholder="E-poçt"
                />
                <button className="submit-btn">Göndərin</button>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-copyright">
          <p>Culture.gov.az © 2023 Bütün hüquqlar qorunur</p>
          <div className="footer-social">
            <a href="" className="call">
              147
            </a>
            <a href="https://www.facebook.com/culture.gov.az" target="_blank">
              <img src={facebook} alt="facebook-icon" />
            </a>
            <a href="https://www.instagram.com/culture.gov.az/" target="_blank">
              <img src={instagram} alt="instagram-icon" />
            </a>
            <a
              href="https://www.linkedin.com/company/culturegovaz/"
              target="_blank"
            >
              <img src={linkedin} alt="linkedin-icon" />
            </a>
            <a href="https://www.youtube.com/@culturegovaz" target="_blank">
              <img src={youtube} alt="youtube-icon" />
            </a>
            <a href="https://x.com/culture_gov_az" target="_blank">
              <img src={twitter} alt="twitter-icon" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
