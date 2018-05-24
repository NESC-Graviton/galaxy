import { EventDescriptor } from 'entities';
import { report } from './reporter';
import { config } from './config';

export function trackEvent(action: string, payload: any, category: string = 'default'): void {
    const event: EventDescriptor = {
        a: action,
        c: category,
        url: document.URL,
        uid: config.uid,
        t: Date.now(),
        d: payload
    };

    // console.log(event);
    report(event);
}
