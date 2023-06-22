import React, { useEffect, useRef } from "react";
import "./Dropdown.css";
import { useGlobalContext } from "../../utils/Context";

const Dropdown = () => {
  //Adey force test branch
  const { dropMenu, drop, position, activeLink, changeActiveLink } =
    useGlobalContext();
  const container = useRef(null);
  useEffect(() => {
    const menu = container.current;
    const { center, bottom } = position;
    menu.style.left = `${center}px`;
    menu.style.top = `${bottom}px`;
  }, [position]);

  return (
    <div className="dropdown-container" ref={container}>
      {" "}
      <div
        className={drop ? "drop games-dropdown-menu" : "  games-dropdown-menu"}
      >
        {dropMenu.map((item) => {
          const { id, url, text } = item;
          return (
            <a
              href={url}
              key={id}
              className={
                activeLink == text ? "active-link nav-link" : `nav-link`
              }
              onClick={() => changeActiveLink(text)}
            >
              {text}
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default Dropdown;
