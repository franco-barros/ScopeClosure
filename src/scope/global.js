// varianbles

var a; // declarando
var b = "b"; // declaramos / asignamos
b = "bb"; // reasignacion
var a = "aa"; // redeclaracion

//Global scope
var fruit = "apple";

function bestFruit() {
  console.log(fruit);
}

bestFruit();

function countries() {
  country = "Colombia"; //Global
  console.log(countries);
}

countries();
console.log(country);
