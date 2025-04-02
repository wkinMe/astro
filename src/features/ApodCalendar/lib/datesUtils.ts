import { getDayMS, getWeekMS } from '@shared/config';

export function calculateDateDifference(
    startDate: Date,
    endDate: Date,
): number {
    return Math.floor(
        (endDate.getTime() - startDate.getTime()) / (24 * 60 * 60 * 1000),
    );
}

export function adjustEndDate(endDate: Date, diff: number): Date {
    return new Date(endDate.getTime() - (diff * getDayMS() - getWeekMS()));
}

export function adjustStartDate(startDate: Date): Date {
    return new Date(startDate.getTime() - getWeekMS());
}
