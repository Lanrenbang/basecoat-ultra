(() => {
  const THEMES = ['latte', 'frappe', 'macchiato', 'mocha'];
  const DARK_THEMES = ['frappe', 'macchiato', 'mocha'];
  const ACCENTS = [
    'rosewater', 'flamingo', 'pink', 'mauve', 'red', 'maroon', 'peach',
    'yellow', 'green', 'teal', 'sky', 'sapphire', 'blue', 'lavender'
  ];

  function getThemePreviewColors(theme) {
    if (!THEMES.includes(theme)) return {};
    const colors = { background: `var(--ctp-${theme}-base)` };
    ACCENTS.forEach(accent => {
      colors[accent] = `var(--ctp-${theme}-${accent})`;
    });
    return colors;
  }

  function setTheme(theme, accent, container) {
    const root = document.documentElement;
    THEMES.forEach(t => root.classList.remove(`theme-${t}`));
    ACCENTS.forEach(a => root.classList.remove(`accent-${a}`));

    root.classList.add(`theme-${theme}`);
    root.classList.add(`accent-${accent}`);

    if (DARK_THEMES.includes(theme)) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }

    try {
      localStorage.setItem('catppuccin-theme', theme);
      localStorage.setItem('catppuccin-accent', accent);
      localStorage.removeItem('basecoat-mode'); 
    } catch (e) {}

    if (container) {
        container.dispatchEvent(new CustomEvent('change', {
            bubbles: true,
            detail: { theme, accent }
        }));
    }
  }

  function initTheme() {
    try {
      const savedTheme = localStorage.getItem('catppuccin-theme');
      const savedAccent = localStorage.getItem('catppuccin-accent');
      const savedMode = localStorage.getItem('basecoat-mode');

      if (savedTheme && savedAccent) {
        setTheme(savedTheme, savedAccent);
      } else if (savedMode) {
        if (savedMode === 'dark') {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
      } else {
        const isSystemDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
        document.documentElement.classList.toggle('dark', isSystemDark);
      }
    } catch (e) {
        console.error('Basecoat: Theme initialization failed', e);
    }
  }

  if (typeof document !== 'undefined') {
    initTheme();
  }

  const init = (container) => {
    const flavorGroup = container.querySelector('.theme-flavors');
    const accentGrid = container.querySelector('.theme-accents');
    const resetButton = container.querySelector('.theme-reset');

    let currentFlavor = localStorage.getItem('catppuccin-theme');
    
    if (!currentFlavor || !THEMES.includes(currentFlavor)) {
        currentFlavor = document.documentElement.classList.contains('dark') ? 'mocha' : 'latte';
    }

    if (flavorGroup) {
        flavorGroup.innerHTML = '';
        flavorGroup.className = 'button-group w-full';
        THEMES.forEach(t => {
            const btn = document.createElement('button');
            btn.type = 'button';
            btn.className = 'btn btn-sm capitalize flex-1';
            btn.textContent = t;
            btn.dataset.flavor = t;
            flavorGroup.appendChild(btn);
        });
    }

    const updateFlavorUI = () => {
        if (!flavorGroup) return;
        const buttons = flavorGroup.querySelectorAll('[data-flavor]');
        buttons.forEach(btn => {
            if (btn.dataset.flavor === currentFlavor) {
                btn.classList.remove('btn-outline', 'btn-ghost');
                btn.classList.add('btn-primary');
            } else {
                btn.classList.remove('btn-primary');
                btn.classList.add('btn-ghost');
            }
        });
    };

    const renderAccents = () => {
        if (!accentGrid) return;
        accentGrid.innerHTML = '';
        
        const colors = getThemePreviewColors(currentFlavor);
        const appliedTheme = localStorage.getItem('catppuccin-theme');
        const appliedAccent = localStorage.getItem('catppuccin-accent');

        accentGrid.className = 'theme-accents grid grid-cols-7 gap-3 place-items-center p-4 rounded-xl border border-border/50 mt-4 transition-colors duration-300';
        accentGrid.style.backgroundColor = colors.background;
        
        ACCENTS.forEach(acc => {
            const btn = document.createElement('button');
            btn.type = 'button';
            const isSelected = appliedAccent === acc && appliedTheme === currentFlavor;
            btn.className = `size-6 rounded-full border border-border/20 shadow-sm transition-transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-ring relative flex items-center justify-center ${isSelected ? 'ring-2 ring-white ring-offset-2 scale-110' : ''}`;
            btn.title = acc;
            btn.style.backgroundColor = colors[acc];
            
            btn.dataset.tooltip = acc;
            btn.dataset.side = 'top';

            if (isSelected) {
                const checkmark = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
                checkmark.setAttribute('class', 'text-white drop-shadow-sm');
                checkmark.style.width = '12px';
                checkmark.style.height = '12px';
                checkmark.setAttribute('viewBox', '0 0 24 24');
                checkmark.setAttribute('fill', 'none');
                checkmark.setAttribute('stroke', 'currentColor');
                checkmark.setAttribute('stroke-width', '3');
                checkmark.setAttribute('stroke-linecap', 'round');
                checkmark.setAttribute('stroke-linejoin', 'round');
                const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
                path.setAttribute('d', 'M20 6 9 17l-5-5');
                checkmark.appendChild(path);
                btn.appendChild(checkmark);
            }

            btn.onclick = (e) => {
                e.stopPropagation();
                setTheme(currentFlavor, acc, container);
                updateFlavorUI(); 
                renderAccents();
            };
            accentGrid.appendChild(btn);
        });
    };

    if (flavorGroup) {
        flavorGroup.addEventListener('click', (e) => {
            const btn = e.target.closest('[data-flavor]');
            if (!btn) return;
            currentFlavor = btn.dataset.flavor;
            updateFlavorUI();
            renderAccents();
        });
    }

    if (resetButton) {
        resetButton.addEventListener('click', () => {
            const root = document.documentElement;
            const wasDark = root.classList.contains('dark');
            
            THEMES.forEach(t => root.classList.remove(`theme-${t}`));
            ACCENTS.forEach(a => root.classList.remove(`accent-${a}`));
            
            localStorage.removeItem('catppuccin-theme');
            localStorage.removeItem('catppuccin-accent');
            localStorage.setItem('basecoat-mode', wasDark ? 'dark' : 'light');

            if (wasDark) {
                root.classList.add('dark');
            } else {
                root.classList.remove('dark');
            }
            
            currentFlavor = wasDark ? 'mocha' : 'latte';
            updateFlavorUI();
            renderAccents();

            container.dispatchEvent(new CustomEvent('change', {
                bubbles: true,
                detail: { theme: null, accent: null, mode: wasDark ? 'dark' : 'light' }
            }));
        });
    }

    updateFlavorUI();
    renderAccents();

    container.dataset.catppuccinThemeSwitcherInitialized = true;
    container.dispatchEvent(new CustomEvent('basecoat:initialized'));
  };

  if (window.basecoat) {
    window.basecoat.register('catppuccin-theme-switcher', '.catppuccin-theme-switcher:not([data-catppuccin-theme-switcher-initialized])', init);
  }
})();
