class Jukebox {
  constructor() {
    this.songQueue = [];
    this.currentSong = null;
    this.songLibrary = [];
  }

  //employees only
  _addToLibrary(song) {
    this.songLibrary.push(song);
  }

  addToQueue(song) {
    this.songQueue.push(song);
  }

  //play song
  playSong(song) {
    if (songQueue[song]) {
      this.currentSong = song;
      console.log("playing: song")
    } else if (songLibrary[song]) {
      this.currentSong = song;
      console.log("playing: song")
    } else {
      console.log("sorry we don't have this song yet")
    }

  }

  pause() {
    //function go stop song
  }

  skipSong() {
    if (songQueue) {
      playSong(songQueue.shift())
    } else {
      console.log("sorry, no songs in the queue")
    }
  }

}