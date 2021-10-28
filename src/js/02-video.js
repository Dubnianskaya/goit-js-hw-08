import Player from '@vimeo/player';
import throttle from 'lodash.throttle';
const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const CURRENT_TIME_KEY = "videoplayer-current-time"

const onCurrentTime = function(event) {
   localStorage.setItem(CURRENT_TIME_KEY, event.seconds)
}
const savedTime = localStorage.getItem(CURRENT_TIME_KEY);
player.setCurrentTime(savedTime).catch(function(error) {
    console.log(error.message)
})
player.on('timeupdate', throttle(onCurrentTime, 1000));