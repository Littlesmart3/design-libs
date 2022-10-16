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
    GithubModuleRef: useRef<HTMLDivElement>(null),
  };

  // 点击color-picker
  function handleClick() {
    setPopupVisible(!popupVisible);
  }

  // 监听鼠标是否点击到color-picker外面
  useEffect(() => {
    const setPopupVisibleFalse = (e: any) => {
      if (!e.path.includes(refs.GithubModuleRef.current)) setPopupVisible(false);
    };
    if (popupVisible) document.addEventListener('mousedown', (e) => setPopupVisibleFalse(e));
    else document.removeEventListener('mousedown', setPopupVisibleFalse);
  }, [popupVisible]);

  return (
    <div className="color-picker__wrapper">
      <div
        className="color-picker__wrapper-button"
        style={{ backgroundColor: colorValue }}
        ref={refs.wrapperButtonRef}
        onClick={handleClick}
      />
      <div ref={refs.GithubModuleRef} className="color-picker__wrapper-popup-module">
        {popupVisible ? <GithubModule setColor={setColorValue} /> : null}
      </div>
    </div>
  );
};

export default Wrapper;
