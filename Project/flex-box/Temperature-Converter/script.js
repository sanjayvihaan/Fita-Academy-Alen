let cel = document.getElementById('cel');
let far = document.getElementById('far');


console.log(cel);
console.log(far);


cel.addEventListener('input', function() {
    let ce = this.value;
    let fr;

    fr = (ce * 9/5) + 32;

    if(!Number.isInteger(fr)) {
        fr = fr.toFixed(4)
    }
    far.value = fr;
})


far.addEventListener('input', function(){
    let fr = this.value;
    let ce;

    ce = (fr - 32) * (5/9);
    if(!Number.isInteger(ce)) {
        ce = ce.toFixed(4);
    }

    cel.value = ce;
})