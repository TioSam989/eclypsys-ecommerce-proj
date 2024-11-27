<script lang="ts">
    import ProductCard from "$lib/components/ProductCard.svelte";
    import type { ApiProduct } from "../../interfaces/apiData";

    export let bestSellers: ApiProduct[] = [];
    export let onViewAll: () => void = () => {
        console.log("efsfe");
    };
</script>

<div class="flex flex-col uppercase text-black">
    <div class="flex flex-row mb-6">
        <div class="flex flex-1">
            <span class="font-semibold text-4xl"> Best Seller </span>
        </div>
        <button
            class="flex flex-row gap-2 items-center justify-center cursor-pointer text-primary font-bold text-xs"
            on:click={onViewAll}
        >
            See all
        </button>
    </div>

    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {#if bestSellers.length > 0}
            {#each bestSellers as product (product.id)}
                <ProductCard {product} />
            {/each}
        {:else}
            <span class="text-xs">Any product found</span>
        {/if}
    </div>
</div>
