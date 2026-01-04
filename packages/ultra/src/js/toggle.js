(() => {
  const initToggle = (toggle) => {
    toggle.addEventListener('click', (e) => {
      if (toggle.disabled || toggle.getAttribute('aria-disabled') === 'true') return;
      
      const isPressed = toggle.getAttribute('aria-pressed') === 'true';
      toggle.setAttribute('aria-pressed', !isPressed);
    });
    
    toggle.dataset.toggleInitialized = true;
  };

  const initToggleGroup = (group) => {
    const type = group.dataset.type || 'single';
    
    group.addEventListener('click', (event) => {
      const toggle = event.target.closest('.toggle');
      if (!toggle || !group.contains(toggle)) return;
      
      if (toggle.disabled || toggle.getAttribute('aria-disabled') === 'true') return;

      const isPressed = toggle.getAttribute('aria-pressed') === 'true';
      
      if (type === 'single') {
        if (!isPressed) {
            group.querySelectorAll('.toggle').forEach(t => {
                if (t !== toggle) t.setAttribute('aria-pressed', 'false');
            });
            toggle.setAttribute('aria-pressed', 'true');
        } else {
            toggle.setAttribute('aria-pressed', 'false');
        }
      } else {
        toggle.setAttribute('aria-pressed', !isPressed);
      }

      const selected = Array.from(group.querySelectorAll('.toggle[aria-pressed="true"]'))
        .map(t => t.dataset.value || t.innerText.trim());
      
      group.dispatchEvent(new CustomEvent('change', {
        bubbles: true,
        detail: { value: type === 'single' ? (selected[0] || null) : selected }
      }));
    });
    
    group.dataset.toggleGroupInitialized = true;
  };

  if (window.basecoat) {
    window.basecoat.register('toggle', '.toggle:not(.toggle-group .toggle):not([data-toggle-initialized])', initToggle);
    window.basecoat.register('toggle-group', '.toggle-group:not([data-toggle-group-initialized])', initToggleGroup);
  }
})();
