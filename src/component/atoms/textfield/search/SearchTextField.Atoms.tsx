import React from 'react';
import './SearchTextField.Atoms.css';
import { SearchTextFieldAtomsProps } from './SearchTextField.type';

const SearchTextFieldAtoms: React.FC<SearchTextFieldAtomsProps> = React.memo(
  ({ value, onChange, onSearch, placeholder = '', className = '' }) => {
    return (
      <div className="search-field-container">
        <div className="search-field-icon-wrapper">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            cursor={'pointer'}
            onClick={() => {
              if (onSearch) onSearch(value);
            }}
          >
            <circle cx="10" cy="10" r="8" />
            <line x1="21" y1="21" x2="15.65" y2="15.65" />
          </svg>
        </div>
        <input
          type="text"
          value={value}
          onChange={onChange}
          onKeyDown={(event: React.KeyboardEvent<HTMLInputElement>) => {
            if (event.key === 'Enter' && onSearch) {
              onSearch(value);
            }
          }}
          placeholder={placeholder}
          className={`search-field-input ${className}`}
        />
      </div>
    );
  },
);

export default SearchTextFieldAtoms;
