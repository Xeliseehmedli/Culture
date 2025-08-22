import "./Header.scss";
import { useState } from "react";
import icon from "../../assets/icon.svg";
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
  const [nazirlikOpen, setNazirlikOpen] = useState(false);
  const [fealiyyetOpen, setFealiyyetOpen] = useState(false);
  const [tedbirler, setTedbirlerOpen] = useState(false);
  const[mediaOpen,setMediaOpen]=useState(false)

  const handleNazirlikToggle = (type) => {
    if (type === "leave") setNazirlikOpen(false);
    else if (type === "enter") setNazirlikOpen(true);
  };
  const handleFealiyyetToggle = (type) => {
    if (type === "leave") setFealiyyetOpen(false);
    else if (type === "enter") setFealiyyetOpen(true);
  };
  const handleTedbirlerToggle = (type) => {
    if (type === "leave") setTedbirlerOpen(false);
    else if (type === "enter") setTedbirlerOpen(true);
  }; const handleMediaToggle = (type) => {
    if (type === "leave") setMediaOpen(false);
    else if (type === "enter") setMediaOpen(true);
  };

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
          className="burger"
  onClick={() => setMenuOpen(prev => !prev)} 
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>

        <nav   className={`menu ${menuOpen ? "show" : ""}`}>
          <ul className="menu_list">
            <li
              onMouseEnter={() => handleNazirlikToggle("enter")}
              onMouseLeave={() => handleNazirlikToggle("leave")}
            >
              Nazirlik
                <ul className={`submenu ${nazirlikOpen ? "show" : ""}`}>
        <li><img src={icon} alt="icon" /> Rəhbərlik</li>
        <li><img src={icon} alt="icon" /> Apellyasiya Şurası</li>
        <li><img src={icon} alt="icon" /> Qanunvericilik</li>
        <li><img src={icon} alt="icon" /> Mədəniyyət təsisatları və müəssisələri</li>
      </ul>
            </li>
            <li
              onMouseEnter={() => handleFealiyyetToggle("enter")}
              onMouseLeave={() => handleFealiyyetToggle("leave")}
            >
              Fəaliyyət
              <ul className={`submenu ${fealiyyetOpen ? "show" : ""}`}>
               <li><img src={icon} alt="icon" /> e-Culture</li>
        <li><img src={icon} alt="icon" /> Muzey işi</li>
        <li><img src={icon} alt="icon" /> Kitab işi və ədəbiyyat</li>
        <li><img src={icon} alt="icon" /> Musiqi</li>
              </ul>
            </li>

            <li
              onMouseEnter={() => handleTedbirlerToggle("enter")}
              onMouseLeave={() => handleTedbirlerToggle("leave")}
            >
              Tədbirlər
              <ul  className={`submenu ${tedbirler ? "show" : ""}`}>
               <li><img src={icon} alt="icon" /> Dövlət tədbirləri</li>
               <li><img src={icon} alt="icon" /> Beynəlxalq tədbirlər</li>
              </ul>
            </li>
            <li 
             onMouseEnter={() => handleMediaToggle("enter")}
              onMouseLeave={() => handleMediaToggle("leave")}
            >Media
            <ul className={`submenu ${mediaOpen ? "show" : ""}`}>
              <li><img src={icon}alt="icon" />Xəbərlər</li>
              <li><img src={icon}alt="icon" />Elanlar</li>
              <li><img src={icon}alt="icon" />Multimedia</li>
              </ul>
              </li>
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
