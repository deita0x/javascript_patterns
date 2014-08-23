/**
 * siwtch pattern
 */

var inspect_me = 0,
    result = '';

/**
 * Las convenciones seguidas en e siguiente ejemplo son las siguientes:
 * Se alinea cada *case* con *switch* (una excepción a la regla de indentación con llaves)
 * Se indenta el código entre cada case, cada *case* se termina con un *break*
 * Terminar cada *switch* con *default*: para asegurarse que existe un buen resultado en caso de ninguno de los *case*
 * coincida.
 */
switch (inspect_me) {
case 0:
  result = 'zero';
  break;
case 1:
  result = 'one';
  break;
default:
  result = 'unknown';
}