<script>
    // @ts-nocheck
    import "../app.css";
    import "../../static/output.css";
</script>

<div class="flex flex-col h-screen w-screen">
    <header class="bg-gray-100">
        <div class="bg-black px-8 py-2">
            <p class="text-sky-400">header1</p>
        </div>
        <div class="px-8">
            <p>header2</p>
            <p>header3</p>
        </div>
    </header>
    <div class="flex flex-col h-screen w-screen px-8">
        <main class="flex flex-1">
            <slot />
        </main>
        <footer class="bg-pink-800">
            <p>footer</p>
        </footer>
    </div>
</div>
