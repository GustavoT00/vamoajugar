import React from 'react';

const SearchBar = () => {
  return (
    <div className="input-group mt-2 mt-lg-0">
      <input type="text" className="form-control" placeholder="Buscar..." />
      <div className="input-group-append">
        <button className="btn btn-primary" type="button">Buscar</button>
      </div>
    </div>
  );
}

export default SearchBar;
