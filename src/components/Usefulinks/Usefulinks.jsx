import "./Usefulinks.scss";
import icon from "../../assets/icon.svg";
import Usefulink1 from "../../assets/usefulink1.png";
import Usefulink2 from "../../assets/usefulink2.png";
import Usefulink3 from "../../assets/usefulink3.png";   
import Usefulink4 from "../../assets/usefulink4.png";
import Usefulink5 from "../../assets/usefulink5.png";


export default function Usefulinks() {
  return (
    <section>
      <div className="usefulinks-section">
        <div className="title">
          <img src={icon} alt="news-icon" />
          <h4>Faydalı keçidlər</h4>
        </div>
        <div className="usefulinks-images">
          <a href="https://heydaraliyevcenter.az/#main " target="_blank"><img src={Usefulink1} alt="usefulink-image" /></a>  
          <a href="https://president.az/" target="_blank"><img src={Usefulink2} alt="usefulink-image" /></a>  
          <a href="https://mehriban-aliyeva.az/"><img src={Usefulink3} alt="usefulink-image" /></a>  
           <a href="https://heydar-aliyev-foundation.org/az"><img src={Usefulink4} alt="usefulink-image" />  </a> 
            <a href="https://azerbaijan.az/"><img src={Usefulink5} alt="usefulink-image" /></a>
        </div>
      </div>
    </section>
  );
}
