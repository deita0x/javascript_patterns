/* Single var pattern */ç

/* Usar una sola sentencia var al principio de las funciones brinda los siguientes beneficios:
 * Proporciona un unico lugar donde buscar todas las variables necesitadas por la funcion.
 * Previene errores logicos cuando una variables es usada sin ser declarada
 * Ayuda a recordar que las variables deben ser recordadas.
 */

function foo () {
  var a = 1,
      b = 2,
      sum = a + b,
      myobject = {},
      global,
      globla2;

  // function body ...
}

/* Tambien es buena practica inicializar las variables con un valor inicial, esto beneficia la
 * legibilidad del codigo y evita errores logicos (las variables no inicializadas tienen por defecto el valor undefined) 
 * Al mirar el codigo despues se puede de un  vistazo saber la intencion de uso de la variable: objeto, entero, cadena, etc.
 */