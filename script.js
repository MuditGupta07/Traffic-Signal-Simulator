let c = document.getElementById("count");
let r = document.getElementById("red");
let y = document.getElementById("yellow");
let g = document.getElementById("green");

function red() {
    y.style.backgroundColor='';
    y.style.boxShadow='';
    let a = 15;
    r.style.backgroundColor = 'red';
    r.style.boxShadow = '0 0 15px 5px red';

    let redCountdown = setInterval(function () {
        c.innerText = a;
        a--;
        if (a < 0) {
            clearInterval(redCountdown);
            yellow();
        }
    }, 1000);
}

function yellow() {
    //r.style.backgroundColor = '';
    //r.style.boxShadow = '';
    let b = 5;
    y.style.backgroundColor = 'yellow';
    y.style.boxShadow = '0 0 15px 5px yellow';

    let yellowCountdown = setInterval(function () {
        c.innerText = b;
        b--;
        if (b < 0) {
            clearInterval(yellowCountdown);
            green();
        }
    }, 1000);
}

function green() {
    r.style.backgroundColor = '';
    r.style.boxShadow = '';
    y.style.backgroundColor = '';
    y.style.boxShadow = '';
    let a = 10;
    g.style.backgroundColor = 'green';
    g.style.boxShadow = '0 0 15px 5px green';

    let greenCountdown = setInterval(function () {
        c.innerText = a;
        a--;
        if (a < 0) {
            clearInterval(greenCountdown);
            yellow2();
        }
    }, 1000);
}

function yellow2() {
    g.style.backgroundColor = '';
    g.style.boxShadow = '';
    let b = 5;
    y.style.backgroundColor = 'yellow';
    y.style.boxShadow = '0 0 15px 5px yellow';

    let yellowCountdown = setInterval(function () {
        c.innerText = b;
        b--;
        if (b < 0) {
            clearInterval(yellowCountdown);
            red();
        }
    }, 1000);
}
red();