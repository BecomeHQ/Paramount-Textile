import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { leafIcon, generalTitle } from '../../helpers/defaults/params'

gsap.registerPlugin(ScrollTrigger)

export const sectionOfferIx = () => {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: '.product_offer-wrapper',
      start: 'top 70%',
    },
  })
  generalTitle.stagger.amount = 0.2

  tl.from('.section_product-features .general-title img', leafIcon)
    .from('.section_product-features .general-title .char', generalTitle)
    .from(
      '.product_offer-item',
      { opacity: 0, y: -20, stagger: { each: 0.2 } },
      '<45%'
    )
}
