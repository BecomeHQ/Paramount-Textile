import {
  leafIcon,
  generalTitle,
  paragraph,
} from '../../helpers/defaults/params'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export const productSectionFeatureIx = () => {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: '.product_features-wrapper',
      start: 'top 70%',
    },
  })

  tl.from('.product_features-wrapper img', leafIcon)
    .from(
      '.product_features-wrapper .font-arima-madurai .char',
      generalTitle,
      '<45%'
    )
    .from('.product_features-wrapper p .line', paragraph, '<45%')
}
