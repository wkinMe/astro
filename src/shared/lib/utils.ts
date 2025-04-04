import { BACK_URLS } from '@shared/config';

export const dateYYYYMMDD = (date: Date) => {
    const mm = date.getMonth();
    const dd = date.getDate();

    return [
        date.getFullYear(),
        (mm > 9 ? '' : '0') + mm,
        (dd > 9 ? '' : '0') + dd,
    ].join('-');
};

export const getTodayAndWeekAgo = (): [Date, Date] => {
    const today = new Date();
    const weekAgo = new Date(today.getTime() - 7 * 24 * 60 * 60 * 1000);

    return [weekAgo, today];
};

export const getWeekMS = () => {
    return 7 * getDayMS();
};

export const getDayMS = () => {
    return 24 * 60 * 60 * 1000;
};

export const fetchWithApiKey = (
    url: string,
    options: RequestInit = {},
): Promise<Response> => {
    const urlWithApiKey = new URL(url);
    urlWithApiKey.searchParams.append('api_key', BACK_URLS.apiKey);

    return fetch(urlWithApiKey.toString(), options);
};
