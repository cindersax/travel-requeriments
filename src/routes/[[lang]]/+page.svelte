<script>
	import Input from '../../components/Input.svelte';
	import Button from '../../components/Button.svelte';

	export let data;
	let { lang, context } = data;
	const { title, originLabel, destinationLabel, description, btnText } = context;
	let origin = '';
	let destination = '';
	let isLoading = false;
	let handleSubmit = async () => {
		isLoading = true;
	};
	$: baseUrl = `/${origin.toLowerCase()}-to-${destination.toLowerCase()}`;
	$: requestUrl = lang === 'en' ? baseUrl : `/${lang}` + baseUrl;
</script>

<h1>Unlock the World: Simplifying <strong>Travel Requirements</strong> for Your Next Adventure</h1>
<p>{description}</p>
<form id="requirement_search" method="POST" action={requestUrl} on:submit={handleSubmit}>
	<Input form="requirement_search" name="origin" label={originLabel} bind:value={origin} required />
	<Input
		form="requirement_search"
		name="destination"
		label={destinationLabel}
		bind:value={destination}
		required
	/>
	<Button>
		{#if isLoading}
			Loading...
		{:else}
			{btnText}
		{/if}
	</Button>
</form>

<style>
	* {
		font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu,
			Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
		margin: 0;
		padding: 0;
	}
	h1 {
		font-size: 3rem;
		text-align: center;
	}

	h1 strong {
		border-bottom: 0.3rem solid #007474;
		padding: 0 0.5rem;
	}

	p {
		font-size: 1.2rem;
		line-height: 1.5em;
		text-align: center;
	}
	form {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 16px;
		padding: 1rem;
	}

	@media only screen and (max-width: 600px) {
		h1 {
			font-size: 2.4rem;
		}
		form {
			grid-template-columns: repeat(1, 1fr);
		}
	}
</style>
