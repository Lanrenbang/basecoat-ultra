<script lang="ts">
  import type { Snippet, Component } from 'svelte';
  import { onMount } from 'svelte';
  import hljs from 'highlight.js/lib/core';
  import xml from 'highlight.js/lib/languages/xml';
  import javascript from 'highlight.js/lib/languages/javascript';
  import typescript from 'highlight.js/lib/languages/typescript';
  import css from 'highlight.js/lib/languages/css';
  import bash from 'highlight.js/lib/languages/bash';
  import svelte from 'highlightjs-svelte';
  import 'highlight.js/styles/atom-one-dark.css';

  // Register languages
  hljs.registerLanguage('xml', xml);
  hljs.registerLanguage('javascript', javascript);
  hljs.registerLanguage('typescript', typescript);
  hljs.registerLanguage('css', css);
  hljs.registerLanguage('bash', bash);
  svelte(hljs);

  let {
    code = '',
    componentName = '',
    children
  }: {
    code?: string;
    componentName?: string;
    children: Snippet;
  } = $props();

  let activeTab = $state<'preview' | 'code' | 'installation'>('preview');
  let codeEl: HTMLElement;
  let copied = $state(false);
  let copiedInstall = $state<string | null>(null);

  // Installation commands for different package managers
  function getInstallCommands(componentName: string) {
    return [
      { manager: 'bun', command: `bunx basecoat-ultra-svelte add ${componentName}` },
      { manager: 'pnpm', command: `pnpm dlx basecoat-ultra-svelte add ${componentName}` },
      { manager: 'npm', command: `npx basecoat-ultra-svelte add ${componentName}` },
      { manager: 'yarn', command: `yarn dlx basecoat-ultra-svelte add ${componentName}` }
    ];
  }

  onMount(() => {
    if (codeEl) {
      hljs.highlightElement(codeEl);
    }
  });

  async function copyCode() {
    try {
      await navigator.clipboard.writeText(code);
      copied = true;
      setTimeout(() => copied = false, 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  }

  async function copyInstallCommand(command: string, manager: string) {
    try {
      await navigator.clipboard.writeText(command);
      copiedInstall = manager;
      setTimeout(() => copiedInstall = null, 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  }
</script>

<div class="w-full mb-12">
  <!-- Tab List -->
  <div role="tablist" class="mb-4 border-b w-full flex gap-6">
    <button
      type="button"
      role="tab"
      aria-selected={activeTab === 'preview'}
      class="relative pb-2 text-sm font-medium border-b-2 transition-colors {activeTab === 'preview' ? 'border-primary text-primary' : 'border-transparent text-muted-foreground hover:text-foreground'}"
      onclick={() => activeTab = 'preview'}
    >
      Preview
    </button>
    <button
      type="button"
      role="tab"
      aria-selected={activeTab === 'code'}
      class="relative pb-2 text-sm font-medium border-b-2 transition-colors {activeTab === 'code' ? 'border-primary text-primary' : 'border-transparent text-muted-foreground hover:text-foreground'}"
      onclick={() => activeTab = 'code'}
    >
      Code
    </button>
    <button
      type="button"
      role="tab"
      aria-selected={activeTab === 'installation'}
      class="relative pb-2 text-sm font-medium border-b-2 transition-colors {activeTab === 'installation' ? 'border-primary text-primary' : 'border-transparent text-muted-foreground hover:text-foreground'}"
      onclick={() => activeTab = 'installation'}
    >
      Installation
    </button>
  </div>

  <!-- Preview Panel -->
  <section role="tabpanel" class="w-full" hidden={activeTab !== 'preview'}>
    <div class="p-6 border rounded-lg bg-card">
      {@render children()}
    </div>
  </section>

  <!-- Code Panel -->
  <section role="tabpanel" class="w-full mt-4 group relative" hidden={activeTab !== 'code'}>
    <div class="relative rounded-lg bg-[#282c34] p-4 overflow-x-auto text-left shadow-inner text-white">
      <button
        type="button"
        class="absolute top-2 right-2 p-2 rounded-md bg-muted/80 hover:bg-muted text-muted-foreground hover:text-foreground transition-all opacity-0 group-hover:opacity-100 focus:opacity-100 z-10"
        title="Copy code"
        aria-label="Copy code"
        onclick={copyCode}
      >
        {#if copied}
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-green-500"><polyline points="20 6 9 17 4 12"/></svg>
        {:else}
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="14" height="14" x="8" y="8" rx="2" ry="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/></svg>
        {/if}
      </button>
      <pre><code bind:this={codeEl} class="language-svelte text-sm font-mono leading-relaxed bg-transparent p-0 border-0">{code}</code></pre>
    </div>
  </section>

  <!-- Installation Panel -->
  <section role="tabpanel" class="w-full mt-4 space-y-4" hidden={activeTab !== 'installation'}>
    {#each getInstallCommands(componentName) as { manager, command }}
      <div class="group relative">
        <div class="relative rounded-lg bg-[#282c34] p-4 overflow-x-auto text-left shadow-inner text-white">
          <button
            type="button"
            class="absolute top-2 right-2 p-2 rounded-md bg-muted/80 hover:bg-muted text-muted-foreground hover:text-foreground transition-all opacity-0 group-hover:opacity-100 focus:opacity-100 z-10"
            title="Copy command"
            aria-label="Copy {manager} command"
            onclick={() => copyInstallCommand(command, manager)}
          >
            {#if copiedInstall === manager}
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-green-500"><polyline points="20 6 9 17 4 12"/></svg>
            {:else}
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="14" height="14" x="8" y="8" rx="2" ry="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/></svg>
            {/if}
          </button>
          <pre><code class="language-bash text-sm font-mono leading-relaxed bg-transparent p-0 border-0">{command}</code></pre>
        </div>
      </div>
    {/each}
  </section>
</div>
