<script lang="ts">
    //@ts-ignore
    import FaMinus from "svelte-icons/fa/FaMinus.svelte";
    import type { lastUpdateCard } from "../../interfaces/lasUpdates";

    const mockData: lastUpdateCard[] = [
        {
            subject: "car parts",
            placeAndDate: "juliet 29,2024",
            title: "What is Lorem Ipsum?",
            subTitle:
                "Lorem Ipsum is simply dummy text of the printing andtypesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
        },
        {
            subject: "car parts",
            placeAndDate: "juliet 29,2024",
            title: "Where can I get some?",
            subTitle:
                "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.",
        },
        {
            subject: "car parts",
            placeAndDate: "juliet 29,2024",
            title: "Where does it come from?",
            subTitle:
                "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia...",
        },
    ];
</script>

<div class="flex flex-col">
    <div class="flex flex-row mb-6">
        <span class="uppercase text-4xl font-bold">Latest updates</span>
    </div>
    <div class="flex flex-row items-start gap-4 justify-center text-black">
        {#each mockData as data}
            <div
                class="flex flex-col flex-1 bg-white shadow-md overflow-hidden min-h-[350px] max-w-[300px]"
            >
                <div class="flex-shrink-0">
                    <img
                        alt="cards-brands"
                        src="https://placehold.co/400x200"
                        class="h-48 w-full object-cover"
                    />
                </div>
                <div
                    class="flex flex-1 flex-col items-start justify-between p-4"
                >
                    <div
                        class="flex flex-row uppercase font-semibold text-xs items-center justify-start gap-2"
                    >
                        <span class="cursor-pointer hover:text-primary"
                            >{data?.subject}</span
                        >
                        <div class="h-4 text-primary">
                            <FaMinus />
                        </div>
                        <span class="cursor-pointer hover:text-primary"
                            >{data?.placeAndDate}</span
                        >
                    </div>
                    <span class="text-xl cursor-pointer hover:text-primary"
                        >{data?.title}</span
                    >
                    <span class="text-sm flex-1">{data?.subTitle}</span>
                </div>
            </div>
        {/each}
    </div>
</div>
