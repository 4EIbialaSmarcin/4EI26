// Pamiętaj o Number()!
let bokA = Number(prompt("Podaj długość boku A:"));
let bokB = Number(prompt("Podaj długość boku B:"));

let pole = bokA * bokB;
let obwod = 2 * bokA + 2 * bokB;

document.write("Bok A: " + bokA + "<br>");
document.write("Bok B: " + bokB + "<br>");
document.write("Pole prostokąta: " + pole + "<br>");
document.write("Obwód prostokąta: " + obwod);
