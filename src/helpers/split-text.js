export const splitText = () => {
  // Split Type
  let typeSplit

  function runSplitType() {
    typeSplit = new SplitType('[text-split]', {
      types: 'lines, words, chars',
      tagName: 'span',
    })
  }

  runSplitType()

  //Run the code when window width changes
  let windowWidth = window.innerWidth
  window.addEventListener('resize', function () {
    if (windowWidth !== window.innerWidth) {
      windowWidth = window.innerWidth
      typeSplit.revert()
      runSplitType()
    }
  })
}
