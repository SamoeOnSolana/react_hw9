import React, { useState } from 'react';

function Task2() {
  const [trainers] = useState([
    { id: 1, name: "Іван Петренко", phone: "+380501234567", specializations: ["Персональний тренер", "Тренер з йоги"] },
    { id: 2, name: "Марія Коваленко", phone: "+380672345678", specializations: ["Тренер із зумби", "Тренер з флай-йоги"] },
    { id: 3, name: "Олександр Сидоренко", phone: "+380633456789", specializations: ["Персональний тренер"] }
  ]);

  const [searchTerm, setSearchTerm] = useState("");
  const [searchType, setSearchType] = useState("name");
  const [searchResults, setSearchResults] = useState([]);

  const searchTrainers = () => {
    if (!searchTerm.trim()) {
      setSearchResults([]);
      return;
    }

    let results = [];
    const term = searchTerm.toLowerCase();

    switch (searchType) {
      case "name":
        results = trainers.filter(trainer => 
          trainer.name.toLowerCase().includes(term)
        );
        break;
      case "phone":
        results = trainers.filter(trainer => 
          trainer.phone.includes(term)
        );
        break;
      case "specialization":
        results = trainers.filter(trainer => 
          trainer.specializations.some(spec => 
            spec.toLowerCase().includes(term)
          )
        );
        break;
      default:
        results = [];
    }

    setSearchResults(results);
  };

  const clearSearch = () => {
    setSearchTerm("");
    setSearchResults([]);
  };

  return (
    <div>
      <h2>завдання 2</h2>
      <h3>Пошук тренерів</h3>

      <div style={{ marginBottom: '20px', padding: '20px', border: '1px solid #ccc' }}>
        <select
          value={searchType}
          onChange={(e) => setSearchType(e.target.value)}
          style={{ marginRight: '10px', padding: '5px' }}
        >
          <option value="name">П.І.Б.</option>
          <option value="phone">Телефон</option>
          <option value="specialization">Спеціалізація</option>
        </select>

        <input
          type="text"
          placeholder="Введіть пошуковий запит..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{ marginRight: '10px', padding: '5px' }}
        />

        <button onClick={searchTrainers} style={{ marginRight: '10px', padding: '5px 10px' }}>
          Пошук
        </button>
        <button onClick={clearSearch} style={{ padding: '5px 10px' }}>
          Очистити
        </button>
      </div>

      {searchResults.length > 0 && (
        <div>
          <h4>Результати пошуку ({searchResults.length})</h4>
          {searchResults.map(trainer => (
            <div key={trainer.id} style={{ 
              border: '1px solid #ccc', 
              padding: '10px', 
              marginBottom: '10px' 
            }}>
              <h5>{trainer.name}</h5>
              <p>Телефон: {trainer.phone}</p>
              <p>Спеціалізації: {trainer.specializations.join(', ')}</p>
            </div>
          ))}
        </div>
      )}

      {searchTerm && searchResults.length === 0 && (
        <div style={{ padding: '20px', textAlign: 'center', color: 'red' }}>
          Нічого не знайдено за запитом "{searchTerm}"
        </div>
      )}

      {!searchTerm && (
        <div style={{ padding: '20px', textAlign: 'center', color: '#666' }}>
          Введіть пошуковий запит та натисніть "Пошук"
        </div>
      )}
    </div>
  );
}

export default Task2;
