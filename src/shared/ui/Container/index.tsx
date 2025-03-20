import styles from './style.module.scss';

interface ContainerProps {
    children: React.ReactNode;
    [key: string]: any;
}

export function Container({ children, ...props }: ContainerProps) {
    return (
        <div className={styles.container} {...props}>
            {children}
        </div>
    );
}
