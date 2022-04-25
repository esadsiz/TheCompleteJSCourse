"use strict";

// document.querySelector(".modal").classList.remove("hidden"); // modal sinifinin ait oldugu kod satirindan "hidden" sinifini kaldirdik. //
// document.querySelector(".modal").classList.add("hidden"); // modal sinifinin ait oldugu kod satirindan "hidden" sinifini ekledik. //

for (let i = 0; i < document.querySelectorAll(".show-modal").length; i++) {
  document
    .querySelectorAll(".show-modal")
    [i].addEventListener("click", function () {
      document.querySelector(".overlay").style.display = "block";
      document.querySelector(".hidden").style.display = "block";
    });
}

document.querySelector(".close-modal").addEventListener("click", function () {
  document.querySelector(".hidden").style.display = "none";
  document.querySelector(".overlay").style.display = "none";
});

document.querySelector(".overlay").addEventListener("click", function () {
  document.querySelector(".hidden").style.display = "none";
  document.querySelector(".overlay").style.display = "none";
});

document.addEventListener("keydown", function (basilantus) {
  // (klavyeden herhangi bir tusa basildiginda) keydown basilir basilmaz, keyup tusu biraktigimizda, keypress basili tuttugumuzda foksiyonu cagirir.//
  console.log(basilantus.key); // bir tusa basildiginda o tusun anahtarini konsola yazdirir. //
  if (basilantus.key === "Escape") {
    // basilan tus'un anahtari Escape ise; yani basilan tus ESC ise; //
    document.querySelector(".hidden").style.display = "none";
    document.querySelector(".overlay").style.display = "none";
  }
});
