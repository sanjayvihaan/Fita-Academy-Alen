// save user's current answer
// let value = prompt("Enter a value");
sessionStorage.setItem('currentAnswer', value);

//retrieve the answer
const answer = sessionStorage.getItem('currentAnswer');
console.log(answer);