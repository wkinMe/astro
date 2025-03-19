import styles from './style.module.scss';

interface ContainerProps {
    children: React.ReactNode;
}

export const Container: React.FC<ContainerProps> = ({ children }) => {
    return <div className={styles.container}>{children}</div>;
};
