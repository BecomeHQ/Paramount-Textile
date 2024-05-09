import { gsap } from 'gsap'
import { leafIcon, paragraph, generalTitle } from '../helpers/defaults/params'

export const sectionInitiativeHeroIx = (delay) => {
  const tl = gsap.timeline()

  // Add delay property
  leafIcon.delay = delay * 0.8

  let mm = gsap.matchMedia()

  tl.from('.general-title > img', leafIcon)
    .from('.general-title h1 .char', generalTitle, '<45%')
    .from('.initiatives_hero .max-width-xxsmall .line', paragraph, '<45%')
    .from('.initiative-hero_image-1, .initiative-hero_image-2 > img', {
      // height: 0,
      scale: 0.7,
      opacity: 0,
      duration: 1,
      ease: 'power2.out',
      stagger: { amount: 0.5 },
    })
    .from('.initiatives_hero p .line', paragraph, '<45%')
  mm.add('(min-width: 991px)', () => {
    tl.from('.navbar_component', { opacity: 0, y: '-15vh' })
  })
}
