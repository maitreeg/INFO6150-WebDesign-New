let startTime = null;
let elapsedTime = 0;
let intervalId = null;
// Async, Await, Promises, Set Interval, and Clear Interval 
async function startTimer() {
    if (startTime === null) {
        startTime = Date.now();
    }
    intervalId = setInterval(() => {
        updateTimer();
    }, 1000);
    while (true) {
        await new Promise(resolve => {
            setTimeout(resolve, 1000) 
        });
    }
    
}

function stopTimer() {
    clearInterval(intervalId);
    intervalId = null;
    elapsedTime += Date.now() - startTime;
    startTime = null;
}

function resetTimer() {
    clearInterval(intervalId);
    intervalId = null;
    elapsedTime = 0;
    startTime = null;
    updateTimer();
}

function updateTimer() {
    const currentTime = Date.now();
    let totalMilliseconds = elapsedTime;
    if (startTime !== null) {
        totalMilliseconds += currentTime - startTime;
    }
    const formattedTime = formatTime(totalMilliseconds);
    timerLabel.textContent = formattedTime;
}

function formatTime(milliseconds) {
    const totalSeconds = Math.floor(milliseconds / 1000);
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;
    return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}

const startBtn = document.getElementById('startBtn');
const stopBtn = document.getElementById('stopBtn');
const resetBtn = document.getElementById('resetBtn');
const timerLabel = document.getElementById('timerLabel');

startBtn.addEventListener('click', () => {
    startTimer();
    startBtn.disabled = true;
    stopBtn.disabled = false;
});
stopBtn.addEventListener('click', () => {
    stopTimer();
    startBtn.disabled = false;
    stopBtn.disabled = true;
});
resetBtn.addEventListener('click', () => {
    resetTimer();
    startBtn.disabled = false;
    stopBtn.disabled = true;
});

document.getElementById('datePicker').valueAsDate = new Date();
// const currentDate = new Date();
// // const currentDate = new Date();
// const userOffset = currentDate.getTimezoneOffset() * 60000; // Offset in milliseconds
// const adjustedDate = new Date(currentDate.getTime() - userOffset);
// datePicker.valueAsDate = adjustedDate;
// // datePicker.valueAsDate = currentDate;
// datePicker.min = '2000-01-01'; // : Set a minimum date
// datePicker.max = '2050-12-31'; // : Set a maximum date
// datePicker.disabled = false; // Enable the date picker

datePicker.addEventListener('keydown',(e) => {
    e.preventDefault();
})

updateTimer(); // Update timer display initially