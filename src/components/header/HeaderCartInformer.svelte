<script>
    import {cart} from '../../store/store'
    let cartArray
    let total = 0

    cart.subscribe(c => {
        cartArray = c
        total = 0
        c.forEach(item => {
            total += item.price * item.quantity
        });
    })
</script>
<div class="bg-warmGray-700 text-warmGray-200 p-4 rounded absolute whitespace-nowrap right-0 top-14 z-40 ring-8 ring-warmGray-600">
    <div>
        {#each cartArray as item}
            <div class="flex items-center justify-between gap-x-4 mb-2">
                <span>{item.name}</span>
                <span>
                    {item.quantity}
                    &times;
                    <span class="font-bold text-lime-500">${item.price}</span>
                </span>
            </div>
        {/each}
        <hr class="my-3">
        <div class="font-bold text-lg flex items-center justify-between">
            Total: <span class="font-bold text-lime-500">USD {total.toFixed(2)}</span>
        </div>
    </div>
</div>