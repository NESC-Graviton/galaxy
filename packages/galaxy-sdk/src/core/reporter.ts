import { EventDescriptor } from 'entities';
import { config } from './config';
import { stringify } from 'query-string';

export function report(event: EventDescriptor) {
    // 优先使用sendBeacon
    if (window.navigator.sendBeacon) {
        sendByBeacon(event);
    } else {
        sendByImg(event);
    }
}

function sendByBeacon(event: EventDescriptor) {
    const reportUrl = getReportUrl();
    window.navigator.sendBeacon(reportUrl, new FormData(event as any));
}

function sendByImg(event: EventDescriptor) {
    const img = new Image(1, 1);
    img.src = getSrcUrl(event);
}

function getReportUrl() {
    return `${window.location.protocol}//${config.reportUrl}`;
}

function getSrcUrl(event: EventDescriptor) {
    // const rndKey = makeRndString();
    const queryString = stringify(
        {
            ...event,
            payload: JSON.stringify(event.payload)
        }
    );
    return `${getReportUrl()}/log.gif?${queryString}`;
}

// function makeRndString() {
//     return `${new Date().valueOf()}_${Math.random() * 10000}`;
// }
