// Basic Syntax:
// 1. $ - To define/access jquery
// 2. (selector) - To query or find HTML elements
// 3. .action() - To be performed on the elements

//--------------Click event--------------

// $('h1').click(function(){
//     alert("You have clicked H1 Element in index.html");
// })

$(document).ready(function(){
    $('h1').click(function(){
        alert("You have clicked H1 Element in index.html");
    })
})


// -------------------- Double Click Event -------------------------

$(document).ready(function(){
    let clickCount = 0;

    $("button").dblclick(function() {
        clickCount = clickCount + 2; // For Double click, count as two click
        alert("You have click the button two time");
        console.log("Total Clicks: ", clickCount);
    });
    // The dbclick event increment the count by 2 as it is a double click


    let clkCount = 0;
    $("button").click(function() {
        clkCount++; // For Double click, count as two click
        console.log("Total Clicks second: ", clkCount);
    })
    // The click event increment the count by 1 for each single click

})


// -------------------- Mouse-enter() -----------------

//Mouseenter - is executed when the mouse pointers enters the HTML Element:

$(document).ready(function() {
    $('p').mouseenter(function() {
        // let value = prompt("Enter you name");
        // console.log(value);
    })
})


// ---------------------- Mouseleave() --------------------

// Mouseleave - is executed when the mouse pointers leave the HTML Element:

$(document).ready(function() {
    $('p').mouseleave(function() {
        console.log("You have left the element");
    })
})


// --------------------- mousedown() -----------------------

// mousedown(): It is executed when the 
// mouseup(): 

$(document).ready(function() {
    let counter = 0

    $('#mousedown').mousedown(function() {
        counter++;
        console.log("mouse down count: ", counter);

        console.log('Moving down...')
    })


    let counter2 = 0;
    $('#mousedown').click(function() {
        counter2++;
        console.log("Click Count: ", counter2);
    })
})


// ----------------- hover() --------------------

$(document).ready(function() {
    //when I enter near button
    $('#hover').hover(function() {
        console.log("You have hovering on the button")
    },

    // When I leave the button
    function() {
        console.log('You have away from the button');
    })
})


// ------------------- focus ----------------------
// The function is executed when the form field gets focus:

$(document).ready(function() {
    $('input').focus(function() {
        $(this).css({
            "width": "30%",
            "background-color": "blue",
        });
    })
})


// --------------------- blur -----------------------

$(document).ready(function() {
    $("input").focus(function() {
        $(this).css({
            "background-color": "red"
        })


    })

    $("input").blur(function() {
        $(this).css({
            "background-color": "green"
        })
    })
})