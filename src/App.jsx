import { Routes, Route } from 'react-router-dom'
import HomeScene from './scenes/HomeScene'
import Scene1 from './scenes/Scene1'
import Scene2 from './scenes/Scene2'
import MapScene from './scenes/MapScene';


export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomeScene />} />
      <Route path="/scene1" element={<Scene1 />} />
      <Route path="/scene2" element={<Scene2 />} />
      <Route path="/image/:id" element={<MapScene />} />
    </Routes>
  )
}