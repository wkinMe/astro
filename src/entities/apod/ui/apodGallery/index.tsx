import { useApod } from '@entities/apod/model';
import { useEffect } from 'react';

import { PaginatedGallery } from '../../../../features/PaginatedGallery';

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
                <PaginatedGallery imgs={apods.map((i) => i.url)} />
            )}
            {error}
        </>
    );
}
