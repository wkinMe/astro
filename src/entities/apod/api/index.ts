import { Apod } from '@entities/apod/model';
import { API_URLS } from '@shared/config';
import { fetchWithApiKey, getTodayAndWeekAgo } from '@shared/lib/utils';

class API {
    getTodayApod(): Promise<Apod> {
        return fetchWithApiKey(API_URLS.apod).then((res) => {
            if (!res.ok) {
                throw new Error('Failed to fetch today APOD');
            }
            return res.json();
        });
    }
    getBetweenDatesApod(start: string, end: string): Promise<Apod[]> {
        return fetchWithApiKey(
            `${API_URLS.apod}?start_date=${start}&end_date=${end}`,
        ).then((res) => {
            if (!res.ok) {
                throw new Error(
                    `Failed to fetch APOD between dates: ${res.statusText}`,
                );
            }
            return res.json();
        });
    }
    getWeekDatesApod(): Promise<Apod[]> {
        const [today, weekAgo] = getTodayAndWeekAgo();

        return this.getBetweenDatesApod(weekAgo, today);
    }
}

export const apod_api = new API();
