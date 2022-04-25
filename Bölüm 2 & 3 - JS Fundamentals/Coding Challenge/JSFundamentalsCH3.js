/*
Es gibt zwei Gymnastikteams, Delfine und Koalas. Sie treten 3 Mal gegeneinander an. Der Sieger mit der höchsten Durchschnittspunktzahl gewinnt einen Pokal!

Ihre Aufgaben:
1. Berechnen Sie die durchschnittliche Punktzahl für jedes Team, indem Sie die Testdaten unten verwenden
2. Vergleichen Sie die durchschnittlichen Punktzahlen des Teams, um den Gewinner des Wettbewerbs zu ermitteln, und drucken Sie sie auf der Konsole aus. Vergiss nicht, dass es ein Unentschieden geben kann, also teste auch darauf (Unentschieden bedeutet, dass sie die gleiche Durchschnittspunktzahl haben).
3. Bonus 1: Integrieren Sie eine Mindestpunktzahl von 100. Bei dieser Regel gewinnt ein Team nur, wenn es eine höhere Punktzahl als die andere Mannschaft und gleichzeitig eine Punktzahl von mindestens 100 Punkten hat. Hinweis: Verwenden Sie einen logischen Operator, um auf die Mindestpunktzahl zu testen, sowie mehrere Else-if-Blöcke � 
4. Bonus 2: Mindestpunktzahl gilt auch bei Unentschieden! Ein Unentschieden findet also nur statt, wenn beide Teams die gleiche Punktzahl haben und beide eine Punktzahl größer oder gleich 100 Punkten haben. Andernfalls gewinnt kein Team den Pokal

Testdaten:
§ Daten 1: Delfine erzielen 96, 108 und 89. Koalas erzielen 88, 91 und 110
§ Datenbonus 1: Delfine erzielen 97, 112 und 101. Koalas erzielen 109, 95 und 123
*/

let scoreDelfine = (96 + 108 + 89) / 3;
let scoreKoalas = (88 + 91 + 110) / 3;
console.log(scoreDelfine, scoreKoalas);
if (scoreDelfine > scoreKoalas) {
  console.log("Delfine gewinnt die Trophäe!🏆");
} else if (scoreKoalas > scoreDelfine) {
  console.log("Koalas gewinnt die Trophäe!🏆");
} else if (scoreDelfine === scoreKoalas) {
  console.log("Both gewinnt die Trophäe!");
}

let score1Delfine = (97 + 112 + 80) / 3;
let score1Koalas = (109 + 95 + 50) / 3;
console.log(score1Delfine, score1Koalas);
if (score1Delfine > score1Koalas && score1Delfine >= 100) {
  console.log("Delfine gewinnt die Trophäe!🏆");
} else if (score1Koalas > score1Delfine && score1Koalas >= 100) {
  console.log("Koalas gewinnt die Trophäe!🏆");
} else if (
  score1Delfine === scoreKoalas &&
  score1Delfine >= 100 &&
  score1Koalas >= 100
) {
  console.log("Beide gewinnt die Trophäe!");
} else {
  console.log("Niemand gewinnt die Trophäe!");
}
