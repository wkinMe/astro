import { ApodCalendar } from '@features/ApodCalendar';
import { useApod } from '@entities/apod';
import { getTodayAndWeekAgo } from '@shared/config';
import { useState } from 'react';

export default function Apod() {
    const { apods, isLoading, error, getBetweenDatesApod } = useApod();

    const [start, end] = getTodayAndWeekAgo();
    const [startDate, setStartDate] = useState(start);
    const [endDate, setEndDate] = useState(end);

    return (
        <ApodCalendar
            startDate={startDate}
            endDate={endDate}
            setStartDate={setStartDate}
            setEndDate={setEndDate}
        />
    );
}
