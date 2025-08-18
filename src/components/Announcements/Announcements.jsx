import { useState } from "react";
import "./Announcements.scss";
import announcements from "../../assets/announcement1.png";

import icon from "../../assets/icon.svg";

export default function Announcements() {
  const [showSecond, setShowSecond] = useState(false);

  const handleToggle = () => {
    setShowSecond(!showSecond);
  };

  return (
    <div className="announcements-section">
      <div className="title">
        <img src={icon} alt="icon" />
        <h4>Elanlar</h4>
      </div>
      <div className="announcement-area">
        <div className="announcement-container">
          <img src={announcements} alt="announcements-image" />
          <img src={announcements} alt="announcements-image" />
          <img src={announcements} alt="announcements-image" />
        </div>

        {showSecond && (
          <div className="announcement-container">
            <img src={announcements} alt="announcements-image" />
            <img src={announcements} alt="announcements-image" />
            <img src={announcements} alt="announcements-image" />
          </div>
        )}
      </div>

      <div className="read-button">
        <button onClick={handleToggle}>Digər elanlar</button>
      </div>
    </div>
  );
}
