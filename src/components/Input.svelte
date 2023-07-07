<script>
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
    <label class="label" for={name}>{selected || value ? label : ''}</label>
    <input
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
    />
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
    }
  
    .input {
      border: 1px solid #888;
      border-radius: 4px;
      padding: 16px 16px;
      width: 100%;
      transition: border-color 0.15s;
      font-size: 18px;
    }
    input:focus{
        outline: none;
    }
  
    .input.error {
      border-color: red;
    }
  
    .input.selected {
      border: 2px solid teal;
    }
  </style>
  