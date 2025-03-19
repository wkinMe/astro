import styles from './style.module.scss';

interface RotatedGalleryProps {
    imgs: string[];
}

export function RotatedGallery({ imgs }: RotatedGalleryProps) {
    return (
        <ul className={styles.rotatedGallery}>
            {imgs.map((i) => {
                return (
                    <li key={i}>
                        <img src={i} alt="" />
                    </li>
                );
            })}
        </ul>
    );
}
