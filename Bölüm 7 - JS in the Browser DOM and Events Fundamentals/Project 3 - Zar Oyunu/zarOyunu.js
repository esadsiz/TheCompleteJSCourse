"use strict";

// Fonksiyonlar //
const textDegistir = function (hedefSinif, degisiklik) {
  document.querySelector(hedefSinif).textContent = degisiklik;
};

const zarResmi = function (zardakiSayi) {
  document.querySelector("img").src = `dice-${zardakiSayi}.png`;
};

let oyuncu1Skor = 0;
let oyuncu2Skor = 0;
let oyuncu1Current = 0;
let oyuncu2Current = 0;
let zardakiSayi;
let tekCift = 1;
document.querySelector(".player--1").classList.remove("player--active");
document.querySelector(".player--0").classList.add("player--active");

document.querySelector(".btn--new").addEventListener("click", function () {
  oyuncu1Skor = 0;
  oyuncu2Skor = 0;
  oyuncu1Current = 0;
  oyuncu2Current = 0;
  zardakiSayi = 0;
  tekCift = 1;
  textDegistir("#current--0", 0);
  textDegistir("#current--1", 0);
  textDegistir("#score--0", 0);
  textDegistir("#score--1", 0);
  document.querySelector(".player--1").classList.remove("player--active");
  document.querySelector(".player--0").classList.add("player--active");
  document.querySelector(".btn--hold").disabled = false;
  document.querySelector(".btn--roll").disabled = false;
  document.querySelector(".player--1").classList.remove("player--winner");
  document.querySelector(".player--0").classList.remove("player--winner");
});

document.querySelector(".btn--roll").addEventListener("click", function () {
  if (oyuncu1Skor >= 25 || oyuncu2Skor >= 25) {
    document.querySelector(".btn--hold").disabled = true;
    document.querySelector(".btn--roll").disabled = true;
  } else {
    zardakiSayi = Math.floor(Math.random() * 6 + 1);
    zarResmi(zardakiSayi);
    if (zardakiSayi !== 1) {
      document.querySelector(".btn--hold").disabled = false;
      if (tekCift === 1) {
        oyuncu1Current = oyuncu1Current + zardakiSayi;
        textDegistir(
          "#current--0",
          Number(document.querySelector("#current--0").textContent) +
            zardakiSayi
        );
        document
          .querySelector(".btn--hold")
          .addEventListener("click", function () {
            oyuncu1Skor = oyuncu1Current + oyuncu1Skor;
            textDegistir("#score--0", oyuncu1Skor);
            textDegistir("#current--0", 0);
            textDegistir("#current--1", 0);
            tekCift = 2;
            oyuncu1Current = 0;
            document
              .querySelector(".player--0")
              .classList.remove("player--active");
            document
              .querySelector(".player--1")
              .classList.add("player--active");
            if (oyuncu1Skor >= 25) {
              document
                .querySelector(".player--0")
                .classList.add("player--winner");
              document
                .querySelector(".player--1")
                .classList.remove("player--active");
            }
          });
      } else {
        oyuncu2Current = oyuncu2Current + zardakiSayi;
        textDegistir(
          "#current--1",
          Number(document.querySelector("#current--1").textContent) +
            zardakiSayi
        );
        document
          .querySelector(".btn--hold")
          .addEventListener("click", function () {
            oyuncu2Skor = oyuncu2Current + oyuncu2Skor;
            textDegistir("#score--1", oyuncu2Skor);
            textDegistir("#current--0", 0);
            textDegistir("#current--1", 0);
            tekCift = 1;
            oyuncu2Current = 0;
            document
              .querySelector(".player--1")
              .classList.remove("player--active");
            document
              .querySelector(".player--0")
              .classList.add("player--active");
            if (oyuncu2Skor >= 25) {
              document
                .querySelector(".player--1")
                .classList.add("player--winner");
              document
                .querySelector(".player--0")
                .classList.remove("player--active");
            }
          });
      }
    } else {
      document.querySelector(".btn--hold").disabled = true;
      oyuncu2Current = 0;
      oyuncu1Current = 0;
      if (tekCift === 1) {
        textDegistir("#current--0", 0);
        tekCift = 2;
        document.querySelector(".player--0").classList.remove("player--active");
        document.querySelector(".player--1").classList.add("player--active");
      } else {
        textDegistir("#current--1", 0);
        tekCift = 1;
        document.querySelector(".player--1").classList.remove("player--active");
        document.querySelector(".player--0").classList.add("player--active");
      }
    }
  }
});
