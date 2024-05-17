import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import {
  leafIcon,
  generalTitle,
  paragraph,
} from '../../helpers/defaults/params'

gsap.registerPlugin(ScrollTrigger)

export const sectionProcessIx = () => {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: '.section_product-process',
      start: 'top 70%',
    },
  })

  tl.from('.section_product-process .general-title img', leafIcon).from(
    '.section_product-process .general-title .char',
    generalTitle
  )

  // Animate process cards
  const mm = gsap.matchMedia()

  // Define animations for different screen sizes
  mm.add(
    {
      isDesktop: '(min-width: 480px)',
      isMobile: '(max-width: 479px)',
    },
    (context) => {
      let { isDesktop, isMobile } = context.conditions

      if (isDesktop) {
        // Desktop-specific animations
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: '.product_process-wrapper',
            start: 'top 65%',
          },
        })

        tl.from('.product_process-item img', {
          scale: 1.5,
          opacity: 0,
          duration: 4,
          ease: 'expo.out',
          stagger: { amount: 1 },
        }).from('.product_process-item p .line', paragraph, '<45%')
      } else if (isMobile) {
        const processCards = document.querySelectorAll('.product_process-item')

        processCards.forEach((card) => {
          const cardImage = card.querySelector('img')
          const cardPara = card.querySelectorAll('p .line')

          let cardImageTl = gsap.timeline()
          let cardParaTl = gsap.timeline()

          const createScrollTigger = (timeline, triggerElement) => {
            ScrollTrigger.create({
              trigger: triggerElement,
              start: 'top 65%',
              animation: timeline,
            })
          }

          cardImageTl.from(cardImage, {
            scale: 1.5,
            opacity: 0,
            duration: 3,
            ease: 'expo.out',
          })
          createScrollTigger(cardImageTl, cardImage)

          cardParaTl.from(cardPara, paragraph, '<45%')
          createScrollTigger(cardParaTl, cardPara)
        })
      }
    }
  )
}
