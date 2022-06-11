// Question 1
let user = {};
user.name = "John";
user.surname = "Mike";
user.name = "Peter";
delete user.name; // or Reflect.deleteProperty(user, 'name')

// Question 2
var fruit = {
  apple: 20,
  pear: 20,
  peach: 10
};
let totalPieces = fruit.apple + fruit.pear + fruit.peach;
console.log(totalPieces);