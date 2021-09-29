<script>
    import {Route} from 'svelte-navigator'
    import HeaderBar from "./header/HeaderBar.svelte";
    import Home from "../pages/Home/Home.svelte";
    import Catalog from "../pages/Catalog/Catalog.svelte";
    import Checkout from "../pages/Checkout/Checkout.svelte";
</script>

<div class="bg-warmGray-900 w-full min-h-screen text-gray-200">
    <HeaderBar />
    <div class="bg-warmGray-800 p-5 mt-4 max-w-7xl mx-auto rounded shadow-lg">
        <Route path="/">
            <Home/>
        </Route>
        <Route path="/catalog">
            <Catalog/>
        </Route>
        <Route path="/checkout">
            <Checkout/>
        </Route>
    </div>
</div>