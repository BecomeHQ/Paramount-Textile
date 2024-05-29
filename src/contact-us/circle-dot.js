import { gsap } from 'gsap'

export const circleIndicator = () => {
  const tl = gsap.timeline({
    defaults: {
      transformOrigin: '50% 50%',
      ease: 'linear',
      duration: 3,
    },
  })

  tl.set('.circle-indicator', { attr: { r: 0 } })
    .to('.circle-indicator', {
      opacity: 0,
      attr: { r: 38.5 },
      stagger: { repeat: -1, amount: 2 },
    })
    // .to('.circle-indicator.is-3', { opacity: 0, attr: { r: 38.5 } })
    // .to('.circle-indicator.is-2', { opacity: 0, attr: { r: 38.5 } }, '<25%')
    // .to('.circle-indicator.is-1', { opacity: 0, attr: { r: 38.5 } }, '<25%')
    .repeat(-1)
}
