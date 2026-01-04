(() => {
  const initPagination = (container) => {
    // Find elements
    const prevBtn = container.querySelector('[data-pagination-prev]');
    const nextBtn = container.querySelector('[data-pagination-next]');
    const pageButtons = container.querySelectorAll('[data-pagination-page]');
    
    if (!prevBtn || !nextBtn || pageButtons.length === 0) {
      console.error('Pagination: Missing required elements (prev, next, or page buttons)', container);
      return;
    }

    // Get total pages from data attribute or count page buttons
    let totalPages = parseInt(container.dataset.totalPages, 10) || pageButtons.length;
    let currentPage = 1;

    // Find initial current page from aria-current or data attribute
    const initialCurrent = container.querySelector('[aria-current="page"]') || 
                          container.querySelector('[data-pagination-page].btn-outline');
    if (initialCurrent) {
      currentPage = parseInt(initialCurrent.dataset.paginationPage, 10) || 1;
    }

    const updateUI = () => {
      // Update prev button state
      if (currentPage <= 1) {
        prevBtn.setAttribute('disabled', '');
        prevBtn.setAttribute('aria-disabled', 'true');
      } else {
        prevBtn.removeAttribute('disabled');
        prevBtn.removeAttribute('aria-disabled');
      }

      // Update next button state
      if (currentPage >= totalPages) {
        nextBtn.setAttribute('disabled', '');
        nextBtn.setAttribute('aria-disabled', 'true');
      } else {
        nextBtn.removeAttribute('disabled');
        nextBtn.removeAttribute('aria-disabled');
      }

      // Update page button states
      pageButtons.forEach(btn => {
        const page = parseInt(btn.dataset.paginationPage, 10);
        if (page === currentPage) {
          btn.setAttribute('aria-current', 'page');
          btn.classList.remove('btn-ghost');
          btn.classList.add('btn-outline');
        } else {
          btn.removeAttribute('aria-current');
          btn.classList.remove('btn-outline');
          btn.classList.add('btn-ghost');
        }
      });
    };

    const goToPage = (page, triggerEvent = true) => {
      if (page < 1 || page > totalPages || page === currentPage) return;
      
      const oldPage = currentPage;
      currentPage = page;
      updateUI();

      if (triggerEvent) {
        container.dispatchEvent(new CustomEvent('change', {
          bubbles: true,
          detail: { 
            page: currentPage, 
            previousPage: oldPage,
            totalPages 
          }
        }));
      }
    };

    // Event listeners
    prevBtn.addEventListener('click', () => {
      goToPage(currentPage - 1);
    });

    nextBtn.addEventListener('click', () => {
      goToPage(currentPage + 1);
    });

    pageButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        const page = parseInt(btn.dataset.paginationPage, 10);
        if (!isNaN(page)) {
          goToPage(page);
        }
      });
    });

    // Keyboard navigation
    container.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
        e.preventDefault();
        goToPage(currentPage - 1);
      } else if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
        e.preventDefault();
        goToPage(currentPage + 1);
      } else if (e.key === 'Home') {
        e.preventDefault();
        goToPage(1);
      } else if (e.key === 'End') {
        e.preventDefault();
        goToPage(totalPages);
      }
    });

    // Initialize UI state
    updateUI();

    // Expose API on the element
    container.goToPage = (page) => goToPage(page);
    container.getCurrentPage = () => currentPage;
    container.getTotalPages = () => totalPages;
    container.setTotalPages = (total) => {
      totalPages = total;
      if (currentPage > totalPages) {
        goToPage(totalPages);
      } else {
        updateUI();
      }
    };

    container.dataset.paginationInitialized = true;
    container.dispatchEvent(new CustomEvent('basecoat:initialized'));
  };

  if (window.basecoat) {
    window.basecoat.register('pagination', 'nav.pagination:not([data-pagination-initialized])', initPagination);
  }
})();
