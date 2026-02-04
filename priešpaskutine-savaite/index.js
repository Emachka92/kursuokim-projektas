const andrius = {
    vardas: "Andrius",
    pavarde: "Labutis",
    gimimoData: "1989-12-08",
    tattooCount: 5,
    arSusituokes: true,
    vaikai: ["Elze", "Jaunius", "Marija"],
    zmona: {
        vardas: "Morta",
        pavarde: "Labutiene",
        gimimoData: "1991-11-08",
        tattooCount: 2,
        arSusituokes: true,
        vaikai: ["Elze", "Jaunius", "Marija"],
        }
}
// console.log(andrius.zmona.vardas.toUpperCase());
// andrius.zmona = null;
// console.log(andrius.zmona.vardas.toUpperCase()); !---cia jau console mes errora, nes andrius jau be zmonos (null)
// console.log(andrius.vaikai[0]);

const andriausSavybes = Object.keys(andrius);
console.log(andriausSavybes);

const andriausReiksmes = Object.values(andrius);
console.log(andriausReiksmes);

const entries = Object.entries(andrius);
console.log(entries);