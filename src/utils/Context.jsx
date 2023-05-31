import React, { useContext, useEffect, useState } from "react";
import { gamesDrop, signDrop } from "./data";
const AppContext = React.createContext();
const AppProvider = ({ children }) => {
  const [sidemenu, setSidemenu] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    window.addEventListener("resize", () => {
      setWidth(window.innerWidth);
    });
    activeLink === "home" && width <= 786 ? setActiveLink("main") : activeLink;
    activeLink === "main" && width >= 786 ? setActiveLink("home") : activeLink;
  }, [window.innerWidth]);
  const [activeLink, setActiveLink] = useState("home");
  const [drop, setDrop] = useState(false);
  const [position, setPostion] = useState({});
  const [dropMenu, setDropMenu] = useState([]);
  const toggleSidemenuBtn = () => {
    setSidemenu(!sidemenu);
  };
  const changeActiveLink = (text) => {
    setActiveLink(text);
  };

  const dropGameDown = (link, position) => {
    if (link === "games") {
      setDropMenu(gamesDrop);
      setPostion(position);
      dropOpen();
    } else if (link === "AAlex" && width < 786) {
      setDropMenu(signDrop);
      setPostion(position);
      dropOpen();
    }
  };
  const dropOpen = () => {
    setDrop(true);
  };
  const dropClose = () => {
    setDrop(false);
  };
  return (
    <AppContext.Provider
      value={{
        activeLink,
        drop,
        dropClose,
        position,
        dropGameDown,
        changeActiveLink,
        sidemenu,
        toggleSidemenuBtn,
        dropOpen,
        dropMenu,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
export const useGlobalContext = () => {
  return useContext(AppContext);
};
export { AppContext, AppProvider };
