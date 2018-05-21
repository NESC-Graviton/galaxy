import { EventDescriptor } from 'entities';
import { config } from './config';

function getReportUrl() {
    return `${window.location.protocol}//${config.reportUrl}`;
}

function makeRndString() {
    return `${new Date().valueOf()}_${Math.random() * 10000}`;
}

export function report(event: EventDescriptor) {
    const reportUrl = getReportUrl();
    // 优先使用sendBeacon
    if (window.navigator.sendBeacon) {
        return window.navigator.sendBeacon(reportUrl, new FormData(event as any));
    }
    const rndKey = `report_img_${makeRndString()}`;
    const img = new Image(1, 1);
    img.src = reportUrl;
}
