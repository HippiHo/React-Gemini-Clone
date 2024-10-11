import React from "react";
import "./main.css";
import { assets } from "../../assets/assets";
import Card from "./Card";

const dummyPrompts = [
  {
    prompt: "Suggest beautiful places to see on the upcoming road trip",
    icon: "compass_icon",
  },
  {
    prompt: "Briefly summarize this concept: Urban planning",
    icon: "bulb_icon",
  },
  {
    prompt: "Brainstorm team bonding activities for our work retreat.",
    icon: "message_icon",
  },
  {
    prompt: "Improve the readability of the following code.",
    icon: "code_icon",
  },
];

const Main = () => {
  return (
    <div className="main">
      <div className="nav">
        <p>Gemini</p>
        <img src={assets.user_icon} alt="" />
      </div>
      <div className="main-container">
        <div className="greet">
          <p>
            <span>Hello, Dev.</span>
          </p>
          <p>How can I help you today?</p>
        </div>
        <div className="cards">
          {dummyPrompts.map((el) => (
            <Card text={el.prompt} imgIcon={el.icon} />
          ))}
        </div>
      </div>
      <div className="main-bottom">
        <div className="search-box">
          <input type="text" placeholder="Enter a prompt here" />
          <div>
            <img src={assets.gallery_icon} alt="gallery" />
            <img src={assets.mic_icon} alt="record" />
            <img src={assets.send_icon} alt="send" />
          </div>
        </div>
        <p className="bottom-info">
          Gemini may display inaccurate info, including about people, so
          double-check its responses. Your privacy and Gemini Apps
        </p>
      </div>
    </div>
  );
};

export default Main;
