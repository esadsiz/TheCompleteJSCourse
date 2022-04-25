"use strict";

document.querySelector(".message"); //index.html'den ""<p class="message">Start guessing...</p>"" kod satirini döndürmüs olduk. cünkü bu satirin sinifi ".message" //
document.querySelector(".message").textContent; // textContent yazarak bu kod satirinin text kismini döndürdük. //

// Fonksiyonlar //

const textDegistir = function (hedefText, yeniMesaj) {
  document.querySelector(hedefText).textContent = yeniMesaj;
};

const numStyleDegistir = function (yeniWidth, yeniFontSize) {
  document.querySelector(".number").style.width = yeniWidth;
  document.querySelector(".number").style.fontSize = yeniFontSize;
};

const bodyStyleDegistir = function (yeniBGStyle) {
  document.querySelector("body").style.backgroundColor = yeniBGStyle;
};

//

let dogruSayi = Math.floor(Math.random() * 20) + 1;

textDegistir(".score", 100);

document.querySelector(".guess").value; //secilen sinifin box degerini döndürür.//

document.querySelector(".again").addEventListener("click", function () {
  textDegistir(".message", "🧐 Bir tahmin giriniz");
  textDegistir(".number", "?");
  textDegistir(".score", 100);
  bodyStyleDegistir("#222");
  numStyleDegistir("15rem", "6rem");
  dogruSayi = Math.floor(Math.random() * 20) + 1;
  document.querySelector(".guess").value = "";
});

document.querySelector(".check").addEventListener("click", function () {
  const tahmin = Number(document.querySelector(".guess").value);
  const skor = Number(document.querySelector(".score").textContent);
  const rekor = Number(document.querySelector(".highscore").textContent);
  if (document.querySelector(".message").textContent != "🤩 Bildiniz!") {
    if (Boolean(document.querySelector(".guess").value)) {
      if (document.querySelector(".score").textContent <= 0) {
        textDegistir(".message", "😓 Kaybettiniz...");
      } else if (tahmin == dogruSayi) {
        textDegistir(".number", dogruSayi);
        textDegistir(".message", "🤩 Bildiniz!");
        bodyStyleDegistir("#60b347");
        numStyleDegistir("30rem", "12rem");
        if (skor > rekor) {
          document.querySelector(".highscore").textContent = Number(
            document.querySelector(".score").textContent
          );
        }
      } else if (tahmin > dogruSayi) {
        textDegistir(".message", "👇🏻 Inin");
        document.querySelector(".score").textContent -= 10;
      } else {
        textDegistir(".message", "☝🏻 Cikin");
        document.querySelector(".score").textContent -= 10;
      }
    } else {
      textDegistir(".message", "😅 Sayi girmediniz");
    }
  }
});
