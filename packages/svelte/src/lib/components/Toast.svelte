<script lang="ts">
  import { onMount } from 'svelte';
  import { fade, slide } from 'svelte/transition';

  interface ToastConfig {
    id: string;
    title: string;
    description?: string;
    category?: 'success' | 'warning' | 'destructive' | 'info';
    duration?: number;
  }

  let toasts = $state<ToastConfig[]>([]);

  const addToast = (config: Omit<ToastConfig, 'id'>) => {
    const id = Math.random().toString(36).substring(2, 9);
    const newToast = { ...config, id };
    toasts = [...toasts, newToast];

    if (config.duration !== 0) {
      setTimeout(() => {
        removeToast(id);
      }, config.duration || 3000);
    }
  };

  const removeToast = (id: string) => {
    toasts = toasts.filter(t => t.id !== id);
  };

  onMount(() => {
    const handler = (e: CustomEvent) => {
      if (e.detail && e.detail.config) {
        addToast(e.detail.config);
      }
    };
    document.addEventListener('basecoat:toast', handler as any);
    return () => document.removeEventListener('basecoat:toast', handler as any);
  });
</script>

<section id="toaster" class="toaster fixed top-16 right-0 z-[200] flex max-h-screen w-full flex-col p-4 sm:flex-col md:max-w-[420px]">
  {#each toasts as toast (toast.id)}
    <div 
      in:slide={{ axis: 'y', duration: 200 }}
      out:slide={{ axis: 'y', duration: 200 }}
      class={['toast group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all', 
        toast.category === 'destructive' ? 'destructive border-destructive bg-destructive text-destructive-foreground' : 'bg-card text-card-foreground border-border'
      ].join(' ')}
    >
      <div class="grid gap-1">
        {#if toast.title}
          <div class="text-sm font-semibold">{toast.title}</div>
        {/if}
        {#if toast.description}
          <div class="text-sm opacity-90">{toast.description}</div>
        {/if}
      </div>
      <button 
        class="absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity hover:text-foreground focus:opacity-100 focus:outline-none focus:ring-2 group-hover:opacity-100"
        onclick={() => removeToast(toast.id)}
        aria-label="Close"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
      </button>
    </div>
  {/each}
</section>

<style>
  @import "../../../../ultra/src/css/parts/components/toast.css";
  @reference "../reference.css";
</style>
