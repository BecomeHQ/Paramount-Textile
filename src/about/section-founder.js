import { gsap } from 'gsap'
import { leafIcon, generalTitle, paragraph } from '../helpers/defaults/params'

export const sectionFounderIx = () => {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: '.section_about-founder',
      start: 'top 70%',
    },
  })

  tl.from('.section_about-founder img', leafIcon).from(
    '.section_about-founder h2 .char',
    generalTitle,
    '<45%'
  )
  const founderParaTl = gsap.timeline({
    scrollTrigger: {
      trigger: '.about_founder',
      start: 'top 75%',
    },
  })
  founderParaTl
    .from('.section_about-founder p .line', paragraph, '<45%')
    .from('.founder-image', { opacity: 0, y: 20 }, '<45%')
    .from('.about_founder .heading-style-h3', { opacity: 0, y: 20 }, '<45%')
}
