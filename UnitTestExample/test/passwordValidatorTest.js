var chai = require('chai');
var passwordValidator=require('../modules/password_validator');

//module level
describe("JSON", function() {

    //function level
   describe(".validPassword(password)", function() {

        //function test 1
       it("should have minimum 8 char length", function(){

        //implementation test with wrong value
            var wrongPas="1234567";
            var valid = passwordValidator.validPassword(wrongPas);
            
            //chai check
            chai.expect(valid).to.be.equal(false);


            //implementation with right pasword
             var goodPas="1234567";
            var valid2 = passwordValidator.validPassword(goodPas);
            //chai check
            chai.expect(valid2).to.be.equal(true);
           
       });

        //function test 2
       it("should not contain 'password' inside", function(){

        //implementation test with wrong value
            var wrongPas="password1";
            var valid = passwordValidator.validPassword(wrongPas);
            
            //chai check
            chai.expect(valid).to.be.equal(false);


            //implementation with right pasword
             var goodPas="blablabla";
            var valid2 = passwordValidator.validPassword(goodPas);
            //chai check
            chai.expect(valid2).to.be.equal(true);
           
       });
   });
});