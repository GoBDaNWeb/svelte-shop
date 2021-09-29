<script>
    import HeaderLogo from "./HeaderLogo.svelte";
    import HeaderNav from "./HeaderNav.svelte";
    import HeaderCart from "./HeaderCart.svelte";

    let showMenu = false
</script>

<header class="bg-lime-400 text-warmGray-900 p-4">
    <div class="flex justify-between items-center max-w-7xl mx-auto">
        <button class="text-2xl lg:hidden" on:click={() => showMenu = true}>
            <i class="fas fa-bars"></i>
        </button>
        <HeaderLogo/>
        <HeaderNav showMenu={showMenu} />
        <HeaderCart/>
        {#if showMenu}
            <div class="w-screen h-screen fixed top-0 left-0 bg-black bg-opacity-70" on:click={() => showMenu = false}></div>
        {/if}
    </div>
</header>
