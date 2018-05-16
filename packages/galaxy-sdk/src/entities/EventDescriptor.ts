export interface EventDescriptor {
    category?: 'global' | 'default' | string;
    action: string;
    userId?: string;
    time?: number;
    pageUrl?: string;
    payload?: any;
}
