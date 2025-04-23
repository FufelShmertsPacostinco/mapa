import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Scene1() {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Введённое значение: ${inputValue}`);
  };

  return (
    <div className="scene scene1">
      <h1 className="scene-header">Карты этажей</h1>
      <button className="back-button" onClick={() => navigate('/')}>
        На главную
      </button>
      
      <div className="center-container">
        <div className="input-group">
          <h2 className="input-title">Введите желаемый этаж</h2>
          <form onSubmit={handleSubmit} className="input-form">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              className="value-input"
              placeholder="Введите текст здесь"
            />
            <button type="submit" className="submit-button">
              Отправить
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}