import { Gallery } from '@shared/ui/Gallery';
import { useState } from 'react';

import styles from './style.module.scss';

interface PaginatedGalleryProps {
    imgs: string[];
    pageCount: number;
}

export function PaginatedGallery({ imgs }: PaginatedGalleryProps) {
    const [item, setItem] = useState(0);

    const handleClick = (next: boolean) => {
        console.log(imgs.length, item);
        if (next) {
            setItem((prev) => Math.min(imgs.length - prev, prev + 1));
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
                style={{ transform: `translateX(-${item * 280}px)` }}
            />
            <button onClick={() => handleClick(true)}>{'>'}</button>
        </div>
    );
}
