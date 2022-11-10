import {Routes, Route, BrowserRouter as Router } from 'react-router-dom'
import Noticias from './components/pages/Noticias'
import Novidades from './components/pages/Novidades'
import Animes from './components/pages/Animes'
import Mangas from './components/pages/Mangas'
import Musicas from './components/pages/Musicas'
import Login from './components/pages/Login'
import Navbar from './components/layout/Navbar'

import './App.css';

function App() {
  return (
    <div className="App">
      <Router>  
        <Navbar/>
        <Routes>
          <Route path="/login" element={<Login/>}/>
          <Route path="/" element={<Noticias/>}/>
          <Route path="/novidades" element={<Novidades/>}/>
          <Route path="/animes" element={<Animes/>}/>
          <Route path="/mangas" element={<Mangas/>}/>
          <Route path="/musicas" element={<Musicas/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
