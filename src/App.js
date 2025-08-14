import React from 'react';
import Task1 from './Task1';
import Task2 from './Task2';
import Task3 from './Task3';

function App() {
  return (
    <div>
      <h1 style={{ textAlign: 'center', marginBottom: '30px' }}>
        Фітнес-клуб "Шахтар" - 3 таска
      </h1>
      
      <Task1 />
      
      <hr style={{ margin: '40px 0', border: 'none', borderTop: '3px solid #e0e0e0' }} />
      
      <Task2 />
      
      <hr style={{ margin: '40px 0', border: 'none', borderTop: '3px solid #e0e0e0' }} />
      
      <Task3 />
    </div>
  );
}

export default App;
