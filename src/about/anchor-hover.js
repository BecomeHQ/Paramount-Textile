import gsap from 'gsap'

export const anchorHoverIx = () => {
  const anchorCards = document.querySelectorAll('.anchor-item_card')

  anchorCards.forEach((card) => {
    const cardItem = card.querySelector('.anchor-item')
    const cardname = card.querySelector('.anchor-name')
    const cardOverlay = card.querySelector('.about_journey-overlay')
    const cardCursor = card.querySelector('.anchor-item_cursor')

    const tl = gsap.timeline({ paused: true })
    let exitTime = 0
    gsap.set(cardItem, {
      transformPerspective: 1000,
      transformStyle: 'preserve-3d',
    })

    tl.from(cardItem, { rotationY: -50 })
      .from(cardname, { yPercent: 100 }, 0)
      .from(cardCursor, { scale: 0 }, 0)
      .from(cardOverlay, { opacity: 0 }, 0)
      .addPause('exit')
    exitTime = tl.duration()
    console.log('Run')
    tl.to(cardItem, { rotationY: '-50deg' })
      .to(cardname, { y: '0%' }, 0)
      .to(cardCursor, { scale: 1 }, 0)
      .to(cardOverlay, { opacity: 1 }, 0)

    card.addEventListener('mouseenter', () => {
      if (tl.time() < exitTime) {
        console.log('mouseenter before exit time')
        tl.play()
      } else {
        console.log('mouseenter after exit time')
        tl.restart()
      }
    })
    card.addEventListener('mouseleave', () => {
      if (tl.time() < exitTime) {
        console.log(tl.time(), 'true')
        tl.reverse()
      } else {
        console.log(tl.time())
        tl.reverse()
      }
    })
  })
}
