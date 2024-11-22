<script>
    // @ts-nocheck
    import "../app.scss";
    import "../../static/output.css";
    import HeaderNavTop from "$lib/components/HeaderNavTop.svelte";
    import HeaderNavMain from "$lib/components/HeaderNavMain.svelte";
    import SubHeaderNav from "$lib/components/SubHeaderNav.svelte";
    import FooterComponent from "$lib/components/FooterComponent.svelte";
</script>

<div class="flex flex-col h-screen w-screen">
    <header>
        <HeaderNavTop />
        <div class="px-72">
            <HeaderNavMain />
            <SubHeaderNav />
        </div>
    </header>
    <div class="flex flex-col h-screen w-screen px-72">
        <main class="flex flex-1">
            <slot />
        </main>
    </div>
    <footer class="bg-secondary">
        <FooterComponent/>
    </footer>
</div>
