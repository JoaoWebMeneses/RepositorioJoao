let seconds = 0;
let minutes = 0;
let startInterval;

function Start() {
    if (!startInterval) {
        startInterval = setInterval(function() {
            seconds++;
            const secondsElement = document.getElementById("seconds");
            if (seconds < 10) {
                secondsElement.innerHTML = `0${seconds}`;
            } else {
                secondsElement.innerHTML = seconds;
            }
            const minutesElement = document.getElementById("minutes");
            if (seconds === 60) {
                seconds = 0;
                secondsElement.innerHTML = `00`;
                minutes++;
            }
            if (minutes < 10) {
                minutesElement.innerHTML = `0${minutes}`;
            } else {
                minutesElement.innerHTML = minutes;
            }
            if (minutes < 10 && seconds < 10){
                document.title = `0${minutes}:0${seconds}`;
            }
            else if (minutes < 10 && seconds >= 10){
                document.title = `0${minutes}:${seconds}`;
            }
            else if (minutes >= 10 && seconds < 10){
                document.title = `${minutes}:0${seconds}`;
            }
            else if (minutes >= 10 && seconds >= 10){
                document.title = `${minutes}:${seconds}`
            }
        }, 1000);
    }
}

function Pause() {
    clearInterval(startInterval);
    startInterval = null;
}

function Stop() {
    clearInterval(startInterval);
    startInterval = null;
    minutes = 0;
    seconds = 0;
    document.getElementById("seconds").innerHTML = `0${seconds}`;
    document.getElementById("minutes").innerHTML = `0${minutes}`;
}
