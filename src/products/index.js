/**
 * Products Page Code
 */
console.log('From Products folder')

import { gsap } from 'gsap'
import { cottonPlantMoveIx } from '../helpers/cotton-plant-move'
import { scrollbar } from '../helpers/scrollbar'
import { navlinkHoverIx } from '../helpers/navlink-hover'
import { sectionProductHeroIx } from './section-product-hero'
import { headerIx } from '../helpers/header'
import { splitText } from '../helpers/split-text'
import { textRevealIx } from './text-reveal'
import { productMockUpIx } from './product-mockups'
import { sectionProductTop } from './section-product-top'

window.addEventListener('DOMContentLoaded', (event) => {
  gsap.set('.page-wrapper', {
    opacity: 1,
  })
  // Split text. This will run on window resize also
  splitText()

  // Scrollbar
  scrollbar()

  // Random Cotton Flow
  cottonPlantMoveIx()

  // Navlink Hover
  navlinkHoverIx()

  const delayIx = headerIx()
  sectionProductHeroIx(delayIx)

  // Reveal Sections
  sectionProductTop()
  productMockUpIx()
  textRevealIx()
})
