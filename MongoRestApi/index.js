"use strict";
const express = require('express');
const mongo = require('mongodb');
const uuid = require('uuid/v4');

var mProducts = require('./modules/products');
mProducts.config.mongoClient=mongoClient;
mProducts.config.mongoURL = mongoURL;

var mOrders = require('./modules/orders');
mOrders.config.mongoClient=mongoClient;
mOrders.config.mongoURL = mongoURL;

var MongoClient = mongo.MongoClient;
var mongoURL = "mongodb://<dbuser>:<dbpassword>@ds123933.mlab.com:23933/trainingnodejs";




const app = express();

//products related request
{
    //create
    app.put("/products", function (req, res) {
        res.end();
    });

    //update
    app.post("/products", function (req, res) {
        res.end();
    });

    //get list
    app.get("/products", function (req, res) {

        var products=mProducts.listProducts();
        res.writeHead(200, {'Content-type':'application/json'});

        res.end();
    });

    //delete
    app.delete("/products", function (req, res) {
        res.end();
    });
}
//orders related request
{
    //create
    app.put("/orders", function (req, res) {
        res.end();
    });

    //update
    app.post("/orders", function (req, res) {
        res.end();
    });

    //get list
    app.get("/orders", function (req, res) {
        res.end();
    });

    //delete
    app.delete("/orders", function (req, res) {
        res.end();
    });
}
app.listen(3000, function () {
    console.log("MongoDB application is listening to port 30000");
});



console.log("This is the application with MongoDB!")