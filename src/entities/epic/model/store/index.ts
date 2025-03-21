import { epic_api } from '@entities/epic/api';
import { Epic } from '@entities/epic/model/types';
import { API_URLS, BACK_URLS, dateYYYYMMDD } from '@shared/config';
import { create } from 'zustand';

interface EpicStore {
    epics: Epic[];
    epicsImages: string[];
    setTodayEpics: () => void;
    setDayEpics: (date: string) => void;
}

export const useEpic = create<EpicStore>((set) => ({
    epics: [],
    epicsImages: [],
    setTodayEpics: async () => {
        const epics = await epic_api.getPicturesOfToday();
        const epicsImages = epics.map((e) => {
            const [year, month, day] = e.date.split(' ')[0].split('-'); // YYYY,MM,DD with 0 in start of the string if < 9;
            const url = `${API_URLS.epic}/natural/${year}/${month}/${day}/png/${e.image}.png?api_key=${BACK_URLS.apiKey}`;
            return url;
        });
        set(() => ({ epics }));
        set(() => ({ epicsImages }));
    },
    setDayEpics: async (dateString: string) => {
        const epics = await epic_api.getPicturesOfDay(dateString);
        const epicsImages = epics.map((e) => {
            const [year, month, day] = e.date.split(' ')[0].split('-'); // YYYY,MM,DD with 0 in start of the string if < 9;
            const url = `${API_URLS.epic}/natural/${year}/${month}/${day}/png/${e.image}.png?api_key=${BACK_URLS.apiKey}`;
            return url;
        });
        set(() => ({ epics }));
        set(() => ({ epicsImages }));
    },
}));
