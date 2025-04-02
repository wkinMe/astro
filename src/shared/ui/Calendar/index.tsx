import { CalendarInput } from '@shared/ui/Calendar/CalendarInput';
import { useState } from 'react';
import Calendar from 'react-calendar';
import './style.scss';

export function ApodCalendar() {
    const [show, setIsShow] = useState(false);
    const date = new Date();

    const handleClick = () => {
        setIsShow((prev) => !prev);
    };

    return (
        <div>
            <CalendarInput
                date={date}
                onClick={handleClick}
                onChange={handleClick}
            />
            {show && <Calendar locale="en-US" />}
        </div>
    );
}
export { Calendar };
