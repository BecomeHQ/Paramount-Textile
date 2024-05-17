import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export const sectionRelatedIx = () => {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: '.section_products-related',
      start: '-50 top',
      end: '1500px bottom',
      scrub: 1,
      pin: true,
    },
  })

  let movePercent = 30

  switch (true) {
    case window.innerWidth > 1200:
      movePercent = 30
      break

    case window.innerWidth > 767 && window.innerWidth < 991:
      movePercent = 75
      break

    case window.innerWidth > 480 && window.innerWidth < 768:
      movePercent = 80
      break

    case window.innerWidth > 320 && window.innerWidth < 479:
      movePercent = 215
      break

    default:
      // Default action if none of the cases match
      break
  }
  console.log(movePercent)

  tl.set('.products_related-item.is-2', { y: 40 })
  tl.set('.products_related-item.is-3', { y: 80 })

  tl.to('.products_related-wrapper', {
    xPercent: -movePercent,
  })
    .to('.products_related-item.is-2', { y: 0 }, 0)
    .to('.products_related-item.is-3', { y: 0 }, '<50%')
}
