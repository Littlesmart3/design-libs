import React, { FC, useState } from 'react';
import ColorPicker from '../packages/index';
import './index.less';

const App: FC<{}> = () => {
  return (
    <div className="example">
      <ColorPicker type="block" />
    </div>
  );
};

export default App;
