import React from "react";
import { footerLinks, users } from "../../utils/data";
import {FaGithubAlt, FaYoutube} from 'react-icons/fa'
import './Footer.css'

const Footer = () => {
  return (
    <footer>
      <div className="footer-left">
        <ul className="footer-link-items">
          {footerLinks.map((item) => {
            const { id, url, text } = item;
            return (
              <li className="footer-link" key={id}>
                <a href={url} className="footer-link-link" key={id}>
                  {text}
                </a>
              </li>
            );
          })}
        </ul>
        <ul className="users">
          {users.map((item) => {
            const { id, text } = item;
            return (
              <li className="user-link" key={id}>
                <a className="footer-link-link" key={id}>
                  {text}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="footer-right">
        <div className="footer-icons">
          <span className="footer-icon"><FaGithubAlt/></span>
          <span className="footer-icon global-talk"><span>G</span><sup>T</sup></span>
          <span className="footer-icon"><FaYoutube/></span>
        </div>
        <div className="footer-rights">
            <p className="copy">&copy;2021 GlobalTalk. Project for <a href="#" className="global-link">GlobalTalk</a></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
