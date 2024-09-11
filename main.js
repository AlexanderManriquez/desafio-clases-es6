import Impuestos from './impuestos.js';
import Cliente from './cliente.js';

// Crear una instancia de Impuestos
const impuesto = new Impuestos(100000, 20000);

// Crear una instancia de Cliente con el impuesto
const cliente = new Cliente("Juan", impuesto);

// Calcular el impuesto
console.log(cliente.calcularImpuesto());