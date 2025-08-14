import React, { useState } from 'react';

function Task1() {
  const [trainers, setTrainers] = useState([
    { id: 1, name: "Іван Петренко", phone: "+380501234567", specializations: ["Персональний тренер", "Тренер з йоги"] },
    { id: 2, name: "Марія Коваленко", phone: "+380672345678", specializations: ["Тренер із зумби", "Тренер з флай-йоги"] },
    { id: 3, name: "Олександр Сидоренко", phone: "+380633456789", specializations: ["Персональний тренер"] }
  ]);

  const [newName, setNewName] = useState("");
  const [newPhone, setNewPhone] = useState("");
  const [newSpecializations, setNewSpecializations] = useState([]);

  const allSpecializations = [
    "Персональний тренер",
    "Тренер з йоги", 
    "Тренер із зумби",
    "Тренер з флай-йоги"
  ];

  const addTrainer = () => {
    if (newName && newPhone && newSpecializations.length > 0) {
      const trainer = {
        id: Date.now(),
        name: newName,
        phone: newPhone,
        specializations: newSpecializations
      };
      setTrainers([...trainers, trainer]);
      setNewName("");
      setNewPhone("");
      setNewSpecializations([]);
    }
  };

  const deleteTrainer = (id) => {
    setTrainers(trainers.filter(t => t.id !== id));
  };

  const toggleSpecialization = (spec) => {
    setNewSpecializations(prev => 
      prev.includes(spec) 
        ? prev.filter(s => s !== spec)
        : [...prev, spec]
    );
  };

  return (
    <div>
      <h2>завдання 1</h2>
      <h3>Фітнес-клуб "Сила"</h3>

      <div style={{ marginBottom: '20px', padding: '20px', border: '1px solid #ccc' }}>
        <h4>Додати тренера</h4>
        <input
          type="text"
          placeholder="П.І.Б. тренера"
          value={newName}
          onChange={(e) => setNewName(e.target.value)}
          style={{ marginRight: '10px', padding: '5px' }}
        />
        <input
          type="tel"
          placeholder="Телефон"
          value={newPhone}
          onChange={(e) => setNewPhone(e.target.value)}
          style={{ marginRight: '10px', padding: '5px' }}
        />
        <br /><br />
        <div>Спеціалізації:</div>
        {allSpecializations.map(spec => (
          <label key={spec} style={{ marginRight: '15px' }}>
            <input
              type="checkbox"
              checked={newSpecializations.includes(spec)}
              onChange={() => toggleSpecialization(spec)}
            />
            {spec}
          </label>
        ))}
        <br /><br />
        <button onClick={addTrainer} style={{ padding: '5px 10px' }}>
          Додати тренера
        </button>
      </div>

      <div>
        <h4>Список тренерів</h4>
        {trainers.map(trainer => (
          <div key={trainer.id} style={{ 
            border: '1px solid #ccc', 
            padding: '10px', 
            marginBottom: '10px' 
          }}>
            <h5>{trainer.name}</h5>
            <p>Телефон: {trainer.phone}</p>
            <p>Спеціалізації: {trainer.specializations.join(', ')}</p>
            <button onClick={() => deleteTrainer(trainer.id)} style={{ 
              backgroundColor: 'red', 
              color: 'white', 
              border: 'none', 
              padding: '5px 10px' 
            }}>
              Видалити
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Task1;
