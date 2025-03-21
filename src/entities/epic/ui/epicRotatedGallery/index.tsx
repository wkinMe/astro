import { useEpic } from '@entities/epic/model';
import { RotatedGallery } from '@shared/ui';
import { useEffect } from 'react';

export function EpicRotatedGallery() {
    const { epicsImages, setTodayEpics } = useEpic();

    useEffect(() => {
        setTodayEpics();
    }, []);

    return <RotatedGallery imgs={epicsImages.slice(0, 3)} />;
}
