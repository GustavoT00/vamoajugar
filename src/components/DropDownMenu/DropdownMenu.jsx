import React, { useState } from 'react';
import { Offcanvas, Button } from 'react-bootstrap';
import './SidebarMenu.css'; // Asegúrate de ajustar la ruta correcta y crea este archivo CSS

const DropdownMenu = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  const handleSidebarToggle = () => setShowSidebar(!showSidebar);

  return (
    <>
      <Button variant="light" onClick={handleSidebarToggle} className="sidebar-btn">
        <i className="fas fa-bars"></i> Menú
      </Button>

      <Offcanvas show={showSidebar} onHide={() => setShowSidebar(false)} className="minimal-sidebar">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Menú</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <ul>
            <li><a href="#">Opción 1</a></li>
            <li><a href="#">Opción 2</a></li>
            <li><a href="#">Opción 3</a></li>
          </ul>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default DropdownMenu;

