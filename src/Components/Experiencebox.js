import React from 'react';
import { FaMapMarkerAlt, FaRegCalendarAlt } from "react-icons/fa";

const ExperienceBox = ({ photos = [], company, role, dates, location, points, caption, reverse }) => {
  return (
    <div
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection: reverse ? 'row-reverse' : 'row',
        alignItems: 'center',
        gap: '35px',
        maxWidth: '1150px',
        margin: '0 auto 70px auto',
        padding: '30px',
        border: '1px solid rgba(144, 103, 198, 0.45)',
        borderRadius: '16px',
        background: 'rgba(255, 255, 255, 0.02)'
      }}
    >

      <div style={{ flex: '1 1 320px', display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
        {photos.map((photo, index) => (
          <img
            key={index}
            src={photo}
            alt={company + ' workplace'}
            style={{
              width: photos.length > 1 ? '50%' : '100%',
              height: 'auto',
              maxHeight: '560px',
              objectFit: 'contain',
              borderRadius: '12px'
            }}
          />
        ))}
      </div>

      <div style={{ flex: '1 1 420px', textAlign: 'left' }}>
        <h2 style={{ margin: '0 0 6px 0' }}>{company}</h2>
        <h4 style={{ margin: '0 0 14px 0', fontWeight: 400, opacity: 0.9 }}>{role}</h4>

        <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', fontSize: '0.9rem', opacity: 0.7, marginBottom: '18px' }}>
          <span><FaRegCalendarAlt /> {dates}</span>
          <span><FaMapMarkerAlt /> {location}</span>
        </div>

        <ul style={{ paddingLeft: '20px', lineHeight: 1.65, margin: '0 0 18px 0' }}>
          {points.map((point, index) => (
            <li key={index} style={{ marginBottom: '10px' }}>{point}</li>
          ))}
        </ul>

        <p style={{ fontStyle: 'italic', opacity: 0.75, margin: 0 }}>{caption}</p>
      </div>

    </div>
  );
};

export default ExperienceBox;