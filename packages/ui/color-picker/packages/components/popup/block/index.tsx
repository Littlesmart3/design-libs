import { FC, useState } from 'react';
import './index.less';

interface IProps {
  type: 'button' | 'color';
}

const Block: FC<IProps> = (props) => {
  return (
    <div className="color-picker__popup-block">
      <div className="color-picker__popup-block-preview">123</div>
      <div className="color-picker__popup-block-panel">456</div>
    </div>
  );
};

export default Block;
