
exports.config=module.exports.config = {
    mongoClient : null,
    mongoURL : ""
}


exports.createProduct = module.exports.createProduct = function createProduct(){
    console.log("log from my module start()");
};
exports.updateProduct = module.exports.updateProduct = function updateProduct(){
    console.log("log from my module start()");

    this.exports.config.mongoClient.connect(this.exports.config.mongoURL, function(err, db){
        if(err){
            throw err;
        }

        console.log("Database connect!");

        db.close();
    })

};
exports.listProducts = module.exports.listProducts = function listProducts(){
    console.log("log from my module start()");
};
exports.getProduct = module.exports.getProduct = function getProduct(){
    console.log("log from my module start()");
};
exports.deleteProduct = module.exports.deleteProduct = function deleteProduct(){
    console.log("log from my module start()");
};


