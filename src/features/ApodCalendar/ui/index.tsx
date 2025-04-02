import { CalendarWrapper } from '@shared/ui';
import { useApodCalendar } from '../hooks/useApodCalendar';
import styles from './style.module.scss';

export function ApodCalendar() {
    const { startDate, endDate, isOpen, handleDateClick, handleInputClick } =
        useApodCalendar();

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
