import type { ApiCategory, ApiProduct } from "../interfaces/apiData"

const BASE_URL = 'http://127.0.0.1:5000'

export const fetchProduts = async (limit: number = 100, offset: number = 0): Promise<ApiProduct[]> => {
    try {
        const res = await fetch(`${BASE_URL}/products/limit=${limit}&offset=${offset}`)
        if (!res.ok) throw new Error("Failed to fetch products")
        const products: ApiProduct[] = await res.json()

        return products
    } catch (err) {
        console.log(err)
        throw new Error("Error fetching products")
    }
}

export const fetchCategoriesWithProducts = async (): Promise<ApiCategory[]> => {
    try {
        const res = await fetch(`${BASE_URL}/products/categories`)
        if (!res.ok) throw new Error("Failed to fetch categories")
        const categories: ApiCategory[] = await res.json()

        return categories
    } catch (err) {
        console.error(err)
        throw new Error("Error fetching categories")
    }
}

export const fetchBestSellers = async (limit: number = 10, offset: number = 0): Promise<ApiProduct[]> => {
    try {
        const res = await fetch(`${BASE_URL}/products/sorted-by-sales?limit=${limit}&offset=${offset}`)
        if (!res.ok) throw new Error('Failed to fetch bestsellers');
        const bestSellers: ApiProduct[] = await res.json();

        return bestSellers;
    } catch (err) {
        console.error(err)
        throw new Error("Error fetching bestsellers")
    }
}