<script>
    import {cart} from '../../store/store'

    let cartArray = []
    let total = 0
    let totalSum = 0
    
    cart.subscribe(c => {
        total = 0
        totalSum = 0
        cartArray = c
        c.forEach(item => {
            total += +item.quantity
            totalSum += item.quantity * item.price
        });
    })

    const increaseQuantity = (id) => {
        cart.update(c => {
            let found = c.findIndex(item => item.id === id)
            c[found].quantity++
            localStorage.cart = JSON.stringify(c)
            return c
        })
    }
    const decreaseQuantity = (id) => {
        cart.update(c => {
            let found = c.findIndex(item => item.id === id)
            if(c[found].quantity > 1) {
                c[found].quantity--
                localStorage.cart = JSON.stringify(c)
            }
            return c
        })
    }
    const changeQuantity = (id, value) => {
        cart.update(c => {
            if(!isNaN(value) && value > 0 && value*10%10 === 0) {
                let found = c.findIndex(item => item.id === id)
                c[found].quantity = value
                localStorage.cart = JSON.stringify(c)
            }   
            return c
        })
    }

    const removeFromCart = (id) => {
        if(confirm('Are you sure about this?')) {
            cart.update(c => {
                let found = c.findIndex(item => item.id === id)
                c.splice(found, 1)
                localStorage.cart = JSON.stringify(c)
                return c
            })
        }
    }

</script>

<div>
    <!-- <h1 class="mb-3">
        Cart&Checkout
    </h1> -->
    <div class="p-4 bg-warmGray-700 mb-4 rounded-lg">

        {#each cartArray as item}
        <div class="flex items-center gap-x-4 p-4">
            <div class="flex-grow flex items-center gap-x-3">
                <img 
                    src={item.image}
                    alt={item.name}
                    class="w-16 h-16 object-cover rounded ring-4 ring-warmGray-500"
                />
                <h3>{item.name}</h3>
            </div>
            <div class="flex items-center gap-x-3 w-96">
                <div class="flex">
                    <button 
                        class="bg-warmGray-900 font-black border-4 border-lime-500 rounded-l-lg border-r-0 w-10 focus:outline-none"
                        on:click={decreaseQuantity(item.id)}
                    >
                        -
                    </button>
                    <input 
                        value={item.quantity}
                        class="w-12 py-2 text-center font-bold bg-warmGray-800 border-4 border-lime-500 border-l-0 border-r-0 focus:outline-none appearance-none"
                        type="number"
                        min="1"
                        readonly
                        on:keypress={(event) => changeQuantity(item.id, event.target.value)}
                    >
                    <button 
                        class="bg-warmGray-900 font-black border-4 border-lime-500 rounded-r-lg border-l-0 w-10 focus:outline-none"
                        on:click={increaseQuantity(item.id)}
                    >
                        +
                    </button>
                </div>
                
                <div class="text-lg font-semibold">
                    &times;
                    ${item.price.toFixed(2)}
                    =
                    <span class="text-lime-400 font-bold">${(item.price * item.quantity).toFixed(2)}</span>
                </div>
            </div>
            <div class="ml-4">
                <button 
                    class="bg-red-600 w-12 h-12 rounded-lg border-4 border-red-400 focus:outline-none" 
                    on:click={removeFromCart(item.id)}
                >
                    <i class="fas fa-trash"></i>
                </button>
            </div>
        </div>            
        {/each}

        <div class=" text-2xl font-semibold px-3 text-right mt-4 pt-4 border-t-2 border-warmGray-500">
            Total:
            <span class="text-lime-400 font-extrabold">{total}</span> items of
            <span class="text-lime-400 font-extrabold">USD {totalSum.toFixed(2)}</span>
        </div>

    </div>
</div>

<style>
    input[type=number]::-webkit-inner-spin-button, 
    input[type=number]::-webkit-outer-spin-button { 
        -webkit-appearance: none; 
        margin: 0; 
    }
    input[type=number] {
        appearance: none;
        -moz-appearance: textfield;
    }
</style>