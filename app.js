/**
 * Created by giuliamattia on 2017-01-20.
 */

var express = require('express');
var app = express();

app.use(express.static('docs'));

app.get('/', function(req, res) {
    res.sendFile('index');
});

app.listen(3000, function () {
    console.log('App is running on port 3000!')
});
