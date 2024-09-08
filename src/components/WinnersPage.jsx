import React, { useState } from 'react';
import PageHeader from './PageHeader';
import backgroundImage from '../img/bg_2.jpg';
import winnersData from './win';
import Photo_1 from '../img/winphotos/winphoto_1.jpg';
import Photo_2 from '../img/winphotos/winphoto_2.jpg';
import Photo_3 from '../img/winphotos/winphoto_3.jpg';
import Photo_4 from '../img/winphotos/winphoto_4.jpg';
import Photo_5 from '../img/winphotos/winphoto_5.jpg';
import Photo_6 from '../img/winphotos/winphoto_6.jpg';
import Photo_7 from '../img/winphotos/winphoto_7.jpg';
import Photo_8 from '../img/winphotos/winphoto_8.jpg';
import Photo_9 from '../img/winphotos/winphoto_9.jpg';
import Photo_10 from '../img/winphotos/winphoto_10.jpg';
import Photo_11 from '../img/winphotos/winphoto_11.jpg';
import Photo_12 from '../img/winphotos/winphoto_12.jpg';
import Photo_13 from '../img/winphotos/winphoto_13.jpg';
import Photo_14 from '../img/winphotos/winphoto_14.jpg';
import Photo_15 from '../img/winphotos/winphoto_15.jpg';
import Photo_16 from '../img/winphotos/winphoto_16.jpg';
import Photo_17 from '../img/winphotos/winphoto_17.png';
import Photo_18 from '../img/winphotos/winphoto_18.png';
import Photo_19 from '../img/winphotos/winphoto_19.png';
import Photo_20 from '../img/winphotos/winphoto_20.png';
import Photo_21 from '../img/winphotos/winphoto_21.png';
import Photo_22 from '../img/winphotos/winphoto_22.png';
import Photo_23 from '../img/winphotos/winphoto_23.jpg';
import Photo_24 from '../img/winphotos/winphoto_24.jpg';
import Photo_25 from '../img/winphotos/winphoto_25.jpg';
import Photo_26 from '../img/winphotos/winphoto_26.jpg';
import Photo_27 from '../img/winphotos/winphoto_27.jpg';
import Photo_28 from '../img/winphotos/winphoto_28.jpg';
import Photo_29 from '../img/winphotos/winphoto_29.jpg';
import Photo_30 from '../img/winphotos/winphoto_30.jpg';
import Photo_31 from '../img/winphotos/winphoto_31.jpg';
import Photo_32 from '../img/winphotos/winphoto_32.jpg';
import Photo_33 from '../img/winphotos/winphoto_33.jpg';
import Photo_34 from '../img/winphotos/winphoto_34.jpg';
import Photo_35 from '../img/winphotos/winphoto_35.jpg';
import Photo_36 from '../img/winphotos/winphoto_36.jpg';
import Photo_37 from '../img/winphotos/winphoto_37.jpg';
import Photo_38 from '../img/winphotos/winphoto_38.jpg';
import Photo_39 from '../img/winphotos/winphoto_39.jpg';
import Photo_40 from '../img/winphotos/winphoto_40.jpg';
import Photo_41 from '../img/winphotos/winphoto_41.jpg';
import Photo_42 from '../img/winphotos/winphoto_42.jpg';
import Photo_43 from '../img/winphotos/winphoto_43.jpg';
import Photo_44 from '../img/winphotos/winphoto_44.jpg';
import Photo_45 from '../img/winphotos/winphoto_45.jpg';
import Photo_46 from '../img/winphotos/winphoto_46.jpg';
import Photo_47 from '../img/winphotos/winphoto_47.jpg';
import Photo_48 from '../img/winphotos/winphoto_48.jpg';
import Photo_49 from '../img/winphotos/winphoto_49.jpg';
import Photo_50 from '../img/winphotos/winphoto_50.jpg';
import Photo_51 from '../img/winphotos/winphoto_51.jpg';
import Photo_52 from '../img/winphotos/winphoto_52.jpg';
import Photo_53 from '../img/winphotos/winphoto_53.jpg';
import Photo_54 from '../img/winphotos/winphoto_54.jpg';

const WinnersPage = () => {
  const [selectedYear, setSelectedYear] = useState(2024);

  const handleYearChange = (year) => {
    setSelectedYear(parseInt(year)); 
  };

  const currentYearData = winnersData[selectedYear];
  const ceremonyNumber = currentYearData?.number || ''; 

  return (
    <>      
      <PageHeader 
        backgroundImage={backgroundImage} 
        title="Победители" 
        subtitle="Crystal Screen"
      />
      <div className="winners-header">
        <h2>Победители {ceremonyNumber} церемонии фестиваля Crystal Screen {selectedYear}</h2>
        <div className="sub-text">
          {currentYearData?.text || "Текст для этого года отсутствует."}
        </div>
        <div className="year-selector">
          {Object.keys(winnersData).map((year) => (
            <button 
              key={year} 
              className={`year-button ${selectedYear === parseInt(year) ? 'active' : ''}`} 
              onClick={() => handleYearChange(year)}
            >
              {year}
            </button>
          ))}
        </div>
      </div>

      <div className="winners-page" style={{ backgroundColor: '#C72538', color: 'white' }}>
        <h3 className='winners-title'>Кинономинации</h3>
        <div className="winners-list">
          {currentYearData?.cinema?.map((winner, index) => (
            <div className="winner-item" key={index}>
              <div className="winner-title">{winner.title}</div>
              <div className="winner-details-text"> {winner.winner}</div>
              <div className="winner-details">
                <div className="winner-details-text"> {winner.text}</div>
                <div className="winner-details-text"><span>Фильм:</span> {winner.film}</div>
                <div className="winner-details-text"><span>Год:</span> {winner.year}</div>
              </div>
            </div>
          ))}
        </div>

        <h3 className='winners-title'>Телевизионные номинации</h3>
        <div className="winners-list">
          {currentYearData?.television?.map((winner, index) => (
            <div className="winner-item" key={index}>
              <div className="winner-title">{winner.title}</div>
              <div className="winner-details-text"> {winner.winner}</div>
              <div className="winner-details">
                <div className="winner-details-text"> {winner.text}</div>
                <div className="winner-details-text"><span>Год:</span> {winner.year}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="gallery">
          {/* <h3 className='winners-title'>Галерея</h3> */}
          <div className="gallery-grid">
            {selectedYear === 2018 && (
              <>
                <img src={Photo_47} alt="Photo 9" />
                <img src={Photo_48} alt="Photo 10" />
                <img src={Photo_49} alt="Photo 11" />
                <img src={Photo_50} alt="Photo 12" />
                <img src={Photo_51} alt="Photo 13" />
                <img src={Photo_52} alt="Photo 14" />
                <img src={Photo_53} alt="Photo 15" />
                <img src={Photo_54} alt="Photo 16" />
              </>
            )}
            {selectedYear === 2019 && (
              <>
                <img src={Photo_39} alt="Photo 9" />
                <img src={Photo_40} alt="Photo 10" />
                <img src={Photo_41} alt="Photo 11" />
                <img src={Photo_42} alt="Photo 12" />
                <img src={Photo_43} alt="Photo 13" />
                <img src={Photo_44} alt="Photo 14" />
                <img src={Photo_45} alt="Photo 15" />
                <img src={Photo_46} alt="Photo 16" />
              </>
            )}
            {selectedYear === 2020 && (
              <>
                <img src={Photo_31} alt="Photo 9" />
                <img src={Photo_32} alt="Photo 10" />
                <img src={Photo_33} alt="Photo 11" />
                <img src={Photo_34} alt="Photo 12" />
                <img src={Photo_35} alt="Photo 13" />
                <img src={Photo_36} alt="Photo 14" />
                <img src={Photo_37} alt="Photo 15" />
                <img src={Photo_38} alt="Photo 16" />
              </>
            )}
            {selectedYear === 2021 && (
              <>
                <img src={Photo_23} alt="Photo 9" />
                <img src={Photo_24} alt="Photo 10" />
                <img src={Photo_25} alt="Photo 11" />
                <img src={Photo_26} alt="Photo 12" />
                <img src={Photo_27} alt="Photo 13" />
                <img src={Photo_28} alt="Photo 14" />
                <img src={Photo_29} alt="Photo 15" />
                <img src={Photo_30} alt="Photo 16" />
              </>
            )}
            {selectedYear === 2022 && (
              <>
                <img src={Photo_17} alt="Photo 17" />
                <img src={Photo_18} alt="Photo 18" />
                <img src={Photo_19} alt="Photo 19" />
                <img src={Photo_20} alt="Photo 20" />
                <img src={Photo_21} alt="Photo 21" />
                <img src={Photo_22} alt="Photo 22" />
              </>
            )}
            {selectedYear === 2023 && (
              <>
                <img src={Photo_9} alt="Photo 9" />
                <img src={Photo_10} alt="Photo 10" />
                <img src={Photo_11} alt="Photo 11" />
                <img src={Photo_12} alt="Photo 12" />
                <img src={Photo_13} alt="Photo 13" />
                <img src={Photo_14} alt="Photo 14" />
                <img src={Photo_15} alt="Photo 15" />
                <img src={Photo_16} alt="Photo 16" />
              </>
            )}
            {selectedYear === 2024 && (
              <>
                <img src={Photo_1} alt="Photo 1" />
                <img src={Photo_2} alt="Photo 2" />
                <img src={Photo_3} alt="Photo 3" />
                <img src={Photo_4} alt="Photo 4" />
                <img src={Photo_5} alt="Photo 5" />
                <img src={Photo_6} alt="Photo 6" />
                <img src={Photo_7} alt="Photo 7" />
                <img src={Photo_8} alt="Photo 8" />
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default WinnersPage;
