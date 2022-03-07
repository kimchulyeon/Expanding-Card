const panelEls = document.querySelectorAll('.panel')

panelEls.forEach((panel) => {
  panel.addEventListener('click', () => {
    panel.classList.toggle('active')
  })
})
