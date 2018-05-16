
import { EventDescriptor } from 'entities';
import { getPageviewData } from './trackPageview';
import { wrapEvent } from './wrapEvent';

export function startTrack(_gaq: EventDescriptor[]) {
    const clone = _gaq.splice(0, _gaq.length);
    _gaq.push = track;
    Object.freeze(_gaq);
    _gaq.push(...clone);
}

function track(this: EventDescriptor[][], ...events: EventDescriptor[]) {
    for (let event of events) {
        event = wrapEvent(event);

        if (event.category === 'global') {
            processGlobalEvent(event);
        }

        if (event)
            report(event);
    }

    return this.length;
}

function processGlobalEvent(event: EventDescriptor) {
    switch (event.action) {
        case 'pageView':
            event.payload = getPageviewData();
            break;
        default: return null;
    }

    return event;
}

function report(event: EventDescriptor) {
    console.log(event);
}
