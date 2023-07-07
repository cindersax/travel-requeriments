<script>
    import { auth,db } from "$lib/firebase";
    import { collection, onSnapshot } from "firebase/firestore";
    import {user} from '$lib/stores/userStore'
    import Button from "../../components/Button.svelte";


    function logUser(){
        console.log('current auth user ',auth.currentUser)
        console.log('current store user ', $user)
        logAllUsers()
    }

    function logAllUsers() {
        const usersCollection = collection(db, "users");
        onSnapshot(usersCollection, (snapshot) => {
            snapshot.forEach((doc) => {
            const user = doc.data();
            console.log(user);
            });
        });
    }
    

</script>



{#if $user}
<h2>hello, {$user.displayName}</h2>
<p>you are loggued in</p>
<Button 
    handleClick = {user.logOut}>
    Sign out
</Button>
{:else}
<h2>Login</h2>
<Button 
    handleClick = {user.signInWithGoogle}>
    Sign in with Google
</Button>

{/if}

<Button 
    handleClick = {logUser}>
    current user
</Button>



