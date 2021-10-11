
const hoursUpdate = document.querySelector("#time-hour");
const minUpdate = document.querySelector("#time-min");
const secUpdate = document.querySelector("#time-sec");
const aMpMUpdate = document.querySelector(".bg-gradient");
const greet = document.getElementById("greetings");
const party = document.getElementById("party");
const mess = document.getElementById("bhojan_");
const lunchimg = document.getElementById("bhojan");

function concatZero(value) {
    return value < 10 ? '0'.concat(value) : value
}

function time_Update() {
    // takings data from our browser
    const tarik = new Date();
    const sec = tarik.getSeconds();
    const min = tarik.getMinutes();
    const hr = tarik.getHours();

    //    updating data on output 
    hoursUpdate.innerHTML = `${concatZero((hr % 12) || 12)}`
    minUpdate.innerHTML = `${concatZero(min)}`
    secUpdate.innerHTML = `${concatZero(sec)}`
    aMpMUpdate.innerHTML = `${hr > 12 ? 'PM' : 'AM'}`

}

setInterval(time_Update, 1000);

const tarik = new Date();
const sec = tarik.getSeconds();
const min = tarik.getMinutes();
const hr = tarik.getHours();

let isParty = false;
party.addEventListener("click", () => {
    if (isParty) {
        party.innerHTML = "Lets Party";
        greet.innerText = "";
        mess.innerText = "DO ANYTHING YOU WANT";
        lunchimg.style.backgroundImage = "url('FreeTime.jpeg')";
        greet.style.display = "none";
    } else {
        party.innerHTML = "End Party";
        lunchimg.style.backgroundImage = "url('Party.jpeg')";
        greet.innerHTML = "Enjoy The Party";
        mess.innerHTML = "Let's Party";
        greet.style.display = "block";
    }
    isParty = !isParty;
});


document.querySelector("#wake-up-timespan").addEventListener("change", function () {
    if (this.value == hr) {
        wakeUp();
    } else {
        freetime();
    }
});

document.querySelector("#lunch-timespan").addEventListener("change", function () {
    if (this.value == hr) {
        haveLunch();
    } else {
        freetime();
    }
});

document.querySelector("#napTime").addEventListener("change", function () {
    if (this.value == hr) {
        sleep();
    } else {
        freetime();
    }
});


function wakeUp() {
    greet.innerHTML = "Good Morning";
    mess.innerText = "Wake up"
    lunchimg.style.backgroundImage = "url('wake up.jpeg')";
    greet.style.display = "block";
}
function haveLunch() {
    greet.innerHTML = "Good Afternoon";
    mess.innerText = 'Lets Have Lunch';
    lunchimg.style.backgroundImage = "url('lunch.jpeg')";
    greet.style.display = "block";
}
function sleep() {
    greet.innerHTML = "Good Night!";
    mess.innerText = 'Sleep Time';
    lunchimg.style.backgroundImage = "url('sleep.jpeg')";
    greet.style.display = "block";
}

function freetime() {
    mess.innerText = "DO ANYTHING YOU WANT";
    lunchimg.style.backgroundImage = "url('FreeTime.jpeg')";
    greet.style.display = "none";
};
freetime();