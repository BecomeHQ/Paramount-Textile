import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export const sectionVideoClipIx = () => {
  const videoClip = gsap.timeline({
    scrollTrigger: {
      trigger: '[long-scroll-section]',
      start: 'top top',
      scrub: true,
      smoothing: 0.9,
    },
  })
  videoClip.to('[long-scroll-section] .video-clip', {
    scale: 10,
    rotation: 360,
    duration: 2,
    ease: 'linear',
  })
}
