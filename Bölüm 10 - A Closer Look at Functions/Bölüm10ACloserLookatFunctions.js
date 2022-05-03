"use strict";

//////////////////////////////
// 128. Default Parameters //
////////////////////////////
const tümRezervasyonlar = [];
const rezervasyonYap = function (ucusNumarasi, yolcuNumarasi, ucusFiyati) {
  ucusNumarasi = ucusNumarasi || 111; // ucusNumarasi girildiyse tamam, ama girilmediyse ucusNumarasi'ni 111 olarak ayarla.
  yolcuNumarasi = yolcuNumarasi || 111; // yolcuNumarasi girildiyse tamam, ama girilmediyse yolcuNumarasi'ni 111 olarak ayarla.
  ucusFiyati = ucusFiyati || 111; // ucusFiyati girildiyse tamam, ama girilmediyse ucusFiyati'ni 111 olarak ayarla.
  // ya da tüm bunlar yerine yukarida parantez icini (ucusNumarasi=111, yolcuNumarasi=111, ucusFiyati=111) seklinde de yazabiliriz.
  const rezervasyon = { ucusNumarasi, yolcuNumarasi, ucusFiyati };
  tümRezervasyonlar.push(rezervasyon);
};

const deneme1 = rezervasyonYap(1232, undefined, 123); // atlamak istedigimiz degerin yerine undefined yazariz.
//
//
//
//
//
////////////////////////////////////////////////////////////
// 129. How Passing Arguments Works: Value vs. Reference //
//////////////////////////////////////////////////////////
const checkIn = function (ucusNumarasi1, yolcu) {
  yolcu.isim = "Bay " + yolcu.isim;
  if (yolcu.pasaportNumarasi === 3214235) {
    console.log("Check In islemi tamamlandi.");
  } else {
    console.log("Pasaport Numarasi Uyusmadi.");
  }
};

const yolcu1 = { isim: "Enes Sait Adsiz", pasaportNumarasi: 3214235 };

console.log(checkIn(123213, yolcu1));
console.log(yolcu1.isim);
//
//
//
//
//
//////////////////////////////////////////////////
// 131. Functions Accepting Callback Functions //
////////////////////////////////////////////////
["Enes", "Abdurrahman", "Sinem"].forEach(function () {
  // listedeki her bir eleman icin su fonksiyonu calistir. //
  console.log("Merhaba!");
});
//
//
//
//
//
/////////////////////////////////////////
// 132. Functions Returning Functions //
///////////////////////////////////////
const selam = function (selamlama) {
  return function (isim) {
    console.log(`${selamlama} ${isim}!`);
  };
};

const heyDiyeSelamla = selam("Hey"); // bu artik (((const heyDiyeSelamla = function (isim) {console.log(`Hey ${isim}!`)};))) fonksiyonuna esit olmus oldu.
console.log(heyDiyeSelamla);
const kisiyiSelamla = heyDiyeSelamla("Enes");
console.log(kisiyiSelamla);

// böyle uzun uzun ugrasacagimiza kisaca söyle de yazabiliriz; //
selam("Merhaba")("Enes");

// arrow tipi fonksiyonla kisaca söyle de yazilabilir; //
const arrSelam = (selamlama) => (isim) => console.log(`${selamlama} ${isim}!`);
arrSelam("Merhaba")("Enes");
//
//
//
//
//
//////////////////////////////////////
// 133. The Call and Apply Methods //
////////////////////////////////////
const thy = {
  havayolu: "Türk Hava Yollari",
  iataKodu: "THY",
  rezervasyonlar1: [],
  rezervasyonYap1(ucusNumarasi2, isim) {
    console.log(isim, this.havayolu, this.iataKodu, ucusNumarasi2);
  },
};

thy.rezervasyonYap1(123123, "enes");

const fonksiyonuDisariAl = thy.rezervasyonYap1;
// fonksiyonuDisariAl(123123, "enes"); // calismaz. cünkü fonksiyonun orijinalindeki this.havayolu ve this.iataKodu'yu arar. o yüzden asagidaki kodu calistiririz. //
fonksiyonuDisariAl.call(thy, 123123, "enes"); // bu, gerekli bilgileri thy'den cagir, sonra da fonksiyonuDisariAl fonksiyonunu calistir demek. //

const ucusBilgileri = [213213, "enes"];
fonksiyonuDisariAl.apply(thy, ucusBilgileri); // bu, gerekli bilgileri thy'den cagir, sonra da fonksiyonuDisariAl fonksiyonunu ucusBilgileri listesindeki degerlere göre calistir demek. listede kac eleman olursa olsun, kendisine lazim olan ilk iki elemani girdi olarak alir. //
fonksiyonuDisariAl.call(thy, ...ucusBilgileri); // illa call metodu kullanalim diyorsak, ikinci bosluga ...ucusBilgileri yazariz. //

fonksiyonuDisariAl.bind(thy)(123123, "enes"); // bu da bind metodu. ötekilerden bir farki yok. //
fonksiyonuDisariAl.bind(thy, 123123)("enes"); // bu da bind metodunun baska bir kullanim sekli. //
fonksiyonuDisariAl.bind(thy, 123123, "enes"); // bu da bind metodunun baska bir kullanim sekli. //
// fakat bind metodunun asil kullanim amaci; //
const faiz = (faizOrani, anapara) => anapara + anapara * (faizOrani / 100);
// farz edelim bir kod blogu yaziyorum ve bu kod blogunda faizOrani hep yüzde 20. faiz fonksiyonunu tekrar tekrar faizOrani 20 ile cagirmak yerine, faiz fonksiyonunu 20 faizOrani ile baska bir isimde kopyaliyorum. //
const faizOrani20 = faiz.bind(null, 20); // bunu sadece (null, 20) seklinde baglayabilirim. yani fonksiyonun orijinalindeki input sirasi önemli. //
console.log(faizOrani20(100));
//
//
//
//
//
///////////////////////////////////////////////////////////
// 136. Immediately Invoked Function Expressions (IIFE) //
/////////////////////////////////////////////////////////
(function () {
  console.log("Bu fonksiyon sadece bir kez calistirilir.");
})();

(() => console.log("Bu fonksiyon sadece bir kez calistirilir."))();
