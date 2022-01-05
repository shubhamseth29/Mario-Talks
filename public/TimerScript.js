let hours = 0;
let minutes = 0;
let seconds = 0;
let timer;
function handleTimer() {
    timer = setInterval(() => {
        seconds++;
        if (seconds === 60) {
            minutes++;
            seconds = 0;
        }
        if (minutes === 60) {
            hours++;
            minutes = 0;
        }
       printNumber();
    }, 1000);
}

function handleStartTimer() {
    handleTimer();
}

function handlePauseTimer() {
    clearInterval(timer);
    printNumber();
}

function handleResetTimer() {
    clearInterval(timer);
    hours = 0;
    minutes = 0;
    seconds = 0;
    printNumber();

}

function printNumber(){
    document.getElementsByClassName('timerBox')[0].innerHTML =
        handleZero(hours) + ':' + handleZero(minutes) + ':' + handleZero(seconds);
    document.getElementsByClassName('timerBox')[1].innerHTML =
    handleZero(hours) + ':' + handleZero(minutes) + ':' + handleZero(seconds);
}

function handleZero(time){
    if((time+'').length < 2){
        time = '0' + time;
    }
    return time;
}
