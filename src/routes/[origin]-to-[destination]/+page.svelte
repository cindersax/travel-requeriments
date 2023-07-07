<script>
    export let data

    let {tripInfo} = data

</script>

<section>
    <h1>Requirements for citizens of {tripInfo.origin}  to travel to {tripInfo.destination}</h1>
    {#each tripInfo.requirements as requirement}
    <article>
        <h2>{requirement.attributes.title}</h2>
        <p>{requirement.attributes.description}</p>
        {#each  requirement.attributes.actions.filter(action => action.type == 'LINK') as action }
            <p></p>
            <a href="{action.url}">completar requerimiento en linea</a>
            
        {/each}
        {#if requirement.attributes.sources.length > 0}
            <h3>Sources:</h3>
            {#each  requirement.attributes.sources as source }
                <a href="{source.url}">{source.title}</a>
            {/each}
        {/if}
    </article>
    {/each}
</section>

<style>
    *{
        font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    }
    h1{
        font-size: 3rem;
    }
    h2{
        font-size: 2rem;
    }
    p{
        font-size: 1.2rem;
        line-height: 1.5em;
    }
    section{
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        gap: 8px;
        width: 100%;
        max-width: 75ch;
        margin: auto;
        padding: 1rem;
    }
    @media only screen and (max-width: 600px) {
        h1{
            font-size: 2.4rem;
        }
        h2{
            font-size: 1.8rem;
        }

    }
</style>


  