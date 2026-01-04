<script lang="ts">
  import type { Snippet } from 'svelte';
  import { onMount } from 'svelte';

  let {
    open = $bindable(false),
    title,
    description,
    children,
    footer,
    role = 'dialog',
    class: className = '',
    ...rest
  }: {
    open?: boolean;
    title?: string | Snippet;
    description?: string | Snippet;
    children: Snippet;
    footer?: Snippet;
    role?: 'dialog' | 'alertdialog';
    class?: string;
    [key: string]: any;
  } = $props();

  let dialogElement: HTMLDialogElement;

  $effect(() => {
    if (open) {
      dialogElement?.showModal();
    } else {
      dialogElement?.close();
    }
  });

  const handleClose = () => {
    open = false;
  };
</script>

<!-- svelte-ignore a11y_click_events_have_key_events -->
<!-- svelte-ignore a11y_no_noninteractive_element_interactions -->
<dialog
  bind:this={dialogElement}
  class={['dialog', className].filter(Boolean).join(' ')}
  {role}
  onclose={handleClose}
  onclick={(e) => {
    // Only close on backdrop click for regular dialog, not alertdialog
    if (role !== 'alertdialog' && e.target === dialogElement) {
      handleClose();
    }
  }}
  {...rest}
>
  <!-- Only show close button for regular dialogs, not alert dialogs -->
  {#if role !== 'alertdialog'}
    <button class="close" aria-label="Close" onclick={handleClose}>
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
    </button>
  {/if}

  {#if title || description}
    <header>
      {#if title}
        <h2>
          {#if typeof title === 'string'}{title}{:else}{@render title()}{/if}
        </h2>
      {/if}
      {#if description}
        <p>
          {#if typeof description === 'string'}{description}{:else}{@render description()}{/if}
        </p>
      {/if}
    </header>
  {/if}

  <section>
    {@render children()}
  </section>

  {#if footer}
    <footer>
      {@render footer()}
    </footer>
  {/if}
</dialog>

<style>
  @import "../../../../ultra/src/css/parts/components/dialog.css";
  @reference "../reference.css";
</style>
