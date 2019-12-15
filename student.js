var express = require('express');
var router = express.Router();
var mysql = require('mysql');

router.get('/', function (req, res, next) {
    var con = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "",
        database: "attendance"
    });

    con.connect(function(err) {
        if (err) throw err;
        console.log("Connected!");
    });
});
express.listen(3000);