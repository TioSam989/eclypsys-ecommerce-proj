<script lang="ts">
    import type { Product } from "../../interfaces/product";

    export let product: Product;
</script>

<div
    class={`flex flex-col md:flex-row items-center justify-center gap-8 w-full bg-gray-100 ${!!product?.hasBackground ? "text-white" : ""}`}
>
    <div
        class={`flex flex-1 flex-col items-start justify-center gap-4 h-full w-full p-10 ${product?.hasBackground ? "bg-primary" : "bg-transparent"}`}
    >
        <span class="uppercase font-semibold text-lg uppercase"
            >{product?.type}{product?.shippingData
                ? ` - ${product.shippingData}`
                : null}</span
        >
        <span class="uppercase font-semibold text-4xl uppercase"
            >{product?.name}</span
        >
        <span class="uppercase font-semibold text-lg"
            >{product?.price ? `$${product.price}` : null}</span
        >
        <button
            class="text-white px-6 py-2 uppercase relative overflow-hidden group bg-primary"
        >
            <span
                class="absolute inset-0 bg-black translate-y-full transition-transform duration-300 group-hover:translate-y-0"
            ></span>
            <span class="relative z-10 text-xs">Shop now</span>
        </button>
    </div>

    <div class="flex flex-1 item-center justify-center w-full py-4">
        <img
            alt="product"
            class="object-contain w-3/5 max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl h-auto"
            src="https://placehold.co/700x800/png"
        />
    </div>
</div>
