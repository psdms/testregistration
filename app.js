//тестовое приложение на express.

var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var app = express();

var jwt = require('jsonwebtoken');

//template engine Handlebars
app.set("view engine", "hbs");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Define the port to run on
app.set('port', 3000);
app.use(express.static(path.join(__dirname)));


//----------------------------------------------------
var mongoose = require('mongoose');
var db = mongoose.connection;
mongoose.connect('mongodb://localhost/users');

db.on('error', console.error);
db.once("open", function callback () {
    console.log("Connected!")
});

var collect_users = db.collection('newusers');
var schema = mongoose.Schema({
    email: String,
    pass: String
});
var newUser = mongoose.model('newusers', schema);


//create token collection
var collect_token = db.collection('tokens');
var schematoken = mongoose.Schema({
    email: String,
    id: String
});
var newToken = mongoose.model('tokens', schematoken);


//----------------------------------------------------
app.get('/login',function(req,res){
    console.log('giigigigigig');
    console.log('************');
    res.render("index.hbs",{
        success_reg: ' success registration!',
        notification: ' ALL OK'
    });
});
//*********************************************
app.get('/signup',function(req,res){
    console.log('signup');
    console.log('******');
    res.sendFile(__dirname + '/signup.html');
});
//POST query
app.post('/SignUpEnter',function(req,res){
    var user_name = req.body.user;
    var password  = req.body.password;

    var nnewUser = new newUser({
        email: user_name,
        pass : password
    });

    collect_users.findOne({ 'email' : user_name }, function(err, result){ //urls - это сама база с данными.
        if (err) {
            res.json(err);
            console.log('error' + err);
        }
        else{
            if( result ){
                res.end("ml_use");
            }else{
                nnewUser.save(function (err) {
                    if (err)
                        throw err;
                });

                console.log("User name = "+user_name+", password is "+password);
                res.end("yes");
            }
        }
    });
});
//*********************************************
app.get('/signin',function(req,res){
    console.log('signin');
    console.log('------');
    res.sendFile(__dirname + '/signin.html');
});

app.post('/SignInEnter',function(req,res){
    var user_name_in = req.body.user;
    var password_in  = req.body.password;
    console.log("User name = "+user_name_in+", password is "+password_in);

    collect_users.findOne({ 'email' : user_name_in }, function(err, result){ //urls - это сама база с данными.
        if (err) {
            res.json(err);
            console.log('error' + err);
        }
        else{
            if( result ) { //If there are entries
                if (result["pass"] == password_in) {
                    res.end("yes");
                    console.log(result['pass']);
                }
                else { //If there are entries, but there is no such email
                    res.end("no");
                }
            }
            else{
                //No user with such an email
                res.end("nouser");
            }
        }
    });

});
//*********************************************
app.get('/work',function(req,res){
    console.log('wprk');
    console.log('------');

    //db.close();
    res.sendFile(__dirname + '/work.html');
})


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
