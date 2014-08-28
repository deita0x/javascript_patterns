/**
 * Object literal
 *
 * Un objeto literal es una colección de pares nombre:valor separadas por comas
 * y encerradas en llaves {}, los valores pueden ser primitivas u objetos: en
 * ambos casos son llamadas propiedades. Los valores pueden ser funciones en cuyo
 * caso son llamados métodos.
 *
 * Los objetos creados creados en javascript son mutables en cualquier momento,
 * se puede iniciar con un objeto en blanco e ir añadiendo propiedades
 * posteriormente. La notación de objetos literal es ideal para crear objetos sobre
 * demanda.
 */
var dog = {}; // se inicia con un objeto vacío

dog.name = 'Fido'; // se agrega una propiedad

// se agraga un método
dog.getName =  function () {
  return dog.name;
};

/**
 * En cualquier momento de la vida de este programa se pude:
 * Cambiar los valores de las propiedades y métodos, por ejemplo:
 */
dog.getName =  function () {
  return "hello " + dog.name;
};
/**
 * Remover propiedades o métodos:
 */
delete dog.name;
/**
 * Agregar mas propiedades y métodos
 */

dog.say = function () {
  return "Woof!";
};
dog.fleas = true;

/**
 * No es necesario iniciar con un objeto vacío, el patrón de objeto literal permite
 * agregar funcionalidad al objeto al momento de su creación, por ejemplo:
 */
var dog = {
  name: 'Fido',
  getName: function () {
    return this.name;
  }
};

/**
 * Objects from Constructors
 *
 * En javascript se pueden crear objetos usando funciones constructoras como
 * Object(), Number(), String(), Date(), etc sin embargo no es recomendable.
 */

var car = { // usando notacion literal
  goes: 'far'
};

var car = new Object(); // usando el constructor incluido ... Anti-patron
car.goes = 'far';
/**
 * Una de las razones por las que el patrón de objetos literales es preferida es
 * que enfatiza el hecho de que los objetos son simplemente "hashes" mutables y no
 * algo que fue echo con una "receta" (de una clase).
 */

/**
 * Object Constructor Catch
 * 
 * No hay ninguna razón para usar el constructor new Object() cuando se pueden usar
 * objetos literales, sin embargo debe tenerse en cuenta una característica (o quizá
 * otra razón para no usarlo). La característica es que este constructor acepta
 * un segundo parametro, dependiendo del parametro pasado el constructor decide
 * si es delegado a otro constructor nativo retornando diferentes objetos.
 * Por ejemplo:
 */

// Anti-patrones
var o = new Object();
console.log(o.constructor === Object); // true

var n = new Object(1);
console.log(n.constructor === Number); // true

var s = new Object('I am a string');
console.log(s.constructor === String); // true

var b = new Boolean(true);
console.log(b.constructor === Boolean); // true

/**
 * Como se puede observar el comportamiento de Object() pude ser inesperado si el
 * argumento que se es pasado no se conoce de antemano. En conclusión no debería
 * usarse new Object().
 */