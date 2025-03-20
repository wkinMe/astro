import { Apod } from '@entities/apod/model';
import { API_URLS, dateYYYYMMDD } from '@shared/config';

class API {
    getTodayApod(): Promise<Apod> {
        return fetch(API_URLS.apod).then((res) => {
            if (!res.ok) {
                throw new Error('Failed to fetch today APOD');
            }
            return res.json();
        });
    }
    getBetweenDatesApod(start: string, end: string): Promise<Apod[]> {
        return fetch(
            `${API_URLS.apod}&start_date=${start}&end_date=${end}`,
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
        const today = new Date();
        const weekAgo = new Date(today.getTime() - 7 * 24 * 60 * 60 * 1000);

        const todayString = dateYYYYMMDD(today);
        const weekAgoString = dateYYYYMMDD(weekAgo);

        return this.getBetweenDatesApod(weekAgoString, todayString);
    }
}

export const api = new API();
