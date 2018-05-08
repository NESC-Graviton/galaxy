export function _trackPageview() {
    const params = {} as any;

    if (document) {
        params.domain = document.domain || '';
        params.url = document.URL || '';
        params.title = document.title || '';
        params.referrer = document.referrer || '';
    }

    if (window && window.screen) {
        params.sh = window.screen.height || 0;
        params.sw = window.screen.width || 0;
        params.cd = window.screen.colorDepth || 0;
    }

    if (navigator) {
        params.lang = navigator.language || '';
    }

    console.log(JSON.stringify(params));
}
