<script>
    import {Link, useLocation} from 'svelte-navigator'
    export let showMenu = false
    const location = useLocation()

</script>
<nav class={`transition-all flex w-80 flex-col p-4 fixed top-0 z-50 h-screen bg-lime-400 lg:flex-row lg:static lg:h-auto lg:p-0 lg:w-auto ${showMenu ? "left-0" : "-left-80"}`}>
    <Link to="/" class={`nav-link ${$location.pathname === '/' && 'active'}`}>Home</Link>
    <Link to="/catalog" class={`nav-link ${$location.pathname === '/catalog' && 'active'}`}>Catalog</Link>
    <Link to="/checkout" class={`nav-link ${$location.pathname === '/checkout' && 'active'}`}>Checkout</Link>
    
</nav>