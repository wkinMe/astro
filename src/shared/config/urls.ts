export const URLS = {
    HOME: '',
    APOD: 'apod',
    EPIC: 'epic',
    MARS: 'mars',
};

const BACK_URLS = {
    base: 'https://api.nasa.gov/',
    apod: 'planetary/apod',
    epic: 'EPIC/api',
    mars: 'mars-photos/api/v1/rovers/',
    apiKey: 'DEMO',
};

export const API_URLS = new Proxy(BACK_URLS, {
    get(target, prop: string) {
        if (prop === 'base') {
            return target[prop]; // Возвращаем только base
        }
        if (prop in target) {
            return (
                target.base +
                target[prop as keyof typeof BACK_URLS] +
                '?api_key=' +
                target.apiKey
            );
        }
        throw new Error(`Unknown property: ${prop}`);
    },
});
