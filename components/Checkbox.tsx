import CheckboxIndicator from './CheckboxIndicator';
import CheckboxHandler from './generic/CheckboxHandler';

interface Props {
  id?: string;
  name?: string;
  checked?: boolean;
  disabled?: boolean;
  handleSelect: React.MouseEventHandler;
  style?: { [key: string]: any };
}

const Checkbox = ({
  id,
  name,
  checked,
  disabled = false,
  handleSelect,
  style,
}: Props) => {
  return (
    <CheckboxHandler
      id={id}
      name={name}
      checked={checked}
      disabled={disabled}
      handleSelect={handleSelect}
      Checkbox={CheckboxIndicator}
      style={style}
    />
  );
};

export default Checkbox;
