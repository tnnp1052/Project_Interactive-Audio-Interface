let sourceSong1 = document.querySelector(`#song1`)
let sourceSong2 = document.querySelector(`#song2`)
let sourceSong3 = document.querySelector(`#song3`)
let sourceSong4 = document.querySelector(`#song4`)
let sourceSong5 = document.querySelector(`#song5`)

let chooseSong1 = document.querySelector(`#ornament-1`)
let chooseSong2 = document.querySelector(`#ornament-2`)
let chooseSong3 = document.querySelector(`#ornament-3`)
let chooseSong4 = document.querySelector(`#ornament-4`)
let chooseSong5 = document.querySelector(`#ornament-5`)

let beginText = document.querySelector(`.begin`)
let songCoverAlbum = document.querySelector(`.album-cover`)
let songTitle = document.querySelector(`.title`)
let songName = document.querySelector(`.singer`)
let playPauseButton = document.querySelector(`.play-pause-button`)

let listOfSong = [
    `sourceSong1`,
    `sourceSong2`,
    `sourceSong3`,
    `sourceSong4`,
    `sourceSong5`
]

var x = 0
var y = 0 //0 = pause, 1 = playing

let playSong1 = function() {
    x = 1
    y = 1
    sourceSong1.play()
    sourceSong2.load()
    sourceSong3.load()
    sourceSong4.load()
    sourceSong5.load()
    // let loadNotChosenSong =  listOfSong.slice(1)
    // loadNotChosenSong.load()
    beginText.remove()
    songCoverAlbum.setAttribute(`src`, `img/song-1-cover.jpg`)
    songCoverAlbum.style.setProperty(`display`, `block`)
    songTitle.textContent = `All I Want for Christmas is You`
    songTitle.style.setProperty(`display`, `block`)
    songName.textContent = `Mariah Carey`
    songName.style.setProperty(`display`, `block`)
    playPauseButton.style.setProperty(`display`, `block`)
    playPauseButton.style.setProperty(`filter`, `grayscale(0%)`)
}

let playSong2 = function() {
    x = 2
    y = 1
    sourceSong2.play()
    sourceSong1.load()
    sourceSong3.load()
    sourceSong4.load()
    sourceSong5.load()
    beginText.remove()
    songCoverAlbum.setAttribute(`src`, `img/song-2-cover.jpg`)
    songCoverAlbum.style.setProperty(`display`, `block`)
    songTitle.textContent = `Last Christmas`
    songTitle.style.setProperty(`display`, `block`)
    songName.textContent = `Wham!`
    songName.style.setProperty(`display`, `block`)
    playPauseButton.style.setProperty(`display`, `block`)
    playPauseButton.style.setProperty(`filter`, `grayscale(0%)`)
}

let playSong3 = function() {
    x = 3
    y = 1
    sourceSong3.play()
    sourceSong1.load()
    sourceSong2.load()
    sourceSong4.load()
    sourceSong5.load()
    beginText.remove()
    songCoverAlbum.setAttribute(`src`, `img/song-3-cover.jpg`)
    songCoverAlbum.style.setProperty(`display`, `block`)
    songTitle.textContent = `Merry Christmas, Happy Holidays`
    songTitle.style.setProperty(`display`, `block`)
    songName.textContent = `NSYNC`
    songName.style.setProperty(`display`, `block`)
    playPauseButton.style.setProperty(`display`, `block`)
    playPauseButton.style.setProperty(`filter`, `grayscale(0%)`)
}

let playSong4 = function() {
    x = 4
    y = 1
    sourceSong4.play()
    sourceSong1.load()
    sourceSong2.load()
    sourceSong3.load()
    sourceSong5.load()
    beginText.remove()
    songCoverAlbum.setAttribute(`src`, `img/song-4-cover.jpg`)
    songCoverAlbum.style.setProperty(`display`, `block`)
    songTitle.textContent = `My Only Wish`
    songTitle.style.setProperty(`display`, `block`)
    songName.textContent = `Britney Spears`
    songName.style.setProperty(`display`, `block`)
    playPauseButton.style.setProperty(`display`, `block`)
    playPauseButton.style.setProperty(`filter`, `grayscale(0%)`)
}

let playSong5 = function() {
    x = 5
    y = 1
    sourceSong5.play()
    sourceSong1.load()
    sourceSong2.load()
    sourceSong4.load()
    sourceSong3.load()
    beginText.remove()
    songCoverAlbum.setAttribute(`src`, `img/song-5-cover.jpg`)
    songCoverAlbum.style.setProperty(`display`, `block`)
    songTitle.textContent = `Santa Tell Me`
    songTitle.style.setProperty(`display`, `block`)
    songName.textContent = `Ariana Grande`
    songName.style.setProperty(`display`, `block`)
    playPauseButton.style.setProperty(`display`, `block`)
    playPauseButton.style.setProperty(`filter`, `grayscale(0%)`)
}

let song1IsChosen = chooseSong1.addEventListener(`click` , playSong1)
let song2IsChosen = chooseSong2.addEventListener(`click` , playSong2)
let song3IsChosen = chooseSong3.addEventListener(`click` , playSong3)
let song4IsChosen = chooseSong4.addEventListener(`click` , playSong4)
let song5IsChosen = chooseSong5.addEventListener(`click` , playSong5)

let playOrPause = function() {   
    if (y === 1 && x === 1) {
            sourceSong1.pause()
            y = 0
            playPauseButton.style.setProperty(`filter`, `grayscale(50%)`)
        } else if (y === 1 && x === 2) {
            sourceSong2.pause()
            y = 0
            playPauseButton.style.setProperty(`filter`, `grayscale(50%)`)
        } else if (y === 1 && x === 3) {
            sourceSong3.pause()
            y = 0
            playPauseButton.style.setProperty(`filter`, `grayscale(50%)`)
        } else if (y === 1 && x === 4) {
            sourceSong4.pause()
            y = 0
            playPauseButton.style.setProperty(`filter`, `grayscale(50%)`)
        } else if (y === 1 && x === 5) {
            sourceSong5.pause()
            y = 0
            playPauseButton.style.setProperty(`filter`, `grayscale(50%)`)
        } else if (y === 0 && x === 1) {
            y = 1
            sourceSong1.play()
            playPauseButton.style.setProperty(`filter`, `grayscale(0%)`)
        } else if (y === 0 && x === 2) {
            y = 1
            sourceSong2.play()
            playPauseButton.style.setProperty(`filter`, `grayscale(0%)`)
        } else if (y === 0 && x === 3) {
            y = 1
            sourceSong3.play()
            playPauseButton.style.setProperty(`filter`, `grayscale(0%)`)
        } else if (y === 0 && x === 4) {
            y = 1
            sourceSong4.play()
            playPauseButton.style.setProperty(`filter`, `grayscale(0%)`)
        } else if (y === 0 && x === 5) {
            y = 1
            sourceSong5.play()
            playPauseButton.style.setProperty(`filter`, `grayscale(0%)`)
        }
}


// let pauseTheSong = function() {
//     if (sourceSong1.play) {
//         sourceSong1.pause()
//         playPauseButton.style.setProperty(`filter`, `grayscale(50%)`)
//     } else if (sourceSong2.play) {
//         sourceSong2.pause()
//         playPauseButton.style.setProperty(`filter`, `grayscale(50%)`)
//     } else if (sourceSong3.play) {
//         sourceSong3.pause()
//         playPauseButton.style.setProperty(`filter`, `grayscale(50%)`)
//     } else if (sourceSong4.play) {
//         sourceSong4.pause()
//         playPauseButton.style.setProperty(`filter`, `grayscale(50%)`)
//     } else if (sourceSong5.play) {
//         sourceSong5.pause()
//         playPauseButton.style.setProperty(`filter`, `grayscale(50%)`)
//     }
// }

// playPauseButton.addEventListener(`click`, pauseTheSong)

// let audio = null 

// let playASong = function() {
//     let song = null
//     if (audio = song1IsChosen) {
//         audio.src = song.src
//     } else if (audio = song2IsChosen) {
//         audio.src = song.src
//     } else if (audio = song3IsChosen) {
//         audio.src = song.src
//     } else if (audio = song4IsChosen) {
//         audio.src = song.src
//     } else if (audio = song5IsChosen) {
//         audio.src = song.src
//     }
// }

// let playOrPause = function() {
//     if (sourceSong1.play) {
//         sourceSong1.pause()        
//         playPauseButton.style.setProperty(`filter`, `grayscale(50%)`)
//     } else if (sourceSong2.play) {
//         sourceSong2.pause()
//         playPauseButton.style.setProperty(`filter`, `grayscale(50%)`)
//     } 
// }    

//     else if (sourceSong3.paused) {
//         sourceSong3.play()
//         playPauseButton.style.setProperty(`filter`, `grayscale(0%)`)
//     } else if (sourceSong3.play) {
//         sourceSong3.pause()
//         playPauseButton.style.setProperty(`filter`, `grayscale(50%)`)
//     } 
    

//     else if (sourceSong4.paused) {
//         sourceSong4.play()
//         playPauseButton.style.setProperty(`filter`, `grayscale(0%)`)
//     } else if (sourceSong4.play) {
//         sourceSong4.pause()
//         playPauseButton.style.setProperty(`filter`, `grayscale(50%)`)
//     } 
    

//     else if (sourceSong5.paused) {
//         sourceSong5.play()
//         playPauseButton.style.setProperty(`filter`, `grayscale(0%)`)
//     } else if (sourceSong5.play) {
//         sourceSong5.pause()
//         playPauseButton.style.setProperty(`filter`, `grayscale(50%)`)
//     }
// }

playPauseButton.addEventListener(`click`, playOrPause)

// let pauseSong1 = function() {
//     sourceSong1.pause()
// }

// let pauseSong2 = function() {
//     sourceSong2.pause()
// }

// let pauseSong3 = function() {
//     sourceSong3.pause()
// }

// let pauseSong4 = function() {
//     sourceSong4.pause()
// }

// let pauseSong5 = function() {
//     sourceSong5.pause()
// }

// song1CoverAlbum.addEventListener(`click` , pauseSong1)
// song2CoverAlbum.addEventListener(`click` , pauseSong2)
// song4CoverAlbum.addEventListener(`click` , pauseSong3)
// song4CoverAlbum.addEventListener(`click` , pauseSong4)
// song5CoverAlbum.addEventListener(`click` , pauseSong5)