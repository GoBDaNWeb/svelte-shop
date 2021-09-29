<script>
import { element } from 'svelte/internal';

    import {cart} from '../../store/store'
    import HeaderCartInformer from "./HeaderCartInformer.svelte";
    let showInformer = false
    let cartQuantity = 0
    cart.subscribe(c => {
        if(c.length > 0) {
            cartQuantity = 0
            c.map(element => {
                cartQuantity += +element.quantity
            })
        }
    })
</script>
<div class="relative lg:ml-40">
    <button class="bg-warmGray-800 text-lime-400 w-12 h-12 rounded-full text-xl relative" 
            on:click={() => showInformer = !showInformer}
    >
        <i class="fas fa-shopping-cart transform -translate-x-0.5"></i>
        <div class="bg-rose-600 w-7 h-7 text-sm font-semibold leading-none text-white rounded-full flex justify-center items-center absolute -top-2 -right-2">
           {cartQuantity}
        </div>
    </button>
    {#if showInformer}
        <div class="w-screen h-screen fixed top-0 left-0" 
            on:click={() => showInformer = false}></div>
        <HeaderCartInformer/>
    {/if}
</div>