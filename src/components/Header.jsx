import React, { useRef } from 'react';
import SearchInput from './SearchInput';

const Header = ({ currentPage, onNavigate }) => {
  const navItems = [
    { id: 'home', label: 'Главная' },
    { id: 'partners', label: 'Партнеры' },
    { id: 'about', label: 'О нас' },
    { id: 'lecturers', label: 'Лекторы' },
  ];

  const searchInputRef = useRef(null);

  return (
    <header className="header">
      <div className="header-logo" onClick={() => onNavigate('home')}>
        Учебная платформа
      </div>
      
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

      <div className="header-actions">
        <SearchInput 
          ref={searchInputRef} 
          placeholder="Поиск лектора..." 
        />
        <button onClick={() => searchInputRef.current.focus()}>
          Фокус на поле
        </button>
        <button className="btn-register">Регистрация</button>
        <button className="btn-login">Войти</button>
      </div>
    </header>
  );
};

export default Header;