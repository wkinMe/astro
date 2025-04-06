import { Apod } from '@entities/apod/model';

import styles from './styles.module.scss';

export function ApodItem({ copyright, date, explanation, title, url }: Apod) {
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
