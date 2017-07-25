exports.validPassword = module.exports.validPassword = function (password){
        //test 1 condition implementation
        if(password.length < 8){
                return false;
        }
        //test 2 condition implementation
        if(password.indexOf("password")>=0){
                return false;
        }
        return true;
}