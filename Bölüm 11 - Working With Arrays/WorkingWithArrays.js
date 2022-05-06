"use strict";

////////////////////////////////
// 142. Simple Array Methods //
//////////////////////////////
let dizi = ["a", "b", "c", "d", "e"];
let dizi2 = ["f", "g", "h", "i", "f"];

dizi.slice(2); // listenin 2. indexinden baslar (2. index dahil) son indexe kadar listeyi böler.
dizi.slice(2, 4); // listenin 2. indexinden baslar (2. index dahil) 4. indexine kadar listeyi böler, 4. indexi dahil etmez.
dizi.slice(-2); // listenin -2. indexinden baslar (-2. index dahil) son indexe kadar listeyi böler. yani listenin son 2 indexini alir.

dizi.splice(2); // listenin 2. indexinden baslar (2. index dahil) son indexe kadar tüm indexleri listeden koparir (siler), listenin özünü degistirir.
dizi.splice(2, 4); // listenin 2. indexinden baslar (2. index dahil) 4. indexine kadar (4. index dahil) tüm indexleri listeden koparir (siler), listenin özünü degistirir.

dizi.reverse(); // listeyi ters cevirir. listenin özünü degistirir.

dizi.concat(dizi2); // dizi2'yi dizi'nin ucuna ekler (sonuna). listenin özünü degistirmez.

dizi.join("-"); // dizinin elemanlari arasina - ekler.

dizi.at(0); // dizinin 0. indexini döndürür.
//
//
//
//
//
///////////////////////////////////
// 144. Looping Arrays: forEach //
/////////////////////////////////

let dizi3 = ["a", "b", "c", "d", "e"];

for (const eleman of dizi3) {
  // dizinin her bir elemani icin sunu yap döngüsü. //
  console.log("Bunu yap!");
}

for (const [elemaninIndexNumarasi, elemaninKendisi] of dizi3.entries()) {
  // entires ile dizinin her bir elemani icin sunu yap döngüsü. //
  console.log(elemaninIndexNumarasi);
  console.log(elemaninKendisi);
}

dizi3.forEach(function () {
  // dizinin her bir elemani icin su fonksiyonu calistir. bir üstteki for döngüsü ile ayni mantik. //
  console.log("Bunu yap!");
});

dizi3.forEach(function (elemaninKendisi, elemaninIndexNumarasi, dizininTamami) {
  // forEach her zaman solda yazili 3 metoda sahiptir. //
  console.log(elemaninKendisi);
  console.log(elemaninIndexNumarasi);
  console.log(dizininTamami);
});
//
//
//
//
//
//////////////////////////////////////
// 145. forEach With Maps and Sets //
////////////////////////////////////
const dövizler = new Map([
  ["USD", "Amerikan Dolari"],
  ["EUR", "Euro"],
  ["GBP", "Ingiliz Poundu"],
]);

dövizler.forEach(function (
  // new Map'li fonksiyonlarda elemaninKendisi'nin yerini x[1] ("Amerikan Dolari") alir, elemaninIndexNumarasinin yerini ise x[0] ("USD") alir. //
  elemaninKendisi,
  elemaninIndexNumarasi,
  dizininTamami
) {
  // forEach her zaman solda yazili 3 metoda sahiptir. //
  console.log(elemaninKendisi);
  console.log(elemaninIndexNumarasi);
  console.log(dizininTamami);
});

const dövizler1 = new Set([
  "USD",
  "EUR",
  "USD",
  "USD",
  "USD",
  "GBP",
  "TL",
  "TL",
]);

dövizler1.forEach(function (
  // new Set'li fonksiyonlarda, set'lerin index numarasi olmadigi icin, indexNumarasi yerine elemaninKendisi döner. //
  elemaninKendisi,
  elemaninIndexNumarasi,
  dizininTamami
) {
  console.log(elemaninKendisi);
  console.log(elemaninIndexNumarasi);
  console.log(dizininTamami);
});
