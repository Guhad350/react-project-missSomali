import styles from './header.module.scss';
const Header = () => {
  return (
    <div>
        <header className={styles.header}>
            <ul>
                <li><a href="#" className={styles.logo}>MissSomali</a></li>
                <li><a href="#">All competitors</a></li>
            </ul>
        </header>

    </div>
  )
}

export default Header