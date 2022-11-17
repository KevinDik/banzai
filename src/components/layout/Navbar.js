import { Link } from 'react-router-dom';
import styles from './Navbar.module.css'
import Header from './Header'

export default function Navbar() {
    return (
        <>
            <Header />
            <nav>
                <ul className={styles.navbar}>
                    <li className={styles.item}><Link to="/">Notícias</Link></li>
                    <li className={styles.item}><Link to="/novidades">Novidades</Link></li>
                    <li className={styles.item}><Link to="/animes">Animes</Link></li>
                    <li className={styles.item}><Link to="/mangas">Mangás</Link></li>
                    <li className={styles.item}><Link to="/musicas">Músicas</Link></li>
                </ul>
            </nav>
        </>
    )
}