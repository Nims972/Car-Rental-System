var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
const mysql = require('mysql');
var app=express();
app.use(express.urlencoded())


/* GET home page. */

const con = mysql.createConnection({
    host: 'localhost',
    port: '3306',
    user: 'root',
    password: 'nims',
    database: 'testing'
});
con.connect((err) => {
    if(err){
        console.log('Error connecting to Db');
        return;
    }
    console.log('Connection established');
});

router.get('/', function(req, res, next) {
    const email = req.body.email;
    console.log(email);
    con.query('SELECT * FROM caruser where email is "abc@gmail.com" ', (err,rows) => {
        if(err) throw err;
        console.log('Data received from Db:\n');
        console.log(rows);
    });
    res.render('pages/login', { title: 'Express' });

});

module.exports = router;
