/**
 * Basecoat OTP Input
 * A lightweight, zero-dependency OTP input handler.
 */

// 1. Initializer
const initOTP = (root = document) => {
    const containers = root.querySelectorAll('.input-otp');
    
    containers.forEach(container => {
      if (container.hasAttribute('data-initialized')) return;
      
      const inputs = Array.from(container.querySelectorAll('input'));
      
      // Setup inputs
      inputs.forEach((input, index) => {
        // Force attributes for better UX
        input.type = 'text'; // Avoid spinners
        input.inputMode = 'text'; // Or numeric, configurable via data attr
        input.setAttribute('maxlength', '1');
        input.setAttribute('autocomplete', 'one-time-code');
        
        // --- 1. Focus Management ---
        // Select content on focus to allow easy overwrite
        input.addEventListener('focus', () => {
            input.select();
        });

        // --- 2. Input Handling ---
        input.addEventListener('input', (e) => {
            const val = e.target.value;
            
            // Handle clearing (empty value)
            if (val === '') {
                // Do nothing specific, wait for user
                return;
            }

            // If multiple chars (e.g. fast typing or weird paste), take the last one
            // unless it's a paste event handled separately.
            if (val.length > 1) {
                input.value = val.slice(-1);
            }

            // Move to next if we have a value
            if (input.value.length === 1 && index < inputs.length - 1) {
                inputs[index + 1].focus();
            }
        });

        // --- 3. Key Navigation & Backspace ---
        input.addEventListener('keydown', (e) => {
            if (e.key === 'Backspace') {
                e.preventDefault(); // Control deletion manually
                
                if (input.value !== '') {
                    input.value = '';
                } else if (index > 0) {
                    inputs[index - 1].focus();
                    // Optional: clear previous on backspace from empty?
                    // inputs[index - 1].value = ''; 
                }
            } else if (e.key === 'ArrowLeft') {
                if (index > 0) {
                    e.preventDefault();
                    inputs[index - 1].focus();
                }
            } else if (e.key === 'ArrowRight') {
                if (index < inputs.length - 1) {
                    e.preventDefault();
                    inputs[index + 1].focus();
                }
            }
            // Allow typing: if key is a printable char (length 1), it will trigger 'input'.
            // If user types a char while value is full, 'focus' selection handles overwrite.
            // If selection was lost, we might need to manually clear.
            else if (e.key.length === 1 && !e.ctrlKey && !e.metaKey && !e.altKey) {
                // If cursor is not selecting text and we have value, clear it first to ensure overwrite
                // However, input event handles 'take last char', so '1' -> '12' -> input slices to '2'.
                // So default behavior is mostly fine, but explicit overwrite is safer.
                if (input.value.length >= 1 && input.selectionStart === input.selectionEnd) {
                    input.value = '';
                }
            }
        });

        // --- 4. Paste Handling ---
        input.addEventListener('paste', (e) => {
            e.preventDefault();
            const pasteData = (e.clipboardData || window.clipboardData).getData('text');
            // Split into characters
            const chars = pasteData.split('');
            
            let currentIndex = index;
            chars.forEach((char) => {
                if (currentIndex < inputs.length) {
                    inputs[currentIndex].value = char;
                    currentIndex++;
                }
            });
            
            // Focus the input after the last pasted character
            if (currentIndex < inputs.length) {
                inputs[currentIndex].focus();
            } else {
                inputs[inputs.length - 1].focus();
            }
        });
      });

      container.setAttribute('data-initialized', 'true');
    });
};

// 2. Auto-init
if (typeof window !== 'undefined') {
  const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      if (mutation.type === 'childList') {
        mutation.addedNodes.forEach((node) => {
           if (node.nodeType === 1) {
               if (node.classList?.contains('input-otp')) {
                   initOTP(node.parentNode);
               } else if (node.querySelector?.('.input-otp')) {
                   initOTP(node);
               }
           }
        });
      }
    });
  });

  document.addEventListener('DOMContentLoaded', () => {
    initOTP();
    observer.observe(document.body, { childList: true, subtree: true });
  });
}

export { initOTP };