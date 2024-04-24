import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export const logoHoverIx = () => {
  // Function to calculate the percentage of the page scrolled
  function calculateScrollPercentage() {
    const scrollTop = window.scrollY || document.documentElement.scrollTop
    const totalHeight = Math.max(
      document.body.scrollHeight,
      document.documentElement.scrollHeight,
      document.body.offsetHeight,
      document.documentElement.offsetHeight,
      document.body.clientHeight,
      document.documentElement.clientHeight
    )
    const percentageScrolled =
      (scrollTop / (totalHeight - window.innerHeight)) * 100
    return percentageScrolled
  }

  const fixedLogo = document.querySelector('.brand_logo-icon')
  const logoHoverTl = gsap
    .timeline({ defaults: { duration: 0.5, ease: 'power1.out' }, paused: true })
    .to('.brand_since-logo-icon', { opacity: 1 })

  const fixedLogoHoverScroll = () => {
    fixedLogo.addEventListener('mouseenter', () => {
      logoHoverTl.play()
    })

    fixedLogo.addEventListener('mouseleave', () => {
      logoHoverTl.reverse()
    })
  }

  // Listen for scroll events and check the scroll percentage
  window.addEventListener('scroll', () => {
    const scrollPercentage = calculateScrollPercentage()

    // Check the scroll percentage and update navColor accordingly
    if (scrollPercentage >= 6) {
      fixedLogoHoverScroll()
    } else {
      fixedLogo.addEventListener('mouseenter', () => {
        logoHoverTl.pause()
      })

      fixedLogo.addEventListener('mouseleave', () => {
        logoHoverTl.pause()
      })
    }
  })
}
