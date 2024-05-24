import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export const sectionVideoMaskIx = () => {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: '.video-mask',
      start: () => {
        return window.innerWidth < 480 ? 'top 85%' : 'top 70%'
      },
      end: () => {
        return window.innerWidth < 480 ? 'bottom 100%' : 'bottom 90%'
      },
      scrub: 1,
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

  tl.fromTo(
    '.video-mask',
    {
      clipPath: 'inset(calc(50% - 20vw) calc(50% - 20vw) round 0.75rem)',
      ease: 'power1.out',
    },
    {
      clipPath: 'inset(calc(0% - 0vw) calc(0% - 0vw) round 0.75rem)',
    }
  )
}
