/**
 * Contact us Page Code
 *
 * Whenever Importing HeaderIx() always add SplitText()
 */
console.log('From Contact us folder')

import { cottonPlantMoveIx } from '../helpers/cotton-plant-move'
import { scrollbar } from '../helpers/scrollbar'
import { navlinkHoverIx } from '../helpers/navlink-hover'
import { calculateTimeZone } from './calculate-timezone'
import { circleIndicator } from './circle-dot'

window.addEventListener('DOMContentLoaded', (event) => {
  // Navlink Hover Ix
  navlinkHoverIx()

  // Scrollbar
  scrollbar()

  // Random Cotton Flow
  cottonPlantMoveIx()

  // Caculate timezone
  calculateTimeZone()

  // Cicle indicator
  circleIndicator()
})
