function MediaPlayer(config) { //objeto de configuracion
  this.media = config.el //el es la media del objeto
}
// MediaPlayer.prototype.isPaused = function() {
//   return this.media.paused
// } //Metodo para saber si el video esta pausado o detenido
MediaPlayer.prototype.play = function() {
  this.media.play()
}  //metodo play al video
MediaPlayer.prototype.pause = function() {
  this.media.pause()
} //metodo pause video
MediaPlayer.prototype.toggleVideo = function () {
  if(this.media.paused) {
    this.media.play()
  } //si esta pausado, play
  else {
    this.media.pause()
  }//si esta corriendo, pause
}

export default MediaPlayer
