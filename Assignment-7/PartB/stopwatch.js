let startTime = null;
let elapsedTime = 0;
let intervalId = null;

async function startTimer() {
    if (startTime === null) {
        startTime = Date.now();
    }
    while (true) {
        updateTimer();
        await new Promise(resolve => setTimeout(resolve, 1000));
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

const datePicker = document.getElementById('datePicker');
const currentDate = new Date();
datePicker.valueAsDate = currentDate;
datePicker.min = '2000-01-01'; // Example: Set a minimum date
datePicker.max = '2050-12-31'; // Example: Set a maximum date
datePicker.disabled = false; // Enable the date picker

updateTimer(); // Update timer display initially