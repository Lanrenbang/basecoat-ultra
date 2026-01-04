<script lang="ts">
  import { onMount, onDestroy } from 'svelte';
  import { registry } from '$lib/registry';
  import hljs from 'highlight.js/lib/core';
  import xml from 'highlight.js/lib/languages/xml';
  import javascript from 'highlight.js/lib/languages/javascript';
  import css from 'highlight.js/lib/languages/css';
  import 'highlight.js/styles/atom-one-dark.css';

  // Register languages
  hljs.registerLanguage('xml', xml);
  hljs.registerLanguage('html', xml);
  hljs.registerLanguage('javascript', javascript);
  hljs.registerLanguage('css', css);
  
  // Import Ultra JS modules
  onMount(async () => {
    // Only initialize Ultra JS on the Ultra page (not Svelte page)
    if (window.location.pathname === '/ultra' || window.location.pathname === '/ultra/') {
      // Dynamic import all Ultra JS modules
      // basecoat.js must be imported first to set up window.basecoat
      await import('@lanrenbang/basecoat-ultra/all');
      await import('@lanrenbang/basecoat-ultra/datepicker');
      await import('@lanrenbang/basecoat-ultra/resizable');
      
      // Since DOMContentLoaded already fired, manually initialize all components
      if (typeof window !== 'undefined' && (window as any).basecoat) {
        (window as any).basecoat.initAll();
        (window as any).basecoat.start();
      }
    }
    
    // Initialize demo tabs
    initDemoTabs();
    initScrollSpy();
  });
  
  // Stop the MutationObserver when leaving this page to prevent errors on Svelte page
  onDestroy(() => {
    if (typeof window !== 'undefined' && (window as any).basecoat) {
      (window as any).basecoat.stop();
    }
  });
  
  function initDemoTabs() {
    const formatHTML = (code: string) => {
      const div = document.createElement('div');
      div.innerHTML = code.trim();
      
      const formatNode = (node: Node, level: number): string => {
        const indent = '  '.repeat(level);
        
        if (node.nodeType === 3) {
          const text = node.textContent?.trim();
          if (!text) return '';
          return indent + text + '\n';
        }
        
        if (node.nodeType === 1) {
          const el = node as Element;
          const tagName = el.tagName.toLowerCase();
          let output = indent + '<' + tagName;
          
          Array.from(el.attributes).forEach(attr => {
            output += ` ${attr.name}="${attr.value}"`;
          });
          
          const voidElements = ['area', 'base', 'br', 'col', 'embed', 'hr', 'img', 'input', 'link', 'meta', 'param', 'source', 'track', 'wbr'];
          if (voidElements.includes(tagName)) {
            return output + ' />\n';
          }
          
          output += '>';
          
          const children = Array.from(el.childNodes);
          if (children.length > 0) {
            if (children.length === 1 && children[0].nodeType === 3) {
              const text = children[0].textContent?.trim();
              if (text && text.length < 60 && !text.includes('\n')) {
                return output + text + `</${tagName}>\n`;
              }
            }
            
            output += '\n';
            children.forEach(child => {
              output += formatNode(child, level + 1);
            });
            output += indent + `</${tagName}>\n`;
          } else {
            output += `</${tagName}>\n`;
          }
          return output;
        }
        return '';
      };
      
      let result = '';
      Array.from(div.childNodes).forEach(node => {
        result += formatNode(node, 0);
      });
      return result.trim();
    };

    const escapeHTML = (str: string) => {
      return str.replace(/&/g, "&amp;")
                .replace(/</g, "&lt;")
                .replace(/>/g, "&gt;")
                .replace(/"/g, "&quot;")
                .replace(/'/g, "&#039;");
    };

    const examples = document.querySelectorAll('div.bg-card.border.rounded-lg');
    
    examples.forEach((example, index) => {
      if(example.closest('.tabs-generated')) return;

      let sourceCode = example.innerHTML
        .replace(/ class=""/g, '')
        .replace(/ style=""/g, '')
        .trim();
      
      const prettyCode = formatHTML(sourceCode);
      const escapedCode = escapeHTML(prettyCode);

      const uid = `demo-ex-${index}`;
      
      const tabsContainer = document.createElement('div');
      tabsContainer.className = 'w-full tabs-generated mb-12';
      
      const tabList = document.createElement('div');
      tabList.setAttribute('role', 'tablist');
      tabList.className = 'mb-4 border-b w-full flex gap-6';
      
      const createTab = (text: string, type: string, selected: boolean) => {
        const btn = document.createElement('button');
        btn.className = `relative pb-2 text-sm font-medium border-b-2 transition-colors ${selected ? 'border-primary text-primary' : 'border-transparent text-muted-foreground hover:text-foreground'}`;
        btn.setAttribute('role', 'tab');
        btn.setAttribute('aria-controls', `${uid}-${type}`);
        btn.setAttribute('aria-selected', String(selected));
        btn.textContent = text;
        return btn;
      };

      const btnPreview = createTab('Preview', 'preview', true);
      const btnCode = createTab('Code', 'code', false);
      
      const panelPreview = document.createElement('section');
      panelPreview.id = `${uid}-preview`;
      panelPreview.setAttribute('role', 'tabpanel');
      panelPreview.className = 'w-full';
      
      const panelCode = document.createElement('section');
      panelCode.id = `${uid}-code`;
      panelCode.setAttribute('role', 'tabpanel');
      panelCode.hidden = true;
      panelCode.className = 'w-full mt-4 group relative';

      const switchTab = (targetBtn: HTMLButtonElement) => {
        const isPreview = targetBtn === btnPreview;
        
        btnPreview.setAttribute('aria-selected', String(isPreview));
        btnCode.setAttribute('aria-selected', String(!isPreview));
        
        const activeClass = 'border-primary text-primary';
        const inactiveClass = 'border-transparent text-muted-foreground hover:text-foreground';
        
        if (isPreview) {
          btnPreview.className = btnPreview.className.replace(inactiveClass, activeClass);
          btnCode.className = btnCode.className.replace(activeClass, inactiveClass);
        } else {
          btnCode.className = btnCode.className.replace(inactiveClass, activeClass);
          btnPreview.className = btnPreview.className.replace(activeClass, inactiveClass);
        }

        panelPreview.hidden = !isPreview;
        panelCode.hidden = isPreview;
      };

      btnPreview.addEventListener('click', () => switchTab(btnPreview));
      btnCode.addEventListener('click', () => switchTab(btnCode));
      
      tabList.appendChild(btnPreview);
      tabList.appendChild(btnCode);

      const copyBtnHTML = `
        <button class="absolute top-2 right-2 p-2 rounded-md bg-muted/80 hover:bg-muted text-muted-foreground hover:text-foreground transition-all opacity-0 group-hover:opacity-100 focus:opacity-100 z-10" title="Copy code" aria-label="Copy code">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="copy-icon"><rect width="14" height="14" x="8" y="8" rx="2" ry="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/></svg>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="check-icon hidden text-green-500"><polyline points="20 6 9 17 4 12"/></svg>
        </button>
      `;
      
      panelCode.innerHTML = `<div class="relative rounded-lg bg-[#282c34] p-4 overflow-x-auto text-left shadow-inner text-white">${copyBtnHTML}<pre><code class="language-html text-sm font-mono leading-relaxed bg-transparent p-0 border-0">${escapedCode}</code></pre></div>`;

      const copyBtn = panelCode.querySelector('button');
      copyBtn?.addEventListener('click', async () => {
        try {
          await navigator.clipboard.writeText(prettyCode);
          const copyIcon = copyBtn.querySelector('.copy-icon');
          const checkIcon = copyBtn.querySelector('.check-icon');
          copyIcon?.classList.add('hidden');
          checkIcon?.classList.remove('hidden');
          
          setTimeout(() => {
            copyIcon?.classList.remove('hidden');
            checkIcon?.classList.add('hidden');
          }, 2000);
        } catch (err) {
          console.error('Failed to copy!', err);
        }
      });

      example.parentNode?.insertBefore(tabsContainer, example);
      
      tabsContainer.appendChild(tabList);
      tabsContainer.appendChild(panelPreview);
      tabsContainer.appendChild(panelCode);
      
      panelPreview.appendChild(example);
    });

    hljs.highlightAll();
  }
  
  function initScrollSpy() {
    const main = document.querySelector('main');
    if (!main) return;
    
    const observerOptions = {
      root: main,
      rootMargin: '-20% 0px -70% 0px',
      threshold: 0
    };

    const sidebarLinks = document.querySelectorAll('#main-sidebar nav section ul li a');
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const id = entry.target.id;
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
      });
    }, observerOptions);

    // Observe all sections that have IDs matching sidebar links
    sidebarLinks.forEach(link => {
      const href = link.getAttribute('href');
      if (href && href.startsWith('#')) {
        const section = document.getElementById(href.substring(1));
        if (section) {
          observer.observe(section);
        }
      }
    });
    
    // Set initial active state based on scroll position
    const firstLink = sidebarLinks[0];
    if (firstLink) {
      firstLink.setAttribute('aria-current', 'page');
    }
  }
  
  let sidebarOpen = $state(true);
</script>

<svelte:head>
  <title>Basecoat Ultra Components</title>
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
        <a href="/ultra" class="flex items-center gap-2 font-semibold text-lg">
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
                    <a href="/ultra/neumorphism-demo" class="block px-2 py-1.5 rounded-md hover:bg-accent hover:text-accent-foreground text-sm">
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
        <div class="popover w-full">
          <button type="button" class="btn btn-ghost w-full justify-start gap-2 p-2 h-12" aria-expanded="false">
            <div class="avatar size-8 rounded-lg overflow-hidden bg-muted">
              <img src="https://github.com/Lanrenbang.png" alt="@Lanrenbang" />
            </div>
            <div class="text-left flex-1 grid leading-tight">
              <span class="font-medium truncate text-sm">L.R.B</span>
              <span class="text-xs text-muted-foreground truncate">@Lanrenbang</span>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-muted-foreground opacity-50"><path d="m7 15 5 5 5-5"/><path d="m7 9 5-5 5 5"/></svg>
          </button>
          <section data-popover aria-hidden="true" data-side="top" class="w-60 p-1">
            <div role="menu">
              <div role="heading" class="px-2 py-1.5 text-sm font-semibold text-muted-foreground">My Account</div>
              <button type="button" role="menuitem" class="w-full text-left cursor-default flex items-center gap-2 rounded-sm px-2 py-1.5 text-sm hover:bg-accent hover:text-accent-foreground">Profile</button>
              <button type="button" role="menuitem" class="w-full text-left cursor-default flex items-center gap-2 rounded-sm px-2 py-1.5 text-sm hover:bg-accent hover:text-accent-foreground">Settings</button>
              <hr role="separator" class="my-1 border-muted">
              <button type="button" role="menuitem" class="w-full text-left cursor-default flex items-center gap-2 rounded-sm px-2 py-1.5 text-sm hover:bg-accent hover:text-accent-foreground text-destructive">Logout</button>
            </div>
          </section>
        </div>
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
        <span class="font-medium text-foreground">Components</span>
      </nav>

      <div class="ml-auto flex items-center gap-2">
        <a href="/introduction" class="btn btn-sm btn-ghost text-sm">Introduction</a>
        <a href="/svelte" class="btn btn-sm btn-ghost text-sm">Svelte Components</a>
        <div class="popover">
          <button type="button" class="btn btn-sm btn-ghost btn-icon text-muted-foreground hover:text-foreground" title="Theme Switcher">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.38 3.46 16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.47a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.47a2 2 0 0 0-1.34-2.23z"/></svg>
          </button>
          <div data-popover aria-hidden="true" class="catppuccin-theme-switcher w-96 p-6 bg-secondary/50 backdrop-blur-sm" data-side="bottom" data-align="end">
            <div class="flex items-center justify-between mb-4">
              <h3 class="font-semibold text-sm">Theme Switcher</h3>
            </div>
            <div class="theme-flavors mb-6"></div>
            <div class="theme-accents"></div>
            <div class="mt-6 flex justify-center">
              <button type="button" class="theme-reset btn btn-sm btn-ghost text-muted-foreground hover:text-destructive w-full">
                Reset Theme
              </button>
            </div>
          </div>
        </div>
        <a href="https://github.com/Lanrenbang/basecoat-ultra" target="_blank" class="btn btn-sm btn-ghost btn-icon text-muted-foreground hover:text-foreground">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
        </a>
      </div>
    </header>

    <div class="flex-1 p-8 lg:p-12 space-y-24 scroll-smooth max-w-4xl mx-auto w-full">
      <!-- Content will be rendered by ComponentSections -->
      {#await import('./ComponentSections.svelte') then { default: ComponentSections }}
        <ComponentSections />
      {/await}
    </div>
  </main>
  
  <section id="toaster" class="toaster"></section>
</div>

<style>
  :global(.scrollbar::-webkit-scrollbar) { width: 6px; }
  :global(.scrollbar::-webkit-scrollbar-thumb) { background: var(--muted); border-radius: 10px; }
  :global(body) { overflow: hidden !important; }
</style>
