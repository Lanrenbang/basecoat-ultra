(() => {
  const initCarousel = (carousel) => {
    const content = carousel.querySelector('.carousel-content');
    const prevBtn = carousel.querySelector('.carousel-previous');
    const nextBtn = carousel.querySelector('.carousel-next');
    const orientation = carousel.dataset.orientation || 'horizontal';
    
    if (!content) return;

    const getScrollAmount = () => {
        const firstItem = content.querySelector('.carousel-item');
        if (!firstItem) return orientation === 'vertical' ? content.offsetHeight : content.offsetWidth;
        
        const style = window.getComputedStyle(firstItem);
        if (orientation === 'vertical') {
            const itemHeight = firstItem.offsetHeight;
            const marginTop = parseFloat(style.marginTop);
            const marginBottom = parseFloat(style.marginBottom);
            return itemHeight + marginTop + marginBottom;
        } else {
            const itemWidth = firstItem.offsetWidth;
            const marginLeft = parseFloat(style.marginLeft);
            const marginRight = parseFloat(style.marginRight);
            return itemWidth + marginLeft + marginRight;
        }
    };

    const scroll = (direction) => {
        const amount = getScrollAmount();
        const value = direction === 'next' ? amount : -amount;
        
        if (orientation === 'vertical') {
             content.scrollBy({ top: value, behavior: 'smooth' });
        } else {
             content.scrollBy({ left: value, behavior: 'smooth' });
        }
    };

    const updateButtons = () => {
        if (!prevBtn && !nextBtn) return;
        
        const { scrollLeft, scrollTop, scrollWidth, scrollHeight, clientWidth, clientHeight } = content;
        
        // Dispatch change event when scroll status might have changed significantly
        carousel.dispatchEvent(new CustomEvent('change', { 
            bubbles: true, 
            detail: { 
                scrollLeft, 
                scrollTop,
                isEnd: orientation === 'vertical' ? 
                    scrollTop >= scrollWidth - clientHeight - 1 : 
                    scrollLeft >= scrollWidth - clientWidth - 1
            } 
        }));

        if (orientation === 'vertical') {
            const canScrollPrev = scrollTop > 1;
            const canScrollNext = scrollTop < scrollHeight - clientHeight - 1;
            
            if (prevBtn) {
                prevBtn.disabled = !canScrollPrev;
                prevBtn.setAttribute('aria-disabled', String(!canScrollPrev));
            }
            if (nextBtn) {
                nextBtn.disabled = !canScrollNext;
                nextBtn.setAttribute('aria-disabled', String(!canScrollNext));
            }
        } else {
            const canScrollPrev = scrollLeft > 1;
            const canScrollNext = scrollLeft < scrollWidth - clientWidth - 1;
            
            if (prevBtn) {
                prevBtn.disabled = !canScrollPrev;
                prevBtn.setAttribute('aria-disabled', String(!canScrollPrev));
            }
            if (nextBtn) {
                nextBtn.disabled = !canScrollNext;
                nextBtn.setAttribute('aria-disabled', String(!canScrollNext));
            }
        }
    };

    if (prevBtn) {
        prevBtn.addEventListener('click', () => scroll('prev'));
    }
    if (nextBtn) {
        nextBtn.addEventListener('click', () => scroll('next'));
    }

    let ticking = false;
    content.addEventListener('scroll', () => {
        if (!ticking) {
            window.requestAnimationFrame(() => {
                updateButtons();
                ticking = false;
            });
            ticking = true;
        }
    }, { passive: true });
    
    carousel.addEventListener('keydown', (e) => {
        if (orientation === 'vertical') {
            if (e.key === 'ArrowUp') {
                e.preventDefault();
                prevBtn?.click();
            } else if (e.key === 'ArrowDown') {
                e.preventDefault();
                nextBtn?.click();
            }
        } else {
            if (e.key === 'ArrowLeft') {
                e.preventDefault();
                prevBtn?.click(); 
            } else if (e.key === 'ArrowRight') {
                e.preventDefault();
                nextBtn?.click(); 
            }
        }
    });

    const resizeObserver = new ResizeObserver(updateButtons);
    resizeObserver.observe(content);

    updateButtons();
    carousel.dataset.carouselInitialized = true;
    carousel.dispatchEvent(new CustomEvent('basecoat:initialized'));
  };

  if (window.basecoat) {
    window.basecoat.register('carousel', '.carousel:not([data-carousel-initialized])', initCarousel);
  }
})();
