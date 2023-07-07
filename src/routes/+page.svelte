<script>
    import Input from '../components/Input.svelte';
    import Button from '../components/Button.svelte';
    export let data

    let {tripInfo} = data
    let origin = '';
        let destination = '';
      
        function handleSubmit() {
          const url = `/${origin}-to-${destination}`;
          window.location.href = url;
        }

</script>


<section>
    <h1>Unlock the World: Simplifying <span>Travel Requirements</span> for Your Next Adventure</h1>
    <p>Enter Your Origin and Destination Below to Access Essential Travel Information</p>

      <form  on:submit|preventDefault={handleSubmit}>
        <Input name='origin' label='where you from?'bind:value={origin} required/>
        <Input name='destination' label='where you going?'bind:value={destination} required/>
        <Button>Explore Now</Button>
      </form>
</section>

<style>
    *{
        font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        margin: 0;
        padding: 0;
    }
    h1{
        font-size: 3rem;
        text-align: center;
    }
    h1 span{
        background-color: aquamarine;
        padding: 0px 8px;
    }
    p{
        font-size: 1.2rem;
        line-height: 1.5em;
        text-align: center;
    }
    form{
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 16px;
    }
    section{
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 2rem;
        width: 100%;
        max-width: 75ch;
        margin: auto;
        padding: 1rem;
        height: 100vh;
    }
    @media only screen and (max-width: 600px) {
        h1{
        font-size: 2.4rem;

    }
        form{
            grid-template-columns: repeat(1, 1fr);
        }

    }
</style>


  