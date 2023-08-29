import React from "react";
import typing from "../../../public/typing.json";
import Lottie from "lottie-react";

interface lottiesProps {
  height?: number;
  width?: number;
}

const Lotties: React.FC<lottiesProps> = ({ height, width }) => {
  return (
    <Lottie animationData={typing} style={{ height: height, width: width }} />
  );
};

export default Lotties;
