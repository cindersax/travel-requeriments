<script>
	let lang;
	let handleChange = (event) => {
		event.target.parentElement.submit();
	};
</script>

<header>
	<h2>
		<a href="/">Travel Requirements</a>
	</h2>
</header>
<main>
	<slot />
</main>

<style>
	h2 {
		font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu,
			Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
	}

	* {
		box-sizing: border-box;
		margin: 0;
	}
	header {
		background-color: white;
		padding: 1.2em;
		display: flex;
		align-items: center;
		justify-content: center;
		border-bottom: 1px solid gainsboro;
	}
	h2 a {
		text-decoration: none;
		color: black;
		font-weight: 400;
		padding: 0.5rem 1rem;
		border: 1px solid black;
		border-radius: 4px;
	}
	h2 a:hover {
		background-color: #e9e9e9;
	}
	h2 a::before {
		width: 5px;
		background-color: blue;
	}
	main {
		box-sizing: border-box;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-self: stretch;
		gap: 1rem;
		width: 100%;
		max-width: 100ch;
		margin: auto;
		height: auto;
		min-height: 90vh;
		margin-top: 1rem;
		margin-bottom: 1rem;
	}
</style>
