import { FC, useState } from "react";
import Wrapper from "./components/wrapper";
import "./assets/style/index.less";

interface IProps {
  type: "button" | "color";
}

const App: FC<IProps> = (props) => {
  return (
    <div className="color-picker">
      <Wrapper type={props.type} />
    </div>
  );
};

export default App;
