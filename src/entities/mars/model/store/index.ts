import { mars_api } from '@entities/mars/api';
import { CAMERAS, ROVERS } from '@entities/mars/config/constants';
import { Photo } from '@entities/mars/model/types';
import { create } from 'zustand';

interface MarsState {
    photos: Photo[];
    rover: ROVERS;
    camera: CAMERAS;
}

interface MarsActions {
    setPhotos: (sol?: number, earth_date?: number) => void;
    setRover: (rover: ROVERS) => void;
    setCamera: (camera: CAMERAS) => void;
    initializePhotos: () => void;
}

export const useMars = create<MarsState & MarsActions>((set, get) => ({
    photos: [],
    error: '',
    rover: ROVERS.CURIOSITY,
    camera: CAMERAS.FHAZ,
    setPhotos: async (sol?: number, earth_date?: number) => {
        const isSol = !!sol;
        const { rover, camera } = get();
        if (isSol) {
            const { photos } = await mars_api.getPhotosOfRoverByCamera(
                rover,
                camera,
                sol,
            );
            set(() => ({ photos }));
        } else {
            const { photos } = await mars_api.getPhotosOfRoverByCamera(
                rover,
                camera,
                earth_date,
            );
            set(() => ({ photos }));
        }
    },
    setRover: (rover: ROVERS) => {
        set(() => ({ rover }));
    },
    setCamera: (camera: CAMERAS) => {
        set(() => ({ camera }));
    },
    initializePhotos: async () => {
        const { rover } = get();
        const { photos } = await mars_api.getPhotosOfRover(rover, 1000);
        const { photos: photos1 } = await mars_api.getPhotosOfRover(rover, 900);

        set(() => ({ photos: [photos[0], photos1[0]] }));
    },
}));
