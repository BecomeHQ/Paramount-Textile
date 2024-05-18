import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import {
  generalTitle,
  leafIcon,
  paragraph,
} from '../../helpers/defaults/params'

gsap.registerPlugin(ScrollTrigger)

export const productSectionFeatureIx = () => {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: '[layout-name="product-features"]',
      start: 'top 65%',
    },
  })

  tl.from('[layout-name="product-features"] img', leafIcon)
    .from('[layout-name="product-features"] h2 .char', generalTitle, '<45%')
    .from('[layout-name="product-features"] p .line', paragraph, '<45%')
    .from(
      '.section_product-features .flex-center',
      { y: 20, opacity: 0 },
      '<45%'
    )
}

export const productRangeIx = () => {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: '.product_range',
      start: 'top 65%',
    },
  })

  tl.from('.product_range img', leafIcon)
    .from('.product_range h2 .char', generalTitle, '<45%')
    .from(
      '.product_range-wrapper div',
      {
        y: -30,
        opacity: 0,
        stagger: { amount: 0.3 },
      },
      '<45%'
    )
}
