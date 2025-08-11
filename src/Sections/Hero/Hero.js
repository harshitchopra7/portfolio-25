import React from "react";
import "./Hero.css";
import RotatingText from "../../Components/RotatingText/RotatingText";
import RenderLottie from "../../Components/RenderLottie/RenderLottie";
import Lanyard from "../../Components/Lanyard/Lanyard.js";
import {
  github,
  githubOutlined,
  linkedinOutlined,
} from "../../assets/icons/index.js";

function Hero() {
  return (
    <div className="hero-section-container">
      <div className="hero-section-right">
        <div className="hero-section-title">
          <p className="hero-section-title-text1">Hi, I am</p>
          <p style={{ fontSize: "86px", fontWeight: 600, color: "whitesmoke" }}>
            Harshit Chopra
          </p>
        </div>

        <div className="hero-section-title-text3">
          {/* SDE-2 Fullstack @ Skillsoft | Ex - Swiggy */}
          SDE-2 Fullstack | Ex - Swiggy
        </div>
      </div>

      <div className="hero-section-left">
        <Lanyard position={[0, 0, 20]} gravity={[0, -40, 0]} />
      </div>
    </div>
  );
}

export default Hero;
