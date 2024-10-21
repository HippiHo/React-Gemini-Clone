import React, { useState, useContext } from "react";
import "./sidebar.css";
import { assets } from "../../assets/assets";
import BottomItem from "./BottomItem";
import { Context } from "../../context/Context";
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
  const { onSent, prevPrompts, setRecentPrompt, newChat } = useContext(Context);

  const loadPrompt = async (prompt) => {
    setRecentPrompt(prompt);
    await onSent(prompt);
  };
  return (
    <div className="sidebar">
      <div className="top">
        <img
          className="menu"
          onClick={() => setExtended((prev) => !prev)}
          src={assets.menu_icon}
          alt="menu icon"
        />
        <div onClick={() => newChat()} className="new-chat">
          <img src={assets.plus_icon} alt="AddIcon" />
          {extended ? <p>New Chat</p> : null}
        </div>
        {extended ? (
          <div className="recent">
            <p className="recent-title">Recent</p>
            {prevPrompts.map((item, index) => {
              return (
                <div onClick={() => loadPrompt(item)} className="recent-entry">
                  <img src={assets.message_icon} alt="message icon" />
                  <p>{item}</p>
                </div>
              );
            })}
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
