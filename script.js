
var end = moment("2023-03-18");

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
    autoplay: true,
    loop: true,
    volume: 0.7,
});
var buttonPlaySound = document.getElementsByClassName('sound-button');
buttonPlaySound.sound.addEventListener("click", function(){
    sound.mute(true);
    buttonPlaySound.sound.classList.add("hidden");
    buttonPlaySound.mute.classList.remove("hidden");
})
buttonPlaySound.mute.addEventListener("click", function(){
    sound.mute(false);
    buttonPlaySound.mute.classList.add("hidden");
    buttonPlaySound.sound.classList.remove("hidden");
})

setInterval(function () {
    var time = getLeftTime();
    timeDiv.days.innerHTML = time.days;
    timeDiv.hours.innerHTML = time.hours;
    timeDiv.minutes.innerHTML = time.minutes;
    timeDiv.seconds.innerHTML = time.seconds;
}, 1000);

// setTimeout(function () {
//     document.getElementById("second_heart").style.display = "block";
// }, 800)