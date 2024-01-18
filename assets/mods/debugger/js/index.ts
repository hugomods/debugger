(() => {
  document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('.debugger') as HTMLElement
    const toggleBtn = document.querySelector('.debugger-toggle') as HTMLButtonElement

    const hide = (): void => {
      localStorage.removeItem('debugger-expend')
      container.classList.add('hidden')
      toggleBtn.setAttribute('aria-expanded', 'false')
    }

    const show = (): void => {
      localStorage.setItem('debugger-expend', 'true')
      container.classList.remove('hidden')
      toggleBtn.setAttribute('aria-expanded', 'true')
    }

    const toggle = (): void => {
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
      e.preventDefault()
    })
  })
})()
