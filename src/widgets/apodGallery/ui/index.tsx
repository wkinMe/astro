import { useApod } from '@entities/apod/model';
import { useEffect } from 'react';

import { Gallery } from '@shared/ui';

export function ApodGallery() {
    const { apods, getWeekApods, error, isLoading } = useApod();

    useEffect(() => {
        getWeekApods();
    }, []);

    return (
        <>
            {isLoading ? (
                <h1>...Loading</h1>
            ) : (
                <Gallery imgs={apods.map((i) => i.url)} />
            )}
        </>
    );
}
