import Buttons from '../layout/Buttons'
import styles from './Header.module.css'
import Search from './Search'
import logo from '../imgs/logo.jpg'

export default function Header() {
    return(
        <div className={styles.header}>
            <Buttons
            to="/login"
            text="Entrar/cadastrar"/>
            <img src={logo} alt="Logo banzai"/>
            <Search/>
        </div>)
}