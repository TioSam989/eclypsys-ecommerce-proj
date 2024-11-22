<script>
    // @ts-ignore
    import FaBars from "svelte-icons/fa/FaBars.svelte";
    // @ts-ignore
    import FaChevronRight from "svelte-icons/fa/FaChevronRight.svelte";
    // @ts-ignore
    import FaSearch from "svelte-icons/fa/FaSearch.svelte";
    // @ts-ignore
    import FaRegUser from "svelte-icons/fa/FaRegUser.svelte";
    // @ts-ignore
    import FaShoppingCart from "svelte-icons/fa/FaShoppingCart.svelte";
</script>

<div class="flex flex-1 flex-row py-8">
    <div class="flex flex-row bg-primary">
        <div class="flex p-2 items-center align-center">
            <div class="h-8 w-8 text-white">
                <FaBars />
            </div>
        </div>
        <div class="flex p-2 items-center align-center pl-40">
            <!-- svelte-ignore a11y_img_redundant_alt -->
            <img
                class="w-32 h-14 object-cover"
                src="https://placehold.co/452x156"
                alt="logo image"
            />
        </div>
    </div>
    <div
        class="flex flex-row items-center justify-center gap-8 px-10 cursor-pointer text-black hover:text-primary border-2"
    >
        <strong class="text-black">CATÉGORIES</strong>
        <div class="h-4 w-4">
            <FaChevronRight />
        </div>
    </div>
    <div class="flex flex-1 flex-row items-center px-2 border-2">
        <div class="flex flex-1">
            <span>Rechercher...</span>
        </div>
        <div class="h-6 w-6 text-black hover:text-primary">
            <FaSearch />
        </div>
    </div>
    <div class="flex items-center justify-center p-5 border-y-2 text-black hover:text-primary">
        <div class="h-6 w-6">
            <FaRegUser />
        </div>
    </div>
    <div
        class="relative flex items-center justify-center p-5 border-2 overflow-hidden text-black hover:text-primary"
    >
        <div class="absolute top-0 right-0 z-10 text-sm font-bold p-1">
            0
        </div>

        <div class="h-6 w-6">
            <FaShoppingCart />
        </div>
    </div>
</div>
