import { useState } from 'react';
import { getTodayAndWeekAgo, getWeekMS } from '@shared/config';
import {
    calculateDateDifference,
    adjustEndDate,
    adjustStartDate,
} from '../lib/datesUtils';
import { useApod } from '@entities/apod';

export function useApodCalendar() {
    const [weekAgo, today] = getTodayAndWeekAgo();
    const [startDate, setStartDate] = useState(weekAgo);
    const [endDate, setEndDate] = useState(today);

    const [isOpen, setIsOpen] = useState(false);

    const handleInputClick = () => {
        setIsOpen((prev) => !prev);
    };

    const handleDateClick = (start: boolean) => (date: Date) => {
        if (start) {
            const diff = calculateDateDifference(date, endDate);
            if (diff > 7) {
                setStartDate(date);
                setEndDate(adjustEndDate(endDate, diff));
            } else if (diff < 0) {
                setEndDate(new Date(date.getTime() + getWeekMS()));
            }
            setStartDate(date);
        } else {
            const diff = calculateDateDifference(startDate, date);
            if (diff > 7 || diff < 0) {
                setStartDate(adjustStartDate(date));
            }
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
