import React from 'react';
import { Link } from 'react-router-dom';

const PageHeader = ({ backgroundImage, title, subtitle }) => {
  return (
    <section className="page-header">
      <div className="page-header__bg">
        <img src={backgroundImage} alt="Background" className="page-header__bg-image" />
        <div className="page-header__content">
          <p>{subtitle}</p>
          <h1>{title}</h1>
          <nav className="breadcrumb">
            <Link to="/">Главная</Link> / <span>{title}</span>
          </nav>
        </div>
      </div>
    </section>
  );
};

export default PageHeader;