/*
Mark und John versuchen, ihren BMI (Body Mass Index) zu vergleichen, der nach folgender Formel berechnet wird:
BMI = Masse / Größe ** 2 = (Masse in kg und Höhe in Metern).

Testdaten:
§ Daten 1: Mark wiegt 78 kg und ist 1,69 m groß. John wiegt 92 kg und ist 1,95 m groß.
§ Daten 2: Mark wiegt 95 kg und ist 1,88 m groß. John wiegt 85 kg und ist 1,76 m groß.
*/

let masseMark = parseFloat(prompt("Geben Sie bitte Masse von Mark an."));
let grösseMark = parseFloat(prompt("Geben Sie bitte Größe von Mark an."));
let bmiMark = masseMark / grösseMark ** 2;
let masseJohn = parseFloat(prompt("Geben Sie bitte Masse von John an."));
let grösseJohn = parseFloat(prompt("Geben Sie bitte Größe von John an."));
let bmiJohn = masseJohn / grösseJohn ** 2;

alert("BMI von John: " + bmiJohn + " und BMI von Mark: " + bmiMark);
//or//
alert(`BMI von John: ${bmiJohn} \nBMI von Mark: ${bmiMark}`);

if (bmiMark > bmiJohn) {
  alert("Mark hat einen höheren BMI als John.");
} else if (bmiMark < bmiJohn) {
  alert("Mark hat keinen höheren BMI als John.");
} else {
  alert("Mark hat einen gleichen BMI wie John.");
}
