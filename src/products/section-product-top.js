import { gsap } from 'gsap'

export const sectionProductTop = () => {
  const productTopImages = Array.from(
    document.querySelectorAll('.product_list-top')
  ).slice(1)
  console.log(productTopImages)

  productTopImages.forEach((productTopImage) => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: productTopImage,
        start: 'top 60%',
        // markers: true,
      },
    })

    tl.from(productTopImage, {
      opacity: 0,
      y: 30,
      ease: 'power2.out',
    })
  })
}
