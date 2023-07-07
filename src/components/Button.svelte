<script>
    
    export let handleClick = ()=>{
        console.log('handle this click')
    }
    

</script>


<button
    on:click={handleClick}>
    <slot/>
</button>


<style>
    button{
        padding: 8px 16px;
        border-radius: 4px;
        background-color: teal;
        color: white;
        border: none;
        font-weight: 600;
        font-size: 18px;
    }

    button:hover {
        background-color: #007474;
        transform: scale(1.02);
        transition: background-color 0.3s ease, transform 0.3s ease;
    }

</style>