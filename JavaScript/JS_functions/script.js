function helloWorld(){
    console.log("Hello world");
}

helloWorld()

// Function with agruments / Parameter

function greetUser(name){
    console.log("Hello, "+ name + " welcome, to our community");
}

greetUser("Sanjay");
greetUser("Alen")



function table(num) {
    for(let i = 1; i<=10; i++){
        let mul = `${num} * ${i} = ${num * i}\n`;
        console.log(mul);
    }
}

table(2.5);


// Arguments property in functions

function argu(){
    console.log("This is argu: " , arguments.length)
}

argu("hello world", 6);
argu(2, 4, 6, true);


//Return in function:

function multi(a, b) {
    return (a*b);
   }
   console.log(multi(3, 10));

   function compare(a, b) {
    if(a > b) {
        return `${a} is greater`;
    }
    else if( a < b) {
        return `${b} is greater`;
    }
    else if( a == b) {
        return "a and b is equal";
    }
}
console.log(compare( 30, 40));


// Global and local variable

let a = 30;  //global variable
function adding() {
    let b = 20; //local variable
    console.log(a + b);
}
adding();


// Anonymous function:

const add = function(a, b){
    return a + b;
}

console.log(add(25, 25))
console.log(add(25, 70))


setTimeout(function() {
    console.log("This message is shown after 2 seconds");
}, 2000);


(function(){
    const users = ["Alen", "Sanjay", "Ram", "John"];

    users.forEach(function(name){
        console.log(`Welcome ${name} to this community`);
    });

})();

// Arrow Function

// Before Arrow:

let hello = function(){
    return "Hello World";
}


// With Arrow Function:

hello = () => "Hello Arrow fun";
console.log(hello());