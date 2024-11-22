<script>
    // @ts-nocheck
    import "../app.scss"
    import "../../static/output.css"
    import HeaderNavTop from "$lib/components/HeaderNavTop.svelte"
    import HeaderNavMain from "$lib/components/HeaderNavMain.svelte"
    import SubHeaderNav from "$lib/components/SubHeaderNav.svelte"
    import FooterComponent from "$lib/components/FooterComponent.svelte"
    import { onMount } from "svelte"

    let isVisible = false

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        })
    }

    onMount(() => {
        const handleScroll = () => (isVisible = window.scrollY > 50)

        window.addEventListener("scroll", handleScroll)

        return () => {
            window.removeEventListener("scroll", handleScroll)
        }
    })
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
        <FooterComponent />
    </footer>

    <button
        class="floating-button {isVisible ? '' : 'hidden'}"
        on:click={scrollToTop}
        aria-label="Scroll to top"
    >
        ↑
    </button>
</div>

<style>
    .floating-button {
        position: fixed;
        bottom: 1.5rem;
        right: 1.5rem;
        background-color: #007bff; /* Customize the color */
        color: white;
        padding: 0.75rem 1rem;
        border-radius: 50%;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        cursor: pointer;
        font-size: 1.5rem;
        transition:
            opacity 0.3s ease-in-out,
            transform 0.3s ease-in-out;
        z-index: 1000;
    }

    .floating-button.hidden {
        opacity: 0;
        pointer-events: none;
        transform: translateY(20px); /* Slide down when hidden */
    }

    .floating-button:hover {
        background-color: #0056b3; /* Darker shade on hover */
    }
</style>
