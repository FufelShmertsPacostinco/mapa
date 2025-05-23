import { useNavigate } from 'react-router-dom';

export default function Scene2() {
  const navigate = useNavigate();

  return (
    <div className="scene2-container">
      <div className="image-container">
        <img 
          src="/images/2 этаж.svg" 
          className="centered-image" 
          alt="План 2 этажа" 
        />
      </div>
      
      <button 
        className="back-btn" 
        onClick={() => navigate('/')}
      >
        На главную
      </button>
    </div>
  );
}