import React from 'react'
import LandingPage from './Components/Screens/LandingPage'
import DiceGame from './Components/Screens/DiceGame'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/play-now" element={<DiceGame />} />
    </Routes>
 
    </BrowserRouter>
  )
}

export default App