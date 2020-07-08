var apikeys = require("../apikeys.js");
var youtube_apikey = apikeys.youtube;
var { google } = require('googleapis');
const youtube = google.youtube({
    version: 'v3',
    auth: youtube_apikey,
});
var episodeList = [];


// suthorizes, then requests playlist information from youtube; exports the function

function fetchEpisodes() {
    var episodeSection;
    return youtube.playlistItems.list({
        "part": [
            "snippet"
        ],
        "playlistId": "PLxdt1dYCiWA5UBzJngYw7exKZcYSiE2R_"
    })
        .then(function (response) {
            // Handle the results here (response.result has the parsed body).
            // console.log("Response", response);
            episodeList = (response.data.items)
            // console.log('List Returned From API:\n' + episodeList);
    
            // constructor for episode items
            class episodeItem {
                constructor(title, number, description, id, thumbnails) {
                    this.title = "Episode Title",
                        this.number = 0,
                        this.description = "Episode Description",
                        this.id = "episodeId",
                        this.thumbnails = "link.to.thumbnail"
                }
            } 
            // iterates over the list of episode objects and constructs unordered list items
            episodeList.forEach(episode => {
                // let ep = new episodeItem(episode.snippet.title, episode.snippet.position, episode.snippet.description, episode.snippet.resourceId.videoId, episode.snippet.thumbnails);
                episodeSection = `<div class='episode-div'><a><img src='${episode.snippet.thumbnails.default.url}'><h4>${episode.snippet.title}</h4></div>` + episodeSection;

                console.log(episodeSection);
                return (episodeSection);
            })
        }),
            function (err) {
                console.error("Execute error", err);
            }
}


module.exports = fetchEpisodes();
// export {fetchEpisodes, episodeSection}