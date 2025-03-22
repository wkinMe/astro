import { CAMERAS, ROVERS } from '@entities/mars/config/constants';
import { Mars } from '@entities/mars/model/types';
import { API_URLS, fetchWithApiKey } from '@shared/config';

class API {
    getPhotosOfRover(
        rover: ROVERS,
        sol?: number,
        earth_date?: number,
    ): Promise<Mars> {
        const date = sol ? `sol=${sol}` : `earth_date=${earth_date}`;
        const url = `${API_URLS.mars}/${rover}/photos?${date}`;

        return fetchWithApiKey(url).then((res) => {
            if (!res.ok) {
                throw new Error('Fail to get rover photos by earth date');
            }
            return res.json();
        });
    }
    getPhotosOfRoverByCamera(
        rover: ROVERS,
        camera: CAMERAS,
        sol?: number,
        earth_date?: number,
    ): Promise<Mars> {
        const date = sol ? `sol=${sol}` : `earth_date=${earth_date}`;
        const url = `${API_URLS.mars}/${rover}/photos?${date}&camera=${camera}`;

        return fetchWithApiKey(url).then((res) => {
            if (!res.ok) {
                throw new Error('Fail to get rover photo of camera');
            }
            return res.json();
        });
    }
}

export const mars_api = new API();
