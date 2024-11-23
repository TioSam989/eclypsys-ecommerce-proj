<script>
    import BestSellersComponent from "$lib/components/BestSellersComponent.svelte";
    import ProductCard from "$lib/components/ProductCard.svelte";
    import RowCompaniesComponent from "$lib/components/RowCompaniesComponent.svelte";
</script>

<div class="flex flex-1 flex-col gap-8">
    <ProductCard />
    <RowCompaniesComponent />
    <BestSellersComponent />
</div>
