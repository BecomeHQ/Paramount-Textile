export const playVideo = () => {
  //   const videos = document.querySelectorAll('.plyr-component')

  //   videos.forEach((video) => {
  //     const videoPlayer = video.querySelector('.plyr__video-embed')
  //     const playVideoButton = video.querySelector('.plyr-component_tn-button')
  //     const videoThumbnail = video.querySelector('.video-mask')
  //     const player = new Plyr(videoPlayer, {
  //       controls: ['play', 'progress', 'current-time', 'mute', 'fullscreen'],
  //       resetOnEnd: true,
  //       seekTime: 10,
  //       speed: { selected: 1, options: [0.5, 0.75, 1, 1.25, 1.5, 1.75, 2, 4] },
  //     })

  //     const playVideo = () => {
  //       videoThumbnail.style.display = 'none'
  //       player.play()
  //       player.restart()
  //     }

  //     playVideoButton.addEventListener('click', playVideo)
  //   })

  let currentlyPlayingPlayer = null

  const videos = document.querySelectorAll('.plyr-component')

  videos.forEach((video) => {
    const videoPlayer = video.querySelector('.plyr__video-embed')
    const playVideoButton = video.querySelector('.plyr-component_tn-button')
    const videoThumbnail = video.querySelector('.video-mask')
    const player = new Plyr(videoPlayer, {
      controls: ['play', 'progress', 'current-time', 'mute', 'fullscreen'],
      resetOnEnd: true,
      seekTime: 10,
      speed: { selected: 1, options: [0.5, 0.75, 1, 1.25, 1.5, 1.75, 2, 4] },
    })

    const playVideo = () => {
      if (currentlyPlayingPlayer && currentlyPlayingPlayer !== player) {
        currentlyPlayingPlayer.pause()
      }

      videoThumbnail.style.display = 'none'
      player.play()
      player.restart()
      currentlyPlayingPlayer = player
    }

    playVideoButton.addEventListener('click', playVideo)
  })
}
