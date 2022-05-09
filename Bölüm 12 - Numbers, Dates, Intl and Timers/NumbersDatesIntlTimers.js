"use strict";

///////////////////////////////////////////
// 170. Converting and Checking Numbers //
/////////////////////////////////////////
Number("23"); // string sayi dönüsümü.
typeof +"23"; // string sayi dönüsümü.
Number.parseInt("30px"); // stringten sayiyi cekip alma. stringin sayi ile baslamasi gerekir.
Number.parseFloat("2.5rem"); // stringten floati cekip alma. stringin sayi ile baslamasi gerekir.
Number.isNaN("30px"); // "30px" numara degildir, dogru mu? true veya false olarak döndürür.
Number.isFinite("30px"); // "30px" numaradir, dogru mu? true veya false olarak döndürür.
Number.isInteger("30px"); // "30px" numaradir, dogru mu? true veya false olarak döndürür.
//
//
//
//
//
/////////////////////////////
// 171. Math and Rounding //
///////////////////////////
Math.sqrt(25); // 25'in kökünü döndürür.
Math.max(25, 12, 3, 4, 1, 4, 99); // parantez icine yazili numaralar arasinda en büyük olanini döndürür.
Math.min(25, 12, 3, 4, 1, 4, 99); // parantez icine yazili numaralar arasinda en kücük olanini döndürür.
Math.PI; // pi sayisi.
Math.random(); // 0 ile 1 arasinda (0 ve 1 dahil degil) rastgele sayi üretir.
Math.trunc(); // float sayiyinin virgülden sonraki kismini atar.
Math.round(); // float sayiyinin virgülden sonraki kismi 5in üstündeyse yukari, altindaysa asagi yuvarlar.
Math.ceil(); // float sayiyinin virgülden sonraki kismini yukari yuvarlar.
Math.floor(); // float sayiyinin virgülden sonraki kismini asagi yuvarlar.
(2.453235).toFixed(3); // virgülden sonraki ilk üc rakam disinda kalani atar, son basamagi yukari yuvarlar (2.454 olur). ciktiyi string olarak verir.
const büyükSayi = 86784563643523;
const büyükSayi1 = 86_784_563_643_523; // okumasi kolay olsun diye sayilari böyle altcizgilerle ayirsak bile problem degil.
//
//
//
//
//
//////////////////////////
// 175. Creating Dates //
////////////////////////
const simdi = new Date(); // simdiki zamani cagirir. Sun May 08 2022 15:50:20 GMT+0300 (GMT+03:00) formatinda. //
console.log(simdi.getDate()); // ayin kacinci günü oldugunu döndürür. //
simdi.getFullYear(); // tarihten yili döndürür.
simdi.getMonth(); // tarihten ayi döndürür. ocak olarak 0'dan baslar.
simdi.getDay(); // tarihten günü sayi olarak döndürür. pazar olarak 0'dan baslar.
simdi.getTime(); // 1970'ten bu yana kac milisaniye gectigini döndürür.
Date.now(); // 1970'ten bu yana kac milisaniye gectigini döndürür.

const simdikiGün = simdi.getDay();
const simdikiGünYeniYazim = `${simdikiGün}`.padStart(2, "0"); // simdikiAy'in sol tarafini 2 haneli olana kadar 0 ile doldur. (yani 02'ye cevir)
console.log(simdikiGünYeniYazim);

const tarihOlustur = new Date(2023, 10, 29, 14, 53, 1); // sirasiyla; yil ay gün saat dakika saniye olusturur.
console.log(tarihOlustur);
tarihOlustur.setFullYear(2040); // tarhiOlustur'un yilini 2040 olarak degistir. (orijinalini degistirir.)
+tarihOlustur; // 1970'ten olusturulan tarihine kadar kac milisaniye gectigini döndürür.
Number(tarihOlustur); // 1970'ten olusturulan tarihine kadar kac milisaniye gectigini döndürür.
//
//
//
//
//
///////////////////////////////////////////
// 175. Internationalizing Dates (Intl) //
/////////////////////////////////////////
const simdi1 = new Date();
const tarihParametreleri = {
  hour: "numeric",
  minute: "numeric",
  day: "2-digit", // günü cift haneli numara ile yazmak.//
  month: "long", // numara ile degil de yaziyla yazmak.
  year: "numeric",
};
const tarih2 = new Intl.DateTimeFormat("tr", tarihParametreleri).format(simdi1); // tarih formatini türkiyeye göre ayarlamak. bilgisayarda kullanilan dile göre ayarlamak icin "tr" yerine navigator.language yazilir. ülke kodlarina ISO Language Codes diye aratarak ulasilabilir. //
console.log(tarih2);
//
//
//
//
//
/////////////////////////////////////////////
// 175. Internationalizing Numbers (Intl) //
///////////////////////////////////////////
const numara = 124235432756.23423;
const numaraFormat = new Intl.NumberFormat("de-DE").format(numara); // sayilari almanya'ya formatina göre ayarlama. cikti 124.235.432.756,234 olur. //
console.log(numaraFormat);

const numara1 = 12426.23423;
const numaraParametreleri = { style: "currency", currency: "EUR" }; // sayinin sonuna Euro isareti koyar.
// { style: "unit", unit: "mile-per-hour" } sonuna hiz uzantisi ekler.
// { style: "unit", unit: "celcius" } sonuna sicaklik derecesi ekler.
// { style: "percent"} sonuna ya da basina yüzde sembolü ekler.
const numaraFormat1 = new Intl.NumberFormat(
  "de-DE",
  numaraParametreleri
).format(numara1); // sayilari almanya'ya formatina göre ayarlama. cikti 124.235.432.756,234 olur. //
console.log(numaraFormat1);
//
//
//
//
//
//////////////////////////////////////////////
// 180. Timers: setTimeout and setInterval //
////////////////////////////////////////////
const zamanlayici = setTimeout(() => console.log("Fonksiyon Basarili!"), 1000); // 3000 milisaniye sonra yazili fonksiyonu calistir.
zamanlayici;
clearTimeout(zamanlayici); // "zamanlayici" isimli zamanlayiciyi durdur.

const her10snde1 = setInterval(() => console.log("10 sn oldu."), 10000); // 10 saniyede bir yazili fonksiyonu calistir.
her10snde1;
clearInterval(her10snde1); // "her10snde1" isimli intervali durdur.
