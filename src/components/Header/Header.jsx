import React from "react";
import "./Header.css";
import { BsLightningFill } from "react-icons/bs";
import { BiPlusMedical } from "react-icons/bi";
import { MdVideogameAsset } from "react-icons/md";
import img from "../../assets/images/mainImage.png";
const Header = () => {
  return (
    <section className="header-container" id="home">
      <div className="header-left">
        <p className="sub-head">E-course Platform</p>
        <h1 className="app-motto">Learning and teaching online, made easy.</h1>
        <p className="more-info">
          Practice your English and learn new things with the platform
        </p>
        <button className="btn about">About platform</button>
      <div className="statistics">
        <div className="popular-words">
          <div className="pop-info">
          <span className="head-icons">
            <BsLightningFill />
          </span>
          <h3 className="figures">600</h3>
          <span className="head-icons">
            <BiPlusMedical />
          </span>
          </div>
          <p className="desc">Popular words</p>
        </div>
        <div className="divider"></div>
        <div className="mini-games">
          <div className="mini-info">
          <span className="game-asset head-icons">
            <MdVideogameAsset />
          </span>
          <h3 className="figures">2</h3>
          <span className="head-icons">
            <BiPlusMedical />
          </span>
          </div>
          <p className="desc">Mini-games</p>
        </div>
      </div>
      </div>
      <div className="header-right">
        <img src={img} alt="mainImage" />
      </div>
    </section>
  );
};

export default Header;
