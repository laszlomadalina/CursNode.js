console.log("Module exaple started!");

var myModule=require("./Modules/mymodule.js");

myModule.start();

console.log("Config.conf1 = "+ myModule.config.conf1);