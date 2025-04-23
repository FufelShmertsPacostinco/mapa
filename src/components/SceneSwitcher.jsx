import React from 'react';
import { useNavigate } from 'react-router-dom';

function SceneSwitcher() {
  const navigate = useNavigate();

  return (
    <div className="scene-switcher">
      <button 
        className="scene-button"
        onClick={() => navigate('/scene1')}
      >
        Сцена 1
      </button>
      <button 
        className="scene-button"
        onClick={() => navigate('/scene2')}
      >
        Сцена 2
      </button>
    </div>
  );
}

export default SceneSwitcher;