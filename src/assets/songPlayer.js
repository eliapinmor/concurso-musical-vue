//Some howler variables
let songVolume = 0.5;
let howler;

import { Howl } from "howler";

//function to play a song
export function playSong5s(src) {
  if (howler) {
    howler.stop();
  }

  howler = new Howl({
    src: [src],
    volume: songVolume,
    onload: () => {
      const totalDuration = howler.duration();
      const maxStart = Math.max(totalDuration - 10, 0);
      const startTime = Math.random() * maxStart;
      howler.seek(startTime);
      howler.play();

      console.log(maxStart);
      console.log(`Playing from ${startTime} seconds`);
    },
  });

  setTimeout(() => {
          howler.stop();
        }, 10000);
}

//function to stop a song
export function stopSong() {
  if (howler) {
    howler.stop();
    howler.unload();
  }
}
