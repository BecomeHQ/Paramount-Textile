/**
 * Initiatives Page Code
 *
 * Whenever Importing HeaderIx() always add Splittext()
 */
console.log('From Initiatives folder')

import gsap from 'gsap'
import { cottonPlantMoveIx } from '../helpers/cotton-plant-move'
import { scrollbar } from '../helpers/scrollbar'
import { navlinkHoverIx } from '../helpers/navlink-hover'
import { sectionInitiativeHeroIx } from './section-initiative-hero'
import { headerIx } from '../helpers/header'
import { splitText } from '../helpers/split-text'
import { featureBlockIx } from './feature-block'

window.addEventListener('DOMContentLoaded', (event) => {
  // Avoid Flash
  gsap.set('.page-wrapper', {
    opacity: 1,
  })
  // SplitText
  splitText()

  // Header
  const delayIx = headerIx()
  // Scrollbar
  scrollbar()

  // Random Cotton Flow
  cottonPlantMoveIx()

  // Navlink Hover
  navlinkHoverIx()

  // Section Hero
  sectionInitiativeHeroIx(delayIx)

  // Animate all Features blocks
  featureBlockIx()
})
