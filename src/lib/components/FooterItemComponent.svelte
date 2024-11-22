<script lang="ts">
    export let title: string = "";
    export let items: string[] = [];
</script>

<div class="flex flex-1 flex-col gap-2">
    <div>
        <span class="uppercase font-bold text-md">
            {title}
        </span>
    </div>
    <div class="flex flex-col">
        {#each items as item}
            <span class="cursor-pointer" >{item}</span>
        {/each}
    </div>
</div>
