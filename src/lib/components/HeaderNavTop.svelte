<script>
// @ts-nocheck

    import FaHeadset from "svelte-icons/fa/FaHeadset.svelte";
    import FaMapMarkerAlt from "svelte-icons/fa/FaMapMarkerAlt.svelte";
    import FaRegUser from "svelte-icons/fa/FaRegUser.svelte";
</script>

<div class="flex bg-black px-72 py-2 flex-row py-3">
    <div class="flex flex-1 gap-x-2 justify-start items-center flex-row">
        <div
            class="flex flex-row cursor-pointer items-center gap-2 text-white hover:text-primary transition duration-300 ease-in-out"
        >
            <div class="w-4 h-4">
                <FaHeadset />
            </div>
            <span class="text-xs"> TEL:(+41)21 694 33 33 </span>
        </div>
        <div
            class="flex flex-row cursor-pointer items-center gap-2 text-white hover:text-primary transition duration-300 ease-in-out"
        >
            <div class="w-4 h-4">
                <FaMapMarkerAlt />
            </div>
            <span class="text-xs"> AV. DES BAUMETTES 13, 1020 RENENS </span>
        </div>
    </div>
    <div
        class="flex items-center cursor-pointer flex-row gap-2 items-center text-white hover:text-primary transition duration-300 ease-in-out"
    >
        <div class="w-4 h-4">
            <FaRegUser />
        </div>
        <span class="text-xs">MON COMPTE</span>
    </div>
</div>
