import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import PartnerCard from './components/PartnerCard';
import LecturerCard from './components/LecturerCard';
import Footer from './components/Footer';
import { partnersData, lecturersData } from './data/mockData';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const handleNavigate = (page) => {
    setCurrentPage(page);
    window.scrollTo(0, 0); 
  };

  const renderContent = () => {
    switch (currentPage) {
      case 'home':
        return (
          <>
            <Hero onFindLecturer={() => handleNavigate('lecturers')} />
            <About />
          </>
        );
      case 'partners':
        return (
          <section className="partners-section">
            <h2>Партнеры</h2>
            <div className="partners-grid">
              {partnersData.map((partner) => (
                <PartnerCard 
                  key={partner.id}
                  logo={partner.logo}
                  name={partner.name}
                  description={partner.description}
                  websiteUrl={partner.websiteUrl} /* Передаем ссылку */
                />
              ))}
            </div>
          </section>
        );
      case 'about':
        return <About />;
      case 'lecturers':
        return (
          <section className="lecturers-section">
            <h2>Лекторы</h2>
            {lecturersData.map((lecturer) => (
              <LecturerCard
                key={lecturer.id}
                photoUrl={lecturer.photoUrl}
                name={lecturer.name}
                role={lecturer.role}
                rating={lecturer.rating}
                experience={lecturer.experience}
                description={lecturer.description}
                extraBlock={lecturer.extraBlock}
                tags={lecturer.tags}
              />
            ))}
          </section>
        );
      default:
        return <div>Страница не найдена</div>;
    }
  };

  return (
    <div className="app-container">
      <Header currentPage={currentPage} onNavigate={handleNavigate} />
      <main>
        {renderContent()}
      </main>
      <Footer />
    </div>
  );
}

export default App;