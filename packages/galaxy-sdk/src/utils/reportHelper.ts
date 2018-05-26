import { stringify } from 'query-string';

class ReportHelper {
    constructor() {}

    doReport(url: string, data: object) {
        // 优先使用sendBeacon
        if (window.navigator.sendBeacon) {
            this._doReportBySendBeacon(url, data);
        } else {
            this._doReportByImg(url, data);
        }
    }

    _makeRndString() {
        return Math.random().toString(16);
    }

    _doReportByImg(url: string, data: object) {
        const imgUrl = `${url}?${stringify(data)}`;
        const rndKey = `report_img_${this._makeRndString()}`;
        // 为什么要挂载到全局对象上？避免遇到GC，导致发送失败
        const img = (window[rndKey] = new Image());
        img.onload = img.onerror = function() {
            window[rndKey] = null; // 手动清理
        };
        img.src = imgUrl;
    }

    _doReportBySendBeacon(url: string, data: any) {
        window.navigator.sendBeacon(url, new FormData(data));
    }
}

export const reportHelper = new ReportHelper();
