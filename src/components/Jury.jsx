import React, { useState } from 'react';
import PageHeader from './PageHeader';
import backgroundImage from '../img/bg_2.jpg';
import grandImage from '../img/jury-bg.jpg';
import juryImage1 from '../img/jury/jury_1.webp'; 
import juryImage2 from '../img/jury/jury_2.webp';
import juryImage3 from '../img/jury/jury_3.webp';
import juryImage4 from '../img/jury/jury_4.webp';
import juryImage5 from '../img/jury/jury_5.webp';
import juryImage6 from '../img/jury/jury_6.webp';
import juryImage7 from '../img/jury/jury_7.webp';
import juryImage8 from '../img/jury/jury_8.webp';
import juryImage9 from '../img/jury/jury_9.webp';
import juryImage10 from '../img/jury/jury_10.webp';
import juryImage11 from '../img/jury/jury_11.webp';
import juryImage12 from '../img/jury/jury_12.webp';
import juryImage13 from '../img/jury/jury_13.webp';
import juryImage14 from '../img/jury/jury_14.webp';
import juryImage15 from '../img/jury/jury_15.webp';
import juryImage16 from '../img/jury/jury_16.webp';
import juryImage17 from '../img/jury/jury_17.webp';
import juryImage18 from '../img/jury/jury_18.webp';
import juryImage19 from '../img/jury/jury_19.webp';
import juryImage20 from '../img/jury/jury_20.jpg';
import juryImage21 from '../img/jury/jury_21.webp';

const JuryPage = () => {
  const [selectedYear, setSelectedYear] = useState('2018');

  const juryData = {
    '2018': [
      {
        role: 'Председатель',
        name: 'Андрей Михайлов',
        description: 'Режиссер, лауреат международных кинофестивалей, с более чем 20-летним опытом работы.',
        image: juryImage1,
      },
      {
        role: 'Председатель',
        name: 'Ольга Павлова',
        description: 'Кинопродюсер, номинант на премии Оскар и BAFTA, с опытом более 15 лет.',
        image: juryImage2,
      },
      {
        role: 'Председатель',
        name: 'Сергей Петров',
        description: 'Оператор, лауреат премии «Белый квадрат», с опытом работы более 10 лет.',
        image: juryImage3,
      },
      {
        role: 'Эксперт',
        name: 'Елена Смирнова',
        description: 'Актриса, театральный педагог, с опытом более 25 лет.',
      },
      {
        role: 'Эксперт',
        name: 'Дмитрий Захаров',
        description: 'Сценарист, лауреат премии «Золотой орел», с опытом более 15 лет.',
      },
      {
        role: 'Эксперт',
        name: 'Ирина Коваленко',
        description: 'Монтажер, лауреат международных фестивалей, с опытом более 12 лет.',
      },
    ],
    '2019': [
      {
        role: 'Председатель',
        name: 'Марина Воронцова',
        description: 'Режиссер-документалист, лауреат премии «Ника», с опытом более 18 лет.',
        image: juryImage4,
      },
      {
        role: 'Председатель',
        name: 'Игорь Николаев',
        description: 'Продюсер, лауреат Каннского кинофестиваля, с опытом более 20 лет.',
        image: juryImage5,
      },
      {
        role: 'Председатель',
        name: 'Алексей Лебедев',
        description: 'Оператор, лауреат премии «Белый квадрат», с опытом более 12 лет.',
        image: juryImage6,
      },
      {
        role: 'Эксперт',
        name: 'Наталья Иванова',
        description: 'Актриса, лауреат театральных и кинопремий, с опытом более 30 лет.',
      },
      {
        role: 'Эксперт',
        name: 'Максим Орлов',
        description: 'Сценарист, лауреат премии «ТЭФИ», с опытом более 10 лет.',
      },
      {
        role: 'Эксперт',
        name: 'Виктор Петров',
        description: 'Художник-постановщик, лауреат международных фестивалей, с опытом более 15 лет.',
      },
    ],
    '2020': [
      {
        role: 'Председатель',
        name: 'Николай Андреев',
        description: 'Режиссер, лауреат премии «Золотой орел», с опытом более 25 лет.',
        image: juryImage7,
      },
      {
        role: 'Председатель',
        name: 'Елена Федорова',
        description: 'Продюсер, номинант на премию Оскар, с опытом более 20 лет.',
        image: juryImage8,
      },
      {
        role: 'Председатель',
        name: 'Артем Смирнов',
        description: 'Оператор, лауреат международных премий, с опытом более 15 лет.',
        image: juryImage9,
      },
      {
        role: 'Эксперт',
        name: 'Валентина Кузнецова',
        description: 'Актриса, лауреат премии «Золотая маска», с опытом более 20 лет.',
      },
      {
        role: 'Эксперт',
        name: 'Сергей Лебедев',
        description: 'Сценарист, лауреат премии «Ника», с опытом более 12 лет.',
      },
      {
        role: 'Эксперт',
        name: 'Анна Новикова',
        description: 'Монтажер, лауреат международных фестивалей, с опытом более 10 лет.',
      },
    ],
    '2021': [
      {
        role: 'Председатель',
        name: 'Дмитрий Васильев',
        description: 'Режиссер, лауреат международных фестивалей, с опытом более 20 лет.',
        image: juryImage10,
      },
      {
        role: 'Председатель',
        name: 'Ольга Иванова',
        description: 'Продюсер, лауреат премии «Ника», с опытом более 18 лет.',
        image: juryImage11,
      },
      {
        role: 'Председатель',
        name: 'Алексей Павлов',
        description: 'Оператор, лауреат премии «Белый квадрат», с опытом более 14 лет.',
        image: juryImage12,
      },
      {
        role: 'Эксперт',
        name: 'Татьяна Петрова',
        description: 'Актриса, лауреат международных премий, с опытом более 25 лет.',
      },
      {
        role: 'Эксперт',
        name: 'Михаил Смирнов',
        description: 'Сценарист, лауреат премии «Золотой орел», с опытом более 15 лет.',
      },
      {
        role: 'Эксперт',
        name: 'Сергей Сидоров',
        description: 'Художник-постановщик, лауреат международных фестивалей, с опытом более 12 лет.',
      },
    ],
    '2022': [
      {
        role: 'Председатель',
        name: 'Анна Ковалева',
        description: 'Режиссер, лауреат международных премий, с опытом более 22 лет.',
        image: juryImage13,
      },
      {
        role: 'Председатель',
        name: 'Игорь Федоров',
        description: 'Продюсер, номинант на премию Оскар, с опытом более 20 лет.',
        image: juryImage14,
      },
      {
        role: 'Председатель',
        name: 'Владимир Петров',
        description: 'Оператор, лауреат международных фестивалей, с опытом более 15 лет.',
        image: juryImage15,
      },
      {
        role: 'Эксперт',
        name: 'Елена Соколова',
        description: 'Актриса, лауреат премии «Золотая маска», с опытом более 30 лет.',
      },
      {
        role: 'Эксперт',
        name: 'Максим Тарасов',
        description: 'Сценарист, лауреат премии «Ника», с опытом более 12 лет.',
      },
      {
        role: 'Эксперт',
        name: 'Артем Кузнецов',
        description: 'Монтажер, лауреат международных фестивалей, с опытом более 10 лет.',
      },
    ],
    '2023': [
      {
        role: 'Председатель',
        name: 'Петр Васильев',
        description: 'Режиссер, лауреат международных премий, с опытом более 25 лет.',
        image: juryImage16,
      },
      {
        role: 'Председатель',
        name: 'Елизавета Смирнова',
        description: 'Продюсер, лауреат премии «Золотой орел», с опытом более 20 лет.',
        image: juryImage17,
      },
      {
        role: 'Председатель',
        name: 'Сергей Кузнецов',
        description: 'Оператор, лауреат международных фестивалей, с опытом более 15 лет.',
        image: juryImage18,
      },
      {
        role: 'Эксперт',
        name: 'Валерия Андреева',
        description: 'Актриса, лауреат театральных и кинопремий, с опытом более 20 лет.',
      },
      {
        role: 'Эксперт',
        name: 'Илья Орлов',
        description: 'Сценарист, лауреат международных премий, с опытом более 12 лет.',
      },
      {
        role: 'Эксперт',
        name: 'Ольга Иванова',
        description: 'Художник-постановщик, лауреат международных фестивалей, с опытом более 10 лет.',
      },
    ],
    '2024': [
      {
        role: 'Председатель',
        name: 'Борис Иванов',
        description: 'Режиссер, лауреат международных фестивалей, с опытом более 30 лет.',
        image: juryImage19,
      },
      {
        role: 'Председатель',
        name: 'Оксана Кириллова',
        description: 'Продюсер, лауреат Международных премий, с опытом работы более 10 лет. ',
        image: juryImage20,
      },
      {
        role: 'Председатель',
        name: 'Артем Новиков',
        description: 'Оператор, лауреат премии «Белый квадрат», с опытом более 15 лет.',
        image: juryImage21,
      },
      {
        role: 'Эксперт',
        name: 'Наталья Сидорова',
        description: 'Актриса, лауреат премии «Золотая маска», с опытом более 25 лет.',
      },
      {
        role: 'Эксперт',
        name: 'Михаил Петров',
        description: 'Сценарист, лауреат международных премий, с опытом более 15 лет.',
      },
      {
        role: 'Эксперт',
        name: 'Ирина Захарова',
        description: 'Монтажер, лауреат международных фестивалей, с опытом более 12 лет.',
      },
    ],
  };

  const renderJuryMembers = () => {
    return juryData[selectedYear].map((member, index) => (

      <div key={index} className="jury-member">
        {member.image && (
          <div className="jury-image">
            <img src={member.image} alt={member.name} />
          </div>
        )}
        <div className="jury-details">
            <p>{member.role}</p>
          <strong> {member.name}</strong>
          <p>{member.description}</p>
        </div>
      </div>
    ));
  };

  return (
    <>
      <PageHeader 
        backgroundImage={backgroundImage} 
        title="Жюри" 
        subtitle="Crystal Screen"
      />
      <div className="jury-container">
        <section className="image-text-section">
          <div className="image-text-section__image">
            <img src={grandImage} alt="Crystal Screen" />
          </div>
          <div className="grand-container">
            <span className="subtitle">Since From 2018</span>
            <div className='grand-title-container'>
              <h1>Crystal Screen</h1>
              <h2>Список жюри фестиваля</h2>
            </div>
            <p>
              Каждый год фестиваль Crystal Screen собирает лучших специалистов в области кино и телевидения для формирования жюри, которое оценивает работы участников и определяет победителей. Состав жюри ежегодно включает три председателя и три ведущих эксперта, отобранных из числа самых уважаемых и признанных мастеров кино и телеиндустрии.
            </p>
          </div>
        </section>
        <div className="jury-year">
            <h1 className="jury-title">Жюри: {selectedYear} года</h1>
          </div>
        <div className="year-selector">
          {Object.keys(juryData).map((year) => (
            
            <button 
              key={year} 
              className={`year-button ${selectedYear === year ? 'active' : ''}`}
              onClick={() => setSelectedYear(year)}
            >
              {year}
            </button>
          ))}
        </div>
        <div className="jury-list-container">
          <div className="jury-list">
            {renderJuryMembers()}
          </div>
        </div>
        <div className="jury-prestige">
          <h2 className='title'>Престиж членства в жюри</h2>
          <p className='about-text'> 
            Участие в жюри фестиваля Crystal Screen — это высокая честь и признание многолетнего опыта и профессионализма.
            Каждый член жюри, будь то председатель или эксперт, получает уникальную возможность повлиять на выбор лучших
            представителей мирового кино и телевидения. Стать частью жюри — это не только знак признания заслуг, но и значимое
            событие в карьере, которое подтверждает высокий статус специалиста в кино или телеиндустрии.
          </p>
        </div>
      </div>
    </>
  );
};

export default JuryPage;