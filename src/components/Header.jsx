import React from 'react';

const Header = ({ currentPage, onNavigate }) => {
  const navItems = [
    { id: 'home', label: 'Главная' },
    { id: 'partners', label: 'Партнеры' },
    { id: 'about', label: 'О нас' },
    { id: 'lecturers', label: 'Лекторы' },
  ];

  return (
    <header className="header">
      {/* Логотип слева */}
      <div className="header-logo" onClick={() => onNavigate('home')}>
        Учебная платформа
      </div>
      
      {/* Навигация по центру */}
      <nav className="header-nav">
        {navItems.map((item) => (
          <button
            key={item.id}
            className={currentPage === item.id ? 'active' : ''}
            onClick={() => onNavigate(item.id)}
          >
            {item.label}
          </button>
        ))}
      </nav>

      {/* Правая часть: Поиск + Кнопки */}
      <div className="header-actions">
        <input 
          type="text" 
          placeholder="Поиск лектора..." 
          className="search-input" 
        />
        <button className="btn-register">Регистрация</button>
        <button className="btn-login">Войти</button>
      </div>
    </header>
  );
};

export default Header;