var Dog = require('./Dog');
var Cat = require('./Cat');

var dog = new Dog('Lilu');
var cat = new Cat();

dog.sayHi();
dog.eat(cat);
console.log(dog);
console.log(cat);s