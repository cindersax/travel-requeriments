<script>
	let lang;
	let handleChange = (event) => {
		event.target.parentElement.submit();
	};
</script>

<header>
	<nav>
		<a href="/en" data-sveltekit-preload-data>home</a>
		<form id="lang_form">
			<select form="lang_form" name="languages" id="languages" on:change={handleChange}>
				<option value="">en</option>
				<option value="es">es</option>
			</select>
		</form>
	</nav>
</header>
<main>
	<slot />
</main>
<footer>
	<p>footer stuf</p>
</footer>

<style>
	* {
		box-sizing: border-box;
		margin: 0;
	}
	header {
		background-color: white;
		padding: 1em;
		display: flex;
		align-items: center;
		justify-content: center;
		border-bottom: 1px solid gainsboro;
	}

	nav {
		width: 100%;
		max-width: 720px;
		padding: 1rem;
	}
	main {
		box-sizing: border-box;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-self: stretch;
		gap: 2rem;
		width: 100%;
		max-width: 720px;
		margin: auto;
		padding: 1rem;
		height: auto;
	}
	footer {
		border-top: 1px solid gainsboro;
		padding: 1em;
		display: flex;
		align-items: center;
		justify-content: center;
	}
</style>
