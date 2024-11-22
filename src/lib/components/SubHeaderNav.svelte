<script>
    // @ts-ignore
    import FaChevronRight from "svelte-icons/fa/FaChevronRight.svelte";

    let links = [
        {
            id: 1,
            label: "accueil",
            href: "#",
        },
        {
            id: 2,
            label: "Actualités",
            href: "#",
        },
        {
            id: 3,
            label: "À Propos",
            href: "#",
        },
        {
            id: 4,
            label: "Contact",
            href: "#",
        },
    ];
</script>

<div class="flex flex-1 flex-row py-6">
    <div class="flex flex-row gap-5 items-stretch h-full">
        {#each links as link}
            <div class="flex justify-center">
                <span class="uppercase font-bold">{link?.label ?? ""}</span>
            </div>
        {/each}
    </div>
    <div class="flex flex-1 flex-row items-center justify-end gap-3">
        <span class="uppercase font-bold">my garage</span>
        <div class="h-4 w-4 text-primary">
            <FaChevronRight />
        </div>
    </div>
</div>
