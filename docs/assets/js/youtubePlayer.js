var nextStream = 'live_stream?channel=UCm0RtuanqFg4ycLPMTZZXPQ&autoplay=1';
var lastEpisode = 'FnyUaWgFb-I';
var date = Date()
var dateArray = date.split(' ')
var today = dateArray[0]
var hour = dateArray[4].substr(0, 2)
var player = document.getElementById('youtubePlayer');
var lastThis = document.getElementById('lastThis')

console.log(today, hour)
if (today == 'Thu' && hour >= 18) {
  // player.innerHTML = `<iframe id="ytplayer" type="text/html" width="90%" height="67%" src="https://www.youtube.com/embed/${nextStream}" frameborder="0" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
  player.innerHTML = `<iframe id="ytplayer" type="text/html" width="90%" height="55%" src="https://www.youtube.com/playlist?list=PLxdt1dYCiWA5UBzJngYw7exKZcYSiE2R_" frameborder="0" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowfullscreen rel='0'></iframe>`;
  lastThis.innerText = 'Live at 7PM!';
}
else {
  console.log('last weeks')
  player.innerHTML = `<iframe id="ytplayer" type="text/html" width="90%" height="55%" src="https://www.youtube.com/embed/${lastEpisode}?rel=0" frameborder="0" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowfullscreen rel='0'></iframe>`;
  lastThis.innerText = "Last Week's Episode";
}

// Load the IFrame Player API code asynchronously.
// var tag = document.createElement('script');
// tag.src = "https://www.youtube.com/player_api";
// var firstScriptTag = document.getElementsByTagName('script')[0];
// firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// Replace the 'ytplayer' element with an <iframe> and
// YouTube player after the API code downloads.
// var player;
// function onYouTubePlayerAPIReady() {
//   player = new YT.Player('ytplayer', {
//     height: '67%',
//     width: '90%',
//     videoId: lastEpisode,
//   });
// }