import { gsap } from 'gsap'

export const sectionInitiativeHeroIx = () => {
  const tl = gsap.timeline()

  tl.from('.initiative-hero_image-1', {
    height: 0,
    duration: 0.5,
    ease: 'power1.out',
  })
}
