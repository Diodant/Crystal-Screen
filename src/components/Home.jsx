import React from 'react';
import { Link } from 'react-router-dom';
import backgroundImage from '../img/bg.jpg';
import firstImage from '../img/firstImage.jpg'; 
import secondImage from '../img/secondImage.jpg';
import grandImage from '../img/grand.jpg';
import Nominations from './Nominations';

const Home = () => {
  return (
    <>
    <section className="home">
      <div className="home-background">
        <img src={backgroundImage} alt="Background" className="home-bg-image" />
        <div className="home-content">
          <h1>Добро пожаловать на Crystal Screen</h1>
          <p className="subtitle">Фестиваль кинематографа</p>
          <div className="home-buttons">
          <Link to="/about" className="contact-button">
            О фестивале 
            </Link>
          </div>
        </div>
      </div>
    </section>

    <section className="image-overlay-section">
    <div className="image-container">
      <img src={firstImage} alt="First" className="first-image" />
      <div className='second-image'>
      <img src={secondImage} alt="Second"  />
      </div>
    </div>
    <div className="text-container">
      <span className="subtitle">Since From 2018</span>
      <div className='title-container'>
      <h1>Crystal Screen</h1>
      <h2>С момента основания в 2018</h2>
      
      </div>
      <p>Быстро завоевал международное признание благодаря высокому уровню организации и авторитетному жюри, состоящему из признанных мастеров киноискусства. Фестиваль не только отмечает лучших из лучших, но и способствует развитию киноиндустрии, поддерживая независимых кинематографистов и поощряя творческие эксперименты. Благодаря своему глобальному масштабу и широкому охвату, Crystal Screen стал желанной наградой для кинематографистов со всего мира.</p>
      <Link to="/about" className="learn-more-button">
        Узнать больше
      </Link>
    </div>
    </section>
    <Nominations/>

    <section className="image-text-section">
    <div className="image-text-section__image">
        <img src={grandImage} alt="Crystal Screen" />
      </div>
      <div className="grand-container">
      <span className="subtitle">Since From 2018</span>
      <div className='grand-title-container'>
      <h1>Crystal Screen</h1>
      <h2>Гран-при за вклад в профессию</h2>
      
      </div>
      <p>Гран-при за вклад в профессию — это особая награда, вручаемая на церемонии международного фестиваля кино и телевидения Crystal Screen. Этот приз является одним из самых значимых и почетных в кинематографической индустрии, поскольку он отмечает не отдельные фильмы или роли, а всю карьеру и вклад в развитие мирового кино. </p>
      <Link to="/grandprix" className="learn-more-button">
        Узнать больше
      </Link>
    </div>
    </section>


    </>
  );
};

export default Home;
