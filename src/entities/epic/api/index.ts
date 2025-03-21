import { Epic } from '@entities/epic/model/types';
import { API_URLS, dateYYYYMMDD, fetchWithApiKey } from '@shared/config';

class API {
    getPicturesOfDay(dateString: string): Promise<Epic[]> {
        return fetchWithApiKey(
            `${API_URLS.epic}/api/natural/date/${dateString}`,
        ).then((res) => {
            if (!res.ok) {
                throw new Error('Failed to get today EPIC picture');
            }
            return res.json();
        });
    }
    getPicturesOfToday(): Promise<Epic[]> {
        const today = new Date();
        today.setDate(today.getDay() - 1);
        const todayString = dateYYYYMMDD(today);

        return this.getPicturesOfDay(todayString);
    }
}

export const epic_api = new API();
