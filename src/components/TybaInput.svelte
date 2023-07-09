<script>
	let name;
	let form;
	let placeholder = 'Select your option';
</script>

<select {name} {form} required>
	<option style="color: #7A93AB;" value="" disabled selected>{placeholder}</option>
	<slot />
</select>
<ul>
	<li />
</ul>

<style>
	* {
		box-sizing: border-box;
		font-size: 16px;
	}
	select {
		padding: 1rem;
		border-radius: 4px 4px 0px 0px;
		background: #f5f8fa;
		outline: none;
		border: none;
		border-bottom: 2px solid #7a93ab;
		color: #2c4359;
		appearance: none;
		background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e");
		background-repeat: no-repeat;
		background-position: right 1rem center;
		background-size: 1.5em;
	}
</style>
