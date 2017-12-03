"use strict";

var express = require('express');
var mongo = require('mongodb');
var uuid = require('uuid/v4');

// mongo Client instance
var mongoClient = mongo.MongoClient;

// config via module
var config = require("./modules/config");
var mongoUrl = config.mongoUrl;

// pass the mongo client & url to products
var mProducts = require('./modules/products');
mProducts.config.mongoClient = mongoClient;
mProducts.config.mongoUrl = mongoUrl;

// pass the mongo client & url to orders
var mOrders = require('./modules/orders');
mOrders.config.mongoClient = mongoClient;
mOrders.config.mongoUrl = mongoUrl;

var app = express();

var bodyParser = require('body-parser');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

// products related requests
{
    // create
    app.put('/products', function (req, res) {
        
        var productRecord = req.body;
        productRecord.id = uuid();

        var mongoDb = null;
        mongoClient.connect(mongoUrl)
            .then(function (db) {
                mongoDb = db;
                // var query = { name : "Product 0"}; // no results
                var query = {}; // all results
                return db.collection("products").insertOne(productRecord);
            })
            .then(
                function (resultObject) {
                    res.json(resultObject);
                })
            .then(function () {
                // close
                mongoDb.close();
                res.end();
            })
    });

    // update
    app.post('/products', function (req, res) {
        res.end();
    });

    // get list
    app.get('/products', function (req, res) {

        var mongoDb = null;
        mongoClient.connect(mongoUrl)
            .then(function (db) {
                mongoDb = db;
                // var query = { name : "Product 0"}; // no results
                var query = {}; // all results
                return db.collection("products").find(query).toArray();
            })
            .then(
                function (resultObject) {
                    res.json(resultObject);
                })
            .then(function () {
                // close
                mongoDb.close();
                res.end();
            });
    });

    // delete
    app.delete('/products', function (req, res) {
        res.end();
    });
}

// orders related requests
{
    // create
    app.put('/orders', function (req, res) {
        res.end();
    });

    // update
    app.post('/orders', function (req, res) {
        res.end();
    });

    //get list
    app.get('/orders', function (req, res) {
        res.end();
    });

    // delete
    app.delete('/orders', function (req, res) {
        res.end();
    });
}

// app start listen
app.listen(3000, function () {
    console.log('Mongo Rest API listening on port 3000!');
});