import { TASKALISTA } from "./termekek.js";

function kiir(lista) {
    for (let index = 0; index < lista.length; index++) {
        const element = lista[index];
        console.log(element);
        console.log(lista[index]);
    }
}
kiir(TASKALISTA);

