"use strict";
// data types string, number, boolean, null, undefined, array, tuple
// string
let text = "This is a string!";
// number
let num = 123;
// boolean
let isAdmin = true;
// null
let nullData = null;
// undefined
let undefinedData = undefined;
// if just wanna declare a variable without initialization
let a; //but in this way that variable is :any data type. so can assign or hold any type of value which can be number, string etc. So there is no difference to use javascript and not declare a variable without assigning a value in that way.
a = 5;
a = "hello";
a = true;
// if just declare a variable without assigning a value then declare with necessary data type
let fruitsName;
fruitsName = "Apple";
let value;
let boolData;
// array datatype : In this way only assign specific type of value in array
let players = ["Sakib", "Tamim", "Mashrafi"];
players.push("Sabbir");
let numbers = [1, 2, 56, 23];
// tuple --- array---> order ---> types of value
// tuple means couple ..mane array hbe but same array te different type data like string boolean number store kora jabe order ways
let stringNumber = [30, "Sabbir"];
let anyTypesData = ["Sabbir", 30, true];
// object data type
// type alias
const user = {
    slag: "Md.",
    name: "Sabbir",
    age: 35,
};
// user.name = "Hossain";
console.log(user.name);
