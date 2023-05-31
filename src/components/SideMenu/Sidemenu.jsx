import React, { useState } from "react";
import { submenuLinks } from "../../utils/data";
import "./Sidemenu.css";
import { useGlobalContext } from "../../utils/Context";

const Sidemenu = () => {
  const { sidemenu, activeLink, changeActiveLink } = useGlobalContext();
  return (
    <div
      className={
        sidemenu ? "active-sidemenu sidemenu-container" : "sidemenu-container"
      }
    >
      <ul className="sidemenu-items">
        {submenuLinks.map((item) => {
          const { id, url, text } = item;
          return (
            <li
              onClick={() => changeActiveLink(text)}
              className="sidemenu-link"
              key={id}
            >
              <a
                href={url}
                className={
                  activeLink == text
                    ? "active-sidemenuLink nav-link"
                    : "nav-link"
                }
              >
                {text}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Sidemenu;
