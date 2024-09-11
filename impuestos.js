export default class Impuestos {
    constructor(montoBrutoAnual, deducciones){
        this._montoBrutoAnual = montoBrutoAnual;
        this._deducciones = deducciones;
    }

    get montoBrutoAnual() {
        return this._montoBrutoAnual;
    }

    get deducciones() {
        return this._deducciones;
    }

    set montoBrutoAnual(nuevoMontoBruto) {
        this._montoBrutoAnual = nuevoMontoBruto;
    }

    set deducciones(nuevasDeducciones) {
        this._deducciones = nuevasDeducciones;
    }

}