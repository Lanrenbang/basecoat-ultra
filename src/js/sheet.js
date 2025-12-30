(() => {
  const toggleSheet = (trigger) => {
    const targetId = trigger.getAttribute('aria-controls') || trigger.dataset.target;
    if (!targetId) return;

    const sheet = document.getElementById(targetId);
    if (!sheet) return;

    const isOpen = sheet.getAttribute('aria-hidden') === 'false';
    const content = sheet.querySelector('.sheet-content, .drawer-content');

    if (isOpen) {
        closeSheet(sheet);
    } else {
        openSheet(sheet, trigger);
    }
  };

  const openSheet = (sheet, trigger) => {
    sheet.setAttribute('aria-hidden', 'false');
    // Force reflow
    sheet.offsetHeight;
    
    const content = sheet.querySelector('.sheet-content, .drawer-content');
    if (content) {
        content.dataset.state = 'open';
    }
    
    if (trigger) {
        trigger.setAttribute('aria-expanded', 'true');
        sheet.dataset.triggerId = trigger.id || ''; // Save trigger ID to restore focus
    }

    document.body.style.overflow = 'hidden'; // Lock body scroll
  };

  const closeSheet = (sheet) => {
    const content = sheet.querySelector('.sheet-content, .drawer-content');
    if (content) {
        content.dataset.state = 'closed';
        
        // Wait for animation
        const transitionDuration = parseFloat(window.getComputedStyle(content).transitionDuration) * 1000 || 300;
        
        setTimeout(() => {
            if (content.dataset.state === 'closed') { // Check if still closed
                 sheet.setAttribute('aria-hidden', 'true');
                 document.body.style.overflow = ''; // Unlock body scroll
                 
                 // Restore focus
                 if (sheet.dataset.triggerId) {
                     const trigger = document.getElementById(sheet.dataset.triggerId);
                     trigger?.focus();
                 }
            }
        }, transitionDuration);
    } else {
        sheet.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = '';
    }
    
    const triggerId = sheet.dataset.triggerId;
    if (triggerId) {
         const trigger = document.getElementById(triggerId);
         trigger?.setAttribute('aria-expanded', 'false');
    }
  };

  // Global click handler for triggers
  document.addEventListener('click', (e) => {
    const trigger = e.target.closest('[data-toggle="sheet"], [data-toggle="drawer"]');
    if (trigger) {
        e.preventDefault();
        // Ensure trigger has an ID for focus restoration
        if (!trigger.id) {
            trigger.id = 'trigger-' + Math.random().toString(36).substr(2, 9);
        }
        toggleSheet(trigger);
    }
  });

  // Close when clicking backdrop
  document.addEventListener('click', (e) => {
    if (e.target.matches('.sheet, .drawer')) {
        closeSheet(e.target);
    }
  });

  // Close on Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        const openSheets = document.querySelectorAll('.sheet[aria-hidden="false"], .drawer[aria-hidden="false"]');
        openSheets.forEach(closeSheet);
    }
  });
  
  // Handle close buttons inside sheet
  document.addEventListener('click', (e) => {
      const closeBtn = e.target.closest('[data-close]');
      if (closeBtn) {
          const sheet = closeBtn.closest('.sheet, .drawer');
          if (sheet) {
              closeSheet(sheet);
          }
      }
  });

  // Expose for manual control if needed
  if (!window.basecoat) window.basecoat = {};
  window.basecoat.sheet = { open: openSheet, close: closeSheet };
})();
