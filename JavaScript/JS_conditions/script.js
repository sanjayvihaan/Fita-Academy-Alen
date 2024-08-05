let a = 4;
let b = 5;
console.log("a =", a, "b = ", b);


// if statement:

if (a>b){
    console.log(`Yea, ${a} is greater than ${b}`);
}
else {
    console.log(`${a} is less than ${b}`)
}


// else if statement:

let age = 23; // any string cannot be used
console.log(`The age is ${age}`);

if (age < 18) {
    console.log("You can't vote, you are still minor");
}

else if (age > 18){
    console.log("You can vote");
}
else {
    console.log("Unverfied age category")
}

// Ternay Operator: It is use case of a simplified conditional operator like if/else
// syntax: condition ? expression is true : expression is false


let authenticated = true;


// simple if/else
if (authenticated) {
    console.log("You have logged in to our application");
}

else {
    console.log("You have not logged in");
}

// ternay operator:

authenticated ? console.log("You have logged in to our application") : console.log("You have not logged in");

age >= 18 ? console.log('You can have drive lincense'): console.log("You are still a minor, can't have driving lincense");


// Null is collesing operator:

let user;
let user1 = "sanjay";

console.log(user ?? user1);
console.log(user1 ?? "Guest User");


// switch statement:

let day = 4;

switch (day) {
    case 0:
        day = "Sunday";
        break;
    case 1:
        day = "Monday";
        break;
    case 2:
        day = "Tuesday";
        break;

    case 3:
        day = "Wednesday";
        break;
    case 4:
        day = "Thursday";
        break;
    case 5:
        day = "Friday";
        break;
    case 6:
        day = "Saturday";

    default:
        day = "Unverfied value"
}

console.log(`Today is ${day}`);