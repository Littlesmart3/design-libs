import { FC, useState } from 'react';
import './index.less';
const defaultColorList = [
  { color: '#b80000' },
  { color: '#db3e00' },
  { color: '#fccb00' },
  { color: '#008b02' },
  { color: '#006b76' },
  { color: '#004dcf' },
  { color: '#5300eb' },
  { color: '#b80000' },
  { color: '#db3e00' },
  { color: '#fccb00' },
  { color: '#008b02' },
  { color: '#006b76' },
  { color: '#004dcf' },
  { color: '#5300eb' },
  { color: '#004dcf' },
  { color: '#5300eb' },
];

interface Iprops {
  setColor: any;
}

const GitHub: FC<Iprops> = (props) => {
  function outOfPopup(e: any) {
    // console.log(e, 9999);
  }
  return (
    <div className={`color-picker__popup-github`} onMouseDown={(e) => outOfPopup(e)}>
      <div className="color-picker__popup-github-list">
        {defaultColorList.map((i, k) => (
          <div
            key={k}
            className="color-picker__popup-github-list-item"
            style={{ backgroundColor: i.color }}
            onClick={() => props.setColor(i.color)}
          />
        ))}
      </div>
    </div>
  );
};

export default GitHub;
