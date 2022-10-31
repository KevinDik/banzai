import {Link} from 'react-router-dom';
import styles from './Header.module.css'
import Search from './Search'

export default function Header() {
    return(
        <div className={styles.header}>
            <Link className={styles.item} to="/login">Entrar/Cadastrar</Link>
            <Search/>
        </div>)
}