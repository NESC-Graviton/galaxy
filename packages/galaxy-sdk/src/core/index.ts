
import { EventDescriptor, GaQueueElement } from 'entities';
import { trackPageView } from './trackPageview';
import { trackEvent } from './trackEvent';
import { GA_QUEUE } from '../common/const_value';
import { config } from './config';

declare const window: any;

export function init() {
    const ga = window[config.identifier] || {};
    ga[GA_QUEUE] = ga[GA_QUEUE] || [];
    const gaq = ga[GA_QUEUE];
    const clone = gaq.splice(0, gaq.length);
    gaq.push = handle;
    gaq.push(...clone);
}

function handle(this: GaQueueElement[][], ...elems: GaQueueElement[]) {
    for (const elem of elems) {
        switch (elem.callee) {
            case 'setUid': config.uid = (elem.params as any)[0]; break;
            case 'trackPageView': trackPageView((elem.params as any)[0]); break;
            case 'trackEvent': trackEvent.apply(null, elem.params); break;
        }
    }

    return this.length;
}
