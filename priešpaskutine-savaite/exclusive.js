let amzius = 19;

function svestiGimtadieni()
{
    amzius++;
    console.log(`Pasenau dar vienais metais. Man jau ${amzius}`);
}

while(amzius < 130){
    svestiGimtadieni();
}
console.log("dugiau nebenoriu svesti");

for(let index = 0; index < 100; index++) {
    console.log(index);
}

const begikai = [
    {vardas: "tomas", amzius: 27, kelintasAtbego:4},
    {vardas: "aiste", amzius: 29, kelintasAtbego:3},
    {vardas: "gediminas", amzius: 17, kelintasAtbego:1},
];

for (let index = 0; index < begikai.length; index++) {
    console.log(begikai[index].kelintasAtbego);
}