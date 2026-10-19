import React from 'react';

const PartnerCard = ({ logo, name, description, websiteUrl }) => {
  return (
    <div className="partner-card">
      {/* Оборачиваем в тег <a>, чтобы ссылка вела на сайт компании */}
      <a 
        href={websiteUrl} 
        target="_blank" 
        rel="noopener noreferrer" 
        className="partner-header-link"
      >
        <div className="partner-header">
          <img src={logo} alt={`Логотип ${name}`} />
          <span className="arrow">↗</span>
        </div>
      </a>
      <p>{description}</p>
    </div>
  );
};

export default PartnerCard;