import { PageViewData } from 'entities';
import { trackEvent } from './trackEvent';

export function trackPageView(data: PageViewData = {}) {
    const payload = { ...getPageviewData(), ...data };
    trackEvent('pageView', 'global', payload);
}

function getPageviewData() {
    const data = {} as PageViewData;

    if (navigator) {
        data.nl = navigator.language;
        data.np = navigator.platform;
        data.nce = navigator.cookieEnabled;
        data.nje = navigator.javaEnabled();
        data.nmtp = navigator.maxTouchPoints;
        data.nd = navigator.doNotTrack;
        data.ndm = (navigator as any).deviceMemory;
        data.ndc = navigator.hardwareConcurrency;
    }

    if (window && window.screen) {
        data.sr = `${screen.width}*${screen.height}`;
        data.scd = screen.colorDepth;
    }

    if (document) {
        data.dc = document.charset || document.characterSet;
        data.dr = document.referrer;
        data.dt = document.title;
    }

    return data;
}
