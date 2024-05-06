/**
 * Home Page
 */

console.log('Hello from Home folder')

import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { navlinkHoverIx } from '../helpers/navlink-hover'
import { sectionHeroTl } from './section-hero'
import { cottonPlantMoveIx } from '../helpers/cotton-plant-move'
import { footerIx } from '../helpers/footer'
import { sectionVideoClipIx } from './section-video-clip'
import { logoHoverIx } from './logo-hover'
import { scrollbar } from '../helpers/scrollbar'

gsap.registerPlugin(ScrollTrigger)
gsap.set('.page-wrapper', {
  opacity: 1,
})

window.addEventListener('DOMContentLoaded', (event) => {
  // Split Type
  let typeSplit

  function runSplitType() {
    typeSplit = new SplitType('[text-split]', {
      types: 'lines, words, chars',
      tagName: 'span',
    })
  }

  runSplitType()

  //Run the code when window width changes
  let windowWidth = window.innerWidth
  window.addEventListener('resize', function () {
    if (windowWidth !== window.innerWidth) {
      windowWidth = window.innerWidth
      typeSplit.revert()
      runSplitType()
    }
  })

  /**
   * Scrollbar
   */

  //Run only on Desktop & tablet
  if (window.innerWidth > 766) {
    scrollbar()
  }

  /**
   * Text Link Hover Interaction
   */

  //   linkHoverIx()

  /**
   * Navbar Interaction
   */

  if (windowWidth > 990) {
    navlinkHoverIx()
  }

  /**
   * Section Hero timeline for Home Page
   */

  sectionHeroTl()

  /**
   * Product Timeline for Home Page Start
   */

  const homeProductsTl = gsap.timeline({
    scrollTrigger: {
      trigger: '.home_products_wrap',
      start: 'top 15%',
      end: 'bottom top',
      scrub: true,
      // markers: true,
      // pin: true,
      // pinSpacing: true,
    },
  })

  homeProductsTl
    .to('.home_products_cards', { xPercent: -20 })
    .to('.home_product_card-item.is-2', { y: '-4rem' }, 0)
    .to('.home_product_card-item.is-3', { y: '-8rem' }, 0)

  /**
   * Product Timeline for Home Page End
   */

  /**
   * Common Text Stagger Interaction Start
   */

  // Link timelines to scroll position
  function createScrollTrigger(triggerElement, timeline) {
    // Reset tl when scroll out of view past bottom of screen
    ScrollTrigger.create({
      trigger: triggerElement,
      start: 'top bottom',
      onLeaveBack: () => {
        timeline.progress(0)
        timeline.pause()
      },
    })
    // Play tl when scrolled into view (60% from top of screen)
    ScrollTrigger.create({
      trigger: triggerElement,
      start: 'top 60%',
      onEnter: () => timeline.play(),
    })
  }

  $('[words-slide-from-right]').each(function (index) {
    let tl = gsap.timeline({ paused: true })
    tl.from($(this).find('.word'), {
      opacity: 0,
      x: '1em',
      duration: 0.6,
      ease: 'power2.out',
      stagger: { amount: 0.2 },
    })
    createScrollTrigger($(this), tl)
  })

  $('[letters-fade-in]').each(function (index) {
    let tl = gsap.timeline({ paused: true })
    tl.from($(this).find('.char'), {
      opacity: 0,
      duration: 0.2,
      ease: 'power1.out',
      stagger: { amount: 0.8 },
    })
    createScrollTrigger($(this), tl)
  })

  // Avoid flash of unstyled content .brand_logo_text-svg path
  gsap.set(`[text-split]`, {
    opacity: 1,
  })

  /**
   * Common Text Stagger Interaction End
   */

  /**
   * Cotton Plant Animation
   */

  cottonPlantMoveIx()

  /**
   * Paramount Fixed Logo Hover Interaction
   */

  logoHoverIx()

  /**
   * 2nd Fold Video Scroll
   */

  sectionVideoClipIx()

  /**
   * Footer Nav Interaction
   */

  footerIx()
})
