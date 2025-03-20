import { api } from '@entities/apod/api';
import { Apod } from '@entities/apod/model';
import { create } from 'zustand';

export interface APODState {
    apods: Apod[];
    error: string;
    getTodayApod: () => void;
    getWeekDatesApod: () => void;
    getBetweenDatesApod: (startDate: string, endDate: string) => void;
}

export const useApod = create<APODState>((set) => ({
    apods: [],
    error: '',
    getTodayApod: async () => {
        try {
            const apods = await api.getTodayApod();
            set((state) => {
                state.apods = [apods];
                return state;
            });
        } catch (e) {
            set((state) => (state.error = e.message ?? e));
        }
    },
    getWeekDatesApod: async () => {
        try {
            const apods = await api.getWeekDatesApod();
            if (apods.length) {
                set((state) => {
                    state.apods = apods;
                    return state;
                });
            } else {
                throw new Error("In these days apod doesn't work");
            }
        } catch (e) {
            set((state) => (state.error = e.message ?? e));
        }
    },
    getBetweenDatesApod: async (startDate: string, endDate: string) => {
        try {
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
        }
    },
}));
