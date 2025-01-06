import React, { useState, useRef, useEffect } from 'react';
    import './Dropdown.css';

    function Dropdown({ items }) {
      const [isOpen, setIsOpen] = useState(false);
      const [selectedItem, setSelectedItem] = useState(null);
      const dropdownRef = useRef(null);

      const toggleDropdown = () => {
        setIsOpen(!isOpen);
      };

      const selectItem = (item) => {
        setSelectedItem(item);
        setIsOpen(false);
      };

      useEffect(() => {
        function handleClickOutside(event) {
          if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            setIsOpen(false);
          }
        }

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
          document.removeEventListener('mousedown', handleClickOutside);
        };
      }, [dropdownRef]);

      return (
        <div className="dropdown" ref={dropdownRef}>
          <div className="dropdown-header" onClick={toggleDropdown}>
            {selectedItem || 'Select an Item'}
            <span className={`arrow ${isOpen ? 'open' : ''}`}>
              {isOpen ? '∧' : 'v'}
            </span>
          </div>
          {isOpen && (
            <ul className="dropdown-list">
              {items.map((item, index) => (
                <li
                  key={index}
                  className={`dropdown-item ${selectedItem === item ? 'selected' : ''}`}
                  onClick={() => selectItem(item)}
                >
                  {item}
                  {selectedItem === item && <span className="checkmark">✓</span>}
                </li>
              ))}
            </ul>
          )}
        </div>
      );
    }

    export default Dropdown;
