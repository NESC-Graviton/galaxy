export interface EventDescriptor {
    /** category */
    c?: 'global' | 'default' | string;
    /** action */
    a: string;
    /** uid */
    uid?: string;
    /** time */
    t?: number;
    /** page url */
    url?: string;
    /** payload */
    d?: any;
}
