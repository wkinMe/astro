export const dateYYYYMMDD = (date: Date) => {
    const mm = date.getMonth();
    const dd = date.getDate();

    return [
        date.getFullYear(),
        (mm > 9 ? '' : '0') + mm,
        (dd > 9 ? '' : '0') + dd,
    ].join('-');
};

export const getTodayAndWeekAgo = (): [string, string] => {
    const today = new Date();
    const weekAgo = new Date(today.getTime() - 7 * 24 * 60 * 60 * 1000);

    const todayString = dateYYYYMMDD(today);
    const weekAgoString = dateYYYYMMDD(weekAgo);
    return [todayString, weekAgoString];
};
