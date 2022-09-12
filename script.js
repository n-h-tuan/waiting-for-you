
var end = moment("2023-02-28");

function getLeftTime() {
    var now = moment();
    var diffÍnSecond = end.diff(now, "second");
    return {
        "days": Math.floor(diffÍnSecond / 3600 / 24),
        "hours": Math.floor(diffÍnSecond / 3600) % 24,
        "minutes": Math.floor(diffÍnSecond / 60) % 60,
        "seconds": Math.floor(diffÍnSecond % 60),
    }
}
function checkIsLandscapeOrientation() {
    return (window.innerWidth / window.innerHeight) >= 1;
}

var timeDiv = document.getElementsByClassName("timer-display");
var mainContainer = document.getElementById("main_container");

// check window is landscape or portrait
if (checkIsLandscapeOrientation()) {
    mainContainer.classList.add('rand-bg-' + (Math.floor(Math.random() * 4 + 6)))

}
else {
    mainContainer.classList.add('rand-bg-' + (Math.floor(Math.random() * 4 + 1)))
}
// Automatically play sound
var sound = new Howl({
    src: ['assets/sounds/only_love.mp3'],
    loop: true,
    volume: 0.7
});
var buttonPlaySound = document.getElementsByClassName('sound-button');
buttonPlaySound.play.addEventListener("click", function(){
    console.log(123);
    sound.play();
    buttonPlaySound.play.classList.add("hidden");
    buttonPlaySound.pause.classList.remove("hidden");
})
buttonPlaySound.pause.addEventListener("click", function(){
    sound.pause();
    buttonPlaySound.pause.classList.add("hidden");
    buttonPlaySound.play.classList.remove("hidden");
})

setInterval(function () {
    var time = getLeftTime();
    timeDiv.days.innerHTML = time.days;
    timeDiv.hours.innerHTML = time.hours;
    timeDiv.minutes.innerHTML = time.minutes;
    timeDiv.seconds.innerHTML = time.seconds;
}, 1000);