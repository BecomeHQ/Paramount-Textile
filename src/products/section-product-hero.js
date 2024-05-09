import { gsap } from 'gsap'

export const sectionProductHeroIx = (delay) => {
  const tl = gsap.timeline()
  console.log(delay)

  tl.from('.leaf-icon', { opacity: 0, duration: 0.5, delay: delay * 0.8 })
    .from(
      'h1 .char',
      {
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
        stagger: { amount: 0.2 },
      },
      '<45%'
    )
    .from(
      '.section_product-hero p .line',
      {
        x: '5%',
        opacity: 0,
        stagger: { amount: 0.2 },
        duration: 0.6,
        ease: 'power2.out',
      },
      '<45%'
    )
    .from(
      '[product-first-top]',
      {
        y: '20px',
        opacity: 0,
      },
      '<45%'
    )
}
