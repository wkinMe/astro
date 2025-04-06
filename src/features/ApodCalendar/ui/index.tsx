import { CalendarWrapper } from '@shared/ui';
import { useApodCalendar } from '../hooks/useApodCalendar';
import styles from './style.module.scss';
import { useApod } from '@entities/apod';

export function ApodCalendar() {
    const { isOpen, handleDateClick, handleInputClick } = useApodCalendar();
    const { startDate, endDate } = useApod();

    return (
        <div className={styles.calendarContainer}>
            <CalendarWrapper
                date={startDate}
                isShown={isOpen}
                onInputClick={handleInputClick}
                onDateChange={handleDateClick(true)}
            />
            <CalendarWrapper
                date={endDate}
                isShown={isOpen}
                onInputClick={handleInputClick}
                onDateChange={handleDateClick(false)}
            />
        </div>
    );
}
