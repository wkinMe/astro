import Footer from '@app/Layout/Footer/Footer';
import Header from '@app/Layout/Header/Header';
import { Outlet } from 'react-router-dom';
import styles from './style.module.scss';

export function Layout() {
    return (
        <div className={styles.layout}>
            <Header />
            <Outlet />
            <Footer />
        </div>
    );
}
