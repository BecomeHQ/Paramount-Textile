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
import { sectionHeroContentIx } from './section-hero-content'
import { sectionFounderIx } from './section-founder'
import { sectionVideoMaskIx } from '../helpers/section-video-mask'
import { sectionDirectorIx } from './section-director'
import { sectionExcellence } from './section-excellence'

window.addEventListener('DOMContentLoaded', (event) => {
  // Avoid Flash
  gsap.set('.page-wrapper', {
    opacity: 1,
  })

  // Split Text
  splitText()

  // Navlink Hover Ix
  navlinkHoverIx()

  // Header Ix
  headerIx()

  // Scrollbar
  scrollbar()

  // Cotton Plant move Ix
  cottonPlantMoveIx()

  // Anchor Hover Ix
  if (window.innerWidth > 990) {
    anchorHoverIx()
  }

  // Add Player Video
  playVideo()

  // Content Ix Below Hero Fold
  sectionHeroContentIx()

  // Section Founder
  sectionFounderIx()

  // Section Director
  sectionDirectorIx()

  sectionVideoMaskIx()

  // Section Excellence
  sectionExcellence()
})
