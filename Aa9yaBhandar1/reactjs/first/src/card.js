import React, { useState } from "react";
import profile from "./profile.jpg";
import profile1 from "./profile1.jpg";
import profile2 from "./profile2.jpg";
function Card() {
  const images = [profile, profile1, profile2];
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };
  return (
    <div className="card">
      <img className="pp" src={images[currentIndex]} alt="profile picture" />
      <h1 id="name">Just a Chill Girl</h1>
      <h3 id="rollno">PAS080BCT002</h3>
      <p id="description">
        I am a student of wrc actively engaged in frontend right now.
      </p>
      <button onClick={handleClick} id="button">
        Click to change the profile picture
      </button>
    </div>
  );
}

export default Card;
