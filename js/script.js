
var km = parseInt (prompt("Quanti chilometri devi percorrere?"))

var eta = parseInt (prompt("Quanti anni hai?"))

var pb = km * 0.21


if ( eta<18 ){
    pb *= 0.8
}
else if ( eta>=65 ) {
    pb *= 0.6
}
console.log(pb);

document.getElementById("prezzo-biglietto").innerHTML = "Il tuo biglietto costa" + " " + pb + " " + "euro."
