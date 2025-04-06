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
            <img src={url} />
            <span className={styles.title}>{title}</span>
            <span className={styles.date}>{date}</span>
            <span className={styles.copyright}>{copyright}</span>
            <span className={styles.explanation}>{explanation}</span>
        </div>
    );
}
