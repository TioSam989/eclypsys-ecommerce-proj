<script>
    import "../app.scss";
    import "../../static/output.css";
    import HeaderNavTop from "$lib/components/HeaderNavTop.svelte";
    import HeaderNavMain from "$lib/components/HeaderNavMain.svelte";
    import SubHeaderNav from "$lib/components/SubHeaderNav.svelte";
    import FooterComponent from "$lib/components/FooterComponent.svelte";
    // @ts-ignore
    import FaChevronUp from "svelte-icons/fa/FaChevronUp.svelte";

    import { onMount } from "svelte";

    let isVisible = false;

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    onMount(() => {
        const handleScroll = () => (isVisible = window.scrollY > 50);

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    });
</script>

<div class="flex flex-col min-h-screen">
    <header>
        <HeaderNavTop />
        <div class="px-72">
            <HeaderNavMain />
            <SubHeaderNav />
        </div>
    </header>

    <div class="flex-1 flex flex-col px-72">
        <main class="flex flex-1 w-full">
            <slot />
        </main>
    </div>

    <button
        class="floating-button bg-primary text-white rounded-none w-12 h-12 flex items-center justify-center shadow-lg {isVisible
            ? ''
            : 'hidden'}"
        on:click={scrollToTop}
        aria-label="Scroll to top"
    >
        <FaChevronUp />
    </button>

    <footer class="bg-secondary">
        <FooterComponent />
    </footer>
</div>

<style>
    .floating-button {
        position: fixed;
        bottom: 1.5rem;
        right: 1.5rem;
        color: white;
        padding: 0.75rem 1rem;
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
        transform: translateY(20px);
    }
</style>
