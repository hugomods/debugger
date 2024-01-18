(() => {
  document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('.debugger') as HTMLElement;
    const toggleBtn = document.querySelector('.debugger-toggle') as HTMLButtonElement;

    const hide = () => {
      localStorage.removeItem('debugger-expend')
      container.classList.add('hidden');
      toggleBtn.setAttribute('aria-expanded', 'false');
    }

    const show = () => {
      localStorage.setItem('debugger-expend', 'true')
      container.classList.remove('hidden');
      toggleBtn.setAttribute('aria-expanded', 'true');
    }

    const toggle = () => {
      if (container.classList.contains('hidden')) {
        show()
      } else {
        hide()
      }
    }

    if (localStorage.getItem('debugger-expend') !== null) {
      show()
    }

    toggleBtn.addEventListener('click', (e) => {
      toggle()
      e.preventDefault();
    });
  })
})();
