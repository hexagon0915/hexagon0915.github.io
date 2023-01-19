let youtubeAPI = document.createElement("script")
youtubeAPI.src = 'https://www.youtube.com/iframe_api'

var firstScript = document.getElementsByTagName('script')[0];
firstScript.parentNode.insertBefore(youtubeAPI, firstScript);

let previewPlayer;
function onYouTubePlayerAPIReady() {
    previewPlayer = new YT.Player('preview', {
        width: '1280',
        height: '720',
        videoId: 'nUrYVH4BE2A',
        events: {
            'onReady': onPlayerReady,
            'onStateChange': onStateChange
        },
        playerVars: {
            controls: 0,
            disablekb: 1,
            mute: 1,
            showInfo: 0,
            modestbranding: 1,
            rel: 0
        }
    })
}

function onPlayerReady(event) {
    event.target.setPlaybackQuality('hd720')
    event.target.playVideo()
}

function onStateChange(event) {
    console.log(event.data)
    if (event.data == YT.PlayerState.ENDED) {
        document.querySelector('#preview-cover').style.backgroundColor = "rgba(0, 0, 0, 1)"
        previewPlayer.loadVideoById('nUrYVH4BE2A', 5.67, 'hd720')
        document.querySelector('#preview-cover').style.backgroundColor = "rgba(0, 0, 0, 0.2)"
    }
}

document.addEventListener('DOMContentLoaded', (event) => {
    let previewCover = document.querySelector('#preview-cover')
    let previewVideo = previewCover.querySelector('#preview')

    const previewLoop = () => {
        let previewWidth = window.innerWidth
        let previewHeight = previewWidth / 16 * 9

        requestAnimationFrame(previewLoop)
    }

    requestAnimationFrame(previewLoop)
})