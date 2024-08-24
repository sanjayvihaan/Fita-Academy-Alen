// document.getElementById('demo').innerHTML = "Hello World";

// Finding HTML Elements:
// 1. document.getElementById('id')
// 2. document.getElementsByTagName('tagName')
// 3. document.getElementByClassName('class')
// 4. document.document.querySelector(".myclass");

//Changing HTML Elements:
// 1. element.innerHTML = new html content
// 2. element.setAttribute = new value
// 3. element.style.property = new style
// 4. element.setAttribute(attribute, value)

// elem.hasAttribute(name) – checks for existence.
// elem.getAttribute(name) – gets the value.
// elem.setAttribute(name, value) – sets the value.
// elem.removeAttribute(name) – removes the attribute.


// Adding and Deleting Elements
// 1. document.createElement(elmentName)
// 2. document.removeChild(elementName)
// 3. document.appendChild(elementName)
// 4. document.replaceChild(new, old)
// 5. document.write(text)


let firstText = document.getElementById('demo');

firstText.innerHTML = "Hello world";


let myImg = document.getElementById('myImg');

myImg.src = "../../images/img_forest.jpg";


// firstText.innerHTML = Date();

document.write("This is a document Text");
console.log(myImg);



// ------- Selecting from class

let classText = document.getElementsByClassName("sipText");

// classText.innerHTML = "Sanjay Class";

for (let i = 0; i < classText.length; i++) {
    classText[i].innerHTML = "";
}

console.log(classText)



// --------- Select tag name

let tagName = document.getElementsByTagName('p');
console.log(tagName[0]);


// Create and append Elements:


let par = document.getElementById('div');

let btn = document.createElement('button');

btn.innerText = 'Click Me';

btn.className = "BtnClass";

par.appendChild(btn);


// Changing Attribute:

let p = document.createElement('p');
p.innerHTML = "This is a changing Attribute";

par.appendChild(p);

p.setAttribute("class", 'setAttr');
p.setAttribute("id", "setIdAttr");
p.setAttribute("style", "color: green");


p.style.background = "red";


let queryVar = document.querySelector(".BtnClass");

console.log(queryVar);


