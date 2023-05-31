import React from "react";
import secImg from "../../assets/images/secImage.png";
import {BsArrowRightShort} from 'react-icons/bs'
import './SectionFour.css'


const SectionFour = () => {
  return (
    <section className="section-four" id="statistics">
      <div className="section-four-left">
        <img src={secImg} alt="secImage" />
      </div>
      <div className="section-four-right">
        <h1 className="app-motto">Watch your progress everyday</h1>
        <p className="more-info">
          Save statistics on your achievements, words learned, and mistakes
        </p>
        <button className="btn">Statistics <span className="btn-icon"><BsArrowRightShort/></span></button>
      </div>
    </section>
  );
};

export default SectionFour;
