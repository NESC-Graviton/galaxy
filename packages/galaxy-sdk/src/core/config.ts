import { GA_CONFIG } from '../common/const_value';
import { Configuartion } from 'entities';

declare const window: any;

const _config = window[GA_CONFIG] as Configuartion;
const EMPTY = '';

export const config = {

    get identifier() {
        return _config.identifier;
    },

    get uid() {
        return _config.uid || EMPTY;
    },
    set uid(val: string) {
        _config.uid = val;
    },

    get reportUrl() {
        return _config.report_url;
    },
};
