import { useState } from 'react';
import { useApod } from '@entities/apod';

export function useApodCalendar() {
    const [isOpen, setIsOpen] = useState(false);
    const { startDate, endDate, setStartDate, setEndDate } = useApod();

    const handleInputClick = () => {
        setIsOpen((prev) => !prev);
    };

    const handleDateClick = (start: boolean) => (date: Date) => {
        if (start) {
            setStartDate(date);
        } else {
            setEndDate(date);
        }
    };

    return {
        startDate,
        endDate,
        isOpen,
        handleDateClick,
        handleInputClick,
    };
}
