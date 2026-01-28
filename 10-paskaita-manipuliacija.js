let text1 = "my name is ";
// let firstName = prompt("iveskite savo varda");

// let result1 = text1 + " - " + firstName;
// let result2 = 'My name is ${Ema}. And yours?';

//atiduoda teksto ilgi
console.log(text1.length);
console.log("my name is".length);

let text = "Hello World";
let char = text.charAt(1);
console.log(char);

let fruits = "Apple, Banana, Kiwi";
let part = fruits.slice(7, 13);
console.log(fruits.slice(7));
console.log(fruits.slice(undefined, 5));

//padStart (simboliu prijunginejimas pradzioje arba pabaigoje)

let metaiSk = 2026;
let menuoSk = 1;
let dienaSk = 6;

let menuoText = String(menuoSk).padStart(2, "0");
let dienaText = String(dienaSk).padStart(2, "0");

let data = `${metaiSk} - ${menuoText} - ${dienaText} `;
console.log(data);
// 2026-01-06

let originalText = "Please visit Microsoft page";
let newText = originalText.replace("Microsoft", "W3Schools");

console.log(newText);

let vardas, pavarde;
vardas = "Angel";
pavarde ="Jolie";

let arVardasIlgesnis = vardas.length > pavarde.length;

if(arVardasIlgesnis)
{
    console.log(pavarde);
} else {
    console.log(vardas);
}

//uzduotis 2



