//тестовое приложение на express.

var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var app = express();

//template engine Handlebars
app.set("view engine", "hbs");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Define the port to run on
app.set('port', 3000);
app.use(express.static(path.join(__dirname)));

app.get('/login',function(req,res){
    console.log('giigigigigig')
    console.log('giigigigigig')
    console.log('giigigigigig')
    console.log('giigigigigig')
    console.log('giigigigigig')
    console.log('giigigigigig')
    console.log('giigigigigig')
    console.log('giigigigigig')
    res.render("index.hbs",{
        success_reg: 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
        notification: 'ALL OK'
    });
    //res.sendfile("index.html");
});

//template engine. render_func()
// app.get('/SignUpOK',function(req,res){
//     res.render( "index.hbs", {
//         success_reg: 'Success registration',
//         notification: 'ALL OK'
//     });
// });


//POST query
app.post('/loginSignUp',function(req,res){
    var user_name = req.body.user;
    var password  = req.body.password;
    console.log("User name = "+user_name+", password is "+password);
    res.end("yes");
});

// Listen for requests
var server = app.listen(app.get('port'), function() {
    var port = server.address().port;
    console.log('Magic happens on port ' + port);
    console.log(__dirname);
});
