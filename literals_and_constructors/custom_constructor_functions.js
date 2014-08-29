/**
 * Custom Constructor Functions
 * Además de los funciones constructoras incorporadas, y del patrón de objeto
 * literal, se pueden usar nuestras propias funciones constructoras, por ejemplo:
 */
var joe = new Person('Joe');
joe.say(); // "I am Joe"

/**
 * A pesar de que este patrón es muy similar a la forma en la que se crean objetos
 * en Java en realidad se trata únicamente de una función constructora.
 */
var Person = function (name) {
  this.name = name;
  this.say = function () {
    return 'I am ' + this.name;
  };
};

/**
 * Invocar una función constructora con el operador new implica algo similar a esto:
 */
var Person = function (name) {
  // se crea un nuevo objeto
  // var this = {};
  
  // se agregan las propiedades y metodos al objeto
  this.name = name;
  this.say = function () {
    return 'I am ' + this.name;
  }

  // return this;
};

/**
 * En el ejemplo anterior el método say() es agregado a this, sin embargo esto
 * implica que en tiempo de ejecución cada que se haga una nueva instancia con
 * new Person() una nueva función sera creada en memoria, lo cual obviamente es
 * ineficiente. Una mejor opción es agregar el método al prototype de Person:
 */
Person.prototype.say =  function () {
  return 'I am ' + this.name;
};

/** 
 * Constructor's return values
 *
 * Por defecto cada que se crea una instancia de un función constructora usando 
 * new se retorna un objeto referido por this, si no sea agrega ninguna propiedad
 * o método a this se retorna un objeto "vació".
 * Los constructores retornan de manera implícita this, si no tienen una sentencia
 * return en la función, no obstante se puede retornar cualquier otro objeto.
 */
var Objectmaker = function () {
  // esta propiedad `name` sera ignorada debido a que el constructor decide
  // retornar otro objeto en lugar de este.
  this.name = 'This is it';

  // se crea y retorna un nuevo objeto
  var that = {};
  that.name = "And that's that";
  return that;
};

var o = new Objectmaker();
console.log(o.name); // "And that's that"
/**
 * Retornar algo distinto a un objeto como una cadena, numero o booleano, no
 * causara error pero sera ignorado y el objeto referencia a this sera retornado.
 */
