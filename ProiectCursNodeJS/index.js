"use strictly";

var express=require('express');
var mongo = require('mongo');
var uuid = require('uuid/v4');

//Create an instance of a Mongo Client
var mongoClient = mongo.MongoClient;

//Config through module
var config = require('./Modules/config');
var mongoUrl=config.mongoUrl;

//pass the mongo client & url to products
var mProducts = require('./Modules/products.js');
mProducts.config.mongoClient = mongoClient;
mProducts.config.mongoUrl = mongoUrl;

var app = express();

var bodyParser = require('body-parser');

//parse application
app.use(bodyParser.urlencoded({extended: false}));

//parse application json
app.use(bodyParser.json());

//products related request
{
    //create - put
    app.put('/products', function(req, res){
        var productRecord = req.body;
        productRecord.id = uuid();

        //load it to mongoDB
        var mongoDb = null;

        mongoClient.connect(mongoUrl)
            .then(function(db){
                mongoDb = db;
                var query = {};
                return db.collection("products").insertOne(productRecord);
            })
            .then(function(resultObject){
                res.json(resultObject);
            })
            .then(function(){
                //close the connection to the database
                mongoDb.close();
                res.end();
            })
    });

    //update - post
    app.post('/products', function(req, res){
        res.end();
    });
    
    //select - get
    app.get('/products', function(req, res){
        var mongoDb = null;

        mongoClient.connect(mongoUrl)
            .then(function(db){
                mongoDb = db;
                var query = {};
                return db.collection('products').find(query).toArray();
            })
            .then(function(resultObject){
                res.json(resultObject);
            })
            .then(function(){
                mongoDb.close();
                res.end();
            });
    });

    //delete - delete
    app.delete('/products', function(req, res){
        res.end();
    });
}

app.listen(3000, function(){
    console.log('Mongo Rest API listening on port 3000!');
});