<script lang="ts">
  import { onMount } from 'svelte';
  
  let flipToggle = $state(false);
  
  onMount(async () => {
    // Import Svelte components and Ultra CSS for neumorphism
    await import('@lanrenbang/basecoat-ultra/lighting');
    await import('@lanrenbang/basecoat-ultra/catppuccin-theme-switcher');
    
    // Initialize theme switcher
    if (typeof window !== 'undefined' && (window as any).basecoat) {
      (window as any).basecoat.initAll();
      (window as any).basecoat.start();
    }
  });
  
  function goBack() {
    window.history.back();
  }
  
  function handleSubmit(event: Event) {
    event.preventDefault();
  }
</script>

<svelte:head>
  <title>Neumorphism Demo - Basecoat Ultra Svelte</title>
</svelte:head>

<div class="bg-muted text-foreground antialiased flex min-h-screen overflow-hidden transition-colors duration-500">
  <main class="flex-1 h-screen overflow-y-auto flex flex-col items-center relative z-10">
    
    <!-- Top Bar -->
    <header class="w-full flex justify-between items-center px-8 py-6">
      <div class="flex items-center gap-3">
        <div class="neu-panel neu-round size-12 text-primary">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2a10 10 0 1 0 10 10 4 4 0 0 1-5-5 4 4 0 0 1-5-5c0-2 2-2 2-2"/></svg>
        </div>
        <span class="font-bold text-xl tracking-tight">Basecoat Ultra</span>
      </div>

      <div class="flex items-center gap-4">
        <!-- Return Button -->
        <button 
          type="button" 
          onclick={goBack}
          class="neu-btn neu-round size-10 flex items-center justify-center text-muted-foreground hover:text-primary transition-colors" 
          title="Back to Docs"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 14 4 9l5-5"/><path d="M4 9h10.5a5.5 5.5 0 0 1 5.5 5.5v0a5.5 5.5 0 0 1-5.5 5.5H11"/></svg>
        </button>

        <!-- Theme Switcher -->
        <div class="popover">
          <button type="button" class="neu-btn neu-round size-10 flex items-center justify-center text-muted-foreground hover:text-primary transition-colors" title="Switch Theme" aria-expanded="false">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.38 3.46 16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.47a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.47a2 2 0 0 0-1.34-2.23z"/></svg>
          </button>
          <div data-popover aria-hidden="true" class="catppuccin-theme-switcher w-96 p-6 bg-secondary/50 backdrop-blur-sm" data-side="bottom" data-align="end">
            <div class="flex items-center justify-between mb-4">
              <h3 class="font-semibold text-sm">Theme Switcher</h3>
            </div>
            <!-- Flavors -->
            <div class="theme-flavors mb-6"></div>
            <!-- Accents -->
            <div class="theme-accents"></div>
            <!-- Footer -->
            <div class="mt-6 flex justify-center">
              <button type="button" class="theme-reset btn btn-sm btn-ghost text-muted-foreground hover:text-destructive w-full">
                Reset Theme
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>

    <!-- Center Stage -->
    <div class="flex-1 w-full flex flex-col items-center justify-center p-4">
      
      <!-- Description Section -->
      <div class="text-center mb-8 max-w-md">
        <p class="text-muted-foreground text-sm mb-2">Advanced neumorphism effects with mouse-controlled lighting and 3D flip animations.</p>
        <p class="text-muted-foreground text-xs">Inspired by neumorphic lighting and 3D effects from <a href="https://github.com/puikinsh/login-forms/tree/main/forms/neumorphism" target="_blank" class="text-primary hover:underline">puikinsh/login-forms</a></p>
      </div>
      
      <!-- 3D Flip Container -->
      <div class="neu-flip-container w-full max-w-[400px] h-[550px]">
        
        <!-- Checkbox Toggle (Controls the flip state) -->
        <input type="checkbox" bind:checked={flipToggle} class="neu-flip-toggle" id="flip-toggle-svelte">
        
        <!-- Flipper Container -->
        <div class="neu-flip-inner neu-panel w-full h-full">
          
          <!-- Front Face (Login) -->
          <div class="neu-flip-face p-10 flex flex-col items-center">
            <div class="neu-panel neu-round size-24 mb-8 text-primary/80">
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
            </div>

            <h2 class="text-2xl font-bold mb-2">Member Login</h2>

            <form class="w-full space-y-6" onsubmit={handleSubmit}>
              <div class="neu-floating-group">
                <input type="text" id="login-user-svelte" class="neu-field" placeholder=" ">
                <label for="login-user-svelte">Username</label>
              </div>
              
              <div class="neu-floating-group">
                <input type="password" id="login-pass-svelte" class="neu-field" placeholder=" ">
                <label for="login-pass-svelte">Password</label>
              </div>

              <div class="pt-4">
                <button type="submit" class="neu-btn w-full py-4 text-primary text-lg">
                  Sign In
                </button>
              </div>
            </form>

            <div class="mt-auto pt-6 text-center">
              <button 
                type="button"
                onclick={() => flipToggle = !flipToggle}
                class="text-xs text-muted-foreground hover:text-primary hover:underline cursor-pointer transition-all border-none bg-transparent"
              >
                Don't have an account? Sign Up
              </button>
            </div>
          </div>

          <!-- Back Face (Register) -->
          <div class="neu-flip-face neu-flip-back p-10 flex flex-col items-center bg-background rounded-[inherit]">
            
            <div class="neu-panel neu-round size-24 mb-8 text-primary/80">
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="8.5" cy="7" r="4"/><line x1="20" y1="8" x2="20" y2="14"/><line x1="23" y1="11" x2="17" y2="11"/></svg>
            </div>

            <h2 class="text-2xl font-bold mb-2">Create Account</h2>
            <p class="text-muted-foreground text-sm mb-8 text-center">Join our community today.</p>

            <form class="w-full space-y-6" onsubmit={handleSubmit}>
              <div class="neu-floating-group">
                <input type="email" id="reg-email-svelte" class="neu-field" placeholder=" ">
                <label for="reg-email-svelte">Email Address</label>
              </div>
              
              <div class="neu-floating-group">
                <input type="password" id="reg-pass-svelte" class="neu-field" placeholder=" ">
                <label for="reg-pass-svelte">Choose Password</label>
              </div>

              <div class="pt-4">
                <button type="submit" class="neu-btn w-full py-4 text-primary text-lg">
                  Register
                </button>
              </div>
            </form>

            <div class="mt-auto pt-6 text-center">
              <button 
                type="button"
                onclick={() => flipToggle = !flipToggle}
                class="text-xs text-muted-foreground hover:text-primary hover:underline cursor-pointer transition-all border-none bg-transparent"
              >
                Already have an account? Sign In
              </button>
            </div>
          </div>

        </div>
      </div>

    </div>
  </main>
</div>