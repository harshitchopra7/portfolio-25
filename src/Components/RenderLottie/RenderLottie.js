import React from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import hero from "../../assets/hero.json";

const RenderLottie = () => {
  return <DotLottieReact src={hero} loop autoplay />;
};

export default RenderLottie;
