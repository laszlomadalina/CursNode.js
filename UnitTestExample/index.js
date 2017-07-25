console.log("Unit test example start!");

var myValidator = require( "./modules/password_validator");

//var password="testBauBau2017";
var password="test";
var valid = myValidator.validPassword(password);

console.log("Your password '"+password+"' is: "+valid);