import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Main from './page/Main';
import ColourBlocks from './components/ColourBlocks';
function App() {

  return (

    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/test" element={<ColourBlocks />} />
      </Routes>
    </Router>
  )
}

export default App
