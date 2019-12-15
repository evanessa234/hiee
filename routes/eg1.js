var express = require('express');
var router = express.Router();
var mysql = require('mysql');

var error1 = require('./error1');

/* GET users listing. */
router.get('/', function (req, resp, next) {
    var con = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "",
        database: "attendance"
    });


    con.connect(function (err) {
        if (err) throw err;
        console.log("Connected!");
    });
    let year = req.query.year;
    let batch = req.query.batch;
    let condition = '';
    if (year && batch) {
        condition = `\`year\`='${year}' AND \`batch\`='${batch}'`
    } else if (!batch && year) {
        condition = `\`year\`='${year}'`
    } else if (batch && !year) {
        condition = `\`batch\`='${batch}'`
    } else {
        condition = 1;
    }
    con.query(`select * from \`stu_record\` where ${condition}`, (err, res) => {
        if (err) throw err;
        let test = (res) => {
            if (res.length == 0) {
                throw new error1();

            }
        }

        try {
            test(res);
           
        } catch (err) {
            console.log(err.message);
            resp.send({
                error: err.message,
                name: err.name
            })
        }
    })
});

module.exports = router;