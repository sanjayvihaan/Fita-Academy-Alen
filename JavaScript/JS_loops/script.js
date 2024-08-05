// while loop:

let counter = 1;

while (counter <= 5) {
    console.log("Sanjay while", counter);
    counter++;
}


// do while loop:

do {
    console.log("Sanjay do while", counter)
    counter++
} while(counter <= 10);


// Real Case example of while loop

// let name = prompt("Enter your name");

// while (name === "" || name === null) {
//     name = prompt("Name cannot be empty, Enter your name");
// }

// console.log(`Welcome ${name}`)

// Do while:

// let namer;

// do {
//     namer = prompt("Enter your name");
// }

// while (namer === "" || namer === null) // check if the input is empty or null


// console.log(namer)



// For Loop:
// 1 - 100;
// console.log(1)


for (let i = 1; i <= 100; i++){
    console.log(i);
}

// numbers = [1, 2, 3, 4,5] = 15

let numbers = [1, 2, 3, 4, 5];
let sum = 0;
let len = numbers.length;
console.log(len);


for (let i = 0; i < numbers.length; i++){
    sum += numbers[i];
}

console.log(`The sum of the array is: ${sum}`);