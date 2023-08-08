<script>
	export let data;

	let {
		tripInfo: { postTitle, requirements }
	} = data;
</script>

<header>
	<h1>{postTitle}</h1>
</header>
<section>
	<!-- Requirements -->
	{#each requirements as { attributes: { category, subCategory, lastUpdatedAt, enforcement, documentTypes, travelPorpuses, description, title, actions, sources } }}
		<article>
			<h2>{title}</h2>
			<p>{description}</p>
			<!-- actions -->
			{#each actions.filter((action) => action.type == 'LINK') as action}
				<p />
				<a href={action.url} class="anchor-button" target="”_blank”">Complete Online</a>
			{/each}
			<!-- sources -->
			{#if sources.length > 0}
				<h3>Sources:</h3>
				<ul>
					{#each sources as source}
						<li>
							<a href={source.url} target="”_blank”">{source.title}</a>
						</li>
					{/each}
				</ul>
			{/if}
		</article>
	{/each}
</section>

<style>
	* {
		font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu,
			Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
		box-sizing: border-box;
		margin: 0;
		padding: 0;
	}
	h1 {
		font-size: 3rem;
	}
	h2 {
		font-size: 2rem;
	}
	p {
		font-size: 1.2rem;
		line-height: 1.5em;
	}
	a {
		color: #007474;
	}
	section {
		display: flex;
		flex-direction: column;
		gap: 3rem;
	}
	article {
		display: flex;
		flex-direction: column;
		gap: 1rem;
		box-sizing: border-box;
	}
	.anchor-button {
		background-color: #007474;
		color: white;
		padding: 0.5rem 1rem;
		text-decoration: none;
		font-weight: 600;
		border-radius: 4px;
		width: fit-content;
	}
	.anchor-button:hover {
		background-color: #089191;
	}
	header {
		margin-top: 4rem;
	}
	@media only screen and (max-width: 600px) {
		h1 {
			font-size: 2.4rem;
		}
		h2 {
			font-size: 1.8rem;
		}
	}
</style>
