/**
 * Basecoat Resizable
 * Wrapper around split.js
 */
import Split from "split.js";

// 1. Initializer
const initResizable = (root = document) => {
  const groups = root.querySelectorAll('.resizable-group');
  
  groups.forEach(group => {
    if (group.dataset.splitInitialized) return;

    // Determine direction
    const direction = group.dataset.direction || 'horizontal'; // horizontal or vertical
    
    // Find direct children to split
    // We expect them to have IDs usually, but Split.js can take elements
    // We'll select direct div children
    const children = Array.from(group.children).filter(el => el.tagName === 'DIV' || el.tagName === 'SECTION' || el.tagName === 'ASIDE');
    
    if (children.length < 2) return;

    // Initial sizes
    // data-sizes="25,75"
    let sizes;
    if (group.dataset.sizes) {
        sizes = group.dataset.sizes.split(',').map(Number);
    }

    // Min sizes
    // data-min-sizes="100,200"
    let minSizes;
    if (group.dataset.minSizes) {
        minSizes = group.dataset.minSizes.split(',').map(Number);
    }

    Split(children, {
        sizes: sizes || undefined, // Default is equal
        minSize: minSizes || 100,
        direction: direction,
        gutterSize: 5, // 5px gutter
        cursor: direction === 'horizontal' ? 'col-resize' : 'row-resize',
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

    group.dataset.splitInitialized = "true";
  });
};

// 2. Auto-init
if (typeof window !== 'undefined') {
  const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      if (mutation.type === 'childList') {
        mutation.addedNodes.forEach((node) => {
           if (node.nodeType === 1) {
               if (node.classList?.contains('resizable-group')) {
                   initResizable(node.parentNode);
               } else if (node.querySelector?.('.resizable-group')) {
                   initResizable(node);
               }
           }
        });
      }
    });
  });

  document.addEventListener('DOMContentLoaded', () => {
    initResizable();
    observer.observe(document.body, { childList: true, subtree: true });
  });
}

export { initResizable };
