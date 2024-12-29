import { useSelector } from '../../../hooks/useSelector';
import './Selector.Atoms.css';

type Option = {
  value: string;
  label: string;
  disabled?: boolean;
};

type CustomSelectProps = {
  options: Option[];
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  disabled?: boolean;
};

const SelectorAtoms: React.FC<CustomSelectProps> = ({
  options = [],
  value = '',
  onChange = () => console.log('onChange'),
  placeholder = '選択してください',
  disabled = false,
}) => {
  // 開閉状態、ハイライトされているインデックス、選択されているオプション、クリックイベント、wrapperを取得
  const {
    open,
    highlightedIndex,
    selectedOption,
    handleSelectClick,
    setHighlightedIndex,
    handleOptionClick,
    wrapperRef,
  } = useSelector({
    options,
    value,
    onOptionValueChange: onChange,
    disabled,
  });

  return (
    <div ref={wrapperRef} className="relative">
      <div
        onClick={handleSelectClick}
        className={`select-wrapper ${open ? 'is-open' : ''} ${
          disabled ? 'disabled' : ''
        }`}
      >
        <span className={`select-text ${selectedOption ? 'selected' : ''}`}>
          {selectedOption ? selectedOption.label : placeholder}
        </span>
      </div>

      {open && !disabled && (
        <div className="dropdown">
          <ul className="option-list">
            {options.map((option, index) => (
              <li
                key={option.value}
                className={`option ${
                  option.disabled ? 'disabled' : ''
                } ${option.value === value ? 'selected' : ''} ${
                  highlightedIndex === index ? 'highlighted' : ''
                }`}
                onMouseEnter={() => setHighlightedIndex(index)}
                onMouseLeave={() => setHighlightedIndex(null)}
                onClick={() =>
                  !option.disabled && handleOptionClick(option.value)
                }
              >
                <span className="block truncate">{option.label}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default SelectorAtoms;
