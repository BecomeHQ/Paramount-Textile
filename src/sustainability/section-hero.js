import { gsap } from 'gsap'
import { leafIcon, generalTitle, paragraph } from '../helpers/defaults/params'

export const sectionHeroIx = (delay) => {
  const tl = gsap.timeline()

  // Add delay property
  leafIcon.delay = delay * 0.8
  generalTitle.stagger.amount = 0.8

  tl.from('[layout-name="default"] img', leafIcon)
    .from('[layout-name="default"] h1 .char', generalTitle, '<45%')
    .from('[layout-name="default"] p .line', paragraph, '<45%')
    .from('.sustain-hero_image-wrapper', { opacity: 0, duration: 0.5 })
    // .set('.navbar_component', { height: 65.22 })
    // .from('.navbar_component', { scaleX: 0 })
    // .from('.navbar_container', { display: 'none', duration: 0 })
    // .from('.navbar_container', { opacity: 0 })
    // .set('.navbar_component', { height: 'auto' })
    .from('.navbar_component', {
      y: '200%',
      opacity: 0,
      duration: 1,
      ease: 'back.out(1.7)',
    })

  leafIcon.delay = 0
  generalTitle.stagger.amount = 0.6
}
