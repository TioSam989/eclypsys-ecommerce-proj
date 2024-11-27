import { fetchBestSellers, fetchCategoriesWithProducts } from "../utils/api";

export const load = async () => {
    try {
        const [bestSellers, categories] = await Promise.all([
            fetchBestSellers(5),
            fetchCategoriesWithProducts(),
        ]);

        return {
            bestSellers,
            categories,
        };
    } catch (error) {
        console.error('Error loading data:', error);
        return {
            error: 'Failed to load page data.',
        };
    }
}
