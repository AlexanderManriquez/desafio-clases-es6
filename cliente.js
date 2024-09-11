export default class Cliente {
    constructor (nombre, impuesto){
        this._nombre = nombre;
        this._impuesto = impuesto;
    }

    get nombre(){
        return this._nombre;
    }

    set nombre(nuevoNombre){
        this._nombre = nuevoNombre;
    }

    calcularImpuesto(){
        const montoBrutoAnual = this._impuesto.montoBrutoAnual;
        const deducciones = this._impuesto.deducciones;
        return (montoBrutoAnual - deducciones) * 0.21;
    }
}