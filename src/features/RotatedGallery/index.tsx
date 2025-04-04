import { Gallery } from '@shared/ui/Gallery';

interface RotatedGalleryProps {
    imgs: string[];
}

export function RotatedGallery({ imgs }: RotatedGalleryProps) {
    return <Gallery imgs={imgs} galleryClass="rotated"></Gallery>;
}
