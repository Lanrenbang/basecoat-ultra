<script lang="ts">
  import { browser } from '$app/environment';
  import { goto } from '$app/navigation';
  import { base } from '$app/paths';
  
  // Redirect to Introduction page by default
  if (browser) {
    goto(`${base}/introduction`);
  }
</script>

<svelte:head>
  <meta http-equiv="refresh" content="0; url={base}/introduction" />
</svelte:head>

<div class="flex items-center justify-center min-h-screen">
  <p>Redirecting to Introduction...</p>
</div>
