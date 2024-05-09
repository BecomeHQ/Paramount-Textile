import { gsap } from 'gsap'
import { generalTitle } from '../helpers/defaults/params'

export const featureBlockIx = () => {
  const featureBlocks = gsap.utils.toArray('.initiative_feature-block')

  featureBlocks.forEach((featureBlockItem) => {
    const featureImage = featureBlockItem.querySelector(
      '.initiative_feature-block_img'
    )
    const featureText = featureBlockItem.querySelectorAll('[text-split] .char')
    const featureToggle = featureBlockItem.querySelector(
      '.feature_accordion_toggle'
    )

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: featureBlockItem,
        start: 'top 65%',
        // markers: true,
      },
    })

    tl.from(featureImage, {
      scale: 0.7,
      opacity: 0,
      duration: 1,
      ease: 'power2.out',
    })
      .from(featureText, generalTitle, '<45%')
      .from(featureToggle, { opacity: 0 }, '<45%')
  })
}
