import { TASKALISTA } from "./termekek.js";
import { termekOsszeallit } from "./termekMegjelenit.js";
import { nevRendez, arRendez,torol,szures } from "./rendezes.js"; 
import { tablaOsszeallit,megjelenit } from "./fuggvenyek.js";
const termekElem = $("#termekek");
termekElem.html(termekOsszeallit(TASKALISTA));
const KOSAR = []
const kosarba = $("#gomb")


const divELEM = $("#termekek")
divELEM.html(megjelenit(TASKALISTA))

let irany = 1;
init(TASKALISTA);

szuresEsemeny();

function init(lista) {
    rendezEsemeny(lista);
    kosarEsemeny(lista);
    torolEsemeny();
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
    const gombElem = $(".gomb")
    gombElem.on("click",function (event) {
    const ID = event.target.id 
    KOSAR.push(TASKALISTA[ID])
    kosarba.html(tablaOsszeallit(KOSAR))
    torolEsemeny();
});
}

function torolEsemeny(){
    const torolGomb=$(".torol")
    torolGomb.on("click",function(event){
    let id = event.target.id;
    const LISTA = torol(KOSAR,id);
    kosarba.html(tablaOsszeallit(KOSAR))
    torolEsemeny();
});
}

function szuresEsemeny(){
    const keresoElem=$("#szuro")
    keresoElem.on("keyup",function(){
        let keresoszoveg=keresoElem.val()
        console.log(keresoszoveg)
        const szLista= szures(TASKALISTA,keresoszoveg)
        console.log(szLista)
        divELEM.html(megjelenit(szLista))
        console.log(divELEM.html(megjelenit(szLista)))
    });
}

function osszegKiir() {
    
}