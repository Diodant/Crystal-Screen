import React from 'react';
import locationIcon from '../img/maps.svg';
import emailIcon from '../img/mail.png';
import PageHeader from './PageHeader';
import backgroundImage from '../img/bg.jpg';
import phoneIcon from '../img/phone-call.png';

const Contacts = () => {
  return (
    <>
        <PageHeader 
      backgroundImage={backgroundImage} 
      title="Контакты" 
      subtitle="Crystal Screen"
    />
        <h2 className='contact-title'>Гильдия кинематографистов России</h2>
    <div className="contact-section">
        
      <div className="contact-card">
      
        <h3>Адрес</h3>
        <p>Москва, ул. Васильевская, 13</p>
        <img src={locationIcon} alt="Location Icon" className="contact-icon" />
        <div className="contact-number">01</div>
      </div>

      <div className="contact-card">
        <h3>Почта</h3>
        <p>kinoglaz2018@gmai.com</p>
        <img src={emailIcon} alt="Email Icon" className="contact-icon" />
        <div className="contact-number">02</div>
      </div>

      <div className="contact-card">
      <h3>Телефон</h3>
      <p>+7 (910) 471-99-63</p>
        <img src={phoneIcon} alt="Phone Icon" className="contact-icon" />
        <div className="contact-number">03</div>
      </div>
    </div>
    <h2 className='contact-title'>Союз кинематографистов Российской Федерации</h2>
    <div className="contact-section">
        
      <div className="contact-card">
      
        <h3>Адрес</h3>
        <p>123056, Россия, г.Москва, ул. Васильевская, д. 13 стр. 1</p>
        <img src={locationIcon} alt="Location Icon" className="contact-icon" />
        <div className="contact-number">01</div>
      </div>

      <div className="contact-card">
        <h3>Пресс служба</h3>
        <p>inpress@unikino.ru</p>
        <img src={emailIcon} alt="Email Icon" className="contact-icon" />
        <div className="contact-number">02</div>
      </div>

      <div className="contact-card">
      <h3>Канцелярия</h3>
      <p>sk@unikino.ru</p>
        <img src={phoneIcon} alt="Phone Icon" className="contact-icon" />
        <div className="contact-number">03</div>
      </div>
    </div>
    </>
  );
};

export default Contacts;
