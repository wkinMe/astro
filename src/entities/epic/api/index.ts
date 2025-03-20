import { Epic } from '@entities/epic/model/types/types';
import { API_URLS, dateYYYYMMDD } from '@shared/config';

class API {
    getPicturesOfToday(dateString: string): Promise<Epic[]> {
        return fetch(`${API_URLS.epic}/natural/date/${dateString}`).then(
            (res) => {
                if (!res.ok) {
                    throw new Error('Failed to get today EPIC picture');
                }
                return res.json();
            },
        );
    }
    getPicturesOfDay(): Promise<Epic[]> {
        const today = new Date();
        const todayString = dateYYYYMMDD(today);

        return this.getPicturesOfToday(todayString);
    }
    getPictureByName(picture: string, dateString: string) {
        const date = dateString.split('-'); // Store [YYYY, MM, DD] in correct form (like 03 or 09 day and month)

        return fetch(
            `${API_URLS.epic}/natural/${date[0]}/${date[1]}/${date[3]}/png/${picture}`,
        ).then((res) => {
            if (!res.ok) {
                throw new Error('Filed to get EPIC picture by name');
            }
        });
    }
}

export const epic_api = new API();
