
import React from "react";
import "./VideoCard.css";

function VideoCard({ image, title, channel, views, timestamp }) {
  return (
    <div className="videoCard">
      <img 
        src={image} 
        alt={title} 
        className="videoCard__thumbnail" 
        style={{ width: '100%', height: '180px', objectFit: 'cover' }}
      />
      <div className="videoCard__info">
        <div className="videoCard__text">
          <h4>{title}</h4>
          <p>{channel}</p>
          <p>
            {views} • {timestamp}
          </p>
        </div>
      </div>
    </div>
  );
}

export default VideoCard;

