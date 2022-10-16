import { FC, useState } from 'react';
import Input from '../../../components/input';
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
];

interface IProps {
  setColor: any;
}

const Block: FC<IProps> = (props) => {
  const [colorValue, setColorValue] = useState<string>('#000000');
  const inputChange = (v: string) => {
    setColorValue(v);
  };
  return (
    <div className="color-picker__popup-block">
      <div className="color-picker__popup-block-preview" style={{ backgroundColor: colorValue }}>
        <span>{colorValue}</span>
      </div>
      <div className="color-picker__popup-block-panel">
        <div className="color-picker__popup-block-panel-default-color-list">
          {defaultColorList.map((i, k) => (
            <div
              key={k}
              className="color-picker__popup-block-panel-default-color-list-item"
              style={{ backgroundColor: i.color }}
              onClick={() => setColorValue(i.color)}
            />
          ))}
        </div>
        <div className="color-picker__popup-block-panel-input">
          <Input placeholder="请输入颜色" value={colorValue} onChange={inputChange} />
        </div>
      </div>
    </div>
  );
};

export default Block;
