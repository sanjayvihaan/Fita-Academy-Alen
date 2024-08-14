let object = {
    firstName: "Sanjay",
    age: 20
}

console.log(object);
console.log(object.firstName);
console.log(object.age)

object.firstName = "Ram";
console.log(object.firstName);// accessing the value with dot notation
console.log(object['age']); //accessing the value with arrary notation 



// Adding property into object

let data = {
    firstName : "Alen",
    Place: "CA"
}

console.log(data);

data.number = 123456789;

console.log(data['number']);

delete data.Place;
console.log(data);



// Checking the property is exist or not

let info = {
    firstName: "Ram",
    lastName: "Kumar",
    age: 19,
    height: 5.5
};
console.log(info);
console.log('height' in info);
console.log('age' in info);



// For in loop

let bank = {
    name : "V Sanjay",
    accountNo : 2468101214,
    bankName: "RBC"
}

console.log(bank);

for(let key in bank){
    console.log(key);
}


for (let key in bank) {
    console.log(`${key}: ${bank[key]}`);
}

// Action/ Method in object

let person1 = {
    name: "Sanjay",
    age: 20,
    place: "Bangalore",
    sayHello: function() {
        console.log("Hello World");
    }

}

person1.sayHello();


// function name() {} // default fun

// const name = () => {} // Arrow fun


let person = {
    name: "charan",
    age:19
}
person.sayHello = function() {
    console.log("hello!");
}
person.sayHello();


// 3

let person3 = {
    name: "sanjay",
    age: 20
}

person3.sayHello = greet;

function greet(){
    console.log("Hello 3")
}

person3.sayHello();

let person5 = {
    name: "charan",
    age: 19,
    sayHello () {
        console.log(this.age +' and '+ this.name);
    }
}
person5.sayHello();


// this keyword

let car = {
    brand: "tata",
    hello() {
        console.log(`${this.brand} is famous`)
    }
}
car.hello();


// Math object

console.log(Math.PI); //gives pi value
console.log(Math.E);
console.log(Math.ceil(2.44)); // gives the top value
console.log(Math.floor(1.55)); // gives the bottom value
console.log(Math.round(4.6));  // rounds the value
console.log(Math.trunc(4.8));   // removes the point
console.log(Math.pow(10, 2));   // gives the power
console.log(Math.sqrt(100));    // gives the squareroot
console.log(Math.min(5, 100, 89, 66, -9, 0));   // gives the minimum value
console.log(Math.max(5, 100, 89, 66, -9, 0));   // gives the maximum value


// generating a random number

console.log(Math.random());

let rand = Math.floor(Math.random() * 101);
console.log(rand);


// random number with range
let range = Math.floor(Math.random() * (25 - 20)) + 20; // Math.floor(Math.random() * (max-num - min-num) + min-num)
console.log(range);



// Date Object

let currentDate = new Date()

console.log(currentDate);

// let date = new Date(2018, 0, 13, 10, 33, 56, 7);
// console.log(date);


// getFunction

console.log(currentDate.getDate());
console.log(currentDate.getDay());
console.log(currentDate.getMonth());
console.log(currentDate.getHours());
console.log(currentDate.getMinutes());
console.log(currentDate.getSeconds());
console.log(currentDate.getTime());



// setFunctiond

        let setDate = new Date();
        setDate.setHours("2");
        setDate.setMinutes("2");
        setDate.setFullYear("2004");
        console.log(setDate);
        

// Creating new object using New Keyworkd

let newObject = new Object();

newObject.Name = "Sanjay";
newObject.Job = "SWE";

console.log(newObject);


// getter function

let getter =  {
    name : "Sanjay",
    lastName: "V",
    get getName() {
        return this.name.toUpperCase();
    }
}

console.log(getter.getName);
console.log(getter);


// Setter

let setter =  {
    name: "john",
    age: 20,
    set setName({nam, age}) {
        this.name = nam.toUpperCase();
        // this.age = Number(age);
        return
    },
}

console.log(setter);

setter.setName = {nam: "Alen"};

console.log(setter.name);
console.log(setter);


// object constructor function:

function Object(first, last, fullName, job, place){
    this.firstName = first;
    this.lastName = last;
    this.name = fullName;
    this.job = job;
    this.place = place;
}

let personDet1 = new Object("Sanjay", "V", "Sanjay V", "SWE", "Bengaluru");

console.log(personDet1);

// object protype

function proto(first, job){
    this.firstName = first;
    this.job = job;
}

proto.prototype.nationality = "Indian";
proto.prototype.place = "Bengaluru";

proto.prototype.name = function() {
    return `${this.firstName} ${this.job}`
}

let pro1 = new proto("Sanjay", "SWE");

console.log(pro1);
console.log(pro1.nationality);

console.log(pro1.place);


// Nested Object

let userData = {
    user_id : 1,
    date : "14-08-2024",
    personal_data : {
        name : "Sanjay",
        age : 20,
        email : "sanjay@gmail.com",
        address: {
            street: "abc",
            city: "Bengaluru",
            state: "KA",
            country: "IN"
        }
    }
}


console.log(userData);
console.log(userData.personal_data);
console.log(userData.personal_data.address);

console.log(userData.personal_data.address.country);