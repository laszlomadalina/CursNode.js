exports.config = module.exports.config = {
    mongoClient: null,
    mongoUrl: ""
}

//CRUD operations
exports.createProduct = module.exports.createProduct = function createProduct(){
    console.log("Product created!");
}
exports.updateProduct = module.exports.updateProduct = function updateProduct(){
    console.log("Product updated!");
}
exports.listProducts = module.exports.listProducts = function listProducts(){
    console.log("Products listed!");
}
exports.getProduct = module.exports.getProduct = function getProduct(){
    console.log("Product selected!");
}
exports.deleteProduct = module.exports.deleteProduct = function deleteProduct(){
    console.log("Product deleted!");
}