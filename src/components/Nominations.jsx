import React from 'react';
import iconImg1 from '../img/nominations/video-camera.svg';
import iconImg2 from '../img/nominations/3d-movie.svg';
import iconImg3 from '../img/nominations/actor.svg';
import iconImg4 from '../img/nominations/host.svg';
import iconImg5 from '../img/nominations/cinema.svg';
import iconImg6 from '../img/nominations/videography.svg';
import iconImg7 from '../img/nominations/video-editing.svg';
import iconImg8 from '../img/nominations/special-effects.svg';
import iconImg9 from '../img/nominations/music.svg';

const nominationsData = [
    {
        title: "Лучший фильм",
        description: "Главная номинация, вручаемая за выдающееся художественное произведение.",
        icon: iconImg1,
    },
    {
        title: "Лучшая режиссура",
        description: "Награда за мастерское руководство процессом создания фильма.",
        icon: iconImg2,
    },
    {
        title: "Лучший актер",
        description: "Отмечает выдающуюся мужскую актерскую работу.",
        icon: iconImg3,
    },
    {
        title: "Лучшая актриса",
        description: "Признает лучшую женскую актерскую работу.",
        icon: iconImg4,
    },
    {
        title: "Лучший сценарий",
        description: "Награда за оригинальность и глубину сценария.",
        icon: iconImg5,
    },
    {
        title: "Лучшая операторская работа",
        description: "Отмечает визуальную выразительность и мастерство оператора.",
        icon: iconImg6,
    },
    {
        title: "Лучший монтаж",
        description: "Награда за искусное сочетание кадров, создающее уникальную динамику фильма.",
        icon: iconImg7,
    },
    {
        title: "Лучшие визуальные эффекты",
        description: "Отмечает выдающиеся достижения в области компьютерной графики и спецэффектов.",
        icon: iconImg8,
    },
    {
        title: "Лучшая музыка для фильма",
        description: "Награда за оригинальный саундтрек, усиливающий эмоциональное воздействие картины.",
        icon: iconImg9,
    }
];

const Nominations = () => {
    return (
        <section className="nominations">
            <h2 className="section-title">Номинации</h2>
            <div className="nominations-grid">
                {nominationsData.map((nomination, index) => (
                    <div key={index} className="nomination-card">
                        <img src={nomination.icon} alt={nomination.title} className="nomination-icon" />
                        <h3 className="nomination-title">{nomination.title}</h3>
                        <p className="nomination-description">{nomination.description}</p>
                        {/* <a href="#" className="read-more">Читать дальше</a> */}
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Nominations;
