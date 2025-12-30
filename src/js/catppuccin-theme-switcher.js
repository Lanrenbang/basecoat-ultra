(() => {
  const THEMES = ['latte', 'frappe', 'macchiato', 'mocha'];
  const DARK_THEMES = ['frappe', 'macchiato', 'mocha'];
  const ACCENTS = [
    'rosewater', 'flamingo', 'pink', 'mauve', 'red', 'maroon', 'peach',
    'yellow', 'green', 'teal', 'sky', 'sapphire', 'blue', 'lavender'
  ];

  /**
   * Returns a map of accent names to their CSS variable values for a specific theme.
   */
  function getThemePreviewColors(theme) {
    if (!THEMES.includes(theme)) return {};
    const colors = { background: `var(--ctp-${theme}-base)` };
    ACCENTS.forEach(accent => {
      colors[accent] = `var(--ctp-${theme}-${accent})`;
    });
    return colors;
  }

  /**
   * Sets the global theme and accent color.
   */
  function setTheme(theme, accent) {
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
      // When a specific theme is set, we can clear the generic mode override
      localStorage.removeItem('basecoat-mode'); 
    } catch (e) {}
  }

  /**
   * Initialize theme from localStorage or system preference.
   */
  function initTheme() {
    try {
      const savedTheme = localStorage.getItem('catppuccin-theme');
      const savedAccent = localStorage.getItem('catppuccin-accent');
      const savedMode = localStorage.getItem('basecoat-mode'); // 'dark' or 'light'

      if (savedTheme && savedAccent) {
        setTheme(savedTheme, savedAccent);
      } else if (savedMode) {
        // No specific theme, but we have a forced mode preference
        if (savedMode === 'dark') {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
      } else {
        // Fallback: System preference
        const isSystemDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
        document.documentElement.classList.toggle('dark', isSystemDark);
      }
    } catch (e) {
        console.error('Basecoat: Theme initialization failed', e);
    }
  }

  // Run immediately
  initTheme();

  /**
   * Component Initialization
   */
  const init = (container) => {
    const flavorGroup = container.querySelector('.theme-flavors');
    const accentGrid = container.querySelector('.theme-accents');
    const resetButton = container.querySelector('.theme-reset');

    let currentFlavor = localStorage.getItem('catppuccin-theme');
    
    // Fallback logic for UI state
    if (!currentFlavor || !THEMES.includes(currentFlavor)) {
        currentFlavor = document.documentElement.classList.contains('dark') ? 'mocha' : 'latte';
    }

    // 1. Render Flavor Buttons
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

    // 2. Render Accent Buttons
    const renderAccents = () => {
        if (!accentGrid) return;
        accentGrid.innerHTML = '';
        
        const colors = getThemePreviewColors(currentFlavor);

        accentGrid.className = 'theme-accents grid grid-cols-7 gap-3 place-items-center p-4 rounded-xl border border-border/50 mt-4 transition-colors duration-300';
        accentGrid.style.backgroundColor = colors.background;
        
        ACCENTS.forEach(acc => {
            const btn = document.createElement('button');
            btn.type = 'button';
            btn.className = 'size-6 rounded-full border border-border/20 shadow-sm transition-transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-ring';
            btn.title = acc;
            btn.style.backgroundColor = colors[acc];
            
            btn.dataset.tooltip = acc;
            btn.dataset.side = 'top';

            btn.onclick = () => {
                setTheme(currentFlavor, acc);
                updateFlavorUI(); 
            };
            accentGrid.appendChild(btn);
        });
    };

    // Event Listeners
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
            
            // 1. Remove Catppuccin Classes
            THEMES.forEach(t => root.classList.remove(`theme-${t}`));
            ACCENTS.forEach(a => root.classList.remove(`accent-${a}`));
            
            // 2. Manage Storage
            // Remove specific theme overrides
            localStorage.removeItem('catppuccin-theme');
            localStorage.removeItem('catppuccin-accent');
            
            // SAVE the mode preference explicitly
            // This ensures that if the user was Dark (even via Theme), they STAY Dark after refresh
            localStorage.setItem('basecoat-mode', wasDark ? 'dark' : 'light');

            // 3. Logic: Polarity is naturally preserved because we didn't touch the 'dark' class
            // But we must ensure the UI logic below is consistent.
            if (wasDark) {
                root.classList.add('dark');
            } else {
                root.classList.remove('dark');
            }
            
            // Update UI State
            currentFlavor = wasDark ? 'mocha' : 'latte';
            updateFlavorUI();
            renderAccents();
        });
    }

    updateFlavorUI();
    renderAccents();
  };

  if (window.basecoat) {
    window.basecoat.register('catppuccin-theme-switcher', '.catppuccin-theme-switcher', init);
  }
})();
