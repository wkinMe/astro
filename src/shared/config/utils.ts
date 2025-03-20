export const dateYYYYMMDD = (date: Date) => {
    const mm = date.getMonth();
    const dd = date.getDate();

    return [
        date.getFullYear(),
        (mm > 9 ? '' : '0') + mm,
        (dd > 9 ? '' : '0') + dd,
    ].join('');
};
