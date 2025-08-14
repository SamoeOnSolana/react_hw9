import React from 'react';

function Task3() {
  const [trainers] = React.useState([
    { id: 1, name: "Іван Петренко", phone: "+380501234567", specializations: ["Персональний тренер", "тренер з йоги"] },
    { id: 2, name: "Марія Коваленко", phone: "+380672345678", specializations: ["Тренер із зумби", "Тренер з флай-йоги"] },
    { id: 3, name: "Олександр Сидоренко", phone: "+380633456789", specializations: ["Персональний тренер"] }
  ]);

  const generateReports = () => {
    if (trainers.length === 0) return null;

    const trainersWithCount = trainers.map(trainer => ({
      ...trainer,
      specializationCount: trainer.specializations.length
    }));

    const sortedByCount = [...trainersWithCount].sort((a, b) => b.specializationCount - a.specializationCount);
    
    const maxSpecializations = sortedByCount[0];
    const minSpecializations = sortedByCount[sortedByCount.length - 1];
    
    const totalSpecializations = trainersWithCount.reduce((sum, trainer) => sum + trainer.specializationCount, 0);
    const averageSpecializations = totalSpecializations / trainersWithCount.length;

    return {
      max: maxSpecializations,
      min: minSpecializations,
      stats: {
        totalTrainers: trainersWithCount.length,
        totalSpecializations,
        averageSpecializations: averageSpecializations.toFixed(1)
      }
    };
  };

  const reports = generateReports();

  if (!reports) {
    return (
      <div>
        <h2>завдання 3</h2>
        <h3>Звіти про тренерів</h3>
        <p>Немає тренерів для створення звітів</p>
      </div>
    );
  }

  return (
    <div>
      <h2>завдання 3</h2>
      <h3>Звіти про тренерів</h3>

      <div style={{ marginBottom: '20px', padding: '20px', border: '1px solid #ccc' }}>
        <h4>Загальна статистика</h4>
        <p>Всього тренерів: {reports.stats.totalTrainers}</p>
        <p>Всього спеціалізацій: {reports.stats.totalSpecializations}</p>
        <p>Середня кількість: {reports.stats.averageSpecializations}</p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
        <div style={{ border: '1px solid #ccc', padding: '15px' }}>
          <h4>Найбільше спеціалізацій</h4>
          <h5>{reports.max.name}</h5>
          <p>Телефон: {reports.max.phone}</p>
          <p>Кількість: {reports.max.specializationCount}</p>
          <p>Спеціалізації: {reports.max.specializations.join(', ')}</p>
        </div>

        <div style={{ border: '1px solid #ccc', padding: '15px' }}>
          <h4>Найменше спеціалізацій</h4>
          <h5>{reports.min.name}</h5>
          <p>Телефон: {reports.min.phone}</p>
          <p>Кількість: {reports.min.specializationCount}</p>
          <p>Спеціалізації: {reports.min.specializations.join(', ')}</p>
        </div>
      </div>
    </div>
  );
}

export default Task3;
