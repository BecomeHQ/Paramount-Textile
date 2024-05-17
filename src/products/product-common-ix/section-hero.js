import {
  leafIcon,
  generalTitle,
  paragraph,
} from '../../helpers/defaults/params'
import { gsap } from 'gsap'

export const productSectionHeroIx = (delay) => {
  const tl = gsap.timeline()

  // Add delay property
  leafIcon.delay = delay * 0.8
  generalTitle.stagger.amount = 0.8

  tl.from('.layout_center_title > img', leafIcon)
    .from('.layout_center_title h1 .char', generalTitle, '<45%')
    .from('.layout_center-wrapper p .line', paragraph, '<45%')
    .from(
      '[product-hero-img-wrap]',
      { scale: 0.8, duration: 4, ease: 'expo.out' },
      '<15%'
    )
    .from(
      '.product_img_aspect-ratio',
      {
        opacity: 0,
        duration: 1,
        // ease: 'expo.out',
      },
      '<'
    )
    .from(
      '.product_img_aspect-ratio',
      {
        scale: 1.5,
        // opacity: 0,
        duration: 9,
        ease: 'expo.out',
      },
      '<'
    )

  leafIcon.delay = 0
}
