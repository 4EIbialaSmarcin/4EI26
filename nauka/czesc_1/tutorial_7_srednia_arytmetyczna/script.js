// Oblicz średnią z 3 ocen
let ocena1 = Number(prompt("Podaj ocenę z matematyki:"));
let ocena2 = Number(prompt("Podaj ocenę z języka polskiego:"));
let ocena3 = Number(prompt("Podaj ocenę z informatyki:"));
let srednia = (ocena1 + ocena2 + ocena3) / 3;
document.write("Twoje oceny: " + ocena1 + ", " + ocena2 + ", " + ocena3 + "<br>");
document.write("Średnia ocen: " + srednia.toFixed(2));
