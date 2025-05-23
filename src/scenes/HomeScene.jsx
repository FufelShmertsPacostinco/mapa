import { useNavigate } from 'react-router-dom'

export default function HomeScene() {
  const navigate = useNavigate()

  return (
    <div className="home-scene">
      <div className="content-wrapper">
        <h1 className="title">Добро пожаловать</h1>
        <div className="buttons-container">
          <div className="main-action-button">
            <button className="scene-button" onClick={() => navigate('/scene1')}>
              Перейти к поиску
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}