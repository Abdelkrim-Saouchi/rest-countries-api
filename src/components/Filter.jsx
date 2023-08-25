import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
import { useEffect, useRef, useState } from 'react';
import styles from './Filter.module.scss';

const Filter = ({ selectedOption, setSelectedOption }) => {
  const [showMenu, setShowMenu] = useState(false);
  const dropDownContainerRef = useRef(null);

  const options = [
    { value: 'Africa', label: 'Africa' },
    { value: 'Americas', label: 'Americas' },
    { value: 'Asia', label: 'Asia' },
    { value: 'Europe', label: 'Europe' },
    { value: 'Oceania', label: 'Oceania' },
  ];

  const ENTER_KEY_CODE = 13;

  const handleShowMenu = (e) => {
    e.stopPropagation();
    setShowMenu((prev) => !prev);
  };

  const handleShowMenuByKeyboard = (e) => {
    if (e.keyCode === ENTER_KEY_CODE) {
      e.stopPropagation();
      setShowMenu((prev) => !prev);
      dropDownContainerRef.current.setAttribute('aria-expanded', !showMenu);
    }
  };

  const selectOption = (e) => {
    setSelectedOption(e.target.textContent);
  };

  const selectOptionByKeyboard = (e) => {
    if (e.keyCode === ENTER_KEY_CODE) {
      setSelectedOption(e.target.textContent);
      dropDownContainerRef.current.setAttribute('aria-expanded', false);
    }
  };

  useEffect(() => {
    const closeMenu = () => {
      setShowMenu(false);
    };

    window.addEventListener('click', closeMenu);

    return () => window.removeEventListener('click', closeMenu);
  }, [showMenu]);

  return (
    <div
      className={styles.dropDownContainer}
      tabIndex="0"
      onKeyDown={handleShowMenuByKeyboard}
      aria-expanded="false"
      role="menu"
      ref={dropDownContainerRef}
    >
      <div className={styles.dropDownLabel} onClick={handleShowMenu}>
        <div>{selectedOption || 'Filter by Region'}</div>
        <FontAwesomeIcon icon={faAngleDown} />
      </div>
      {showMenu && (
        <ul className={styles.dropDownMenu}>
          {options.map((option) => (
            <li
              key={option.value}
              onClick={selectOption}
              onKeyDown={selectOptionByKeyboard}
              tabIndex="0"
              role="button"
            >
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

Filter.propTypes = {
  selectedOption: PropTypes.oneOf([
    null,
    'Africa',
    'Americas',
    'Asia',
    'Europe',
    'Oceania',
  ]),
  setSelectedOption: PropTypes.func,
};

export default Filter;
