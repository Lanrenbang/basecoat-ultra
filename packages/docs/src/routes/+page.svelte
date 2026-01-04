<script lang="ts">
  import { browser } from '$app/environment';
  import { goto } from '$app/navigation';
  import { base } from '$app/paths';
  
  // Redirect to Introduction page by default
  if (browser) {
    // Use hardcoded path for production to avoid base path calculation issues
    const redirectPath = import.meta.env.PROD ? '/basecoat-ultra/introduction' : `${base}/introduction`;
    goto(redirectPath);
  }
</script>

<svelte:head>
  <meta http-equiv="refresh" content="0; url={import.meta.env.PROD ? '/basecoat-ultra/introduction' : `${base}/introduction`}" />
</svelte:head>

<div class="flex items-center justify-center min-h-screen">
  <p>Redirecting to Introduction...</p>
</div>
