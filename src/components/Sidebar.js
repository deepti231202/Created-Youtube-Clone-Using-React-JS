import React from "react";
import "./Sidebar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faCompass, faVideo, faHistory, faClock, faThumbsUp } from "@fortawesome/free-solid-svg-icons";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar__button">
        <FontAwesomeIcon icon={faHome} /> <span>Home</span>
      </div>
      <div className="sidebar__button">
        <FontAwesomeIcon icon={faCompass} /> <span>Explore</span>
      </div>
      <div className="sidebar__button">
        <FontAwesomeIcon icon={faVideo} /> <span>Subscriptions</span>
      </div>
      <hr />
      <div className="sidebar__button">
        <FontAwesomeIcon icon={faHistory} /> <span>Library</span>
      </div>
      <div className="sidebar__button">
        <FontAwesomeIcon icon={faClock} /> <span>Watch Later</span>
      </div>
      <div className="sidebar__button">
        <FontAwesomeIcon icon={faThumbsUp} /> <span>Liked Videos</span>
      </div>
      <hr />
      <h3>SUBSCRIPTIONS</h3>
   
      <div className="sidebar__button">Horror Talks</div>
      <div className="sidebar__button">Haunted House</div>
      <div className="sidebar__button">Ghost Babbar</div>
      <div className="sidebar__button">Evil Speaks</div>
      <div className="sidebar__button">Screen Rant</div>
      <div className="sidebar__button">Horror Cart</div>
    </div>
  );
}

export default Sidebar;
