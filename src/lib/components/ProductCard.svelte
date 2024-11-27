<script lang="ts">
    import type { ApiProduct } from "../../interfaces/apiData";

    export let product: ApiProduct;
</script>

<div
    class="flex flex-col bg-white border rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow duration-300"
>
    {#if product.img}
        <img
            src={product.img}
            alt={product.name}
            class="w-full h-40 object-cover rounded-t-md"
        />
    {:else}
        <div
            class="w-full h-40 bg-gray-200 flex items-center justify-center rounded-t-md"
        >
            <span class="text-gray-400">No Image</span>
        </div>
    {/if}

    <div class="flex flex-col mt-4">
        <h3 class="text-lg font-semibold text-gray-800 truncate">
            {product.name}
        </h3>
        {#if product.category}
            <span class="text-sm text-gray-500">{product.category.name}</span>
        {:else}
            <span class="text-sm text-gray-500">Uncategorized</span>
        {/if}

        <p class="text-sm text-gray-600 mt-1 capitalize">{product.type}</p>

        <div class="flex justify-between items-center mt-4">
            <span class="text-xl font-bold text-primary"
                >{`$${product.price.toFixed(2)}`}</span
            >
            <button
                class="text-sm text-white bg-primary px-3 py-1 rounded-md hover:bg-opacity-90"
            >
                Buy Now
            </button>
        </div>
    </div>
</div>
