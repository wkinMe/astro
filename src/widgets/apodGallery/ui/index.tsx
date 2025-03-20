import { useApod } from '@entities/apod/model';
import { useEffect } from 'react';

import { Gallery } from '@shared/ui';

export function ApodGallery() {
    const { apods, getWeekDatesApod } = useApod();

    useEffect(() => {
        getWeekDatesApod();
    }, []);

    return <Gallery imgs={apods.map((i) => i.url)} />;
}
