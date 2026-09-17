// Użyj % do obliczenia reszty
let cukierki = Number(prompt("Podaj liczbę cukierków:"));
let dzieci = Number(prompt("Podaj liczbę dzieci:"));
let dlaDziecka = Math.floor(cukierki / dzieci);
let zostalo = cukierki % dzieci;
document.write("Każde dziecko dostanie cukierków: " + dlaDziecka + "<br>");
document.write("Dla Ciebie zostanie: " + zostalo + " sztuk.");
