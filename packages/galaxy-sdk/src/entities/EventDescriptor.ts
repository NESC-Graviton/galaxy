export interface EventDescriptor {
    category?: 'global' | 'default' | string;
    action: string;
    uid?: string;
    time?: number;
    pageUrl?: string;
    payload?: any;
}
