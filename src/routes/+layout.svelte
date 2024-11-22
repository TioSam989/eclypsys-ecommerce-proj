<script>
    // @ts-nocheck
</script>

<div class="flex flex-col h-screen w-screen">
    <header class="bg-gray-100 p-4">
        <p>headers</p>
    </header>
    <main class="flex flex-1 bg-white">
        <slot />
    </main>
    <footer class="bg-gray-100 p-4">footer</footer>
</div>
