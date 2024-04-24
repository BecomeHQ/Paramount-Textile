import { gsap } from 'gsap'

export const sectionHeroTl = () => {
  const heroTimeline = gsap.timeline()
  const logoPaths = gsap.utils.toArray('.brand_logo_text-svg path')
  logoPaths.reverse()

  window.onload = () => {
    // Set initial state
    gsap.set(logoPaths, { opacity: 0.1 })
    // Animate logoPaths
    logoPaths.forEach((path) => {
      heroTimeline.to(path, {
        opacity: 1,
        duration: 0.05,
        ease: 'power4.out',
        stagger: { amount: 0.5 },
      })
    })

    heroTimeline
      .from('.home_hero_content img', { opacity: 0, duration: 0.3 }, '-=1.3')
      .from(
        '.home_hero_content h1 .char',
        {
          opacity: 0,
          duration: 0.2,
          ease: 'power1.out',
          stagger: { amount: 3 },
        },
        '-=1.3'
      )

    heroTimeline
      .from(
        '.brand_since',
        { opacity: 0, duration: 0.3, autoAlpha: 0 },
        '-=1.3'
      )
      .from(
        '.brand_since-alt',
        { opacity: 0, duration: 0.3, autoAlpha: 0 },
        '-=1.3'
      ) // Animate for mobile Since 1979
      .from(
        '.brand_logo_text .char',
        {
          opacity: 0,
          stagger: { amount: 1 },
          autoAlpha: 0,
        },
        '+=3'
      )
      .from(
        '.navbar_component',
        {
          y: '-15vh',
          opacity: 0,
          duration: 1,
          ease: 'back.out(1.7)',
          autoAlpha: 0,
        },
        '-=3'
      )
  }
}
