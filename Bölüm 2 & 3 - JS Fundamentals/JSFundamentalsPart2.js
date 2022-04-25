"use strict"; // güvenli kod yazmak için kullanılır. hatalı kullanımın önüne geçer.

/////

function gösterge() {
  // fonksiyon olusturma //
  console.log("Gösterge fonksiyonu cagrildi!");
}

function blender(elmasayisi, armutsayisi) {
  const meyvesuyu = `${elmasayisi} adet elma ve ${armutsayisi} adet armutlu meyve suyu`;
  gösterge(); // fonksiyon icinde fonksiyon cagrilabilir. //
  return meyvesuyu;
}

console.log(blender(3, 5));

/////

const yasHesapla = (dogumYili) => 2022 - dogumYili; // ok yöntemi ile fonksiyon yazma. //
console.log(yasHesapla(1994));

const kalanEmeklilikHesapla = (simdikiYil) => {
  return 2054 - simdikiYil;
};
console.log(kalanEmeklilikHesapla(2022));

/////

const arkadaslarim = ["Soheil", "Zeynep", "Dia"];
const arkadaslarim1 = new Array("Setareh", "Sohaib", "Taha"); // liste olusturma, liste olusturmak iki türlü de mümkün. //
console.log(arkadaslarim, arkadaslarim1);

console.log(
  arkadaslarim[0], // arkadaslarim listesinin ilk elemanini döndürür. //
  arkadaslarim.length, // arkadaslarim listesinin liste uzunlugunu döndürür. //
  arkadaslarim[arkadaslarim.length - 1] // arkadaslarim listesinin son elemanini döndürür. //
);

arkadaslarim1[1] = "Ömer"; // arkadaslarim listesinin ikinci elemanini "Ömer" ile degistirir. //
arkadaslarim1.push("Abdurrahman"); // arkadaslarim1 listesinin sonuna "Abdurrahman" ekler. //
arkadaslarim1.unshift("Emirhan"); // arkadaslarim1 listesinin basina "Emirhan" ekler. //
arkadaslarim1.pop(); // arkadaslarim1 listesinin son elemanini siler. //
arkadaslarim1.shift(); // arkadaslarim1 listesinin ilk elemanini siler. //
arkadaslarim1.indexOf("Ömer"); // arkadaslarim1 listesinindeki "Ömer" elemaninin index numarasini döndürür. //
arkadaslarim1.includes("Emirhan"); // arkadaslarim1 listesinde "Emirhan" olup olmadigini true false olarak döndürür. //
arkadaslarim.push(arkadaslarim1); // ic ice liste olusturmus olduk. //
console.log(arkadaslarim[3][0]); // arkadaslarim listesinin 3. indexindeki listenin 0. elemani. //

///// 42. Introduction to Objects /////
const kimlik = {
  ad: "Enes",
  soyad: "Adsiz",
  dogumTarihi: 1994,
  arkadaslar: ["Soheil", "Zeynep", "Setareh"],
  yasHesapla: function () {
    // obje icine fonksiyon da yerlestirebiliriz. //
    this.yas = 2022 - this.dogumTarihi; // buradaki this kimlik icindeki dogumTarihine isaret eder. //
    return this.yas;
  },
}; // sözlük olusturmus olduk. //

kimlik.ad;
kimlik["ad"]; // kimlik objesinin ad özelligini iki farkli yolla döndürmüs olduk. //

kimlik.ikamet = "Siegen";
kimlik["telefon"] = "015739611111"; // kimlik objesine iki farkli yolla ikamet ve telefon özelliklerini eklemis olduk. //

// Mini Challenge //

console.log(kimlik.yasHesapla());
console.log(
  `${kimlik.yas} yasindaki ${kimlik.ad}'in ${kimlik.arkadaslar.length} adet arkadasi var ve onun en iyi arkadasi ${kimlik["arkadaslar"][2]}'dir.`
);

///////////////////////////////////////
///// 46. Iteration: The For Loop /////
///////////////////////////////////////

for (
  let tur = 1;
  tur <= 10;
  tur += 1 // tur'u 1 ile baslat, tur 10'dan kücük ya da 10'a esit ise tur'u 1 arttir ve sunu yap; //
) {
  console.log(`${tur}. turdayiz.`);
}

console.log(arkadaslarim);
for (let tur1 = 0; tur1 <= arkadaslarim.length - 1; tur1++) {
  if (arkadaslarim[tur1] == "Soheil") continue; // arkadaslarim[tur1] Soheil'e esitse, kodlari devam calistirmadan sonraki tura gec. //
  console.log(`${arkadaslarim[tur1]}`);
}

for (let tur1 = 0; tur1 <= arkadaslarim.length - 1; tur1++) {
  if (arkadaslarim[tur1] == "Zeynep") break; // arkadaslarim[tur1] Soheil'e esitse, döngüden komple cik. //
  console.log(`${arkadaslarim[tur1]}`);
}
// ic ice for döngüleri de yazilabilir. mantigi ayni oldugu icin burada yer vermedim. //

///////////////////////////////
///// 49. The While Loop /////
/////////////////////////////

let tekrar = 0;
while (tekrar <= 10) {
  console.log(`${tekrar}. turdayiz.`);
  tekrar++;
}

let aSayisi = Math.trunc(2, 5555); // Math.trunc, parantez icine yazilan sayinin ondalikli kismini kaldirir.
let bSayisi = Math.random(); // Math.random, 0 ile 1 arasinda rastgele bir sayi üretir.

let denemeSayisi = 1; // Mini Challenge //
while (bSayisi > 0.1) {
  bSayisi = Math.random();
  console.log(bSayisi);
  denemeSayisi++;
}
console.log(denemeSayisi);
