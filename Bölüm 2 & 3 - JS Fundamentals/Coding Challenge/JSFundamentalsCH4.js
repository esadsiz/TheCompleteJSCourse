/*
Steven möchte einen sehr einfachen Trinkgeldrechner bauen, wenn er in einem Restaurant essen geht.
In seinem Land ist es üblich, 15 % Trinkgeld zu geben, wenn der Rechnungswert zwischen 50 und 300 liegt.
Wenn der Wert abweicht, beträgt das Trinkgeld 20 %.

1. Ihre Aufgabe ist es, das Trinkgeld in Abhängigkeit vom Rechnungswert zu berechnen. Erstellen Sie dafür eine Variable namens ‚trinkGeld‘. Es ist nicht erlaubt, eine if/else-Anweisung zu verwenden 😅 (Wenn es für Sie einfacher ist, können Sie mit einer if/else-Anweisung beginnen und dann versuchen, sie in einen ternären Operator umzuwandeln!)
2. Geben Sie eine Zeichenfolge an die Konsole aus, die den Rechnungswert, das Trinkgeld und den Endwert (Rechnung + Trinkgeld) enthält. Beispiel: 'Die Rechnung war 275, das Trinkgeld war 41,25 und der Gesamtwert 316,25'

TESTDATEN: Test auf Geldscheinwerte 275, 40 und 430
*/

const rechnung = 430;
const trinkGeld =
  rechnung <= 300 && rechnung >= 50 ? rechnung * 0.15 : rechnung * 0.2;
console.log(
  `Die Rechnung war ${rechnung}, das Trinkgeld war ${trinkGeld} und der Gesamtwert ${
    rechnung + trinkGeld
  }`
);
