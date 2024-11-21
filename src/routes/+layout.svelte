<script>
    // @ts-nocheck

    import MainNavbar from "$lib/components/MainNavbar.svelte";
</script>

<div class="flex flex-col h-screen">
    <MainNavbar />

    <main class="flex-1 p-4 mt-16">
        <slot />
    </main>

    <footer class="bg-gray-200 text-center text-sm p-4 mt-8">
        © 2024 My blog
    </footer>
</div>
