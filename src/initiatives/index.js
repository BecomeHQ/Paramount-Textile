/**
 * Initiatives Page Code
 */
console.log('From Initiatives folder')

import { cottonPlantMoveIx } from '../helpers/cotton-plant-move'
import { scrollbar } from '../helpers/scrollbar'
import { navlinkHoverIx } from '../helpers/navlink-hover'
import { sectionInitiativeHeroIx } from './section-initiative-hero'

window.addEventListener('DOMContentLoaded', (event) => {
  //Run only on Desktop
  if (window.innerWidth > 990) {
    scrollbar()
  }

  // Random Cotton Flow
  cottonPlantMoveIx()

  // Navlink Hover
  navlinkHoverIx()

  // Section Hero
  //   sectionInitiativeHeroIx()
})
