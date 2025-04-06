import { Apod } from '@entities/apod/model';

import styles from './styles.module.scss';

type ApodItemProps = Pick<
    Apod,
    'copyright' | 'date' | 'explanation' | 'title' | 'url'
>;

export function ApodItem({
    copyright,
    date,
    explanation,
    title,
    url,
}: ApodItemProps) {
    return (
        <div className={styles.apodItem}>
            <div className={styles.imaginary}>
                {url.includes('youtube') ? (
                    <iframe
                        src={url}
                        title="YouTube video player"
                        autoFocus
                        referrerPolicy="strict-origin-when-cross-origin"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    ></iframe>
                ) : (
                    <img src={url} />
                )}
            </div>
            <div className={styles.content}>
                <header>
                    <span className={styles.title}>{title}</span>
                    <span className={styles.date}>{date}</span>
                </header>
                <span className={styles.copyright}>{copyright}</span>
                <span className={styles.explanation}>{explanation}</span>
            </div>
        </div>
    );
}
