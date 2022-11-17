import { Routes, Route, BrowserRouter as Router } from 'react-router-dom'

import Noticias from '../pages/Noticias'
import Novidades from '../pages/Novidades'
import Animes from '../pages/Animes'
import Mangas from '../pages/Mangas'
import Musicas from '../pages/Musicas'
import Login from '../pages/Login'
import Navbar from '../layout/Navbar'

export default function Navegacao() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/" element={<Noticias />} />
                <Route path="/novidades" element={<Novidades />} />
                <Route path="/animes" element={<Animes />} />
                <Route path="/mangas" element={<Mangas />} />
                <Route path="/musicas" element={<Musicas />} />
            </Routes>
        </Router>
    )
}