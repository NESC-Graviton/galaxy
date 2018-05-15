export interface EventDescriptor {
    category: string;
    action: string;
    userId?: string;
    time?: number;
    pageUrl?: string;
    params?: any;
}
