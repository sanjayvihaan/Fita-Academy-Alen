// settimeout
// syntax:
/* 
    setTimeout(function(), timemiliseconds);
*/

setTimeout(function() {
    console.log("This text is coming after 5 seconds");
}, 5000)


//------setInterval
/*
    setInterval(function(), timeinMiliSeconds),
*/

let i = setInterval(function() {
    console.log(1)
}, 1000)

setTimeout(function() {
    clearInterval(i);
    console.log('Interval stopped');
},5000)


//---Count Down timer

let countdown = 10

let timer = document.getElementById('timer');


let intervalId = setInterval(function(){
    timer.innerText = "Time Remaining: " + countdown + " seconds";
    countdown--;

    if (countdown < 0) {
        clearInterval(intervalId);
        timer.innerText = "Time's up!"
    }
}, 1000)