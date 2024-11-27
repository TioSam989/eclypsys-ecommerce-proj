<script lang="ts">
    import BestSellerSection from "$lib/components/BestSellerSection.svelte";
    import LastUpdates from "$lib/components/LastUpdates.svelte";
    import ProductSection from "$lib/components/ProductSection.svelte";
    import RowCompaniesComponent from "$lib/components/RowCompaniesComponent.svelte";
    import Section from "$lib/components/Section.svelte";
    import { onMount } from "svelte";
    import type { ApiCategory, ApiProduct } from "../interfaces/apiData";
    import type { Product } from "../interfaces/product";
    import { fetchBestSellers } from "../utils/api";

    export let data;

    const mainProduct: Product = {
        name: "New tires & wheels",
        type: "PremiumParts",
        shippingData: "free shipping",
        price: 1230,
    };

    const doubleCardProduct: Product[] = [
        {
            name: "HKS SPORTS TURBINE KIT",
            type: "Equipment",
            price: 560,
        },
        {
            name: "Brake pads and brakes",
            type: "Premium",
            price: 280,
            hasBackground: true,
        },
    ];

    const handleViewAll = () =>
        console.log("show all products in a new screen and with lazyloading");

    let bestSellers: ApiProduct[] = [];
    let loading = true;

    onMount(async () => {
        try {
            // Fetch de produtos direto do backend
            bestSellers = await fetchBestSellers(5);
        } catch (err) {
            console.error("Erro ao buscar bestsellers:", err);
        } finally {
            loading = false;
        }
    });
</script>

<div class="flex flex-1 flex-col gap-8 py-4">
    <ProductSection product={mainProduct} />
    <RowCompaniesComponent />

    <div class="flex flex-col gap-8 py-4">
        {#if loading}
            <p class="text-center text-gray-500">Carregando...</p>
        {:else}
            <BestSellerSection {bestSellers} onViewAll={handleViewAll} />
        {/if}
    </div>
    <div class="flex flex-1 flex-row h-auto mb-2 bg-green-500">
        <div class="flex flex-1 items-center justify-center">
            <ProductSection product={doubleCardProduct[0]} />
        </div>
        <div class="flex flex-1 items-center justify-center">
            <ProductSection product={doubleCardProduct[1]} />
        </div>
    </div>
    <Section title={"By categories"} />
    <LastUpdates />
</div>
