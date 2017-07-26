"use strict";
const express = require('express');
const mongo = require('mongodb');
const uuid = require('uuid/v4');

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