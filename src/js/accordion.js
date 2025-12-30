(() => {
  const initAccordion = (accordion) => {
    accordion.addEventListener('click', (event) => {
      const summary = event.target.closest('summary');
      if (!summary) return;
      const details = summary.closest('details');
      if (!details) return;
      
      // Close other details in the same accordion
      accordion.querySelectorAll('details').forEach(detailsEl => {
        if (detailsEl !== details) {
          detailsEl.removeAttribute('open');
        }
      });
    });
    
    accordion.dataset.accordionInitialized = true;
    accordion.dispatchEvent(new CustomEvent('basecoat:initialized'));
  };

  if (window.basecoat) {
    window.basecoat.register('accordion', '.accordion:not([data-accordion-initialized])', initAccordion);
  }
})();
