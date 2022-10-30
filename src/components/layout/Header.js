import {Link} from 'react-router-dom';
import styles from './Header.module.css'

export default function Header() {
    return(
        <div className={styles.header}>
            <Link className={styles.item} to="/login">Entrar/Cadastrar</Link>
        </div>)
}