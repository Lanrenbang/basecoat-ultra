(() => {
  const initSlider = (slider) => {
    const update = () => {
      const value = slider.value;
      const min = slider.min ? parseFloat(slider.min) : 0;
      const max = slider.max ? parseFloat(slider.max) : 100;
      const percentage = ((value - min) / (max - min)) * 100;
      slider.style.setProperty('--slider-value', `${percentage}%`);
    };
    
    slider.addEventListener('input', update);
    update();
    
    slider.dataset.sliderInitialized = true;
    slider.dispatchEvent(new CustomEvent('basecoat:initialized'));
  };

  if (window.basecoat) {
    window.basecoat.register('slider', 'input[type="range"].slider:not([data-slider-initialized]), input[type="range"].input:not([data-slider-initialized])', initSlider);
  }
})();
