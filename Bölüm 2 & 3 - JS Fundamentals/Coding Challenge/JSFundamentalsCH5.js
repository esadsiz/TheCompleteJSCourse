"use strict";

function durchschnitt(tier1, tier2, tier3) {
  return (tier1 + tier2 + tier3) / 3;
}

const delfine = durchschnitt(85, 54, 41);
const koalas = durchschnitt(23, 34, 27);

console.log(delfine, koalas);

function gewinnerPrüfen(delfine, koalas) {
  if (delfine / 2 >= koalas) {
    console.log("Delfine gewinnen!");
  } else if (koalas / 2 >= delfine) {
    console.log("Koalas gewinnen!");
  } else {
    console.log("Kein Gewinner!");
  }
}

gewinnerPrüfen(delfine, koalas);
