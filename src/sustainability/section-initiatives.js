import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { leafIcon, generalTitle, paragraph } from '../helpers/defaults/params'

gsap.registerPlugin(ScrollTrigger)

export const sectionInitiativeIx = () => {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: '.section_sustain-initiatives',
      start: 'top 70%',
    },
  })

  tl.from('.section_sustain-initiatives .general-title img', leafIcon).from(
    '.section_sustain-initiatives .general-title .char',
    generalTitle
  )

  const initiativeBlocks = document.querySelectorAll('.sustain_initiative-item')

  initiativeBlocks.forEach((item) => {
    const itemImageMask = item.querySelector('.sustain_initiative-image_mask')
    const itemPara = item.querySelectorAll(
      '.sustain_initiative-content p .line'
    )
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: item,
        start: 'top 80%',
      },
    })

    tl.fromTo(
      itemImageMask,
      {
        clipPath: 'inset(calc(50% - 10%) calc(50% - 10%) round 0.75rem)',
        ease: 'power1.out',
      },
      {
        clipPath: 'inset(calc(0% - 0%) calc(0% - 0%) round 0.75rem)',
      }
    ).from(itemPara, paragraph, '<45%')
  })
}
