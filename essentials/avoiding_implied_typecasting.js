/**
 * Avoiding implied typecasting
 *
 * Javascript es muy flexible a la hora de aceptar datos, por defecto se realiza conversión implícita de tipos
 * cada que se realizan comparaciones.
 * Esta es la razón por la cual false == 0 o "" == 0 retornan true, para comprender mejor el por que de este
 * comportamiento se tiene que tener en cuenta que en javascript todo es considerado true con excepción de 
 * los siguientes valores:
 * false
 * null
 * 0
 * "" (string vacio)
 * NaN
 * undefinded
 *
 * Se recomienda siempre usar los operadores === y !== para verificar el tipo y el valor de la expresión que se va a
 * comparar.
 */

var zero = 0;
if (zero === false) {
  // ...
  // no se ejecuta debido a que zero es 0 y por tanto falso
}

/*
 * Antipatron
 */
if (zero == false) {
  // ...
  // este bloque es ejecutado
}
