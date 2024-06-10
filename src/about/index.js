/**
 * This is the individual file for a webflow page.
 * For About page js
 */

console.log('Hello from About folder')

import { gsap } from 'gsap'
import { anchorHoverIx } from './anchor-hover'
import { playVideo } from '../helpers/plyr-video'
import { headerIx } from '../helpers/header'
import { navlinkHoverIx } from '../helpers/navlink-hover'
import { scrollbar } from '../helpers/scrollbar'
import { cottonPlantMoveIx } from '../helpers/cotton-plant-move'
import { splitText } from '../helpers/split-text'

window.addEventListener('DOMContentLoaded', (event) => {
  // Avoid Flash
  gsap.set('.page-wrapper', {
    opacity: 1,
  })

  // Scrollbar
  scrollbar()

  // Cotton Plant move Ix
  cottonPlantMoveIx()

  // Anchor Hover Ix
  anchorHoverIx()

  // Add Player Video
  playVideo()
})
