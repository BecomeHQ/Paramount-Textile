import { gsap } from 'gsap'

export const textRevealIx = () => {
  const productBlockArray = gsap.utils.toArray('.product_list-bottom')

  productBlockArray.forEach((productBlock) => {
    const productTitle = productBlock.querySelectorAll(
      '.heading-style-h1 .char'
    )
    const productDescription = productBlock.querySelectorAll(
      '[product-description] .line'
    )
    const primaryLink = productBlock.querySelector('.primary-link')

    const tl = gsap.timeline({
      defaults: { duration: 0.8 },
      scrollTrigger: {
        trigger: productBlock,
        start: 'top 80%',
      },
    })

    tl.from(productTitle, {
      opacity: 0,
      stagger: { amount: 0.3 },
      ease: 'power2.out',
    })
      .from(
        productDescription,
        {
          x: '5%',
          opacity: 0,
          stagger: { amount: 0.2 },
          duration: 0.6,
          ease: 'power2.out',
        },
        '<45%'
      )
      .from(primaryLink, { opacity: 0 }, '<45%')
  })
}
