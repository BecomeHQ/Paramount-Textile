import { gsap } from 'gsap'
import { leafIcon, generalTitle, paragraph } from '../helpers/defaults/params'

export const sectionHeroContentIx = () => {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: '.section_about-hero_content',
      start: 'top 70%',
    },
  })

  // Add delay property
  leafIcon.delay = 0
  generalTitle.stagger.amount = 0.6

  tl.from('.section_about-hero_content img', leafIcon)
    .from('.section_about-hero_content h1 .char', generalTitle, '<45%')
    .from('.section_about-hero_content p .line', paragraph, '<45%')
}
