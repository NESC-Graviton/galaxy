import { EventDescriptor } from 'entities';
import { report } from './reporter';
import { config } from './config';

export function trackEvent(action: string, payload: any): void;
export function trackEvent(action: string, category: string, payload: any): void;
export function trackEvent(...params: any[]): void;
export function trackEvent(...params: any[]) {
    if (params.length <= 1)
        return;

    let action: string;
    let category: string;
    let payload: string;

    if (params.length === 2) {
        action = params[0];
        category = 'default';
        payload = params[1];
    } else {
        action = params[0];
        category = params[1] || 'default';
        payload = params[2];
    }

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
