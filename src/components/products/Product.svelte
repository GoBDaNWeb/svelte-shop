<script>
    import {cart} from '../../store/store'
    export let product

    let isInCart = false

    const addToCart = () => {
        cart.update(c => {
            // Проверка наличия такого товара в корзине
            let found = c.findIndex(item => product.id === item.id)
            if(found === -1) {
                // Добавление свойства "количество" текущему товару
                product.quantity = 1
                // Вовзрат массива, ссостоящего из всех элементов текущей корзины (...c) и текущего объекта товара
                localStorage.cart = JSON.stringify([...c, product])
                return [...c, product]
            } else {
                //Инкремент свойства "количество" у товара в корзине под найденным индексом
                c[found].quantity++
                localStorage.cart = JSON.stringify(c)
                return c
            }
        })
    }

    cart.subscribe(c => {
        let found = c.findIndex(item => product.id === item.id)
        if(found !== -1) {
            isInCart = true
        } else {
            isInCart = false
        }
    })

</script>

<div class="p-6 bg-warmGray-700 shadow-lg rounded-md flex flex-col gap-y-4">
    <img src={product.image} alt={product.name} class="w-full h-64 object-cover">
    <h2>{product.name}</h2>
    <div class="flex justify-between items-center text-lg font-bold text-lime-300 mt-auto">
        <span>${product.price.toFixed(2)}</span>
        {#if !isInCart}
            <button class="text-2xl text-lime-400" on:click={addToCart}>
                <i class="fas fa-cart-plus"></i>
            </button>
            {:else}
            <i class="fas fa-cart-arrow-down text-2xl text-warmGray-400"></i>
        {/if}        
    </div>
</div>