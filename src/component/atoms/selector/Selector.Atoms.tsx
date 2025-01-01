import './Selector.Atoms.css';
import { SelectorAtomsProps } from './Selector.type';
import { useSelector } from './useSelector.hooks';

const SelectorAtoms: React.FC<SelectorAtomsProps> = ({
  options = [],
  value = '',
  onChange = () => console.log('onChange'),
  label,
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
      <label className="selector-label">{label}</label>
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
                onClick={() => !option.disabled && handleOptionClick(option)}
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
