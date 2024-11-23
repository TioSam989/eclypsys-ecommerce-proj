<script lang="ts">
    interface Company {
        name: string | null;
        img: string;
    }

    let companies: Company[] = [
        {
            name: "Alfa Force",
            img: "https://rochat.eclypsys.ch/wp-content/uploads/2024/07/h1-clinet-x2-ver-2.png",
        },
        {
            name: "X Bow",
            img: "https://rochat.eclypsys.ch/wp-content/uploads/2024/07/h1-c-x2-ver-2.png",
        },
        {
            name: "Xotra",
            img: "https://rochat.eclypsys.ch/wp-content/uploads/2024/07/h1-c-2-x2-ver-2.png",
        },
        {
            name: null,
            img: "https://rochat.eclypsys.ch/wp-content/uploads/2024/07/h1-c-4-x2-ver-2.png",
        },
        {
            name: "Kovon",
            img: "https://rochat.eclypsys.ch/wp-content/uploads/2024/07/h1-c-5-x2-ver-2.png",
        },
        {
            name: "Zero",
            img: "https://rochat.eclypsys.ch/wp-content/uploads/2024/07/h1-c-6-x2-ver-2.png",
        },
        {
            name: null,
            img: "https://rochat.eclypsys.ch/wp-content/uploads/2024/07/h1-c-7-x2-ver-2.png",
        },
        {
            name: "Sawer",
            img: "https://rochat.eclypsys.ch/wp-content/uploads/2024/07/h1-c-8-x2-ver-2.png",
        },
    ];
</script>

<div
    class="flex flex-1 flex-row border-x-2 border-y-2 bg-gray-100 items-center justify-center h-5"
>
    {#each companies as company, index}
        <div
            class={`flex flex-1 h-full items-center p-10 justify-center  bg-transparent hover:bg-white ${index != 0 ? "border-l-2" : ""}`}
        >
            <img
                alt={company?.name ?? `Company position #${index}`}
                src={company?.img}
                class="flex flex-1 object-contain"
            />
        </div>
    {/each}
</div>
