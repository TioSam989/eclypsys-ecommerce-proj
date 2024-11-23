<script>
    import BestSellersComponent from "$lib/components/BestSellersComponent.svelte";
   import FirstContent from "$lib/components/FirstContent.svelte";
    import RowCompaniesComponent from "$lib/components/RowCompaniesComponent.svelte";
</script>

<div class="flex flex-1 flex-col gap-8">
   <FirstContent />
   <RowCompaniesComponent/>
   <BestSellersComponent/>
</div>
