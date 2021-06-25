/**
 *
 * @param {*} nombre - Nombre del consultorio
 * @param {*} pacientes  - Listado de pacientes = Instanceof Paciente
 */
function Consultorio(nombre, pacientes) {
  this._nombre = nombre;
  this._pacientes = pacientes;

  Object.defineProperty(this, "nombre", {
    get: function() {
      return this._nombre;
    },
    set: function(nombre) {
      this._nombre = nombre;
    },
  });

  Object.defineProperty(this, "pacientes", {
    get: function() {
      return this._pacientes;
    },
    set: function(nuevosPacientes) {
      this._pacientes = nuevosPacientes;
    },
  });
}

Consultorio.prototype.findAll = function() {
  return this._pacientes;
};

Consultorio.prototype.findOneByName = function(name) {
  var index = -1;

  for (var counter = 0; counter < this._pacientes.length; counter += 1) {
    if (this._pacientes[counter]._nombre === name) {
      index = counter;
    }
  }

  if (index >= 0) {
    return this._pacientes[index];
  } else {
    return null;
  }
};

/**
 *
 * @param {*} nombre - Nombre del paciente
 * @param {*} edad - edad del apciente
 * @param {*} rut - rut del paciente
 * @param {*} diagnostico - diagnostico del paciente
 */
function Paciente(nombre, edad, rut, diagnostico) {
  this._nombre = nombre;
  this._edad = edad;
  this._rut = rut;
  this._diagnostico = diagnostico;

  Object.defineProperty(this, "nombre", {
    get: function() {
      return this._nombre;
    },
    set: function(nuevoNombre) {
      this._nombre = nuevoNombre;
    },
  });

  Object.defineProperty(this, "edad", {
    get: function() {
      return this._edad;
    },
    set: function(nuevaEdad) {
      this._edad = nuevaEdad;
    },
  });

  Object.defineProperty(this, "rut", {
    get: function() {
      return this._rut;
    },
    set: function(nuevoRut) {
      this._rut = nuevoRut;
    },
  });

  Object.defineProperty(this, "diagnostico", {
    get: function() {
      return this._diagnostico;
    },
    set: function(nuevoDiagnostico) {
      this._diagnostico = nuevoDiagnostico;
    },
  });
}

/**
 *
 * @returns Array
 */
Paciente.prototype.mostrarDatosPaciente = function() {
  return [this._nombre, this._edad, this._rut, this._diagnostico];
};

var paciente1 = new Paciente("Vanessa", 32, "16.123.456-7", "Amigdalitis");
var paciente2 = new Paciente("Eduardo", 45, "10.456.987-k", "Lumbago");
var paciente3 = new Paciente("Ines", 67, "6.456.098-5", "Rinitis");
var paciente4 = new Paciente("Claudio", 13, "22.321.456-0", "Otitis");
var paciente5 = new Paciente("Fernando", 56, "12.645.582-9", "TEA");
var consulta = new Consultorio("Consultorio Ñuñoa", [
  paciente1,
  paciente2,
  paciente3,
  paciente4,
  paciente5,
]);

//{propiedades/properties - metodos/methods - accessors} => members
// ubicacion en memoria <---------  accessors  -----------> dato

console.log({ consulta });
console.log(paciente1.mostrarDatosPaciente());
console.log(paciente2.mostrarDatosPaciente());
console.log(paciente3.mostrarDatosPaciente());
console.log(paciente4.mostrarDatosPaciente());
console.log(paciente5.mostrarDatosPaciente());

/////////////////////////////////////////////////////////////////////////

paciente5.nombre = "Simona";

console.log(paciente5.mostrarDatosPaciente());

console.log({ allPatients: consulta.findAll() });
console.log({
  findedPatient: consulta.findOneByName("Simona"),
  notFoundPatient: consulta.findOneByName("Fernando"),
});