export function getPageviewData() {
    const data = {} as any;

    if (document) {
        data.domain = document.domain || '';
        data.url = document.URL || '';
        data.title = document.title || '';
        data.referrer = document.referrer || '';
    }

    if (window && window.screen) {
        data.sh = window.screen.height || 0;
        data.sw = window.screen.width || 0;
        data.scd = window.screen.colorDepth || 0;
    }

    if (navigator) {
        data.lang = navigator.language || '';
        data.cookieEnabled = navigator.cookieEnabled;
        data.userAgent = navigator.userAgent;
        data.platform = navigator.platform;
    }

    return data;
}
