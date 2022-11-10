import spyfamily from '../imgs/spyfamily.png'
import styles from './Noticias.module.css'

export default function Noticias() {
    return(
        <div className={styles.noticias}>
            <h2>Spy Family ganha novo visual e data de estreia</h2>
            <p>Incididunt voluptate nisi eiusmod ullamco. Veniam et eu nostrud est ad exercitation sunt. Veniam ex amet nisi elit qui do. Proident duis nostrud excepteur elit. Sit ipsum duis nisi in commodo ullamco qui cupidatat magna mollit in velit velit non. <span>By: Kevin Diego</span></p>
            <img src={spyfamily} alt="Anime spy family"/>
        </div>)
}