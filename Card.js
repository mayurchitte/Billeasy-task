import React from "react";
import "./App.css";

const Card = ({ src }) => {
  return (
    <div>
      <img src={src} alt="flex-gallery" />
    </div>
  );
};

export default Card;
