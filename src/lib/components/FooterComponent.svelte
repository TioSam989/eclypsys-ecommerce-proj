<script>
    // @ts-nocheck

    import FaInstagram from "svelte-icons/fa/FaInstagram.svelte";
    import FaFacebookSquare from "svelte-icons/fa/FaFacebookSquare.svelte";
    import FaVk from "svelte-icons/fa/FaVk.svelte";
    import FaPinterest from "svelte-icons/fa/FaPinterest.svelte";
    import FaWhatsapp from "svelte-icons/fa/FaWhatsapp.svelte";
    import FooterItemComponent from "./FooterItemComponent.svelte";
    import FaTruck from "svelte-icons/fa/FaTruck.svelte";
    import FaHeadset from "svelte-icons/fa/FaHeadset.svelte";
    import FaPaperclip from "svelte-icons/fa/FaPaperclip.svelte";

    const itemsInFooter = [
        {
            title: "Informations",
            items: [
                "About Us",
                "Careers",
                "Orders & Shipping",
                "Office Supplies",
                "Costumer Service",
            ],
        },
        {
            title: "Privacy Policy",
            items: [
                "About Us",
                "Careers",
                "Orders & Shipping",
                "Office Supplies",
                "Costumer Service",
            ],
        },
        {
            title: "Privacy Policy",
            items: [
                "About Us",
                "Careers",
                "Orders & Shipping",
                "Office Supplies",
                "Costumer Service",
            ],
        },
    ];
</script>

<div class="flex flex-col">
    <div class="flex flex-1 px-72 border-b-2">
        <div
            class="flex flex-row justify-center pr-16 py-4 uppercase font-bold border-r-2"
        >
            <span class="text-black">Sign up to newsletter</span>
        </div>
        <div class="flex flex-1 px-2">
            <input
                id="email"
                type="email"
                placeholder="Enter your email address"
                class="w-full outline-none border-b-2 border-transparent focus:border-primary bg-transparent"
            />
        </div>
        <div class="flex flex-row gap-6 items-center px-4 border-l-2">
            <div class="h-4 w-4 text-black hover:text-primary">
                <FaInstagram />
            </div>
            <div class="h-4 w-4 text-black hover:text-primary">
                <FaFacebookSquare />
            </div>
            <div class="h-4 w-4 text-black hover:text-primary">
                <FaVk />
            </div>
            <div class="h-4 w-4 text-black hover:text-primary">
                <FaPinterest />
            </div>
            <div class="h-4 w-4 text-black hover:text-primary">
                <FaWhatsapp />
            </div>
        </div>
    </div>

    <div class="flex flex-1 px-72 py-8 flex-row gap-2">
        <div class="flex flex-1 flex-col gap-2">
            <div>
                <p class="uppercase font-bold text-2xl">
                    <span class="block"> Rochat </span>
                    <span class="block"> Industrie </span>
                </p>
            </div>
            <div class="flex flex-col">
                <span class="text-black hover:text-primary cursor-pointer"
                    >Av. des Baunettes 13, 14020 Renes, CH</span
                >
                <span class="text-black hover:text-primary cursor-pointer"
                    >+41216943333</span
                >
                <span class="text-black hover:text-primary cursor-pointer"
                    >+41216943333</span
                >
                <span class="text-black hover:text-primary cursor-pointer"
                    >info@rochatindustrie.ch</span
                >
            </div>
        </div>

        {#each itemsInFooter as item}
            <FooterItemComponent
                title={item?.title ?? ""}
                items={item?.items ?? []}
            />
        {/each}
    </div>

    <div
        class="flex flex-row px-72 bg-primary text-white py-4 uppercase text-bold"
    >
        <div class="flex flex-1 flex-row items-center justify-center gap-2 cursor-pointer">
            <div class="h-4 w-4">
                <FaTruck />
            </div>
            <span > Free delivery over $100 </span>
        </div>

        <div class="flex flex-1 flex-row items-center justify-center gap-2 cursor-pointer">
            <div class="h-4 w-4">
                <FaHeadset />
            </div>
            <span> +0080 1234 56 789 </span>
        </div>

        <div class="flex flex-1 flex-row items-center justify-center gap-2 cursor-pointer">
            <div class="h-4 w-4">
                <FaPaperclip />
            </div>
            <span> Save up to 20% </span>
        </div>

        <div class="flex flex-1 flex-row items-center justify-center gap-2 cursor-pointer">
            <div class="h-4 w-4">
                <FaHeadset />
            </div>
            <span> +0080 1234 56 789</span>
        </div>
    </div>

    <div class="flex flex-row bg-black w-full px-72 py-4">
        <div class="flex flex-row">
            <img
                alt="cards-brands"
                src="https://rochat.eclypsys.ch/wp-content/uploads/2024/07/footer-img-1.png"
                class="h-4"
            />
        </div>
        <div
            class="flex flex-1 items-center justify-end flex-row text-xs uppercase text-gray-700 gap-2"
        >
            <span>© 2024 </span>
            <span class="hover:text-primary">Qode Interactive</span>
            <span>, All Rights Reserved</span>
        </div>
    </div>
</div>
