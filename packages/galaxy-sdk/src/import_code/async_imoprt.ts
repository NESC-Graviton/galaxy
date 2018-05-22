import { Configuartion, GaQueueElement } from 'entities';
import { GA_IDENTIFIER, GA_QUEUE, GA_CONFIG, internalFuncs } from '../common/const_value';

declare const window: any;

function asyncImport(config: Configuartion) {
    window[GA_IDENTIFIER] = config.identifier;
    window[config.identifier] = window[config.identifier] || generateGaObject();
    window[GA_CONFIG] = config;
    insertScriptElement(config);
}

function generateGaObject() {
    const ga = {} as any;
    for (const interF of internalFuncs) {
        ga[interF] = enqueue.bind(ga, interF);
    }
    return ga;

    function enqueue(this: any, callee: string, ...params: any[]) {
        this[GA_QUEUE] = this[GA_QUEUE] || [];
        this[GA_QUEUE].push({
            callee,
            params,
        } as GaQueueElement);
    }
}

function insertScriptElement(config: Configuartion) {
    const gaScript = document.createElement('script');
    gaScript.type = 'text/javascript';
    gaScript.async = true;
    gaScript.src = config.sdk_url;
    const firstScript = document.getElementsByTagName('script')[0] as any;
    firstScript.parentNode.insertBefore(gaScript, firstScript);
}

asyncImport({
    identifier: 'ga',
    sdk_url: './galaxy.js',
    report_url: 'localhost:3000'
});
