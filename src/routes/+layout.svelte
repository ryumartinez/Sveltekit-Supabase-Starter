<script lang="ts">
	import '../app.css';
    import '../global-styles/tailwind-base.css';
    import { invalidate } from '$app/navigation'
    import { onMount } from 'svelte'
    import Navbar from '../components/layout/navbar.svelte';
    import BottomNavbar from '../components/layout/bottom-navbar.svelte';

    let { children } = $props();

    export let data;
    $: ({ session, supabase } = data);

    onMount(() => {
        const { data } = supabase.auth.onAuthStateChange((_, newSession) => {
            if (newSession?.expires_at !== session?.expires_at) {
                invalidate('supabase:auth');
            }
        });

        return () => data.subscription.unsubscribe();
    });
</script>

{@render children()}
