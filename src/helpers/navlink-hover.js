import { gsap } from 'gsap'

export const navlinkHoverIx = () => {
  const navlinks = document.querySelectorAll('.nav-link')

  navlinks.forEach((link) => {
    const navlinkBg = link.querySelector('.nav-link_bg')

    const navlinkTl = gsap
      .timeline({ defaults: { duration: 0.3 }, paused: true })
      .to(navlinkBg, { opacity: 1 })
      .to(link, { color: '#ffffff' }, 0)

    link.addEventListener('mouseenter', () => {
      navlinkTl.play()
    })
    link.addEventListener('mouseleave', () => {
      navlinkTl.reverse()
    })
  })
}
