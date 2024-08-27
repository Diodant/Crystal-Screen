import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  return (
    <header className="header">
      <div className="logo">
        <NavLink to="/" className="logo-link">Logo</NavLink>
      </div>
      <nav className="navbar">
        <NavLink exact to="/" activeClassName="active-link">Домой</NavLink>
        
        <div 
          className={`dropdown ${isDropdownOpen ? 'open' : ''}`} 
          onMouseEnter={toggleDropdown} 
          onMouseLeave={toggleDropdown}
        >
          <span className="dropdown-toggle">
            Документы
          </span>
          {isDropdownOpen && (
            <div className="dropdown-menu">
              <NavLink to="/criteria" activeClassName="active-link">Критерии</NavLink>
              <NavLink to="/position" activeClassName="active-link">Положение</NavLink>
            </div>
          )}
        </div>

        <NavLink to="/services" activeClassName="active-link">Жюри</NavLink>
        <NavLink to="/blog" activeClassName="active-link">Победители</NavLink>
        <NavLink to="/contact" activeClassName="active-link">Контакты</NavLink>
        <NavLink to="/article" activeClassName="active-link">Стать</NavLink>
      </nav>
      <NavLink to="/apply" className="contact-button">
        Заявка
      </NavLink>
    </header>
  );
};

export default Header;
