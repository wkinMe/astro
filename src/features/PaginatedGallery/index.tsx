import { Gallery } from '@shared/ui/Gallery';
import { useState } from 'react';

import styles from './style.module.scss';
import { GALLERY_ITEM_MIN_WIDTH } from '@shared/config';

interface PaginatedGalleryProps {
    imgs: string[];
}

export function PaginatedGallery({ imgs }: PaginatedGalleryProps) {
    const [item, setItem] = useState(0);

    const handleClick = (next: boolean) => {
        console.log(imgs.length - item, item + 1);

        if (next) {
            setItem((prev) => Math.min(imgs.length - prev + 1, prev + 1));
        } else {
            setItem((prev) => Math.max(0, prev - 1));
        }
    };

    return (
        <div className={styles.paginatinonContainer}>
            <button onClick={() => handleClick(false)}>{'<'}</button>
            <Gallery
                imgs={imgs}
                galleryClass="paginated"
                style={{
                    transform: `translateX(-${item * GALLERY_ITEM_MIN_WIDTH}px)`,
                }}
            />
            <button onClick={() => handleClick(true)}>{'>'}</button>
        </div>
    );
}
