<script lang="ts">
  import { browser } from '$app/environment';
  import { goto } from '$app/navigation';
  
  // Redirect to Introduction page by default
  if (browser) {
    goto('/introduction');
  }
</script>

<svelte:head>
  <meta http-equiv="refresh" content="0; url=/introduction" />
</svelte:head>

<div class="flex items-center justify-center min-h-screen">
  <p>Redirecting to Introduction...</p>
</div>
