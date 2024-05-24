import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export const sectionHorizontalIx = () => {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: '.section_sustain-horizontal',
      start: '-50 top',
      end: '1500px bottom',
      scrub: 1,
      pin: true,
      onToggle: (self) => {
        if (self.isActive) {
          gsap.to('.navbar_component', {
            opacity: 0,
            pointerEvents: 'none',
          })
        } else {
          gsap.to('.navbar_component', {
            opacity: 1,
            pointerEvents: 'unset',
          })
        }
      },
    },
  })

  let movePercent = 80

  switch (true) {
    case window.innerWidth > 1200:
      movePercent = 80
      break

    case window.innerWidth > 767 && window.innerWidth < 991:
      movePercent = 150
      break

    case window.innerWidth > 480 && window.innerWidth < 768:
      movePercent = 150
      break

    case window.innerWidth > 320 && window.innerWidth < 479:
      movePercent = 330
      break

    default:
      // Default action if none of the cases match
      break
  }
  // console.log(movePercent)

  //   tl.set('.products_related-item.is-2', { y: 40 })
  //   tl.set('.products_related-item.is-3', { y: 80 })

  tl.to('.sustain_horizontal-list', {
    xPercent: -movePercent,
  }).to('.sustain_horizontal-item', { y: 0 }, 0)
}
