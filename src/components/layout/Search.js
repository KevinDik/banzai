import styles from './Search.module.css'
import { FaSearch } from "react-icons/fa";

export default function Search() {
    return(
        <div className={styles.searchComponent}>
            <input className={styles.search} type="text"/>
            <FaSearch/>
        </div>)
}
