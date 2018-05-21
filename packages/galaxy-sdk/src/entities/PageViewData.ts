/** 用户代理基本信息 */
export interface PageViewData {
    /** navigator.language，浏览器语言。 */
    nl?: string;

    /** navigator.platform，浏览器平台。 */
    np?: string;

    /** navigator.cookieEnabled，是否启用了Cookie。 */
    nce?: boolean;

    /** navigator.javaEnabled(),是否启用了Java环境。 */
    nje?: boolean;

    /** navigator.maxTouchPoints，最大的触控点。 */
    nmtp?: number;

    /** navigator.doNotTrack，是否禁用追踪。 */
    nd?: string | null;

    /** navigator.deviceMemory，设备内存。 只有Chrome支持。 */
    ndm?: number;

    /** navigator.hardwareConcurrency，cpu虚拟核心数。 */
    ndc?: number;

    /** ${screen.width}*${screen.height}，屏幕宽高。 */
    sr?: string;

    /** screen.colorDepth，屏幕颜色深度。 */
    scd?: number;

    /** document.charset || document.characterSet。 */
    dc?: string;

    /** document.referrer，文档的Referrer。 */
    dr?: string;

    /** document.title，文档的title。 */
    dt?: string;
}
