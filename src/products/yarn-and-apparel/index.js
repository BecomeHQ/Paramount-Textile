/**
 * Yarn Folder
 */

console.log('From Yarn and Apparel folder')

import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { headerIx } from '../../helpers/header'
import { scrollbar } from '../../helpers/scrollbar'
import { cottonPlantMoveIx } from '../../helpers/cotton-plant-move'
import { splitText } from '../../helpers/split-text'
import { productSectionHeroIx } from '../product-common-ix/section-hero'
import { paragraph } from '../../helpers/defaults/params'
import { sectionOfferIx } from './section-offerings'
import { sectionTestimonyIx } from '../product-common-ix/section-testimonial'
import { sectionProcessIx } from '../product-common-ix/section-process'
import { sectionRelatedIx } from '../product-common-ix/section-related'
import { navlinkHoverIx } from '../../helpers/navlink-hover'

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

  // Navlink Hover
  navlinkHoverIx()

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

    tl.from('.product_hero-bottom_content p .line', paragraph, '<45%')
  }

  productHeroBottomIx()

  // Section Offerings
  sectionOfferIx()

  // Section Testimonial
  sectionTestimonyIx()

  // Section Process
  sectionProcessIx()

  // Section Related
  sectionRelatedIx()
})
