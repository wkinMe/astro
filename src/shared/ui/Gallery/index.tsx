import styles from './style.module.scss';

interface GalleryProps {
    imgs: string[];
    galleryClass?: string;
    style?: React.CSSProperties;
}

export function Gallery({ imgs, galleryClass, style }: GalleryProps) {
    const className = (galleryClass && styles[galleryClass]) || styles.gallery;
    return (
        <div className={styles.galleryContainer}>
            <ul className={className} style={style}>
                {imgs.map((i) => {
                    return (
                        <li key={i}>
                            <img src={i} />
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}
