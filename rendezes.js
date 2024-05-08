export function nevRendez(lista, irany) {
    lista.sort(function (t1, t2) {
        let eredmeny = 1;
        if (t1.termek < t2.termek) {
            eredmeny = -1;
        }
        return eredmeny * irany;
    });
    return lista;
}

export function arRendez(lista, irany) {
    lista.sort(function(t1, t2) {
        let eredmeny = 0;
        if (t1.ar < t2.ar) {
            eredmeny = -1;
        } else if (t1.ar > t2.ar) {
            eredmeny = 1;
        }
        return eredmeny * irany;
    });
    return lista;
}

export function torol(lista,id){
    lista.splice(id,1);
    return lista;
}

export function szures(lista,keresoszoveg){
    const szurtLista=lista.filter(function(taska){
        return taska.termek.toUpperCase().includes(keresoszoveg.toUpperCase());
    });
    return szurtLista;
}