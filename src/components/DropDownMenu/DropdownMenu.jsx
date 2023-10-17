import React from 'react'

const DropdownMenu = () => {
  return (
    <div className="dropdown">
      <button className="btn btn-secondary" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        Menú
      </button>
      <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
        <a className="dropdown-item" href="#">Opción 1</a>
        <a className="dropdown-item" href="#">Opción 2</a>
        <a className="dropdown-item" href="#">Opción 3</a>
      </div>
    </div>
  );
}

export default DropdownMenu
