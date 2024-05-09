import { gsap } from 'gsap'

export const headerIx = () => {
  const logoPaths = gsap.utils.toArray('.brand_logo_text-svg path')
  const logoSubText = document.querySelectorAll('.brand_logo_text .char')
  logoPaths.reverse()
  const tl = gsap.timeline()
  console.log('Console')
  let mm = gsap.matchMedia()

  // on tablet and below
  mm.add('(max-width: 850px)', () => {
    tl.set('.brand_since-alt', { overflow: 'clip' })
  })

  tl.from(logoPaths, {
    opacity: 0.1,
    duration: 0.05,
    ease: 'power3.out',
    stagger: { amount: 1 },
  }).from([logoSubText, '.brand_since svg', '.brand_since-alt > img'], {
    duration: 0.7,
    y: '110%',
    ease: 'power1.out',
  })

  let delay = tl.totalDuration()
  console.log(delay)
  return delay
}
