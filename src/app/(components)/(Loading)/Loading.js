"use client";
import { useEffect, useRef } from "react";
import lottie from "lottie-web";
import animationData from "../../../../public/loading.json";

const Loading = () => {
  const container = useRef(null);

  useEffect(() => {
    if (container.current) {
      lottie.loadAnimation({
        container: container.current,
        renderer: "svg",
        loop: true,
        autoplay: true,
        animationData,
      });
    }
  }, []);

  return (
    <div
      ref={container}
      style={{
        background: "white",
        width: "100%",
        height: "100vh",
      }}
    ></div>
  );
};

export default Loading;