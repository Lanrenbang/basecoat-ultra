/**
 * Basecoat OTP Input
 * A lightweight, zero-dependency OTP input handler.
 */

const initOTP = (container) => {
    const inputs = Array.from(container.querySelectorAll('input'));
    
    const getOTPValue = () => inputs.map(input => input.value).join('');

    const dispatchChange = () => {
        container.dispatchEvent(new CustomEvent('change', {
            bubbles: true,
            detail: { value: getOTPValue() }
        }));
    };

    inputs.forEach((input, index) => {
        input.type = 'text';
        input.inputMode = 'text';
        input.setAttribute('maxlength', '1');
        input.setAttribute('autocomplete', 'one-time-code');
        
        input.addEventListener('focus', () => {
            input.select();
        });

        input.addEventListener('input', (e) => {
            const val = e.target.value;
            
            if (val === '') {
                dispatchChange();
                return;
            }

            if (val.length > 1) {
                input.value = val.slice(-1);
            }

            dispatchChange();

            if (input.value.length === 1 && index < inputs.length - 1) {
                inputs[index + 1].focus();
            }
        });

        input.addEventListener('keydown', (e) => {
            if (e.key === 'Backspace') {
                e.preventDefault();
                
                if (input.value !== '') {
                    input.value = '';
                    dispatchChange();
                } else if (index > 0) {
                    inputs[index - 1].focus();
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
            } else if (e.key.length === 1 && !e.ctrlKey && !e.metaKey && !e.altKey) {
                if (input.value.length >= 1 && input.selectionStart === input.selectionEnd) {
                    input.value = '';
                }
            }
        });

        input.addEventListener('paste', (e) => {
            e.preventDefault();
            const pasteData = (e.clipboardData || window.clipboardData).getData('text');
            const chars = pasteData.split('');
            
            let currentIndex = index;
            chars.forEach((char) => {
                if (currentIndex < inputs.length) {
                    inputs[currentIndex].value = char;
                    currentIndex++;
                }
            });
            
            dispatchChange();

            if (currentIndex < inputs.length) {
                inputs[currentIndex].focus();
            } else {
                inputs[inputs.length - 1].focus();
            }
        });
    });

    container.dataset.inputOtpInitialized = true;
    container.dispatchEvent(new CustomEvent('basecoat:initialized'));
};

if (window.basecoat) {
    window.basecoat.register('input-otp', '.input-otp:not([data-input-otp-initialized])', initOTP);
}

export { initOTP };
