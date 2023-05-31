import React from 'react'
import './SectionThree.css'
import lastImg from "../../assets/images/lastImage.png";
import {BsArrowRightShort} from 'react-icons/bs'



const SectionThree = () => {
  return (
    <section className='section-three' id='textbook'>
        <div className="section-three-left">
            <h1 className='app-motto'>Increase your vocabulary </h1>
            <p className="more-info">Traditional and new effective approaches to word study</p>
            <button className="btn">Textbook <span className='btn-icon'><BsArrowRightShort/></span></button>
        </div>
        <div className="section-three-right">
            <img src={lastImg} alt="last-img" />
        </div>
    </section>
  )
}

export default SectionThree