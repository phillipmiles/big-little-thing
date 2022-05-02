import { faSquare, faSquareCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface Props {
  checked: boolean;
  disabled: boolean;
}

const CheckboxIndicator = ({ checked, disabled = false }: Props) => (
  <div
    style={{ verticalAlign: 'middle', color: disabled ? '#9B9F9B' : 'inherit' }}
  >
    {checked ? (
      <FontAwesomeIcon
        icon={faSquareCheck}
        style={{
          width: '16px',
        }}
      />
    ) : (
      <FontAwesomeIcon
        icon={faSquare}
        style={{
          width: '16px',
        }}
      />
    )}
  </div>
);

export default CheckboxIndicator;
