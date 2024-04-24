import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export const footerIx = () => {
  const footerNavTl = gsap
    .timeline({
      defaults: { y: '-10', opacity: 0, duration: 0.5, ease: 'power1.out' },
      scrollTrigger: {
        trigger: '.footer_nav_wrapper',
        start: 'top 60%',
      },
    })
    .from('.footer_nav_link', { stagger: { amount: 1 } })
    .from('.footer_credit', {})
    .from('.footer_cert', { stagger: { amount: 1 } })
}
