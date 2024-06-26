import { gsap } from 'gsap'

export const cottonPlantMoveIx = (delayNum) => {
  if (delayNum === undefined) {
    delayNum = 0
  }

  const cottons = document.querySelectorAll('.cotton_image')

  let cottonTl = gsap.timeline()

  const cottonMovesUp = () => {
    cottonTl.clear().progress(0)
    gsap.set(cottons, { x: 'random(-500, 500)', y: '30vh' })
    cottonTl.to(cottons, {
      y: '-120vh',
      duration: 10,
      stagger: { each: 10 },
      ease: 'linear',
      repeat: -1,
    })
    gsap.delayedCall(delayNum, () => {
      gsap.delayedCall(cottonTl.duration() + 1, cottonMovesUp)
    })
  }

  // Start the entire sequence with a delay of 6 seconds
  gsap.delayedCall(delayNum, cottonMovesUp)
}
