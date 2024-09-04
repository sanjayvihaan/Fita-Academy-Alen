/*
    Basic Syntax:
    1. $ - To define/access jquery
    2. (selector) - To query or find HTML elements
    3. .action() - To be performed on the elements


    $(".para").hide() - Hide the element which as class=para
    $("#para").hide() - Hide the element which as id=para


*/
// The Docuement Ready Event:

$(document).ready(()=> {
  
})


// Hide para element

// $(document).ready(() => {
//     $("button").click(() => {
//         $("p").hide();
//     })


//     $("#showme").click(() => {
//         $("p").show();
//     })
// })

// Using Pure JS
let para = document.querySelectorAll("p");
let hidebtn = document.querySelector("button");
let showbtn = document.getElementById("showme");

hidebtn.onclick = () => {
    para.forEach((p) => {
        p.style.display = "none";
    });
};

showbtn.onclick = () => {
    para.forEach((p) => {
        p.style.display = 'block';
    })
}
