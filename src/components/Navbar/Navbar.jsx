import React from "react";
import "./Navbar.css";
import { navLinks } from "../../utils/data";
import { BsArrowRightShort } from "react-icons/bs";
import { useGlobalContext } from "../../utils/Context";
const Navbar = () => {
  const {
    sidemenu,
    dropUp,
    toggleSidemenuBtn,
    drop,
    dropGameDown,
    activeLink,
    changeActiveLink,
    dropClose,
  } = useGlobalContext();
  const showDropdown = (e) => {
    const link = e.target.textContent;
    const tempLink = e.target.getBoundingClientRect();
    const center = (tempLink.left + tempLink.right) / 2 + 30;
    const bottom = tempLink.bottom - 16;
    dropGameDown(link, { center, bottom });
  };
  const handleDropdown = (e) => {
    let item = e.target.classList;
    item.forEach((element) => {
      if (
        element === "nav-link" ||
        element === "user-info" ||
        element === "games" ||
        element === "user-name" ||
        element === "avatar" ||
        element === "active-link"
      ) {
      } else {
        dropClose();
      }
    });
  };
  return (
    <nav className="nav-container" onMouseOver={handleDropdown}>
      <div className="nav-left">
        <div
          className={sidemenu ? "activeBtn sidemenu-btn" : "sidemenu-btn"}
          onClick={toggleSidemenuBtn}
        >
          <div className="one"></div>
          <div className="two"></div>
          <div className="three"></div>
        </div>
        <p className="app-name">GlobalTalk</p>
        <div className="divider"></div>
        <div className="nav-items">
          <ul className="nav-links">
            {navLinks.map((item) => {
              const { id, url, text } = item;
              return (
                <a
                  href={url}
                  key={id}
                  className={
                    activeLink == text
                      ? `active-link nav-link ${text}`
                      : `nav-link ${text}`
                  }
                  onClick={() => changeActiveLink(text)}
                  onMouseOver={showDropdown}
                >
                  {text}
                </a>
              );
            })}
          </ul>
        </div>
      </div>
      <div className="nav-right" onMouseOver={showDropdown}>
        <div className="user-info">
          <div className="avatar">A</div>
          <p className="user-name">Alex</p>
        </div>
        <a href="/" className="sign-out">
          Sign Out <BsArrowRightShort />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
