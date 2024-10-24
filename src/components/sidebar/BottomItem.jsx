import React from "react";
import "./sidebar.css";

const BottomItem = ({ imgSrc, text, withText }) => {
  return (
    <div className="bottom-item recent-entry">
      <img src={imgSrc} alt={imgSrc} />
      {withText ? <p>{text}</p> : null}
    </div>
  );
};

export default BottomItem;
