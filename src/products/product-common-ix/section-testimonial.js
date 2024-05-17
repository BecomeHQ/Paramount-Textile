import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import {
  leafIcon,
  generalTitle,
  paragraph,
} from '../../helpers/defaults/params'

gsap.registerPlugin(ScrollTrigger)

export const sectionTestimonyIx = () => {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: '.section_product-testimonial',
      start: 'top 70%',
    },
  })

  tl.from('.section_product-testimonial .general-title img', leafIcon)
    .from('.section_product-testimonial .general-title .char', generalTitle)
    .from('.product_testimony-img_wapper', { scale: 0.7, opacity: 0 }, '<15%')
    .from('.section_product-testimonial p .line', paragraph, '<45%')
    .from(
      '[testimonial-name] .char, [testimonial-designation] .char',
      generalTitle,
      '<35%'
    )
}
