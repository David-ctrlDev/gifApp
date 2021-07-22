var express = require('express');
var app = express();

app.get('/', function prueba(req, res) {
    var respuesta = " "
    var sql = require("mssql");

    // config for your database
    var config = {
        user: 'usr_sdkMVTEL',
        password: 'usr_sdkMVTEL',
        server: 'mvtelsrv06',
        database: 'MSM_ISA_DLLO',
        options: {
            encrypt: false,
        },
    };


    // connect to your database
    sql.connect(config, function(err) {

        if (err) console.log(err);

        // create Request object
        var request = new sql.Request();

        // query to the database and get the records
        request.query('select rname from reps where rep_id = 1', function prueba(err, recordset) {

            if (err) console.log(err)

            // send records as a response
            res.send(recordset.recordset[0]);
            respuesta = request.input("prueba", recordset)



        });
    });
    return respuesta
});