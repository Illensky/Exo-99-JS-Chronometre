// Make it count up on a timer, calling this function
let secondsTimer = 0;
let timerId = null;
let seconds = document.getElementById("seconds");
let countUp = function() {
    timerId = setTimeout(() => {
        secondsTimer++
        seconds.innerHTML = secondsTimer.toString()
        countUp()
    }, 1000)
};

countUp()

// How can you make it stop counting?
let stopCountUp = function() {
    clearTimeout(timerId)
};
let stopButton = document.getElementById("stop-button");
stopButton.addEventListener("click", stopCountUp);

