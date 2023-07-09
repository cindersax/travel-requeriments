<script>
    export let data

    let { tripInfo: {postTitle,requirements}} = data
</script>

    <header>
        <h1>{postTitle}</h1>
    </header>
    <section>
            <!-- Requirements -->
        {#each requirements as { attributes: { category, subCategory, lastUpdatedAt, enforcement, documentTypes, travelPorpuses ,description, title, actions, sources } }}
        <article>
            <h2>{title}</h2>
            <p>{description}</p>
            <!-- actions -->
            {#each  actions.filter(action => action.type == 'LINK') as action }
                <p></p>
                <a href="{action.url}">complete online</a>
            {/each}
            <!-- sources -->
            {#if sources.length > 0}
                <h3>Sources:</h3>
                {#each  sources as source }
                    <a href="{source.url}">{source.title}</a>
                {/each}
            {/if}
        </article>
        {/each}
    </section>


    <table>
        <thead>
            <tr>
                <th>title</th>
                <th>type</th>
                <th>category</th>
                <th>subCategory</th>
                <th>enforcement</th>
                <th>documentTypes</th>
            </tr>
        </thead>
        <tbody>
            {#each requirements as {type, attributes: { title, category, subCategory, lastUpdatedAt, enforcement, documentTypes} }}
                <tr>
                    <td>{title}</td>
                    <td>{type}</td>
                    <td>{category}</td>
                    <td>{subCategory}</td>
                    <td>{enforcement}</td>
                    <td>{documentTypes}</td>

                </tr>
            {/each}
        </tbody>

    </table>
<style>
    *{
        font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        box-sizing: border-box;
        margin: 0;
        padding: 0;
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
    @media only screen and (max-width: 600px) {
        h1{
            font-size: 2.4rem;
        }
        h2{
            font-size: 1.8rem;
        }

    }
    
table, th, td {
  border: 1px solid black;
  border-collapse: collapse;
  padding: 8px;
  width: max-content;
}
</style>


  