export function termekOsszeallit(lista) {
    let txt = "";
    txt += `<div class="container-fluid">`
    txt += `<div class="row">`;
    for (let index = 0; index < lista.length; index++) {
        txt += `<div class="card col-md-4">`
        txt += `<div class="card-header">${lista[index].termek}</div>`
        txt += `<div id="termekek" class="text-center">`;
        txt += `<img src="${lista[index].kep}" alt="${lista[index].termek}" style="width: 100%; height: auto;">`;
        txt += `<p>${lista[index].ar}</p>`
        txt += `<div><button id="${index}">Kosárba</button></div>`;
        txt += `</div>`;
        txt += `</div>`;
    }
    txt += `</div>`;
    txt += `</div>`;
    return txt;
}

export function megjelenit(txt) {
    const divELEM = $(".adatok")
    divELEM.html(txt)
}

