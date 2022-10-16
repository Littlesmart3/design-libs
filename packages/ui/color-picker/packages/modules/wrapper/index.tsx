import React, { FC, useEffect, useRef, useState } from 'react';
import GithubModule from '../popup/github/index';
import BlockModule from '../popup/block/index';
import { ColorPickerType } from '../../index';
import './index.less';

interface IProps {
  type: ColorPickerType;
}

const Wrapper: FC<IProps> = (props) => {
  const [popupVisible, setPopupVisible] = useState(false);
  const [colorValue, setColorValue] = useState('');
  const refs = {
    wrapperButtonRef: useRef<HTMLDivElement>(null),
    GithubModuleRef: useRef<HTMLDivElement>(null),
  };

  // 监听鼠标是否点击到color-picker外面
  useEffect(() => {
    function isInPopup(e: any) {
      if (!e.path.includes(refs.GithubModuleRef.current) && !e.path.includes(refs.wrapperButtonRef.current)) {
        setPopupVisible(false);
      }
    }

    if (popupVisible) document.addEventListener('mousedown', isInPopup);
    return () => document.removeEventListener('mousedown', isInPopup);
  }, [popupVisible]);

  const getPickerElement = (type: ColorPickerType) => {
    switch (type) {
      case 'github':
        return <GithubModule setColor={setColorValue} />;
      case 'block':
        return <BlockModule setColor={setColorValue} />;
      default:
        return null;
    }
  };

  return (
    <div className="color-picker__wrapper">
      <div
        className="color-picker__wrapper-button"
        style={{ backgroundColor: colorValue }}
        ref={refs.wrapperButtonRef}
        onClick={() => setPopupVisible(!popupVisible)}
      />
      <div ref={refs.GithubModuleRef} className="color-picker__wrapper-popup-module">
        {popupVisible ? getPickerElement(props.type) : null}
      </div>
    </div>
  );
};

export default Wrapper;
