// kintamieji - skaičiai, tekstas, Būlis (true/false), (null, undefined)
// kintamojo deklaravimas yranurodymas/direktyva

//kad toks kintamasis egzistuoja musu projekte
let manoSkaicius, 
KazioSkaicius = 3;

manoSkaicius = 8;

let rezultatas = manoSkaicius - KazioSkaicius;
//camelcasing ^

//isvestis i konsole
console.log(manoSkaicius);

let prisistatymas = "mano vardas yra",
vardas = "Ema";
console.log(prisistatymas);

let pilnasPrisistatymas = prisistatymas + " " + vardas;
console.log(pilnasPrisistatymas);

let pirkejoAmzius = 22;
let arYraPilnametisPirkejas = pirkejoAmzius > 18; // true / false
console.log(pirkejoAmzius);

if(arYraPilnametisPirkejas)
    alert("prasome, jusu energetinis");
else alert("deja neparduosime");
