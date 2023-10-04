const PENNY_VAL = 0.01;
const NICKEL_VAL = 0.05;
const DIME_VAL = 0.10;
const QUARTER_VAL = 0.25;

var pennyCount = parseInt(document.getElementById("pennyCount").textContent);
var nickelCount = parseInt(document.getElementById("nickelCount").textContent);
var dimeCount = parseInt(document.getElementById("dimeCount").textContent);
var quarterCount = parseInt(document.getElementById("quarterCount").textContent);


function addPenny() {
    pennyCount++;
    updateValue();

}
function subtractPenny() {
    if (pennyCount == 0) {

    } else {
        pennyCount--;
    }
    updateValue();
}
function addNickel() {
    nickelCount++;
    updateValue();

}
function subtractNickel() {
    if (nickelCount == 0) {

    } else {
        nickelCount--;
    }
    updateValue();
}
function addDime() {
    dimeCount++;
    updateValue();

}
function subtractDime() {
    if (dimeCount == 0) {

    } else {
        dimeCount--;
    }
    updateValue();
}
function addQuarter() {
    quarterCount++;
    updateValue();

}
function subtractQuarter() {
    if (quarterCount == 0) {

    } else {
        quarterCount--;
    }
    updateValue();
}


function updateValue() {
    document.getElementById("pennyCount").innerHTML = pennyCount;
    document.getElementById("nickelCount").innerHTML = nickelCount;
    document.getElementById("dimeCount").innerHTML = dimeCount;
    document.getElementById("quarterCount").innerHTML = quarterCount;

    var p = Number((pennyCount * PENNY_VAL).toFixed(2));
    var n = Number((nickelCount * NICKEL_VAL).toFixed(2));
    var d = Number((dimeCount * DIME_VAL).toFixed(2));
    var q = Number((quarterCount * QUARTER_VAL).toFixed(2));

    document.getElementById("p").innerHTML = p;
    document.getElementById("n").innerHTML  = n;
    document.getElementById("d").innerHTML  = d;
    document.getElementById("q").innerHTML  = q;

    var total = p + n + d + q;
    document.getElementById("total").innerHTML = total.toFixed(2);

}

const buttons = document.querySelectorAll("button");
    buttons[0].addEventListener("click", addPenny);
    buttons[1].addEventListener("click", subtractPenny);
    buttons[2].addEventListener("click", addNickel);
    buttons[3].addEventListener("click", subtractNickel);
    buttons[4].addEventListener("click", addDime);
    buttons[5].addEventListener("click", subtractDime);
    buttons[6].addEventListener("click", addQuarter);
    buttons[7].addEventListener("click", subtractQuarter);
