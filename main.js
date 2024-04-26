import { TASKALISTA } from "./termekek.js";
import { termekOsszeallit } from "./termekMegjelenit.js";
import { nevRendez, arRendez } from "./rendezes.js"; 
import { tablaOsszeallit,megjelenit } from "./fuggvenyek.js";
const termekElem = $("#termekek");
termekElem.html(termekOsszeallit(TASKALISTA));

const kosarba = $("#gomb")
kosarba.html(tablaOsszeallit(TASKALISTA))

const divELEM = $("#termekek")
divELEM.html(megjelenit(TASKALISTA))

let irany = 1;
init(TASKALISTA);

function init(lista) {
    rendezEsemeny(lista);
    kosarEsemeny(lista);
}

function rendezEsemeny(lista) {
    const nevElem = $("#rendez_nev");
    const arElem = $("#rendez_ar");

    nevElem.on("click", function () {
        const rLista = nevRendez(lista.slice(), irany);
        termekElem.html(termekOsszeallit(rLista));
        irany *= -1;
    });

    arElem.on("click", function () {
        const rLista = arRendez(lista.slice(), irany);
        termekElem.html(termekOsszeallit(rLista));
        irany *= -1;
    });
}



function kosarEsemeny() {
    const gombElem = $("gomb")
    gombElem.on("click",function (event) {
        const ID = event.target.id 
    })
}
