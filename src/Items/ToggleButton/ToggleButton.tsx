
import { useAtom } from 'jotai';
import { toggleButton } from '../../Variables/GlobalState';
import './ToggleButton.css';

const ToggleButton = () => {
  const [isChecked, setIsChecked] = useAtom(toggleButton);

  const handleToggle = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div className="slider-toggle-container">
      <label className="switch">
        <input type="checkbox" checked={isChecked} onChange={handleToggle} />
        <span className="slider round"></span>
      </label>
    </div>
  );
};

export default ToggleButton;
