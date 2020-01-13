function MediaPlayer(config) { //objeto de configuracion
  this.media = config.el //el es la media del objeto
  this.plugins = config.plugins || [] //pluginns llegan por obj de configuracion. this igual al plugin o a array vacio, para cuando no  hay plugin

  this._initPlugins()//inicializar plugins
}

MediaPlayer.prototype._initPlugins = function() {
  //hace algo con cada plugin definido, los corre
  this.plugins.forEach(plugin => plugin.run(this)) //recibe y lo ejecuta, corre
  //no se puede simplemente instanciar el plugin i.e: plugin(), se debe llamar algún método en particular
}

MediaPlayer.prototype.mute = function() {
  this.media.muted = true
}
MediaPlayer.prototype.unmute = function() {
  this.media.muted = false
}
MediaPlayer.prototype.toggleAudio = function() {
  if(this.media.muted === true){
    this.unmute()
  }
  else {
    this.mute()
  }
}


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
