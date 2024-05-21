/**
 * Infrastructure Page Code
 *
 * Whenever Importing HeaderIx() always add SplitText()
 */
console.log('From Infrastructure folder')

import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { cottonPlantMoveIx } from '../helpers/cotton-plant-move'
import { scrollbar } from '../helpers/scrollbar'

gsap.registerPlugin(ScrollTrigger)

window.addEventListener('DOMContentLoaded', (event) => {
  // Scrollbar
  scrollbar()

  // Random Cotton Flow
  cottonPlantMoveIx()

  const sectionModernInfraIx = () => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.section_modern-infra',
        start: '-140 top',
        end: '1100px bottom',
        scrub: 1,
        pin: true,
      },
    })

    let movePercent = 30

    tl.set('.machine_list-item.is-2', { y: 40 })
    tl.set('.machine_list-item.is-3', { y: 80 })

    tl.to('.machine-list', {
      xPercent: -movePercent,
    })
      .to('.machine_list-item.is-2', { y: 0 }, 0)
      .to('.machine_list-item.is-3', { y: 0 }, 0)
  }

  if (window.innerWidth > 990 && window.innerWidth < 1920) {
    sectionModernInfraIx()
  }
})
