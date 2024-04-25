import { TASKALISTA } from "./termekek.js";
import { termekOsszeallit } from "./termekMegjelenit.js";
import { nevRendez, arRendez } from "./rendezes.js"; 
const termekElem = $("#termekek");
termekElem.html(termekOsszeallit(TASKALISTA));

let irany = 1;
init(TASKALISTA);

function init(lista) {
    rendezEsemeny(lista);
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

rendezEsemeny(TASKALISTA);




$(document).ready(function() {
    const kosarTabla = $("#kosarTabla tbody");

    $(".kosarbaBtn").on("click", function() {
        const termekId = $(this).data("id");
        const kivalasztottTermek = TASKALISTA.find(termek => termek.id === termekId);

        // Táblázat frissítése a kiválasztott termékkel
        kosarTabla.append(`
            <tr>
                <td>${kivalasztottTermek.nev}</td>
                <td>${kivalasztottTermek.ar} Ft</td>
            </tr>
        `);
    });
});