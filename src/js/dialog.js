(() => {
  const initDialog = (dialog) => {
    // Light dismiss (click outside to close)
    // Only for dialogs that are NOT alert dialogs (role="alertdialog")
    if (dialog.getAttribute('role') !== 'alertdialog') {
      dialog.addEventListener('click', (event) => {
        // Check if the dialog is open as a modal
        if (dialog.open) {
          const rect = dialog.getBoundingClientRect();
          const isInDialog = (
            rect.top <= event.clientY &&
            event.clientY <= rect.top + rect.height &&
            rect.left <= event.clientX &&
            event.clientX <= rect.left + rect.width
          );

          if (!isInDialog) {
            dialog.close();
          }
        }
      });
    }

    dialog.dataset.dialogInitialized = true;
    dialog.dispatchEvent(new CustomEvent('basecoat:initialized'));
  };

  if (window.basecoat) {
    // Auto-init all <dialog> elements with the .dialog class
    window.basecoat.register('dialog', 'dialog.dialog:not([data-dialog-initialized])', initDialog);
  }
})();