import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import styles from './Filter.module.scss';

const Filter = ({ selectedOption, setSelectedOption }) => {
  const [showMenu, setShowMenu] = useState(false);

  const options = [
    { value: 'Africa', label: 'Africa' },
    { value: 'Americas', label: 'Americas' },
    { value: 'Asia', label: 'Asia' },
    { value: 'Europe', label: 'Europe' },
    { value: 'Oceania', label: 'Oceania' },
  ];

  const handleShowMenu = (e) => {
    e.stopPropagation();
    setShowMenu((prev) => !prev);
  };

  const selectOption = (e) => {
    setSelectedOption(e.target.textContent);
  };

  useEffect(() => {
    const closeMenu = () => {
      setShowMenu(false);
    };

    window.addEventListener('click', closeMenu);

    return () => window.removeEventListener('click', closeMenu);
  }, [showMenu]);

  return (
    <>
      <div className={styles.dropDownContainer}>
        <div className={styles.dropDownLabel} onClick={handleShowMenu}>
          <div>{selectedOption || 'Filter by Region'}</div>
          <FontAwesomeIcon icon={faAngleDown} />
        </div>
        {showMenu && (
          <ul className={styles.dropDownMenu}>
            {options.map((option) => (
              <li key={option.value} onClick={selectOption}>
                {option.label}
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
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
