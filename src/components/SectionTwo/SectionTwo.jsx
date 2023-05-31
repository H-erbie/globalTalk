import React from "react";
import "./SectionTwo.css";
import imgGirl from "../../assets/images/thirdImage.png";
import shoes from "../../assets/images/shoes.png";
import megaphone from "../../assets/images/megaphone.png";
import {BsArrowRightShort} from 'react-icons/bs'

const SectionTwo = () => {
  return (
    <section className="section-two" id="sprint">
      <div className="section-two-left">
        <img src={imgGirl} alt="thirdImage" />
      </div>
      <div className="section-two-right">
        <h1 className="app-motto">Learn a language in a playful way</h1>
        <p className="more-info">Make learning words more fun with mini-games</p>
        <div className="cards">
            <div className="shoes card">
                <img src={shoes} alt="shoes" />
                <p className="card-info info-sprint">Sprint <span className="btn-icon"><BsArrowRightShort/></span></p>
            </div>
            <div className="megaphone card">
                <img src={megaphone} alt="megaphone" />
                <p className="card-info info-mega" >audio-call <span className="btn-icon"><BsArrowRightShort/></span></p>
            </div>
        </div>
      </div>
    </section>
  );
};

export default SectionTwo;
