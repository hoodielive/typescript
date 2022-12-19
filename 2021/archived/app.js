"use strict";
// string
var myName = 'Larry';
// number
var myAge = 19;
// boolean
var hasHobbies = false;
// assigning a type 
var myRealAge;
myRealAge: 33;
// array
var hobbies = ["coding", "reading"];
console.log(typeof hobbies);
hobbies = [100];
// tuples 
var address = ["Superstreet", 99];
// enum
var Color;
(function (Color) {
    Color[Color["Gray"] = 0] = "Gray";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
    Color[Color["Pink"] = 100] = "Pink";
})(Color || (Color = {}));
var myColor = Color.Green;
console.log(myColor);
