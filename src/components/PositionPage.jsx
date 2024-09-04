import React from 'react';
import PageHeader from './PageHeader';
import backgroundImage from '../img/bg.jpg';

const PositionPage = () => {
  return (
    <div>
      <PageHeader 
        backgroundImage={backgroundImage} 
        title="Положение о Фестивале" 
        subtitle="Crystal Screen"
      />

<section className="regulations">
        <h2 className="section-title">Положение о проведении международного фестиваля кино и телевидения Crystal Screen</h2>
        <div className="regulations-content">
          <div className="regulations-list">
            
            <div className="regulations-item">
              <strong>1. Общие положения</strong>
              <div className="sub-list">
                <p>1.1. Международный фестиваль кино и телевидения Crystal Screen (далее — Фестиваль) является ежегодным мероприятием, целью которого является признание и награждение выдающихся деятелей в области кино и телевидения.</p>
                <p>1.2. Организатором международного фестиваля кино и телевидения Crystal Screen выступает Союз кинематографистов России.</p>
                <p>1.3. Фестиваль проводится с 2018 года и за это время стал одной из самых значимых площадок для профессионалов кино и теле индустрии со всего мира.</p>
              </div>
            </div>

            <div className="regulations-item">
              <strong>2. Даты проведения Фестиваля</strong>
              <div className="sub-list">
                <p>2.1. Фестиваль Crystal Screen проводится ежегодно в марте.</p>
                <p>2.2. Церемония вручения наград Фестиваля проводится 15 марта каждого года.</p>
                <p>2.3. Заявки на участие в Фестивале принимаются с 1 февраля по 1 марта каждого года.</p>
              </div>
            </div>

            <div className="regulations-item">
              <strong>3. Условия подачи заявок</strong>
              <div className="sub-list">
                <p>3.1. Заявки на участие в Фестивале могут подавать профессионалы киноиндустрии, производственные компании, телекомпании, а также независимые профессиональные продюсеры и режиссеры кино и телевидения.</p>
                <p>3.2. Заявка на участие должна включать в себя:</p>
                <ul className="criteria-list">
                  <li className="criteria-list__item">полное название и описание фильма или телевизионной программы;</li>
                  <li className="criteria-list__item">информацию о создателях (режиссерах, продюсерах, актерах, сценаристах, операторах и др.);</li>
                  <li className="criteria-list__item">данные о предыдущих наградах и показах;</li>
                  <li className="criteria-list__item">контактные данные заявителя.</li>
                </ul>
                <p>3.3. Заявки подаются через официальный сайт Фестиваля Crystal Screen в соответствующий период, указанный в пункте 2.3.</p>
              </div>
            </div>

            <div className="regulations-item">
              <strong>4. Номинации Фестиваля</strong>
              <div className="sub-list">
                <p>4.1. В рамках Фестиваля Crystal Screen ежегодно вручаются награды в следующих номинациях:</p>
                <ul className="criteria-list">
                  <li className="criteria-list__item"><strong>Кинономинации:</strong></li>
                  <li className="criteria-list__item">Лучший фильм</li>
                  <li className="criteria-list__item">Лучшая режиссура</li>
                  <li className="criteria-list__item">Лучший режиссер короткометражного фильма</li>
                  <li className="criteria-list__item">Лучший актер</li>
                  <li className="criteria-list__item">Лучшая актриса</li>
                  <li className="criteria-list__item">Лучший сценарий</li>
                  <li className="criteria-list__item">Лучшая операторская работа</li>
                  <li className="criteria-list__item">Лучший монтаж</li>
                  <li className="criteria-list__item">Лучшие визуальные эффекты</li>
                  <li className="criteria-list__item">Лучшая музыка для фильма</li>
                  <li className="criteria-list__item">Лучший продюсер</li>
                  <li className="criteria-list__item"><strong>Телевизионные номинации:</strong></li>
                  <li className="criteria-list__item">Лучшая телевизионная программа</li>
                  <li className="criteria-list__item">Лучший телевизионный сериал</li>
                  <li className="criteria-list__item">Лучший режиссер телевизионного проекта</li>
                  <li className="criteria-list__item">Лучший сценарий телевизионного проекта</li>
                  <li className="criteria-list__item">Лучшая операторская работа для телевидения</li>
                  <li className="criteria-list__item">Лучший монтаж для телевидения</li>
                  <li className="criteria-list__item">Лучшие визуальные эффекты для телевидения</li>
                  <li className="criteria-list__item">Лучшая музыка для телевизионного проекта</li>
                  <li className="criteria-list__item">Лучший продюсер телевизионного проекта</li>
                </ul>
              </div>
            </div>

            <div className="regulations-item">
              <strong>5. Жюри и процесс отбора</strong>
              <div className="sub-list">
                <p>5.1. Жюри Фестиваля состоит из признанных мастеров кино и телеиндустрии, имеющих большой опыт и международное признание в различных областях кино и телевидения.</p>
                <p>5.2. Процесс отбора лауреатов включает в себя несколько этапов:</p>
                <ul className="criteria-list">
                  <li className="criteria-list__item">рассмотрение заявок и предварительный отбор;</li>
                  <li className="criteria-list__item">детальный анализ и обсуждение номинированных работ;</li>
                  <li className="criteria-list__item">финальный выбор победителей в каждой номинации.</li>
                </ul>
                <p>5.3. Решение жюри является окончательным и не подлежит обжалованию.</p>
              </div>
            </div>

            <div className="regulations-item">
              <strong>6. Церемония награждения</strong>
              <div className="sub-list">
                <p>6.1. Церемония награждения победителей Фестиваля Crystal Screen проводится в торжественной обстановке с участием известных деятелей кино и телевидения, представителей СМИ и широкой общественности.</p>
                <p>6.2. Вручение наград проходит в одном из престижных мест, соответствующих статусу Фестиваля, таких как Большой театр, Государственный Кремлёвский Дворец или Московский международный дом музыки.</p>
                <p>6.3. Победителям номинаций вручаются статуэтки и дипломы Фестиваля.</p>
                <p>6.4. Гран-при “За вклад в профессию” вручается ежегодно только одному выдающемуся деятелю кино и телевидения за его исключительные достижения, которые оставили неизгладимый след в индустрии, вдохновили будущие поколения и значительно обогатили мировое кинематографическое или телевизионное искусство. Эта престижная награда отмечает тех, чьи работы не только завоевали признание зрителей и критиков, но и оказали глубокое влияние на развитие культуры и искусства в глобальном масштабе.</p>
              </div>
            </div>

            <div className="regulations-item">
              <strong>7. Престиж Фестиваля и награды</strong>
              <div className="sub-list">
                <p>7.1. Фестиваль Crystal Screen является одной из самых престижных площадок, привлекающих внимание профессионалов и любителей кино и телевидения со всего мира.</p>
                <p>7.2. Награды Фестиваля, особенно Гран-при “За вклад в профессию”, считаются символом высшего признания заслуг в области кино и телевидения.</p>
              </div>
            </div>

            <div className="regulations-item">
              <strong>8. Прочие положения</strong>
              <div className="sub-list">
                <p>8.1. Участие в Фестивале Crystal Screen предполагает согласие с его правилами и условиями, изложенными в данном Положении.</p>
                <p>8.2. Организаторы Фестиваля оставляют за собой право вносить изменения в настоящее Положение, о чем участники будут уведомлены заранее.</p>
                <p>8.3. Все спорные вопросы, связанные с проведением Фестиваля, решаются организационным комитетом в соответствии с действующим законодательством.</p>
              </div>
            </div>
            
          </div>
        </div>
      </section>
    </div>
  );
};

export default PositionPage;
