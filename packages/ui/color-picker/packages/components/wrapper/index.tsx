import React, { FC, useEffect, useRef, useState } from 'react';
import GithubModule from '../popup/github/index';
import './index.less';

interface IProps {
  type: 'button' | 'color';
}

const Wrapper: FC<IProps> = (props) => {
  const [popupVisible, setPopupVisible] = useState(false);
  const [colorValue, setColorValue] = useState('');
  const refs = {
    wrapperButtonRef: useRef<HTMLDivElement>(null),
  };
  function handleClick() {
    setPopupVisible(!popupVisible);
  }

  return (
    <div className="color-picker__wrapper">
      <div
        className="color-picker__wrapper-button"
        style={{ backgroundColor: colorValue }}
        ref={refs.wrapperButtonRef}
        onClick={handleClick}
      />
      {popupVisible ? <GithubModule setColor={setColorValue} /> : null}
    </div>
  );
};

export default Wrapper;
