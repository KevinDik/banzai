import styles from './Buttons.module.css'
import { Link } from 'react-router-dom'

export default function Buttons({ to, text }) {
  return (
    <Link className={styles.btn} to={to}>
      {text}
    </Link>
  )
}