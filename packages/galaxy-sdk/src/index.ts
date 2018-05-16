import { EventDescriptor } from 'entities';
import { startTrack } from './track/index';

declare let _gaq: EventDescriptor[];
_gaq = _gaq || [];

startTrack(_gaq);
