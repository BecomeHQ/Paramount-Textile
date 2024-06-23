import { gsap } from 'gsap'
import { leafIcon, generalTitle, paragraph } from '../helpers/defaults/params'

export const sectionDirectorIx = () => {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: '.section_about-director',
      start: 'top 70%',
    },
  })

  tl.from('.section_about-director img', leafIcon).from(
    '.section_about-director h2 .char',
    generalTitle,
    '<45%'
  )
  const directorParaTl = gsap.timeline({
    scrollTrigger: {
      trigger: '.about_director',
      start: 'top 75%',
    },
  })
  directorParaTl
    .from('.section_about-director p .line', paragraph, '<45%')
    .from('.director-image', { opacity: 0, y: 20 }, '<45%')
    .from('.about_director .heading-style-h3', { opacity: 0, y: 20 }, '<45%')
}
