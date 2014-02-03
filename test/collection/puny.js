'use strict';
var puny = require('puny')({});

var db;


exports.getCollection = function (cb) {
    db = new puny.Db('data');
    var collection = db.collection('stuff');

    // clean test db before starting
    db.dropDatabase(function () {
        cb(null, collection);
    });
};


exports.dropCollection = function (cb) {
    db.dropDatabase(function () {
        db.close(cb);
    });
};
