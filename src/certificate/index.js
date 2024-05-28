/**
 * Certificate Page Code
 *
 * Whenever Importing HeaderIx() always add SplitText()
 */
console.log('From Certificate folder')

import { cottonPlantMoveIx } from '../helpers/cotton-plant-move'
import { scrollbar } from '../helpers/scrollbar'
import { navlinkHoverIx } from '../helpers/navlink-hover'

window.addEventListener('DOMContentLoaded', (event) => {
  // Navlink Hover Ix
  navlinkHoverIx()

  // Scrollbar
  scrollbar()

  // Random Cotton Flow
  cottonPlantMoveIx()
})
