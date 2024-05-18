/**
 * Fabrics Folder
 */

console.log('From Fabrics folder')

import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { headerIx } from '../../helpers/header'
import { scrollbar } from '../../helpers/scrollbar'
import { cottonPlantMoveIx } from '../../helpers/cotton-plant-move'
import { splitText } from '../../helpers/split-text'
import { productSectionHeroIx } from '../product-common-ix/section-hero'
import {
  generalTitle,
  leafIcon,
  paragraph,
} from '../../helpers/defaults/params'
import { productRangeIx, productSectionFeatureIx } from './section-feature'
import { sectionTestimonyIx } from '../product-common-ix/section-testimonial'
import { sectionProcessIx } from '../product-common-ix/section-process'
import { sectionRelatedIx } from '../product-common-ix/section-related'

gsap.registerPlugin(ScrollTrigger)

window.addEventListener('DOMContentLoaded', (event) => {
  gsap.set('.page-wrapper', {
    opacity: 1,
  })

  // split the text
  splitText()

  // Add Cotton Plant Ix
  cottonPlantMoveIx()

  // Add Scrollbar Ix
  scrollbar()

  // Header
  const delayIx = headerIx()

  // Add Hero Ix
  productSectionHeroIx(delayIx)

  // product_hero-bottom_content Ix
  const productHeroBottomIx = () => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.product_hero-bottom_content',
        start: 'top 70%',
      },
    })
    generalTitle.stagger.amount = 0.6
    console.log(generalTitle)

    tl.from('.product_hero-bottom_content img', leafIcon)
      .from('.product_hero-bottom_content h2 .char', generalTitle, '<45%')
      .from('.product_hero-bottom_content p .line', paragraph, '<45%')

    generalTitle.stagger.amount = 0.2
  }

  productHeroBottomIx()

  // section feature
  productSectionFeatureIx()

  // Section Range
  productRangeIx()

  // Section Testimonial
  sectionTestimonyIx()

  // Section Process
  sectionProcessIx()

  // Section Related
  sectionRelatedIx()
})
