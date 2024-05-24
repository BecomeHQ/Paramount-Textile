/**
 * Sustainability Page Code
 *
 * Whenever Importing HeaderIx() always add SplitText()
 */
console.log('From Sustainability folder')

import { gsap } from 'gsap'
import { cottonPlantMoveIx } from '../helpers/cotton-plant-move'
import { scrollbar } from '../helpers/scrollbar'
import { headerIx } from '../helpers/header'
import { splitText } from '../helpers/split-text'
import { sectionHeroIx } from './section-hero'
import { navlinkHoverIx } from '../helpers/navlink-hover'
import { sectionSustainContain } from './section-content'
import { sectionHorizontalIx } from './section-horizontal'
import { sectionVideoMaskIx } from '../helpers/section-video-mask'
import { sectionTestimonyIx } from './section-testimonial'
import { sectionInitiativeIx } from './section-initiatives'

window.addEventListener('DOMContentLoaded', (event) => {
  gsap.set('.page-wrapper', {
    opacity: 1,
  })

  // Navlink Hover Ix
  navlinkHoverIx()

  // Scrollbar
  scrollbar()

  // Random Cotton Flow
  cottonPlantMoveIx()
  //   console.log(cottonPlantMoveIx)

  // splitType
  splitText()

  // Header() Ix
  let delayIx = headerIx()

  // Section Hero Ix
  sectionHeroIx(delayIx)

  // Section Sustain Content
  sectionSustainContain()

  // Section Horizontal
  sectionHorizontalIx()

  // Section Video Mask Ix
  sectionVideoMaskIx()

  // Section Testimony
  sectionTestimonyIx()

  // Section Initiatives
  sectionInitiativeIx()
})
