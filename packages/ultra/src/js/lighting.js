// src/js/lighting.js

/**
 * Global Neumorphic Lighting System for Basecoat
 * Tracks mouse movement to simulate a global light source.
 * Optimized: Only activates if Neumorphic elements are present.
 */

(() => {
    const LIGHTING_CONFIG = {
        maxOffset: 12,
        variableX: '--light-x',
        variableY: '--light-y',
        // Selectors that require dynamic lighting
        selector: '.neu-panel, .neu-field, .neu-btn'
    };

    let isTracking = false;
    let isTicking = false;

    const updateLightSource = (e) => {
        const centerX = window.innerWidth / 2;
        const centerY = window.innerHeight / 2;

        // Calculate normalized position (-1 to 1)
        const normX = (e.clientX - centerX) / centerX;
        const normY = (e.clientY - centerY) / centerY;

        // Invert X/Y logic
        const x = normX * LIGHTING_CONFIG.maxOffset * -1;
        const y = normY * LIGHTING_CONFIG.maxOffset * -1;

        document.documentElement.style.setProperty(LIGHTING_CONFIG.variableX, `${x}px`);
        document.documentElement.style.setProperty(LIGHTING_CONFIG.variableY, `${y}px`);
    };

    const onMouseMove = (e) => {
        if (!isTicking) {
            window.requestAnimationFrame(() => {
                updateLightSource(e);
                isTicking = false;
            });
            isTicking = true;
        }
    };

    const startTracking = () => {
        if (isTracking) return;
        window.addEventListener('mousemove', onMouseMove);
        isTracking = true;
    };

    const checkRequirement = () => {
        if (isTracking) return;
        if (document.querySelector(LIGHTING_CONFIG.selector)) {
            startTracking();
        }
    };

    const init = () => {
        if (typeof window === 'undefined') return;

        // 1. Initial check
        checkRequirement();

        // 2. Observer to detect if Neu elements are added dynamically
        let timeout;
        const observer = new MutationObserver((mutations) => {
            if (isTracking) {
                observer.disconnect();
                return;
            }
            
            clearTimeout(timeout);
            timeout = setTimeout(() => {
                 // Optimization: Check mutations first before full query
                 const mightHaveNeu = mutations.some(m => {
                    if (m.type === 'childList') {
                        return Array.from(m.addedNodes).some(node => 
                            node.nodeType === 1 && (node.matches(LIGHTING_CONFIG.selector) || node.querySelector(LIGHTING_CONFIG.selector))
                        );
                    }
                    if (m.type === 'attributes' && m.attributeName === 'class') {
                        return m.target.matches(LIGHTING_CONFIG.selector);
                    }
                    return false;
                 });

                 if (mightHaveNeu) {
                     checkRequirement();
                 }
            }, 100);
        });

        observer.observe(document.body, { 
            childList: true, 
            subtree: true,
            attributes: true, 
            attributeFilter: ['class']
        });
    };

    // Auto-initialize
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();