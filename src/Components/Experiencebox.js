import React from 'react';
import { FaMapMarkerAlt, FaRegCalendarAlt } from "react-icons/fa";

const ExperienceBox = ({ photos, company, role, dates, location, points, caption }) => {
  return (
    <div className='projectBox'>

      <div style={{ display: 'flex', gap: '10px', justifyContent: 'center' }}>
        {photos.map((photo, index) => (
          <img
            key={index}
            src={photo}
            alt={company + ' workplace'}
            style={{
              width: photos.length > 1 ? '49%' : '100%',
              height: '220px',
              objectFit: 'cover',
              borderRadius: '10px'
            }}
          />
        ))}
      </div>

      <div>
        <br />
        <h3>{company}</h3>
        <h4 style={{ fontWeight: 400, opacity: 0.9 }}>{role}</h4>
        <br />

        <div style={{ display: 'flex', justifyContent: 'center', gap: '18px', flexWrap: 'wrap', fontSize: '0.9rem', opacity: 0.75 }}>
          <span><FaRegCalendarAlt /> {dates}</span>
          <span><FaMapMarkerAlt /> {location}</span>
        </div>
        <br />

        <ul style={{ textAlign: 'left', paddingLeft: '20px', lineHeight: 1.6 }}>
          {points.map((point, index) => (
            <li key={index} style={{ marginBottom: '10px' }}>{point}</li>
          ))}
        </ul>

        <br />
        <p style={{ fontStyle: 'italic', opacity: 0.8 }}>{caption}</p>
      </div>
    </div>
  );
};

export default ExperienceBox;