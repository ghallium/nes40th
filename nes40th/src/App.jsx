import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { useState } from 'react';
import Header from "./components/header";
import Home from "./pages/home/home";
import Hardware from "./pages/hardware/hardware";
import Software from "./pages/software/software";
import Game from "./pages/game/game";
import Collection from "./pages/collection/collection";


function App() {
  
  

  return (
    <>
      <Router>
        <Header />
        
        <Routes>
          <Route exact path="/" element={<Home />}/>
          <Route exact path="/hardware" element={<Hardware />}/>
          <Route exact path="/software" element={<Software />}/>
          <Route exact path="/game" element={<Game />}/>
          <Route exact path="/collection" element={<Collection />}/>
        </Routes>
        
      </Router>
    </>
  )
}

export default App
