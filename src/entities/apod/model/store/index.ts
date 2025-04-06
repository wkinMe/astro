import { apod_api } from '@entities/apod/api';
import { Apod } from '@entities/apod/model';
import {
    adjustEndDate,
    adjustStartDate,
    calculateDateDifference,
} from '@features/ApodCalendar/lib/datesUtils';
import { getTodayAndWeekAgo, getWeekMS } from '@shared/config';
import { create } from 'zustand';

export interface APODState {
    apods: Apod[];
    error: string;
    startDate: Date;
    endDate: Date;
    isLoading: boolean;
    getTodayApod: () => void;
    getWeekApods: () => void;
    getBetweenDatesApod: (startDate: Date, endDate: Date) => void;
    setStartDate: (startDate: Date) => void;
    setEndDate: (endDate: Date) => void;
}

export const useApod = create<APODState>((set, get) => ({
    apods: [],
    startDate: getTodayAndWeekAgo()[0],
    endDate: getTodayAndWeekAgo()[1],
    error: '',
    isLoading: false,
    getTodayApod: async () => {
        try {
            set(() => ({ isLoading: true }));
            const apod = await apod_api.getTodayApod();
            set(() => ({ apods: [apod] }));
        } catch (e) {
            set(() => ({ error: e.message ?? e }));
        } finally {
            set(() => ({ isLoading: false }));
        }
    },
    getWeekApods: async () => {
        try {
            set(() => ({ isLoading: true }));
            const apods = await apod_api.getWeekDatesApod();
            if (apods.length) {
                set(() => ({ apods }));
            } else {
                throw new Error("In these days apod doesn't work");
            }
        } catch (e) {
            set(() => ({ error: e.message ?? e }));
        } finally {
            set(() => ({ isLoading: false }));
        }
    },
    getBetweenDatesApod: async () => {
        try {
            set(() => ({ isLoading: true }));
            const apods = await apod_api.getBetweenDatesApod(
                get().startDate,
                get().endDate,
            );
            if (apods.length) {
                set((state) => {
                    state.apods = apods;
                    return state;
                });
            } else {
                throw new Error("In these day apod doesn't work");
            }
        } catch (e) {
            set((state) => (state.error = e.message ?? e));
        } finally {
            set(() => ({ isLoading: false }));
        }
    },
    setStartDate: (startDate: Date) => {
        const endDate = get().endDate;
        const diff = calculateDateDifference(startDate, endDate);
        if (diff > 7) {
            set(() => ({ startDate, endDate: adjustEndDate(endDate, diff) }));
        } else if (diff < 0) {
            set(() => ({
                endDate: new Date(startDate.getTime() + getWeekMS()),
            }));
        }
        set(() => ({ startDate }));
    },
    setEndDate: (endDate: Date) => {
        const diff = calculateDateDifference(get().startDate, endDate);
        if (diff > 7 || diff < 0) {
            set(() => ({ startDate: adjustStartDate(endDate) }));
        }
        set(() => ({ endDate }));
    },
}));
