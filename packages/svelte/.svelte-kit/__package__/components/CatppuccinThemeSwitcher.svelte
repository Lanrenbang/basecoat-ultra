<script lang="ts">
  import { onMount } from 'svelte';

  const THEMES = ['latte', 'frappe', 'macchiato', 'mocha'];
  const DARK_THEMES = ['frappe', 'macchiato', 'mocha'];
  const ACCENTS = [
    'rosewater', 'flamingo', 'pink', 'mauve', 'red', 'maroon', 'peach',
    'yellow', 'green', 'teal', 'sky', 'sapphire', 'blue', 'lavender'
  ];

  let currentFlavor = $state('mocha'); // UI 预览用的口味
  let appliedFlavor = $state('');      // 实际应用的口味
  let appliedAccent = $state('');      // 实际应用的强调色

  function setTheme(theme: string, accent: string) {
    const root = document.documentElement;
    
    // 1. 彻底清除旧的主题类名
    THEMES.forEach(t => root.classList.remove(`theme-${t}`));
    ACCENTS.forEach(a => root.classList.remove(`accent-${a}`));

    // 2. 应用新的主题与强调色类名
    root.classList.add(`theme-${theme}`);
    root.classList.add(`accent-${accent}`);

    // 3. 同步亮/暗模式 (Basecoat 变量依赖 .dark)
    if (DARK_THEMES.includes(theme)) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }

    appliedFlavor = theme;
    appliedAccent = accent;

    try {
      localStorage.setItem('catppuccin-theme', theme);
      localStorage.setItem('catppuccin-accent', accent);
      localStorage.removeItem('basecoat-mode');
    } catch (e) {}
  }

  function resetTheme() {
    const root = document.documentElement;
    const wasDark = root.classList.contains('dark');
    
    THEMES.forEach(t => root.classList.remove(`theme-${t}`));
    ACCENTS.forEach(a => root.classList.remove(`accent-${a}`));
    
    localStorage.removeItem('catppuccin-theme');
    localStorage.removeItem('catppuccin-accent');
    localStorage.setItem('basecoat-mode', wasDark ? 'dark' : 'light');

    // 恢复到系统/手动模式默认
    if (wasDark) {
      root.classList.add('dark');
      currentFlavor = 'mocha';
    } else {
      root.classList.remove('dark');
      currentFlavor = 'latte';
    }
    appliedFlavor = '';
    appliedAccent = '';
  }

  onMount(() => {
    const savedTheme = localStorage.getItem('catppuccin-theme');
    const savedAccent = localStorage.getItem('catppuccin-accent');
    if (savedTheme && savedAccent) {
      currentFlavor = savedTheme;
      appliedFlavor = savedTheme;
      appliedAccent = savedAccent;
      // 确保初始化时类名也同步
      setTheme(savedTheme, savedAccent);
    } else {
      const isDark = document.documentElement.classList.contains('dark');
      currentFlavor = isDark ? 'mocha' : 'latte';
    }
  });

  // 预览色计算
  const previewColors = $derived.by(() => {
    const colors: Record<string, string> = { background: `var(--ctp-${currentFlavor}-base)` };
    ACCENTS.forEach(accent => {
      colors[accent] = `var(--ctp-${currentFlavor}-${accent})`;
    });
    return colors;
  });
</script>

<div class="catppuccin-theme-switcher w-full max-w-sm space-y-6">
  <!-- Flavors: 仅更新预览状态 -->
  <div class="button-group w-full" data-orientation="horizontal">
    {#each THEMES as theme}
      <button 
        type="button" 
        class={['btn btn-sm capitalize flex-1', currentFlavor === theme ? 'btn-primary' : 'btn-ghost'].join(' ')}
        onclick={() => currentFlavor = theme}
      >
        {theme}
      </button>
    {/each}
  </div>

  <!-- Accents: 点击应用主题 -->
  <div 
    class="grid grid-cols-7 gap-3 place-items-center p-4 rounded-xl border border-border/50 transition-colors duration-300 shadow-inner"
    style:background-color={previewColors.background}
  >
    {#each ACCENTS as accent}
      <button 
        type="button" 
        class={['size-6 rounded-full border border-white/20 shadow-sm transition-transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-ring relative flex items-center justify-center',
          appliedAccent === accent && appliedFlavor === currentFlavor ? 'ring-2 ring-white ring-offset-2 scale-110' : ''
        ].join(' ')}
        title={accent}
        style:background-color={previewColors[accent]}
        onclick={() => setTheme(currentFlavor, accent)}
      >
        {#if appliedAccent === accent && appliedFlavor === currentFlavor}
          <svg class="text-white drop-shadow-sm" style="width: 12px; height: 12px;" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>
        {/if}
      </button>
    {/each}
  </div>

  <div class="flex justify-center">
    <button type="button" class="theme-reset btn btn-sm btn-ghost text-muted-foreground hover:text-destructive w-full" onclick={resetTheme}>
      Reset Theme
    </button>
  </div>
</div>