<script>
    import { page } from "$app/stores";
    console.log($page.route.id)

</script>
<div>
    <nav>
        <ul>
            <a 
                href="/login"
                class='step-primary'>
                login
            </a>
            <a 
                href="/login/username"
                class:step-primary={$page.route.id?.match(/username|photo/g)}>
                username
            </a>
            <a 
                href="/login/photo"
                class:step-primary={$page.route.id?.includes("photo")}>
                photo
            </a>

        </ul>
    </nav>
    <div class="content">
        <slot />
    </div>
    
</div>



<style>
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }
    div {
        margin: 0 auto;
        max-width: 500px;
        width: 100%;
        min-height: 100px;
        display: flex;
        flex-direction: column;
        gap: 2rem;
    }
    .step-primary {
        background-color: skyblue;
        border-radius:  16px;
        color: white;

    }
    ul {
        display: flex;
        flex-direction: row;
        gap: 16px;
        font-size: 16px;
        font-weight: 600;
        text-transform: uppercase;
        align-items: center;
        justify-content: center;
    }
    ul a {
        padding: 8px 16px;
        text-decoration: none;
        color: black;

    }
   .content {
        display: flex;
        flex-direction: column;
        gap: 8px;
        text-align: center;

   }
</style>