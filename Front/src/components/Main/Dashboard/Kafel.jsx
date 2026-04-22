import React from 'react';

function Kafel({ kafelDescription, icon, freeSlotsNumber, busySlotsNumber }) {
  const isDate = kafelDescription === 'Today date';

  return (
    <div className="kafel">
      <div className="kafelData">
        <h3 style={{ borderBottom: '4px solid #5e6497', width: '80%', padding: '5px' }}>
          {kafelDescription}
        </h3>
        <h2 style={isDate ? { fontSize: '23px', color: '#000' } : {}}>
          {isDate 
            ? new Date().toLocaleDateString('en-US', { day: 'numeric', month: 'long', year: 'numeric' }) 
            : (freeSlotsNumber ?? busySlotsNumber)}
        </h2>
      </div>
      <div className="kafelIcon">{icon}</div>
    </div>
  );
}

export default Kafel;