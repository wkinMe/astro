import { CalendarInput } from '@shared/ui/Calendar/CalendarInput';
import Calendar from 'react-calendar';
import './style.scss';
import styles from './style.module.scss';

interface CalendarWrapperProps {
    date: Date;
    isShown: boolean;
    onDateChange: (date: Date, e?: React.MouseEvent<HTMLButtonElement>) => void;
    onInputClick: (e?: React.MouseEvent<HTMLInputElement>) => void;
}

export function CalendarWrapper({
    date,
    isShown,
    onDateChange,
    onInputClick,
}: CalendarWrapperProps) {
    const handleCalendarClick = (
        value: Date,
        e: React.MouseEvent<HTMLButtonElement>,
    ) => {
        onDateChange(value, e);
    };

    return (
        <div className={styles.calendarWrapper}>
            <CalendarInput date={date} onClick={onInputClick} />
            {isShown && (
                <Calendar
                    maxDate={new Date()}
                    value={date}
                    locale="en-US"
                    onClickDay={handleCalendarClick}
                />
            )}
        </div>
    );
}
