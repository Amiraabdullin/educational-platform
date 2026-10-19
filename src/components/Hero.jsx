import React from 'react';

const Hero = ({ onFindLecturer }) => {
  return (
    <section className="hero">
      <div className="hero-image">
        {/* Картинка с преподавателем */}
        <img 
          src="https://i.ibb.co/WWVF3RXS/first.jpg" 
          alt="Лектор выступает" 
        />
      </div>
      <div className="hero-content">
        <h1>Наши лекторы — признанные специалисты в своих областях, готовые делиться опытом и знаниями.</h1>
        <p className="hero-subtitle">
          Мы поможем вам найти идеального эксперта для проведения лекций, тренингов и мастер-классов.
        </p>
        
        {/* Улучшенная кнопка */}
        <button className="btn-primary" onClick={onFindLecturer}>
          НАЙТИ ЛЕКТОРА
        </button>

        {/* Блок, которым восполняем пространство */}
        <div className="hero-features">
          <div className="feature-item">
            <span className="feature-icon">✓</span>
            <span>Более 500 экспертов</span>
          </div>
          <div className="feature-item">
            <span className="feature-icon">✓</span>
            <span>Онлайн и офлайн форматы</span>
          </div>
          <div className="feature-item">
            <span className="feature-icon">✓</span>
            <span>Индивидуальный подход</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;