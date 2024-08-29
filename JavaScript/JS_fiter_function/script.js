// filerting an array of numbers

let numbers = [5, 12, 40, 20, 44, 3, 6, 10];

let filteredNumbers = numbers.filter(number => number > 10);
console.log(filteredNumbers);



let fitered = numbers.filter(function(number) {
    return number > 12;
})

console.log(fitered);


// Filtering an array of objects

let people = [
    {name: "Ram", age: 15},
    {name: "Rana", age: 10},
    {name: "John", age: 20},
    {name: "James", age: 23},
    {name: "Prath", age: 17},
    {name: "Richi", age: 25},
];



let adults = people.filter(function(person) {
    return person.age >= 18;  
})

let adultsName = adults.map(function(adult) {
    return adult.name;
})

console.log(adultsName);


// Filtering unique values



