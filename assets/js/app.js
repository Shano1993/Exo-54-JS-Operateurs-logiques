
let x = 1;

let y = 4;

let z = -1;

if(x < 2) {
    document.getElementById('value_one').innerHTML = "La variable x est inférieure à 2"
}

if(y > 3) {
    document.getElementById('value_two').innerHTML = "La variable y est supérieure à 3"
}

if(z <= 0) {
    document.getElementById('value_three').innerHTML = "La variable z est inférieur ou égal à 0"
}

if(x < 2 && y > 3 && z <= 0) {
    document.getElementById('value_four').innerHTML = "La variable x est inférieure à 2" +
        " et la variable y est supérieure à 3 et la variable z est inférieur ou égal a 0"
}

if( (x < 2 && y > 3) || z === -1 ) {
    document.getElementById('value_five').innerHTML = "La variable x est inférieure à 2" +
        " et la variable y est supérieur à 3 ou z est strictement égal à -1"
}