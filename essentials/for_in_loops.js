/**
 * for-in Loops
 *
 * Los ciclos for-in deben ser usados para iterar sobre objetos y también son son llamados *enumeration*.
 * Si bien se puede usar for-in para iterar sobre arreglos no es recomendado.
 * Es importante usar la propiedad hasOwnProperty() cuando se itera sobre objetos para filtrar propiedades...
 * considérese el siguiente ejemplo:
 */
var man = {
  heads: 1,
  hands: 2,
  legs: 2
};

/**
 * En algún punto del código se agrega un método a todos los objetos y este se hace disponible
 * sobre todos los objetos que sean creados
 */
if(typeof Object.prototype.clone === 'undefined') {
  Object.prototype.clone = function() {};
}

/**
 * Al iterar sobre el objeto man se obtiene como resultado sus propiedades incluido el método clone()
 * lo cual puede ser un resultado indeseado en la mayoría de las situaciones.
 * El resultado del siguiente código seria:
 * heads : 1
 * hands : 2
 * legs : 2
 * clone : function()
 */
for(var i in man) {
  console.log(i, ':', man[i]);
}

/**
 * Para prevenir ese comportamiento es necesario filtrar las propiedades usando el método hasOwnProperty()
 * el resultado seria el siguiente: 
 * heads : 1
 * hands : 2
 * legs : 2
 */
for(var i in man) {
  if(man.hasOwnProperty(i)) {
    console.log(i, ':', man[i]);
  }
}

/**
 * Ahora considerece el caso en el que por alguna razón se ha redefinido el método hasOwnProperty() en el objeto man,
 * un mejor patrón seria llamar hasOwnProperty de la siguiente manera:
 */
for(var i in man) {
  if(Object.prototype.hasOwnProperty.call(man, i)) {
    console.log(i, ':', man[i]);
  }
}

/**
 * Para una mayor legibilidad se puede almancenar en una variable de esta forma:
 */
var i,
    hasOwn = Object.prototype.hasOwnProperty;
for(var i in man) {
  if(hasOwn.call(man, i)) {
    console.log(i, ':', man[i]);
  }
}