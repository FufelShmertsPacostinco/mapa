import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Scene1() {
  const navigate = useNavigate();
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
 
  const mapImages = [
    '/images/12.jpg',
    '/images/11.jpg',
    '/images/10.jpg',
    '/images/9.jpg',
    '/images/8.jpg',
    '/images/7.jpg',
    '/images/6.jpg',
    '/images/5.jpg',
    '/images/4.jpg',
    '/images/3.jpg',
    '/images/2.jpg',
    '/images/1.jpg'
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (from && to) {
      navigate('/scene2', { state: { from, to } });
    }
  };

  const handlePrevImage = () => {
    setCurrentImageIndex(prev => 
      prev === 0 ? mapImages.length - 1 : prev - 1
    );
  };

  const handleNextImage = () => {
    setCurrentImageIndex(prev => 
      prev === mapImages.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <div className="app-container">
      <div className="form-section">
        <div className="form-content">
          <img src="/images/logo.jpg" className="logo" />
          
          <form onSubmit={handleSubmit} className="route-form">
          <h2 className="form-title">Поиск маршрута</h2>
            
            <div className="input-group">
              <label>Откуда:</label>
              <input
                type="text"
                value={from}
                onChange={(e) => setFrom(e.target.value)}
                placeholder="Введите начальную точку"
                required
                className="input-group exact-width-input"
              />
            </div>
            
            <div className="input-group">
              <label>Куда:</label>
              <input
                type="text"
                value={to}
                onChange={(e) => setTo(e.target.value)}
                placeholder="Введите конечную точку"
                required
                className="input-group exact-width-input"
              />
            </div>
            
            <button type="submit" className="submit-btn">
              Найти маршрут
            </button>
          </form>

          <div className="image-controls">
            <button className="submit-btn" onClick={handlePrevImage}>
              ↑
            </button>
            <button className="submit-btn" onClick={handleNextImage}>
              ↓
            </button>
          </div>
        </div>
      </div>

      <div className="map-section">
        <img 
          src={mapImages[currentImageIndex]} 
          className="map-image" 
          alt={`Map ${currentImageIndex + 1}`}
        />
      </div>

      <button className="back-btn" onClick={() => navigate('/')}>
        На главную
      </button>
    </div>
  );
}