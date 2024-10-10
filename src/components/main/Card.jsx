import React from "react";
import { assets } from "../../assets/assets";

const Card = ({ text, imgIcon }) => {
  return (
    <div className="card">
      <p>{text}</p>
      <img src={assets[imgIcon]} alt={imgIcon} />
    </div>
  );
};

export default Card;
