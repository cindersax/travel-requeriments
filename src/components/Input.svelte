<script>
  import {countries} from '$lib/countries'
  export let value = '';
  export let error = false;
  export let selected = false;
  export let name
  export let label

  function handleInput(event) {
    value = event.target.value;
    error = false;
  }

  function handleBlur() {
    selected = false;
  }

  function handleFocus() {
    selected = true;
  }

  function showError() {
    error = true;
  }
</script>

<div class="input-container">
  <label class="label" for={name}>{( selected && value !='') ||  value  ? label : ''}</label>
  <select
    class={`
        input
        ${error ? 'error' : ''}
        ${selected ? 'selected' : ''}
    `}
    name={name}
    placeholder={selected ? '' : label}
    value={value}
    {...$$restProps}
    on:input={handleInput}
    on:blur={handleBlur}
    on:focus={handleFocus}
  >
    <option value='' selected disabled hidden>{label}</option>
    {#each countries as country}
        <option value={country.isoAlpha}>{country.name}</option>
    {/each}
    </select>
    {#if error}
      <p class="error-message">Error message goes here.</p>
    {/if}

</div>
<style>
  *{
      box-sizing: border-box;
  }
  .input-container {
    position: relative;
    width: auto;
  }

  .label {
    position: absolute;
    top: 0px;
    left: 8px;
    pointer-events: none;
    transition: transform 0.15s, font-size 0.15s;
    transform-origin: top left;
    color: #888;
    font-size: 14px;
    line-height: 1;
    padding: 0px 4px;
    margin-top: -8px;
    background-color: white;
    transition: all 1s;
  }

  .input {
    border: 1px solid #888;
    border-radius: 4px;
    padding: 16px 16px;
    width: 100%;
    transition: border-color 0.15s;
    font-size: 18px;
  }
  select:focus{
      outline: none;
  }
  select{
      appearance: none;
      background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e");
      background-repeat: no-repeat;
      background-position: right 1rem center;
      background-size: 1.5em;
  }

  .input.error {
    border-color: red;
  }

  .input.selected {
    border: 2px solid teal;
  }
</style>
  