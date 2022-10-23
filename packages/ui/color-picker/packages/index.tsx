import { FC, useState } from 'react';
import Wrapper from './modules/wrapper';
import './assets/style/index.less';

export type ColorPickerType = 'github' | 'block';
interface IProps {
  type: ColorPickerType;
}
const App: FC<IProps> = (props) => {
  return (
    <div className="color-picker">
      <Wrapper type={props.type} />
    </div>
  );
};

export default App;
