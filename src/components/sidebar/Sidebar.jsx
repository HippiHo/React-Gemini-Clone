import React, { useState } from "react";
import "./sidebar.css";
import { assets } from "../../assets/assets";
import BottomItem from "./BottomItem";

const bottomIcons = [
  {
    text: "Help",
    icon: "question_icon",
  },
  {
    text: "Activity",
    icon: "history_icon",
  },
  {
    text: "Settings",
    icon: "setting_icon",
  },
];

const Sidebar = () => {
  const [extended, setExtended] = useState(false);
  return (
    <div className="sidebar">
      <div className="top">
        <img
          className="menu"
          onClick={() => setExtended((prev) => !prev)}
          src={assets.menu_icon}
          alt="menu icon"
        />
        <div className="new-chat">
          <img src={assets.plus_icon} alt="AddIcon" />
          {extended ? <p>New Chat</p> : null}
        </div>
        {extended ? (
          <div className="recent">
            <p className="recent-title">Recent</p>
            <div className="recent-entry">
              <img src={assets.message_icon} alt="message icon" />
              <p>What is React?</p>
            </div>
          </div>
        ) : null}
      </div>
      <div className="bottom">
        {bottomIcons.map((el, index) => (
          <BottomItem
            imgSrc={assets[el.icon]}
            text={el.text}
            withText={extended}
            key={index}
          />
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
