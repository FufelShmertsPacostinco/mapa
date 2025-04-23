import { useNavigate } from 'react-router-dom'

export default function HomeScene() {
  const navigate = useNavigate()

  return (
    <div className="home-scene">
      <div className="content-wrapper">
        <h1 className="title">Добро пожаловать</h1>
        <p className="subtitle">Выберите желаемую функцию</p>
        
        <div className="buttons-container">
          <div className="button-left">
            <button className="scene-button" onClick={() => navigate('/scene1')}>
              Карты этажей
            </button>
          </div>
          <div className="button-right">
            <button className="scene-button" onClick={() => navigate('/scene2')}>
              Навигатор
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}