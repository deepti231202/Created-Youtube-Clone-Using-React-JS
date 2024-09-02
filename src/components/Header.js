import React from "react";
import "./Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faMicrophone, faBell, faUserCircle, faBars } from "@fortawesome/free-solid-svg-icons";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";

function Header() {
  return (
    <div className="header">
      <div className="header__left">
        <FontAwesomeIcon icon={faBars} className="header__menuIcon" />
        <FontAwesomeIcon icon={faYoutube} className="header__logo" />
        <span className="header__title">YouTube</span>
      </div>
      <div className="header__center">
        <input type="text" placeholder="Search" />
        <button className="header__searchButton">
          <FontAwesomeIcon icon={faSearch} />
        </button>
        {/* <FontAwesomeIcon icon={faMicrophone} className="header__micIcon" /> */}
      </div>
      <div className="header__right">
        <FontAwesomeIcon icon={faBell} className="header__icon" />
        {/* <FontAwesomeIcon icon={faUserCircle} className="header__icon" /> */}
      </div>
    </div>
  );
}

export default Header;
