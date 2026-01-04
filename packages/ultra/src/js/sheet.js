(() => {
  const openSheet = (sheet, trigger) => {
    document.dispatchEvent(new CustomEvent('basecoat:popover', { detail: { source: sheet } }));

    sheet.setAttribute('aria-hidden', 'false');
    sheet.offsetHeight;
    
    const content = sheet.querySelector('.sheet-content, .drawer-content');
    if (content) {
        content.dataset.state = 'open';
    }
    
    if (trigger) {
        trigger.setAttribute('aria-expanded', 'true');
        sheet.dataset.triggerId = trigger.id || '';
    }

    document.body.style.overflow = 'hidden';
  };

  const closeSheet = (sheet) => {
    const content = sheet.querySelector('.sheet-content, .drawer-content');
    if (content) {
        content.dataset.state = 'closed';
        
        const transitionDuration = parseFloat(window.getComputedStyle(content).transitionDuration) * 1000 || 300;
        
        setTimeout(() => {
            if (content.dataset.state === 'closed') {
                 sheet.setAttribute('aria-hidden', 'true');
                 document.body.style.overflow = '';
                 
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

  const initSheet = (sheet) => {
    sheet.dataset.sheetInitialized = true;
    sheet.dispatchEvent(new CustomEvent('basecoat:initialized'));
  };

  document.addEventListener('click', (e) => {
    const trigger = e.target.closest('[data-toggle="sheet"], [data-toggle="drawer"]');
    if (trigger) {
        e.preventDefault();
        const targetId = trigger.getAttribute('aria-controls') || trigger.dataset.target;
        const sheet = document.getElementById(targetId);
        if (!sheet) return;

        if (!trigger.id) {
            trigger.id = 'trigger-' + Math.random().toString(36).substr(2, 9);
        }

        const isOpen = sheet.getAttribute('aria-hidden') === 'false';
        if (isOpen) {
            closeSheet(sheet);
        } else {
            openSheet(sheet, trigger);
        }
    }

    if (e.target.matches('.sheet, .drawer')) {
        closeSheet(e.target);
    }

    const closeBtn = e.target.closest('[data-close]');
    if (closeBtn) {
        const sheet = closeBtn.closest('.sheet, .drawer');
        if (sheet) {
            closeSheet(sheet);
        }
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        const openSheets = document.querySelectorAll('.sheet[aria-hidden="false"], .drawer[aria-hidden="false"]');
        openSheets.forEach(closeSheet);
    }
  });

  document.addEventListener('basecoat:popover', () => {
    const openSheets = document.querySelectorAll('.sheet[aria-hidden="false"], .drawer[aria-hidden="false"]');
    openSheets.forEach(closeSheet);
  });

  if (window.basecoat) {
    window.basecoat.register('sheet', '.sheet:not([data-sheet-initialized]), .drawer:not([data-sheet-initialized])', initSheet);
    window.basecoat.sheet = { open: openSheet, close: closeSheet };
  }
})();
