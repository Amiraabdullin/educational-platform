import React from 'react';

const LecturerCard = ({ photoUrl, name, role, rating, experience, description, extraBlock, tags }) => {
  return (
    <div className="lecturer-card">
      <div className="lecturer-photo-container">
        {photoUrl ? (
          <img src={photoUrl} alt={name} className="lecturer-photo" />
        ) : (
          <div className="lecturer-photo-placeholder">
            место для фото преподавателя
          </div>
        )}
        <div className="blue-underline"></div>
      </div>
      <div className="lecturer-info">
        <div className="lecturer-header-info">
          <h3>{name}</h3>
          <div className="lecturer-rating">
            <span className="star">★</span> {rating}
          </div>
        </div>
        <p className="role">{role} • Опыт: {experience}</p>
        <p>{description}</p>
        
        {/* Теги */}
        <div className="lecturer-tags">
          {tags && tags.map((tag, index) => (
            <span key={index} className="tag">{tag}</span>
          ))}
        </div>

        <div className="lecturer-extra">
          {extraBlock}
        </div>
      </div>
    </div>
  );
};

export default LecturerCard;