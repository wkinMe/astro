import { Link } from 'react-router-dom';
import styles from './style.module.scss';
import logo from '@images/logo.svg';
import { URLS } from '@shared/config/urls';

export default function Header() {
    return (
        <header className={styles.header}>
            <img src={logo} alt="Astro" />
            <nav className={styles.nav}>
                <ul className={styles.list}>
                    <li className={styles.listItem}>
                        <Link to={URLS.APOD}>Picture of the day</Link>
                    </li>
                    <li className={styles.listItem}>
                        <Link to={URLS.EPIC}>Our planet</Link>
                    </li>
                    <li className={styles.listItem}>
                        <Link to={URLS.MARS}>Mars exploring</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}
