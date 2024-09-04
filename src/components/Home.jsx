import React from 'react';
import { Link } from 'react-router-dom';
import backgroundImage from '../img/bg.jpg';
import firstImage from '../img/firstImage.jpg'; 
import secondImage from '../img/secondImage.jpg';
import grandImage from '../img/grand.jpg';
import Nominations from './Nominations';
import articlesData from './articlesData'; 

const Home = () => {

  const displayedArticles = articlesData.slice(0, 3);

  return (
    <>
    <section className="home">
      <div className="home-background">
        <img src={backgroundImage} alt="Background" className="home-bg-image" />
        <div className="home-content">
          <h1>Добро пожаловать на Crystal Screen</h1>
          <p className="subtitle">Международный фестиваль кино и телевидения</p>
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
      <p>Быстро завоевал международное признание благодаря высокому уровню организации и авторитетному жюри, состоящему из признанных мастеров киноискусства и телевидения. Фестиваль не только отмечает лучших из лучших, но и способствует развитию кино и телеиндустрии, поддерживая независимых кинематографистов и телевизионщиков, поощряя творческие эксперименты. Благодаря своему глобальному масштабу и широкому охвату, международный фестиваль кино и телевидения Crystal Screen стал желанной наградой для кинематографистов и телевизионщиков со всего мира.</p>
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
      <div className='grand-preview-flex-container'>
      <h1>Crystal Screen</h1>
      <h2>Гран-при за вклад в профессию</h2>
      
      </div>
      <p>Гран-при за вклад в профессию — это особая награда, вручаемая на церемонии международного фестиваля кино и телевидения Crystal Screen. Этот приз является одним из самых значимых и почетных в кинематографической индустрии, поскольку он отмечает не отдельные фильмы или роли, а всю карьеру и вклад в развитие мирового кино. </p>
      <Link to="/grandprix" className="learn-more-button">
        Узнать больше
      </Link>
    </div>
    </section>

    <section className="articles-preview-section">
      <div className='articles-preview-text-cont'>
      <div class="articles-preview-flex-container">
        <h1>Crystal Screen</h1>
        <h2>Последние статьи</h2>
        </div>
      <Link to="/articles" className="learn-more-button">
      Перейти ко всем статьям
      </Link>
      </div>
      <div className="articles-preview-container">
        {displayedArticles.map((article, index) => (
          <div key={index} className="article-card">
            <img src={article.image} alt={article.title} className="article-image" />
            <div className="article-info">
              <div className="article-meta">
                <span className="article-category">{article.category}</span>
                <span className="article-date">{article.date}</span>
              </div>
              <h3 className="article-title"><Link to={`/articles/${article.id}`}>{article.title}</Link></h3>
              <Link to={`/articles/${article.id}`} className="article-read-more">ПОДРОБНЕЕ</Link>
            </div>
          </div>
        ))}
      </div>
    </section>


    </>
  );
};

export default Home;
