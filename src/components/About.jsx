import React from 'react';

const About = () => {
  return (
    <section className="about-section">
      <div className="about-header">
        <h2>О нас</h2>
        <div className="about-line"></div>
      </div>
      
      <div className="about-content">
        <div className="about-text">
          <p className="about-lead">
            Наша учебная платформа соединяет компании, образовательные учреждения и НКО 
            с профессиональными лекторами, спикерами и тренерами.
          </p>
          <p>
            Мы упрощаем процесс подбора, бронирования и организации лекций, помогая находить 
            экспертов, которые не просто делятся знаниями, но и вдохновляют аудиторию. 
            Наша миссия — сделать качественное образование доступным для каждого.
          </p>
        </div>
        
        <div className="about-stats">
          <div className="stat-item">
            <span className="stat-number">500+</span>
            <span className="stat-label">Экспертов</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">1200+</span>
            <span className="stat-label">Проведенных лекций</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">50+</span>
            <span className="stat-label">Компаний-клиентов</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;