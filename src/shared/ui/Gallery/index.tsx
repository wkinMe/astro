import styles from './style.module.scss';

interface GalleryProps {
    imgs: string[];
}

export function Gallery({ imgs }: GalleryProps) {
    return (
        <ul className={styles.gallery}>
            {imgs.map((i) => {
                return (
                    <li key={i}>
                        <img src={i} />
                    </li>
                );
            })}
        </ul>
    );
}
