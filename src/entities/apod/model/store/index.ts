import { api } from '@entities/apod/api';
import { Apod } from '@entities/apod/model';
import { create } from 'zustand';

export interface APODState {
    apods: Apod[];
    error: string;
    getTodayApod: () => void;
    getWeekApods: () => void;
    getBetweenDatesApod: (startDate: string, endDate: string) => void;
    isLoading: boolean;
}

export const useApod = create<APODState>((set) => ({
    apods: [],
    error: '',
    isLoading: false,
    getTodayApod: async () => {
        try {
            set(() => ({ isLoading: true }));
            const apod = await api.getTodayApod();
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
            const apods = await api.getWeekDatesApod();
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
    getBetweenDatesApod: async (startDate: string, endDate: string) => {
        try {
            set(() => ({ isLoading: true }));
            const apods = await api.getBetweenDatesApod(startDate, endDate);
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
}));
