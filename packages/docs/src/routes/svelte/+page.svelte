<script lang="ts">
  import { onMount } from 'svelte';
  import { registry } from '$lib/registry';
  import DemoTabs from '$lib/components/DemoTabs.svelte';
  import Popover from '@lanrenbang/basecoat-ultra-svelte/components/Popover.svelte';
  import CatppuccinThemeSwitcher from '@lanrenbang/basecoat-ultra-svelte/components/CatppuccinThemeSwitcher.svelte';
  import Toast from '@lanrenbang/basecoat-ultra-svelte/components/Toast.svelte';

  // Import example components
  const exampleModules = import.meta.glob('$lib/examples/svelte/*.svelte', { eager: true });
  const exampleSources = import.meta.glob('$lib/examples/svelte/*.svelte', { eager: true, query: '?raw', import: 'default' }) as Record<string, string>;

  // Build examples map
  const examples: Record<string, { component: any; code: string }> = {};
  for (const path in exampleModules) {
    const name = path.split('/').pop()?.replace('.svelte', '') || '';
    examples[name] = {
      component: (exampleModules[path] as any).default,
      code: exampleSources[path] || ''
    };
  }

  let sidebarOpen = $state(true);

  onMount(() => {
    initScrollSpy();
  });

  function initScrollSpy() {
    const main = document.querySelector('main');
    if (!main) return;
    
    const observerOptions = {
      root: main,
      rootMargin: '-10% 0px -80% 0px',
      threshold: 0
    };

    const sidebarLinks = document.querySelectorAll('#main-sidebar nav section ul li a');
    
    const observer = new IntersectionObserver((entries) => {
      let mostVisibleEntry: IntersectionObserverEntry | null = null;
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          if (!mostVisibleEntry || entry.intersectionRatio > mostVisibleEntry.intersectionRatio) {
            mostVisibleEntry = entry;
          }
        }
      });

      if (mostVisibleEntry) {
        const id = mostVisibleEntry.target.id;
        sidebarLinks.forEach(link => {
          const href = link.getAttribute('href');
          if (href === `#${id}`) {
            link.setAttribute('aria-current', 'page');
            link.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
          } else {
            link.removeAttribute('aria-current');
          }
        });
      }
    }, observerOptions);

    sidebarLinks.forEach(link => {
      const href = link.getAttribute('href');
      if (href && href.startsWith('#')) {
        const section = document.getElementById(href.substring(1));
        if (section) observer.observe(section);
      }
    });
    
    const firstLink = sidebarLinks[0];
    if (firstLink) firstLink.setAttribute('aria-current', 'page');
  }

  // Component ID to example file mapping
  const componentExamples: Record<string, string> = {
    'button': 'button',
    'button-group': 'button-group',
    'badge': 'badge',
    'kbd': 'kbd',
    'input': 'input',
    'input-group': 'input-group',
    'textarea': 'textarea',
    'checkbox': 'checkbox',
    'radio-group': 'radio-group',
    'switch': 'switch',
    'select': 'select',
    'combobox': 'combobox',
    'slider': 'slider',
    'form': 'form',
    'tabs': 'tabs',
    'breadcrumb': 'breadcrumb',
    'pagination': 'pagination',
    'dropdown-menu': 'dropdown-menu',
    'card': 'card',
    'accordion': 'accordion',
    'table': 'table',
    'avatar': 'avatar',
    'item': 'item',
    'alert': 'alert',
    'progress': 'progress',
    'spinner': 'spinner',
    'skeleton': 'skeleton',
    'empty-state': 'empty-state',
    'dialog': 'dialog',
    'popover': 'popover',
    'tooltip': 'tooltip',
    'toggle': 'toggle',
    'toggle-group': 'toggle-group',
    'toast': 'toast',
    'command': 'command',
    'input-otp': 'input-otp',
    'carousel': 'carousel',
    'sheet': 'sheet',
    'drawer': 'drawer',
    'datepicker': 'datepicker',
    'resizable': 'resizable'
  };
</script>

<svelte:head>
  <title>Basecoat Ultra - Svelte 5 Components</title>
</svelte:head>

<div class="bg-background text-foreground antialiased flex min-h-screen overflow-hidden">
  <!-- Sidebar -->
  <aside 
    class="sidebar h-screen sticky top-0 border-r bg-card z-40 flex-shrink-0 transition-all duration-300 overflow-hidden" 
    id="main-sidebar"
    data-side="left"
    aria-hidden={!sidebarOpen}
    style="width: {sidebarOpen ? '16rem' : '0'};"
  >
    <nav aria-label="Sidebar navigation" class="h-full flex flex-col w-64 bg-card border-r">
      <header class="p-4 border-b h-14 flex items-center">
        <a href="/svelte" class="flex items-center gap-2 font-semibold text-lg">
          <div class="bg-primary text-primary-foreground flex aspect-square size-8 items-center justify-center rounded-lg">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" class="h-4 w-4"><rect width="256" height="256" fill="none"></rect><line x1="208" y1="128" x2="128" y2="208" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"></line><line x1="192" y1="40" x2="40" y2="192" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"></line></svg>
          </div>
          <span>Basecoat Ultra</span>
        </a>
      </header>
      <section class="scrollbar flex-1 overflow-y-auto p-4 space-y-6">
        {#each registry as category}
          <details open>
            <summary>{category.name}</summary>
            <ul class="space-y-1">
              {#each category.items as item}
                <li>
                  {#if item.id === 'neumorphism-demo'}
                    <a href="/svelte/neumorphism-demo" class="block px-2 py-1.5 rounded-md hover:bg-accent hover:text-accent-foreground text-sm">
                      {item.name}
                    </a>
                  {:else}
                    <a href="#{item.id}" class="block px-2 py-1.5 rounded-md hover:bg-accent hover:text-accent-foreground text-sm">
                      {item.name}
                    </a>
                  {/if}
                </li>
              {/each}
            </ul>
          </details>
        {/each}
      </section>
      <footer class="p-2 border-t">
        <Popover side="top" align="start" contentClass="w-60 p-1" class="w-full">
          {#snippet trigger({ open })}
            <button type="button" class="btn btn-ghost w-full justify-start gap-2 p-2 h-12" aria-expanded={open}>
              <div class="avatar size-8 rounded-lg overflow-hidden bg-muted">
                <img src="https://github.com/Lanrenbang.png" alt="@Lanrenbang" />
              </div>
              <div class="text-left flex-1 grid leading-tight">
                <span class="font-medium truncate text-sm">L.R.B</span>
                <span class="text-xs text-muted-foreground truncate">@Lanrenbang</span>
              </div>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-muted-foreground opacity-50"><path d="m7 15 5 5 5-5"/><path d="m7 9 5-5 5 5"/></svg>
            </button>
          {/snippet}
          {#snippet children()}
            <div role="menu">
              <div role="heading" class="px-2 py-1.5 text-sm font-semibold text-muted-foreground">My Account</div>
              <button type="button" role="menuitem" class="w-full text-left cursor-default flex items-center gap-2 rounded-sm px-2 py-1.5 text-sm hover:bg-accent hover:text-accent-foreground">Profile</button>
              <button type="button" role="menuitem" class="w-full text-left cursor-default flex items-center gap-2 rounded-sm px-2 py-1.5 text-sm hover:bg-accent hover:text-accent-foreground">Settings</button>
              <hr role="separator" class="my-1 border-muted">
              <button type="button" role="menuitem" class="w-full text-left cursor-default flex items-center gap-2 rounded-sm px-2 py-1.5 text-sm hover:bg-accent hover:text-accent-foreground text-destructive">Logout</button>
            </div>
          {/snippet}
        </Popover>
      </footer>
    </nav>
  </aside>

  <!-- Main Content Wrapper -->
  <main class="flex-1 min-w-0 h-screen overflow-y-auto bg-background flex flex-col scroll-pt-20 ml-0!">
    
    <!-- Top Header -->
    <header class="bg-background sticky inset-x-0 top-0 isolate flex shrink-0 items-center gap-2 border-b z-30 h-14 px-4 shadow-sm">
      <button
        type="button"
        onclick={() => sidebarOpen = !sidebarOpen}
        aria-label="Toggle sidebar"
        class="btn btn-sm btn-ghost btn-icon -ml-2 text-muted-foreground hover:text-foreground"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M9 3v18"/></svg>
      </button>
      
      <div class="h-4 w-px bg-border mx-2"></div>

      <nav class="flex items-center text-sm text-muted-foreground">
        <a href="/introduction" class="hover:text-foreground transition-colors">Docs</a>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mx-2 opacity-50"><path d="m9 18 6-6-6-6"/></svg>
        <span class="font-medium text-foreground">Svelte Components</span>
      </nav>

      <div class="ml-auto flex items-center gap-2">
        <a href="/introduction" class="btn btn-sm btn-ghost text-sm">Introduction</a>
        <a href="/ultra" class="btn btn-sm btn-ghost text-sm">Ultra Components</a>
        
        <Popover side="bottom" align="end" contentClass="!p-0 bg-transparent border-0 shadow-none !mt-0" class="relative">
          {#snippet trigger({ open })}
            <button type="button" class="btn btn-sm btn-ghost btn-icon text-muted-foreground hover:text-foreground" title="Theme Switcher" aria-label="Theme Switcher" aria-expanded={open}>
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.38 3.46 16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.47a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.47a2 2 0 0 0-1.34-2.23z"/></svg>
            </button>
          {/snippet}
          {#snippet children()}
            <div class="catppuccin-theme-switcher w-96 p-6 bg-secondary/50 backdrop-blur-sm rounded-md border shadow-md">
              <div class="flex items-center justify-between mb-4">
                <h3 class="font-semibold text-sm">Theme Switcher</h3>
              </div>
              <CatppuccinThemeSwitcher />
            </div>
          {/snippet}
        </Popover>
        
        <a href="https://github.com/Lanrenbang/basecoat-ultra" target="_blank" class="btn btn-sm btn-ghost btn-icon text-muted-foreground hover:text-foreground" aria-label="View on GitHub">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
        </a>
      </div>
    </header>

    <div class="flex-1 p-8 lg:p-12 space-y-24 scroll-smooth max-w-4xl mx-auto w-full">
      {#each registry.filter(category => category.name !== 'Showcase') as category}
        <section id="{category.name.toLowerCase().replace(/\s+/g, '-')}-section" class="space-y-12">
          <h2 class="text-3xl font-bold tracking-tight border-b pb-2">{category.name}</h2>
          
          {#each category.items as item}
              {@const exampleName = componentExamples[item.id]}
              {@const example = exampleName ? examples[exampleName] : null}
              
              <div id={item.id} class="space-y-4">
                <h3 class="text-xl font-semibold">{item.name}</h3>
                
                {#if item.description}
                  <div class="space-y-2 text-sm text-muted-foreground">
                    <p>- {item.description}</p>
                  </div>
                {/if}
                
                {#if example}
                  <DemoTabs code={example.code} componentName={exampleName}>
                    {@const ExampleComponent = example.component}
                    <ExampleComponent />
                  </DemoTabs>
                {:else if item.id === 'neumorphism-demo'}
                  <div class="p-6 border rounded-lg bg-card text-muted-foreground">
                    This demo is available as a separate page. Click "Neumorphism Demo" in the sidebar to view it.
                  </div>
                {:else}
                  <div class="p-6 border rounded-lg bg-card text-muted-foreground">
                    Example not found for {item.name}
                  </div>
                {/if}
              </div>
          {/each}
        </section>
      {/each}
    </div>
  </main>
  
  <Toast />
</div>

<style>
  :global(.scrollbar::-webkit-scrollbar) { width: 6px; }
  :global(.scrollbar::-webkit-scrollbar-thumb) { background: var(--muted); border-radius: 10px; }
  :global(body) { overflow: hidden !important; }
</style>
