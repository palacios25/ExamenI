export default class Ruta{
    constructor(){
        this._nombre = nombre;
        this._tiempo = tiempo;
        this._base = new Bases;
    }

    get nombre(){
        return this._nombre;
    }

    get tiempo(){
        return this._tiempo;
    }
}

class Bases{
    constructor(){
        this._nombre = nombre;
        this._latitud = latitud;
        this._longitud = longitud;
        this._tiempoLlegada = tiempoLlegada;
    }
}

class Salidas{
    constructor(){
        
    }
}

