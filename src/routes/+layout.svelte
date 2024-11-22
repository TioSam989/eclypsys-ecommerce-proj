<script>
    // @ts-nocheck
    import '../app.scss'
    import "../../static/output.css";
    import HeaderNavTop from "$lib/components/HeaderNavTop.svelte";
    import HeaderNavMain from '$lib/components/HeaderNavMain.svelte';
</script>

<div class="flex flex-col h-screen w-screen">
    <header class="bg-gray-100">
        <HeaderNavTop />
        <div class="px-72">
            <HeaderNavMain/>
            <p>header3</p>
        </div>
    </header>
    <div class="flex flex-col h-screen w-screen px-72">
        <main class="flex flex-1">
            <slot />
        </main>
        <footer class="bg-pink-800">
            <p>footer</p>
        </footer>
    </div>
</div>
