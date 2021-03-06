import React from "react";
import "./infoSection.css";
import topImage from '../../images/topImage.png';
import Resume from '../../resume/Rebecca-Potter Resume.pdf';


const InfoSection = props => (
  <div className="infoSection">

    <div>
      <img className="infoImage" src={topImage} alt="beach" />
    </div>

    <div className="infoSectionName">
      <p className="infoSectionTextLarge">Rebecca Potter</p>
      <p className="devTitle">Web Developer</p>
    </div>

    <div class="row">
      <div className="contactLinks" class="col">
        <a href={Resume} download>
          <p className="infoSectionText">Download CV <i class="far fa-file-alt"></i></p>
        </a>
      </div>

      <div className="contactLinks" class="col">
        <a className="navLink" href="mailto:beccapotter12@gmail.com?Subject=I'd%20Like%20to%20Hire%20You!" target="_top">
          <p className="infoSectionText">Contact Me <i class="fas fa-mobile-alt"></i></p>
        </a>
      </div>
    </div>

  </div>

);

export default InfoSection;