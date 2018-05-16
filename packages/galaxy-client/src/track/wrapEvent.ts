import { EventDescriptor } from 'entities';

export function wrapEvent(event: EventDescriptor) {
    const newEvent = { ...event };

    newEvent.category = event.category || 'default';
    newEvent.userId = 'Test';
    newEvent.pageUrl = document.URL;
    newEvent.time = new Date().getTime();

    return newEvent;
}
