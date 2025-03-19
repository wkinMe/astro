import styles from './style.module.scss';

export function Subtitle({ children }: { children: React.ReactNode }) {
    return <h2 className={styles.subtitle}>{children}</h2>;
}
