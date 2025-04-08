import React from 'react';

const Dining = () => {
  const handleOrderNow = (restaurant) => {
    alert(`Table booked at ${restaurant}`);
  };

  return (
    <div className="dining-container" style={{ padding: '20px' }}>
      <h1 style={{ fontSize: '32px', fontWeight: 'bold', marginBottom: '20px' }}>Dining</h1>

      <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '20px' }}>
        {/* Burger King Dining */}
        <div style={{ width: '300px', border: '1px solid #ccc', borderRadius: '10px', overflow: 'hidden' }}>
          <img
            src="/Burger King Dining.webp"
            alt="Burger King Dining"
            style={{ width: '100%', height: '200px', objectFit: 'cover' }}
          />
          <div style={{ padding: '15px' }}>
            <h2>Burger King</h2>
            <button
              onClick={() => handleOrderNow('Burger King')}
              style={{
                marginTop: '10px',
                padding: '10px 20px',
                backgroundColor: '#e63946',
                color: 'white',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer'
              }}
            >
              Order Now
            </button>
          </div>
        </div>

        {/* Subway Dining */}
        <div style={{ width: '300px', border: '1px solid #ccc', borderRadius: '10px', overflow: 'hidden' }}>
          <img
            src="/Images/Subway Dining.jpg"
            alt="Subway Dining"
            style={{ width: '100%', height: '200px', objectFit: 'cover' }}
          />
          <div style={{ padding: '15px' }}>
            <h2>Subway</h2>
            <button
              onClick={() => handleOrderNow('Subway')}
              style={{
                marginTop: '10px',
                padding: '10px 20px',
                backgroundColor: '#2a9d8f',
                color: 'white',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer'
              }}
            >
              Order Now
            </button>
          </div>
        </div>

        {/* Pizza Hut Dining */}
        <div style={{ width: '300px', border: '1px solid #ccc', borderRadius: '10px', overflow: 'hidden' }}>
          <img
            src="/Images/Pizza Hut Dining.avif"
            alt="Pizza Hut Dining"
            style={{ width: '100%', height: '200px', objectFit: 'cover' }}
          />
          <div style={{ padding: '15px' }}>
            <h2>Pizza Hut</h2>
            <button
              onClick={() => handleOrderNow('Pizza Hut')}
              style={{
                marginTop: '10px',
                padding: '10px 20px',
                backgroundColor: '#f4a261',
                color: 'white',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer'
              }}
            >
              Order Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dining;
