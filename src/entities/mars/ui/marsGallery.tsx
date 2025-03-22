import { useMars } from '@entities/mars/model/store';
import { Gallery } from '@shared/ui';
import { useEffect } from 'react';

export function MarsGallery() {
    const { photos, initializePhotos } = useMars();

    const imgs_srcs = photos?.map((i) => i.img_src);

    useEffect(() => {
        initializePhotos();
    }, [initializePhotos]);

    return <Gallery imgs={imgs_srcs.slice(0, 2)} />;
}
