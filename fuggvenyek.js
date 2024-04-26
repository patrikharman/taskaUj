import { TASKALISTA } from "./termekek.js";

function kiir(lista) {
    for (let index = 0; index < lista.length; index++) {
        const element = lista[index];
        console.log(element);
        console.log(lista[index]);
    }
}
kiir(TASKALISTA);

export function tablaOsszeallit(lista) {
    let txt="<table class='table table-striped'>"
    txt+="<thead><tr><th>Kép</th><th>Termék</th><th>Ár</th>Termékeink<th></th></tr>"
    txt+="<tbody>"
    lista.forEach((elem,index) => {
        txt+=`<tr>`
        for (const kulcs in elem) {
            txt += `<td>${elem[kulcs]}</td>`;
        }
        txt += `<td class='torol' id=${index}>🗑️</td>`;
        txt += `</tr>`;
    });
    txt+="</tbody></table>";
    return txt;
}
export function megjelenit() {
    
}

    