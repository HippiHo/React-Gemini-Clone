import React, { useContext } from "react";
import "./main.css";
import { assets } from "../../assets/assets";
import Card from "./Card";
import { Context } from "../../context/Context";

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
  const {
    onSent,
    input,
    setInput,
    recentPrompt,
    showResult,
    loading,
    resultData,
  } = useContext(Context);

  return (
    <div className="main">
      <div className="nav">
        <p>Gemini</p>
        <img src={assets.user_icon} alt="" />
      </div>
      <div className="main-container">
        {!showResult ? (
          <>
            <div className="greet">
              <p>
                <span>Hello, Dev.</span>
              </p>
              <p>How can I help you today?</p>
            </div>
            <div className="cards">
              {dummyPrompts.map((el, index) => (
                <Card text={el.prompt} imgIcon={el.icon} key={index} />
              ))}
            </div>
          </>
        ) : (
          <div className="result">
            <div className="result-title">
              <img src={assets.user_icon} alt="user icon" />
              <p>{recentPrompt}</p>
            </div>
            <div className="result-data">
              <img src={assets.gemini_icon} alt="gemini icon" />
              {loading ? (
                <div className="loader">
                  <hr />
                  <hr />
                  <hr />
                </div>
              ) : (
                <p dangerouslySetInnerHTML={{ __html: resultData }}></p>
              )}
            </div>
          </div>
        )}
      </div>
      <div className="main-bottom">
        <div className="search-box">
          <input
            onChange={(e) => setInput(e.target.value)}
            value={input}
            type="text"
            placeholder="Enter a prompt here"
          />
          <div>
            <img src={assets.gallery_icon} alt="gallery" />
            <img src={assets.mic_icon} alt="record" />
            <img onClick={() => onSent()} src={assets.send_icon} alt="send" />
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
