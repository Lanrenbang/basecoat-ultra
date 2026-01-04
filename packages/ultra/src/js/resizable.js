/**
 * Basecoat Resizable
 * Wrapper around split.js
 */
import Split from "split.js";

const initResizable = (group) => {
    const direction = group.dataset.direction || 'horizontal';
    
    const children = Array.from(group.children).filter(el => 
        (el.tagName === 'DIV' || el.tagName === 'SECTION' || el.tagName === 'ASIDE') &&
        !el.classList.contains('gutter')
    );
    
    if (children.length < 2) return;

    let sizes;
    if (group.dataset.sizes) {
        sizes = group.dataset.sizes.split(',').map(Number);
    }

    let minSizes;
    if (group.dataset.minSizes) {
        minSizes = group.dataset.minSizes.split(',').map(Number);
    }

    try {
        Split(children, {
            sizes: sizes || undefined,
            minSize: minSizes || 100,
            direction: direction,
            gutterSize: 1,
            cursor: direction === 'horizontal' ? 'col-resize' : 'row-resize',
            onDragEnd: (newSizes) => {
                group.dispatchEvent(new CustomEvent('change', {
                    bubbles: true,
                    detail: { value: newSizes }
                }));
            },
            elementStyle: (dimension, size, gutterSize) => {
                return {
                    'flex-basis': `calc(${size}% - ${gutterSize}px)`,
                }
            },
            gutterStyle: (dimension, gutterSize) => {
                return {
                    'flex-basis':  `${gutterSize}px`,
                }
            },
        });
    } catch (e) {
        console.error('Basecoat: Resizable initialization failed', e);
    }

    group.dataset.resizableInitialized = true;
    group.dispatchEvent(new CustomEvent('basecoat:initialized'));
};

if (window.basecoat) {
    window.basecoat.register('resizable', '.resizable-group:not([data-resizable-initialized])', initResizable);
}

export { initResizable };
