<script>
    // @ts-nocheck
    import "../app.css";
    import "../../static/output.css";
</script>

<div class="flex flex-col h-screen w-screen">
    <header class="bg-gray-100 p-4">
        <p>headers</p>
    </header>
    <main class="flex flex-1 px-2">
        <slot />
    </main>
    <footer class="bg-gray-100 p-4">footer</footer>
</div>
