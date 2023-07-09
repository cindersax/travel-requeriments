import { auth, db } from '$lib/firebase';
import { writable } from 'svelte/store';
import { GoogleAuthProvider, signInWithPopup, signOut, onAuthStateChanged } from 'firebase/auth';

let userStore = () => {
	const { subscribe, set } = writable(auth?.currentUser ?? null, () => {
		onAuthStateChanged(auth, (user) => set(user));
	});

	return {
		subscribe,
		signInWithGoogle: async () => {
			const provider = new GoogleAuthProvider();
			try {
				await signInWithPopup(auth, provider);
			} catch (error) {
				console.log(error);
			}
		},
		logOut: async () => await signOut(auth)
	};
};

export let user = userStore();
