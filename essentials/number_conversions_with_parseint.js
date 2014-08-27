/**
 * Number conversions with parseInt
 *
 * Usando parseInt() se puede obtener el valor numérico de una cadena. Esta
 * función acepta un segundo parámetro (radix) que corresponde al sistema numérico que
 * sera usado:
 * Si la cadena inicia con '0x' se usa base 16 (hexadecimal)
 * Si la cadena inicia con '0', depende de la implementación. En ECMAScript 5 
 * se usa base 10 (decimal) mientras que en versiones anteriores como ECMAScript 3 se 
 * usa base 8 (octal), por esta razón siempre se debe especificar para evitar resultados
 * inconsistentes.
 * Si la cadena inicia con cualquier otro valor, el base usada es 10 (decimal).
 */

var month = "06",
    year = "09";

month = parseInt(month, 10);
year = parseInt(year, 10);

/**
 * Si en este ejemplo se omitiera el segundo parámetro en la variable year y el
 * interprete usara la especificación ECMAScript 3 el resultado seria 0 ya que al
 * usar por defecto la base octal "09" no correspondería a un número valido.
 *
 * Otras alternativas para convertir una cadena en número son:
 */

+"08"; // resultado 8
Number("09"); // resultado 9

/**
 * Aunque suelen ser mas rápidas estas solo convierten y no "parsean" el número
 * por lo que entradas como "08 hello" retornaran NaN mientras que parseInt()
 * retornara 8.
 */