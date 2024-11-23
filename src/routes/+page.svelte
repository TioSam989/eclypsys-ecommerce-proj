<script lang="ts">
    import BestSellersComponent from "$lib/components/BestSellersComponent.svelte";
    import ProductCard from "$lib/components/ProductCard.svelte";
    import RowCompaniesComponent from "$lib/components/RowCompaniesComponent.svelte";
    import type { Product } from "../interfaces/product";

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
            hasBackground: true
        },
    ];
</script>

<div class="flex flex-1 flex-col gap-8">
    <ProductCard product={mainProduct} />
    <RowCompaniesComponent />
    <BestSellersComponent />
    <div class="flex flex-1 flex-row h-auto mb-2 bg-green-500">
        <div class="flex flex-1 items-center justify-center">
            <ProductCard product={doubleCardProduct[0]} />
        </div>
        <div class="flex flex-1 items-center justify-center">
            <ProductCard product={doubleCardProduct[1]} />
        </div>
    </div>
</div>
