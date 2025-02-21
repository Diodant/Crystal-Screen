import React, { useState } from 'react';
import iconImg1 from '../img/nominations/video-camera.svg';
import iconImg2 from '../img/nominations/3d-movie.svg';
import iconImg3 from '../img/nominations/actor.svg';
import iconImg4 from '../img/nominations/host.svg';
import iconImg5 from '../img/nominations/cinema.svg';
import iconImg6 from '../img/nominations/videography.svg';
import iconImg7 from '../img/nominations/video-editing.svg';
import iconImg8 from '../img/nominations/special-effects.svg';
import iconImg9 from '../img/nominations/music.svg';
import iconImg10 from '../img/nominations/short.svg';
import iconImg11 from '../img/nominations/televisions.svg';
import iconImg12 from '../img/nominations/series.svg';
import iconImg13 from '../img/nominations/producer.svg';
import iconImg14 from '../img/nominations/vision.png';

const nominationsData = [
    // Кинономинации
    {
        title: "Лучший фильм",
        category: "Кинономинации",
        description: "Главная номинация, вручаемая за выдающееся художественное произведение.",
        icon: iconImg1,
    },
    {
        title: "Лучшая режиссура",
        category: "Кинономинации",
        description: "Награда за мастерское руководство процессом создания фильма.",
        icon: iconImg2,
    },
    {
        title: "Лучший режиссер короткометражного фильма",
        category: "Кинономинации",
        description: "Отмечает выдающуюся режиссерскую работу в короткометражном кино.",
        icon: iconImg10,
    },
    {
        title: "Лучший актер",
        category: "Кинономинации",
        description: "Отмечает выдающуюся мужскую актерскую работу.",
        icon: iconImg3,
    },
    {
        title: "Лучшая актриса",
        category: "Кинономинации",
        description: "Признает лучшую женскую актерскую работу.",
        icon: iconImg4,
    },
    {
        title: "Лучший сценарий",
        category: "Кинономинации",
        description: "Награда за оригинальность и глубину сценария.",
        icon: iconImg5,
    },
    {
        title: "Лучшая операторская работа",
        category: "Кинономинации",
        description: "Отмечает визуальную выразительность и мастерство оператора.",
        icon: iconImg6,
    },
    {
        title: "Лучший монтаж",
        category: "Кинономинации",
        description: "Награда за искусное сочетание кадров, создающее уникальную динамику фильма.",
        icon: iconImg7,
    },
    {
        title: "Лучшие визуальные эффекты",
        category: "Кинономинации",
        description: "Отмечает выдающиеся достижения в области компьютерной графики и спецэффектов.",
        icon: iconImg8,
    },
    {
        title: "Лучшая музыка для фильма",
        category: "Кинономинации",
        description: "Награда за оригинальный саундтрек, усиливающий эмоциональное воздействие картины.",
        icon: iconImg9,
    },
    {
        title: "Лучший продюсер",
        category: "Кинономинации",
        description: "Отмечает выдающиеся продюсерские способности и вклад в создание фильма.",
        icon: iconImg13,
    },
    // Телевизионные номинации
    {
        title: "Лучшая телевизионная программа",
        category: "Телевизионные номинации",
        description: "Отмечает лучшие телевизионные программы.",
        icon: iconImg11,
    },
    {
        title: "Лучший телевизионный сериал",
        category: "Телевизионные номинации",
        description: "Признает лучший телевизионный сериал года.",
        icon: iconImg12,
    },
    {
        title: "Лучший режиссер телевизионного проекта",
        category: "Телевизионные номинации",
        description: "Награда за выдающееся руководство процессом создания телевизионного проекта.",
        icon: iconImg2,
    },
    {
        title: "Лучший художник по свету телевизионного проекта",
        category: "Телевизионные номинации",
        description: "Награда за выдающееся мастерство в создании светового дизайна для телевизионного шоу или сериала.",
        icon: iconImg14,
    },
    {
        title: "Лучший сценарий телевизионного проекта",
        category: "Телевизионные номинации",
        description: "Отмечает оригинальность и мастерство сценария для телевидения.",
        icon: iconImg5,
    },
    {
        title: "Лучшая операторская работа для телевидения",
        category: "Телевизионные номинации",
        description: "Награда за визуальную выразительность в телевизионном проекте.",
        icon: iconImg6,
    },
    {
        title: "Лучший монтаж для телевидения",
        category: "Телевизионные номинации",
        description: "Награда за монтаж, который создаёт уникальный ритм и динамику в телевизионном проекте.",
        icon: iconImg7,
    },
    {
        title: "Лучшие визуальные эффекты для телевидения",
        category: "Телевизионные номинации",
        description: "Отмечает выдающиеся достижения в области визуальных эффектов для телевидения.",
        icon: iconImg8,
    },
    {
        title: "Лучшая музыка для телевизионного проекта",
        category: "Телевизионные номинации",
        description: "Признает оригинальную музыку, усиливающую эмоциональное воздействие телепроекта.",
        icon: iconImg9,
    },
    {
        title: "Лучший продюсер телевизионного проекта",
        category: "Телевизионные номинации",
        description: "Отмечает выдающиеся продюсерские способности в создании телевизионного проекта.",
        icon: iconImg13,
    }
];

const Nominations = () => {
    const [selectedCategory, setSelectedCategory] = useState('Кинономинации');

    const filteredNominations = nominationsData.filter(
        nomination => nomination.category === selectedCategory
    );

    return (
        <section className="nominations">
            <div className='nominations-cont'>
                <div className='nominations-text-container'>
                    <h1>Crystal Screen</h1>
                    <h2>{selectedCategory}</h2> 
                </div>
                <div className="nominations-selector-cont">
                    <div className="nominations-selector">
                        <button 
                            className={`nominations-button ${selectedCategory === 'Кинономинации' ? 'active' : ''}`}
                            onClick={() => setSelectedCategory('Кинономинации')}
                        >
                            Кинономинации
                        </button>
                        <button 
                            className={`nominations-button ${selectedCategory === 'Телевизионные номинации' ? 'active' : ''}`}
                            onClick={() => setSelectedCategory('Телевизионные номинации')}
                        >
                            Телевизионные номинации
                        </button>
                    </div>
                </div>
            </div>
            <div className="nominations-grid">
                {filteredNominations.map((nomination, index) => (
                    <div key={index} className="nomination-card">
                        <img src={nomination.icon} alt={nomination.title} className="nomination-icon" />
                        <h3 className="nomination-title">{nomination.title}</h3>
                        <p className="nomination-description">{nomination.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Nominations;
