<script>
    import Carousel from 'svelte-carousel'
    const images = [
        "https://images.unsplash.com/photo-1549619856-ac562a3ed1a3?fit=crop&w=1300&h=400&q=70",
        "https://images.unsplash.com/photo-1553264646-7eb44743436f?fit=crop&w=1300&h=400&q=70",
        "https://images.unsplash.com/photo-1604977936763-a1c3f63ca9c3?fit=crop&w=1300&h=400&q=70"
    ]
</script>

<div class="my-6">
    <Carousel
    let:loaded
    let:showPrevPage
    let:showNextPage
    >
        <div slot="prev" on:click={showPrevPage} class="absolute z-30 h-full cursor-pointer flex flex-col justify-center bg-warmGray-900 bg-opacity-50 transition hover:bg-opacity-80 px-3 text-warmGray-400">
            <i class="fas fa-chevron-left"></i>
        </div>
        <div slot="next" on:click={showNextPage} class="absolute right-0 z-30 h-full cursor-pointer flex flex-col justify-center bg-warmGray-900 bg-opacity-50 transition hover:bg-opacity-80 px-3 text-warmGray-400">
            <i class="fas fa-chevron-right"></i>
        </div>
    {#each images as src, imageIndex (src)}
        <div class="img-container">
        {#if loaded.includes(imageIndex)}
            <img {src} alt="nature" />
        {/if}
        </div>
    {/each}
    </Carousel>
</div>