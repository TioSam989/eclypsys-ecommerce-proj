<script lang="ts">
    // @ts-ignore
    import FaChevronRight from "svelte-icons/fa/FaChevronRight.svelte";

    interface DataSellers {
        title: string;
        subTitle: string;
    }

    let sellers: DataSellers[] = [];
</script>

<div class="flex flex-col uppercase text-black">
    <div class="flex flex-row mb-6">
        <div class="flex flex-1">
            <span class="font-semibold text-4xl"> Best seller </span>
        </div>
        <div
            class="flex flex-row gap-2 items-center justify-center cursor-pointer"
        >
            <span class="text-xs font-bold">All categories</span>
            <div class="h-4 w-4 text-primary">
                <FaChevronRight />
            </div>
        </div>
    </div>
    <div class="flex flex-row flex-1 border-t-2 border-l-2">
        {#if !!sellers.length}
            {#each sellers as seller}
                <div class="flex flex-1">
                    <span>
                        {seller.title}
                    </span>
                    <span>
                        {seller.subTitle}
                    </span>
                </div>
            {/each}
        {:else}
            <span class="text-xs" > No posts were found for provided query parameters </span>
        {/if}
    </div>
</div>
