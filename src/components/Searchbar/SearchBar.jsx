import React from 'react';
import styles from './SearchBar.module.css';

const SearchBar = () => {
  return (
    <div className={styles['search-bar']}>
      <input type="text" className={`form-control ${styles['search-input']}`} placeholder="Buscar..." />
      <button className={`btn ${styles['search-button']}`} type="button">
        Buscar
      </button>
    </div>
  );
};

export default SearchBar;
