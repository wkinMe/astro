import { ApodCalendar } from '@features/ApodCalendar';
import { ApodItem, useApod } from '@entities/apod';
import styles from './styles.module.scss';
import { useLayoutEffect } from 'react';
import { getTodayAndWeekAgo } from '@shared/config';

export default function Apod() {
    const { apods, isLoading, error, setStartDate, setEndDate } = useApod();

    useLayoutEffect(() => {
        const [weekAgo, today] = getTodayAndWeekAgo();

        setStartDate(weekAgo);
        setEndDate(today);
    }, []);

    return (
        <div className={styles.apodContainer}>
            <ApodCalendar />
            {error ? (
                error
            ) : isLoading ? (
                <h1>Loading...</h1>
            ) : (
                <ul className={styles.apodList}>
                    {apods.map((i, idx) => {
                        return (
                            <li>
                                <ApodItem
                                    key={idx}
                                    copyright={i.copyright}
                                    date={i.date}
                                    explanation={i.explanation}
                                    title={i.title}
                                    url={i.url}
                                />
                            </li>
                        );
                    })}
                </ul>
            )}
        </div>
    );
}
