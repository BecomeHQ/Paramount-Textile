import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { paragraph } from '../helpers/defaults/params'

gsap.registerPlugin(ScrollTrigger)

export const sectionSustainContain = () => {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: '.section_sustain-content',
      start: 'top 70%',
    },
  })

  tl.from('[sustain-content-para] .line', paragraph)

  const flexColTl = gsap.timeline({
    scrollTrigger: {
      trigger: '.flex-col-5',
      start: 'top 65%',
    },
  })

  flexColTl.from('.flex-col-5 .max-width-small', {
    y: 20,
    opacity: 0,
    stagger: { amount: 0.6 },
  })
}
