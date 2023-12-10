import React from 'react';

  const Hero: React.FC = () => {
    return (
      <header style={{ height: '40vh', position: 'relative'}}>
            <div style={{position: 'relative', padding: 20}}>
              <h2 style={{color: 'white', fontSize: 70}}>Welcome to the movie watcher</h2>
              <p style={{color: 'white', width: '50%', lineHeight: 1.5, fontSize: 30}}>You can stream movies online for free</p>
            </div>
      </header>
    );
  };
  
  export default Hero;