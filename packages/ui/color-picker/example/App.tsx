import React, { FC, useState } from "react";
import ColorPicker from "../packages/index";
import "./index.less";

const App: FC<{}> = () => {
  return (
    <div className="example">
      <ColorPicker type="button" />
    </div>
  );
};

export default App;
