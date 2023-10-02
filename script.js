const PENNY_VAL = 0.01;
const NICKEL_VAL = 0.05;
const DIME_VAL = 0.10;
const QUARTER_VAL = 0.25;

const pennyCount = document.getElementById("pennyCount");
const nickelCount = document.getElementById("nickelCount");
const dimeCount = document.getElementById("dimeCount");
const quarterCount = document.getElementById("quarterCount");

function addCoin(counter) {
    counter++;
    updateValue
}
function subtractCoin(counter) {
    if (counter == 1) {

    } else {
        counter--;
    }
    updateValue
}

function updateValue() {
    document.getElementById("p") = pennyCount * PENNY_VAL;
    document.getElementById("n") = nickelCount * NICKEL_VAL;
    document.getElementById("d") = dimeCount * DIME_VAL;
    document.getElementById("q") = quarterCount * QUARTER_VAL;
}

const divs = document.querySelectorAll("div");
for (div in divs) {
    var buttons = div.querySelectorAll("button");
    var counterName = div.id + "Counter"
    buttons[0].addEventListener("click", addCoin(counterName));
    buttons[1].addEventListener("click", subtractCoin(counterName));
}
