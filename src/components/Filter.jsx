import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState } from 'react';
import styles from './Filter.module.scss';

const Filter = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const options = [
    { value: 'africa', label: 'Africa' },
    { value: 'america', label: 'America' },
    { value: 'asia', label: 'Asia' },
    { value: 'europe', label: 'Europe' },
    { value: 'oceania', label: 'Oceania' },
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

export default Filter;
