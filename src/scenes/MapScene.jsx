import { useParams, useNavigate } from 'react-router-dom';

export default function MapScene() {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const images = {
    1: '/images/1.jpg',
    2: '/images/2 этаж.svg',
    3: '/images/3.svg',
    4: '/images/4.jpg',
    5: '/images/5.jpg',
    6: '/images/6.jpg',
    7: '/images/7.jpg',
    8: '/images/8.jpg',
    9: '/images/9.jpg',
    10: '/images/10.jpg',
    11: '/images/11.jpg',
    12: '/images/12.jpg',
    13: '/images/13.jpg'
  };

  return (
    <div className="scene image-scene">
      <button 
        className="back-button"
        onClick={() => navigate('/')}
      >
        На главную
      </button>
      
      <div className="image-container">
        <img 
          src={images[id]} 
          alt={`Изображение ${id}`}
          className="responsive-image"
        />
        <p className="image-caption">Карта {id} этажа</p>
      </div>
    </div>
  );
}