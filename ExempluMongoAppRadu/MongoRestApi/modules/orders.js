exports.config = module.exports.config = {
    mongoClient : null,
    mongoUrl : ""
};

exports.createOrder = module.exports.createOrder = function createOrder(){
    console.log("Orders createOrder");
};

exports.updateOrder = module.exports.updateOrder = function updateOrder(){
    console.log("Orders updateOrder");
};

exports.listOrders = module.exports.listOrders = function listOrders(){
    console.log("Orders listOrders");
};

exports.getOrder = module.exports.getOrder = function getOrder(){
    console.log("Orders getOrder");
};

exports.deleteOrder = module.exports.deleteOrder = function deleteOrder(){
    console.log("Orders deleteOrder");
};