let fruits = document.getElementById('selectFruits');
let displayText = document.getElementById('displayFruits');


fruits.onchange = function() {
    displayText.innerText = this.value;
};


// --- Onclick

let btn = document.getElementById('onclickBtn');

btn.onclick = function() {
    alert("This is the current date and time: "+ new Date());
}

// --- Onmouseover

btn.onmouseover = function() {
    this.style.backgroundColor = 'lightblue';
}

// ---- onmouseout

btn.onmouseout = function() {
    this.style.backgroundColor = 'white';
}

// --- onkeydown

let key = document.getElementById('keyInput');

key.onkeydown = function(event) {
    console.log('Keyy pressed: ' + event.key)
}

// -- onload

window.onload = function() {
    console.log('Page is loaded!');
}