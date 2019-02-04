'use strict';

const express = require('express');
const app = express();

const bodyparser = require('body-parser');
app.use(bodyparser.urlencoded({extended : true}));

app.set('view engine', 'ejs')
app.use(express.static('public'));

const mysql = require('mysql');
const connectionString = 'mysql://root:password@localhost/sampleDB?charset=utf8_general_ci&timezone=-0700';
const connection = mysql.createConnection(connectionString);

let response;

connection.connect(function(error)
{
    if(error){
        console.log(error.code);
        console.log(error.fatal);
    }
});

connection.query('SELECT * from sample_table', function(err, rows) {
    if (err) {
        console.log(err.code);
        return;
    }

    response = {
        number: rows[0],
        name: rows[1],
        country: rows[2],
        dob: rows[3],
    }

    console.log("Query successfully executed...");
});

app.get('/', function(req, res)
{
    //res.send(response);
    res.render('view', {data: response});
});

app.listen(3000, function ()
{
    console.log("App listening at port 3000...")
});

connection.end(function(){});
