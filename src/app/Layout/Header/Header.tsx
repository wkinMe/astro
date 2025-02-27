import { Link } from 'react-router-dom';
import styles from './style.module.scss';
import logo from '@images/logo.svg';
import { URLS } from '@shared/config/urls';
import { Container } from '@shared/ui/Container/Container';

export default function Header() {
    return (
        <Container>
            <header className={styles.header}>
                <Link to={URLS.HOME}>
                    <img src={logo} alt="Astro" />
                </Link>
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
        </Container>
    );
}
