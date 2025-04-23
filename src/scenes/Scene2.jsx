import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Scene2() {
  const navigate = useNavigate();
  const [inputValue1, setInputValue1] = useState('');
  const [inputValue2, setInputValue2] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Введённые значения: ${inputValue1} и ${inputValue2}`);
  };

  return (
    <div className="scene scene2">
      <h1 className="scene-header">Навигатор</h1>
      <button className="back-button" onClick={() => navigate('/')}>
        На главную
      </button>
      
      <div className="center-container">
        <div className="input-group">
          <form onSubmit={handleSubmit} className="input-form">
            <div className="input-field">
              <h2 className="input-title">Откуда</h2>
              <input
                type="text"
                value={inputValue1}
                onChange={(e) => setInputValue1(e.target.value)}
                className="value-input"
                placeholder="Введите первый текст"
              />
            </div>
            
            <div className="input-field">
              <h2 className="input-title">Куда</h2>
              <input
                type="text"
                value={inputValue2}
                onChange={(e) => setInputValue2(e.target.value)}
                className="value-input"
                placeholder="Введите второй текст"
              />
            </div>
            
            <button type="submit" className="submit-button">
              Отправить значения
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}