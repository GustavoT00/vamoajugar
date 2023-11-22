import React from 'react';
import DropdownMenu from '../DropDownMenu/DropdownMenu';
import SearchBar from '../Searchbar/Searchbar';
import './Header.css';

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg custom-navbar">
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <DropdownMenu />
          </li>
        </ul>
      </div>
      <div className="header-content text-center">
        <h1 className="mx-auto">VAMOAJUGAR</h1>
        <SearchBar />
      </div>
    </nav>
  );
};

export default Header;



