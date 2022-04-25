// Veri Tipleri //
let yas = 23; //sayi//
let dogumAyi = "Eylül"; //string// // dogumAyi adinda bir degisken olusturduk. camelCase kuralini kullaniyoruz. degiskenler $ isaretiyle baslayabilir, sayiyla baslayamaz. bir degiskeni ilk defa olusturuyorsak let kullanmamiz lazim. //
let dogumTarihi = true; //boolean//
let isim; //tanimlanmamis (bos) degisken//
console.log(typeof dogumAyi); //typeof dogumAyi degiskeninin veri tipini döndürür.//

const kisiAdi = "Enes"; //sonradan degistirilemeyen sabit.//
const kisiSoyadi = "Adsiz";
const kisiAdiSoyadi = kisiAdi + " " + kisiSoyadi;
console.log(kisiAdiSoyadi); // web sayfasinda ctrl+shift+j yaptigimizda console kisminda görünür. ne ise yarayabilecegini simdilik bilmiyorum. //

/////

console.log(5 > 4); // true ya da false döndürür. < , > , >= , <= //
// Google'a mdn operator precedence yazarsan islem öncelikleri ile ilgili daha ayrintili bilgiye sahip olabilirsin. //

/////

/*
let a = 1; komut satiri iptal etme.
*/

/////

let stringÖrn = "12";
let stringToNumber = Number(stringÖrn); // string'i sayiya cevirme. //

let numberÖrn = 12;
let numberToString = String(numberÖrn); // sayiyi string'e cevirme. //

/////

console.log("10" - 5); // ilginc bir sekile js'de stringle sayi arasinda cikarma islemi yapilabiliyor. //
console.log(typeof ("10" - 5)); // sonucun veri tipi sayi olur. //

/////

// JS'de falsy degerler; //
console.log(Boolean(0));
console.log(Boolean(null));
console.log(Boolean(undefined));
console.log(Boolean(""));
console.log(Boolean(NaN)); // hepsi false döndürür.

/////

let yasimiz = "18";
if (yasimiz === 18) alert("Strict"); // < , > , == , === , !== //
if (yasimiz == 18) alert("Loose"); // ikili esittir, stringi sayiya cevirebilir. üclü esittir ceviremez.
if (yasimiz > 16 && yasimiz < 20) alert("VE!");
alert(!(yasimiz < 8)); // bastaki ünlem, yanina geldigi seyin boolean degerini tersine cevirir. yasimiz < 8 (false), !(false)=true //
if (yasimiz > 16 || yasimiz < 8) alert("VEYA!");

/////

const gün = "persembe";
switch (gün) {
  case "pazartesi":
    console.log("Montag");
    console.log("Was für ein Tag!");
  case "sali":
    console.log("Dienstag");
    break;
  case "carsamba":
  case "persembe": // if else'lerdeki veya gibi kullanmis olduk (carsamba ya da persembe ise).
    console.log("Donnerstag");
    break;
  case "cuma":
    console.log("Freitag");
    break;
  case "cumartesi":
  case "pazar":
    console.log("Sonntag");
    break;
  default:
    console.log("Das ist kein Tag!");
}

/////

let yas1 = 12;
let resitlikdurumu = yas1 >= 18 ? "resitsiniz" : "resit degilsiniz"; // resitlikdurumu; yas1 18den büyük ya da esitse "resitsiniz"e, degilse "resit degilsiniz"e esitlenir. //
console.log(resitlikdurumu);
