/**
 * For Loops
 */

/**
 * Ejemplo tradicional sin optimizaciones:
 * El problema con este patrón es que se debe acceder el tamaño del arreglo para cada iteración
 * lo cual puede resultar en un código lento especialmente cuando se esta iterando sobre elementos
 * del DOM como objetos HTMLCollections cuyo tamaño es calculado en vivo cada que se accede a el.
 */
var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (var i = 0; i <= arr.length; i++) {
  // ... do something
}

/**
* Una manera mas óptima es almacenar el tamaño arreglo o la colección sobre la que se esta iterando,
* de esta manera se obtiene el tamaño del arreglo una uncia siendo considerablemente mas rápido cuando
* se esta trabajando con HTMLCollections.
*/
for (var i = 0, max = arr.length; i <= max; i++) {
  // ... do something
}

/**
* Dos variaciones del patrón for son la siguientes y ofrecen las siguientes micro-optimizaciones
* 1.- Usa una variable menos
* 2.- Contar del total hacia 0 es usualmente mas rápido por que es mas eficiente que comparar a 0
* que al tamaño del arreglo.
*/
var i,
    myarr = [];
for (i = myarr.length; i--) {
  // do something
}

var myarr = [],
    i = myarr.length;

while(i--) {
  // do something
}
