import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import logoImage from '../img/logo.svg';

const Header = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  return (
    <header className="header">
      <div className="logo">
        <NavLink to="/" className="logo-link">
          <img src={logoImage} alt="Logo" className="logo-image" />
        </NavLink>
      </div>
      <nav className="navbar">
        <NavLink exact to="/" activeClassName="active-link">Главная</NavLink>
        
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

        <NavLink to="/jury" activeClassName="active-link">Жюри</NavLink>
        <NavLink to="/winners" activeClassName="active-link">Победители</NavLink>
        <NavLink to="/grandprix" activeClassName="active-link">Гран-при</NavLink>
        <NavLink to="/contacts" activeClassName="active-link">Контакты</NavLink>
        <NavLink to="/articles" activeClassName="active-link">Статьи</NavLink>
      </nav>
      <NavLink to="/apply" className="contact-button">
        Заявка
      </NavLink>
    </header>
  );
};

export default Header;
