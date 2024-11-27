export interface ApiProduct {
    id: number;
    name: string;
    price: number;
    type: string;
    category?: {id: number; name: string} | null;
    sales_count?: number;
    img?: string | null;
}

export interface ApiCategory {
    id: number;
    name: string;
    products: ApiProduct[];
}