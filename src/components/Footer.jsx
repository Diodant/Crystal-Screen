import React from 'react';
import { NavLink } from 'react-router-dom';
import logoImage from '../img/logo.svg';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-logo">
          <img src={logoImage} alt="Logo" />
          <address>
          Москва, ул. Васильевская, 13
          </address>
          <a href="mailto:inpress@unikino.ru">inpress@unikino.ru</a>
          <a href="tel:+7 (910) 471-99-63">+7 (910) 471-99-63</a>
          <div className="footer-social">
            <a href="https://www.facebook.com"><i className="fab fa-facebook-f"></i></a>
            <a href="https://www.twitter.com"><i className="fab fa-twitter"></i></a>
            <a href="https://www.behance.net"><i className="fab fa-behance"></i></a>
            <a href="https://www.youtube.com"><i className="fab fa-youtube"></i></a>
            <a href="https://www.linkedin.com"><i className="fab fa-linkedin-in"></i></a>
          </div>
        </div>
        <div className="footer-links">
          <h4>Страницы</h4>
          <ul>
            <li><NavLink to="/">Главная</NavLink></li>
            <li><NavLink to="/criteria">Критерии</NavLink></li>
            <li><NavLink to="/position">Положение</NavLink></li>
            <li><NavLink to="/contacts">Контакты</NavLink></li>
          </ul>
        </div>
        <div className="footer-links">
          <h4>Фестиваль</h4>
          <ul>
            <li><NavLink to="/jury">Жюри</NavLink></li>
            <li><NavLink to="/winners">Победители</NavLink></li>
            <li><NavLink to="/grandprix">Гран-при</NavLink></li>
            <li><NavLink to="/articles">Статьи</NavLink></li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
