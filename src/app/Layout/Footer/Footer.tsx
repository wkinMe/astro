import { Link } from 'react-router-dom';
import style from './style.module.scss';
import { URLS } from '@shared/config/urls';

export default function Footer() {
    return (
        <footer className={style.footer}>
            <Link to={URLS.HOME} className={style.text}>
                Astro
            </Link>
        </footer>
    );
}
