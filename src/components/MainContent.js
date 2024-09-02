import React from "react";
import "./MainContent.css";
import VideoCard from "./VideoCard";

function MainContent() {
  return (
    <div className="mainContent">
      <VideoCard
        title="ANNABELLE"
        channel="Horror Talks"
        views="2M views"
        timestamp="2 hours ago"
        image="img11.jpg"
      />
      <VideoCard
        title="EVIL DEAD RISE"
        channel="Haunted House"
        views="12M views"
        timestamp="11 months ago"
        image="img1.2.jpg"
      />
      <VideoCard
        title="The NUN"
        channel="Ghost Babbar"
        views="226K views"
        timestamp="12 hours ago"
        image="pic3.jpg"
      />
      <VideoCard
        title="THE CONJURING 2"
        channel="Evil Speaks"
        views="100M views"
        timestamp="10 months ago"
        image="img1.3.jpg"
      />
       <VideoCard
        title="THE GRUDGE"
        channel="Screen Rant"
        views="100M views"
        timestamp="10 days ago"
        image="img4.jpg"
      />
       <VideoCard
        title="THE COURAGE - The Cowardly Dog"
        channel="Screen Rant"
        views="100M views"
        timestamp="50 days ago"
        image="img1.6.jpg"
      />
       <VideoCard
        title="THE MONSTER HOUSE"
        channel="Horror Cart"
        views="100k views"
        timestamp="15 days ago"
        image="img10.jpg"
      />
       <VideoCard
        title="DEMONTE COLONY - II"
        channel="Horror Cart"
        views="200M views"
        timestamp="20 days ago"
        image="img1.4.jpg"
      />
    </div>
  );
}

export default MainContent;
