import MediaPlayer from './MediaPlayer.js'
import AutoPlay from './plugins/AutoPlay.js'
const video  = document.querySelector('video')
const playButton = document.getElementById('play')
const muteButton = document.getElementById('mute')
const player = new MediaPlayer({
  el: video,
  plugins: [
  //new AutoPlay()
  ]
})
//el plugin es una instancia de AutoPlay

playButton.onclick = () => player.toggleVideo()
muteButton.onclick = () => player.toggleAudio()
