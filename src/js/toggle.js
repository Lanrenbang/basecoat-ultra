(() => {
  // Standalone Toggle
  const initToggle = (toggle) => {
    toggle.addEventListener('click', (e) => {
      if (toggle.disabled || toggle.getAttribute('aria-disabled') === 'true') return;
      
      const isPressed = toggle.getAttribute('aria-pressed') === 'true';
      toggle.setAttribute('aria-pressed', !isPressed);
    });
    toggle.dataset.toggleInitialized = true;
  };

  // Toggle Group
  const initToggleGroup = (group) => {
    const type = group.dataset.type || 'single';
    
    group.addEventListener('click', (event) => {
      // Look for .toggle class inside the group
      const toggle = event.target.closest('.toggle');
      if (!toggle || !group.contains(toggle)) return;
      
      if (toggle.disabled || toggle.getAttribute('aria-disabled') === 'true') return;

      const isPressed = toggle.getAttribute('aria-pressed') === 'true';
      
      if (type === 'single') {
        // If it's a single selection group:
        if (!isPressed) {
             // Unpress all others
            group.querySelectorAll('.toggle').forEach(t => {
                if (t !== toggle) t.setAttribute('aria-pressed', 'false');
            });
            // Press current
            toggle.setAttribute('aria-pressed', 'true');
        } else {
            // If already pressed, allow unpressing (standard behavior)
            toggle.setAttribute('aria-pressed', 'false');
        }
      } else {
        // Multiple: just toggle
        toggle.setAttribute('aria-pressed', !isPressed);
      }
    });

    group.dataset.toggleGroupInitialized = true;
  };

  if (window.basecoat) {
    // Register standalone toggles (those NOT in a group)
    window.basecoat.register('toggle', '.toggle:not(.toggle-group .toggle):not([data-toggle-initialized])', initToggle);
    
    // Register toggle groups
    window.basecoat.register('toggle-group', '.toggle-group:not([data-toggle-group-initialized])', initToggleGroup);
  }
})();