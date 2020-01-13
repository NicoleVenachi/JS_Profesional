function AutoPlay() {}

AutoPlay.prototype.run = function(player) {
    //recibe una instancia del media player
    player.mute()
    player.play()
  }

//un video no puede darse AutoPlay, debe inicar con gesto de usuario
//una forma de evadir esto es si el video esta mute puede darse autoplay
export default AutoPlay
