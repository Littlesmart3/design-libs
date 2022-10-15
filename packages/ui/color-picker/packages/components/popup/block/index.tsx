import { FC, useState } from "react";
import "./index.less";

interface IProps {
  type: "button" | "color";
}

const Wrapper: FC<IProps> = (props) => {
  return (
    <div className="color-picker__wrapper">
      <div className="color-picker__wrapper-button"></div>
    </div>
  );
};

export default Wrapper;
