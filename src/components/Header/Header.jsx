import React from 'react';
import DropdownMenu from '../DropDownMenu/DropdownMenu';
import SearchBar from '../Searchbar/Searchbar';

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <a className="navbar-brand mx-auto" href="#">Logo</a>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <a className="nav-link" href="#">Inicio</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Acerca de Nosotros</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Contacto</a>
          </li>
          <li className="nav-item">
            <DropdownMenu />
          </li>
        </ul>
      </div>
      <div className="header-content">
        <h1>VAMOAJUGAR</h1>
        <SearchBar />
      </div>
    </nav>
  );
}

export default Header;
