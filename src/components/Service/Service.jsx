import "./Service.scss";
import icon from "../../assets/icon.svg";
import Service1 from "../../assets/service1.svg";
import Service2 from "../../assets/service2.svg";
import Service3 from "../../assets/service3.svg";

export default function Service() {
  return (
    <section>
      <div>
        <div className="service-section">
          <div className="title">
            <img src={icon} alt="news-icon" />
            <h4>Xidmətlər</h4>
          </div>
          <div className="service-images">
<div className="service-item">
  <div className="service-img">
    <img src={Service1} alt="service" />
  </div>
  <p className="service-text" style={{marginTop:"-3%"}}>
    Musiqi və incəsənət <br />
    məktəblərinə təhsilalanların <br />
    elektron qəbulu
  </p>
</div>

            <div className="service-item">
               <div className="service-img"><img src={Service3} alt="service" /></div>
              <p className="service-text" style={{marginTop:"-6%"}}>
                Postprodakşn mərhələsində olan <br /> filmlərə dəstək müsabiqəsi
              </p>
            </div>

            <div className="service-item">
            <div className="service-img" > <img src={Service2} alt="service"  /></div> 
              <p className="service-text">
                Uşaq musiqi, incəsənət və <br /> rəssamlıq məktəblərinə <br />
                direktorların, direktor <br /> müavinlərinin və müəllimlərin işə 
                 qəbulu
              </p>
            </div>
          </div>
 <div className="read-button">
            <a href="culture.gov.az/az/news" target="_blank" >
              <button>Bütün xidmətlər</button>
            </a>
          </div>
        </div>
        
      </div>
    </section>
  );
}
