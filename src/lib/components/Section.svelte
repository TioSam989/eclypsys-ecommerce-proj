<script lang="ts">
    // @ts-ignore
    import FaChevronRight from "svelte-icons/fa/FaChevronRight.svelte";
    import type { AllOption, Data } from "../../interfaces/sectionData";

    export let title: string;
    export let allOption: AllOption | null = null;
    export let emptyMessage: string | null =
        "No posts were found for provided query parameters";

    let data: Data[] = [];
</script>

<div class="flex flex-col uppercase text-black">
    <div class="flex flex-row mb-6">
        <div class="flex flex-1">
            <span class="font-semibold text-4xl"> {title} </span>
        </div>
        {#if !!allOption}
            <div
                class="flex flex-row gap-2 items-center justify-center cursor-pointer"
            >
                <span class="text-xs font-bold">{allOption?.label}</span>
                <div class="h-4 w-4 text-primary">
                    <FaChevronRight />
                </div>
            </div>
        {/if}
    </div>
    <div class="flex flex-row flex-1 border-t-2 border-l-2">
        {#if !!data.length}
            {#each data as seller}
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
            <span class="text-xs">
                {emptyMessage}
            </span>
        {/if}
    </div>
</div>
