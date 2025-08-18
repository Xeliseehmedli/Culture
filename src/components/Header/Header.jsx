import "./Header.scss";
import { useState } from "react";

import Logo from "../../assets/Logo.svg";
import Signature from "../../assets/Signature.svg";
import group from "../../assets/group.png";
import facebook from "../../assets/facebook.svg";
import instagram from "../../assets/instagram.svg";
import twitter from "../../assets/xcom.svg";
import youtube from "../../assets/youtube.svg";
import linkedin from "../../assets/linkedin.svg";
import search from "../../assets/search.svg";
export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <>
      <header className={`header ${menuOpen ? "menu-open" : ""}`}>
        <div className="header-content">
          <div className="header-text">
            <p>
              Mahnı, musiqi qədər, incəsənət, mədəniyyət qədər <br /> insanları
              bir-birinə heç nə bağlamır.
            </p>
            <img src={Signature} alt="signature-icon" />
          </div>

          <div className={`logo-wrapper ${menuOpen ? "small" : ""}`}>
            <img src={Logo} alt="logo-icon" />
          </div>

          <div
            className={`burger ${menuOpen ? "active" : ""}`}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>

        <nav className={`menu ${menuOpen ? "show" : ""}`}>
          <ul>
            <li>Nazirlik</li>
            <li>Fəaliyyət</li>
            <li>Tədbirlər</li>
            <li>Media</li>
            <li>e-Xidmətlər</li>
          </ul>
          <div className="menu-actions">
            <button>
              <img src={search} alt="search-icon" />
            </button>
            <button>AZ</button>
          </div>
        </nav>
      </header>

      <div className="header-bottom">
        <div className="header-image">
          <img src={group} alt="group-image" />
        </div>
        <div className="header-social">
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
    </>
  );
}
