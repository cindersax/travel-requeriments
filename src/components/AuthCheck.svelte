<script>
	import { user } from '$lib/stores/userStore';
	import Button from './Button.svelte';
</script>

{#if $user}
	<slot />
{:else}
	<form action="/login">
		<p>please sign in to access this page</p>
		<Button>Go to login</Button>
	</form>
{/if}
