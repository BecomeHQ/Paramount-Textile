import { gsap } from 'gsap'

export const linkHoverIx = () => {
  $('[link]').each(function (index) {
    let listOne = $(this).find('[link_text_is-1] .char')
    let listTwo = $(this).find('[link_text_is-2] .char')
    let line = $(this).find('[line]')

    // Timeline
    let linkHoverTl = gsap.timeline({ paused: true })

    linkHoverTl.to(line, { width: 0, duration: 0.7 })
    $(this).on('mouseenter', function () {
      linkHoverTl.restart()
    })
    $(this).on('mouseleave', function () {
      linkHoverTl.reverse()
      // linkHoverTl.timeScale(1)
    })
  })
}
