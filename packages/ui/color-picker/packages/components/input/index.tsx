import { FC } from 'react';
import './index.less';
interface IProps {
  placeholder: string;
  value?: string | number;
  onChange?: Function;
}

const Input: FC<IProps> = (props) => {
  return (
    <input
      className="littlesmart3-input"
      placeholder={props.placeholder || '-'}
      value={props.value}
      onChange={(e) => (props.onChange ? props.onChange(e.target.value) : null)}
    />
  );
};

export default Input;
