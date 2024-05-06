import { gsap } from 'gsap'

export const accordionIx = () => {
  const accordians = document.querySelectorAll('.feature_accordion')

  accordians.forEach((accordian) => {
    const toggleButton = accordian.querySelector('.feature_accordion_toggle')
    const accordionBody = accordian.querySelector('.feature_accordion-body')
    const tl = gsap.timeline({ paused: false })

    toggleButton.addEventListener('click', () => {
      if (!toggleButton.classList.contains('is-active')) {
        toggleButton.classList.add('is-active')
      } else {
        toggleButton.classList.remove('is-active')
      }
    })
  })
}
