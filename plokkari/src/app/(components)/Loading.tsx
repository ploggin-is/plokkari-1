"use client"
import Lottie from "react-lottie";
import animationData from '../../../public/58737-simple-green-loading-animation'

const loading = () => {
    const defaultOptions = {
      loop: true,
      autoplay: true,
      animationData: animationData,
      rendererSettings: {
        preserveAspectRatio: "xMidYMid slice"
    }
    };
    
    return (
        <Lottie 
          options={defaultOptions}
          height={200}
          width={200}
        />
    );
};

export default loading;
