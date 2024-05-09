import { gsap } from 'gsap'

export const productMockUpIx = () => {
  const productMockUps = gsap.utils.toArray('.product_mockup-wrapper')

  productMockUps.forEach((productMockUp) => {
    const productMockUpArray = productMockUp.querySelectorAll('.product_mockup')

    const tl = gsap.timeline({
      defaults: { duration: 0.8 },
      scrollTrigger: {
        trigger: productMockUp,
        start: 'top 60%',
      },
    })

    tl.from(productMockUpArray, {
      opacity: 0,
      y: 30,
      stagger: { amount: 0.3 },
      ease: 'power2.out',
    })
  })
}
