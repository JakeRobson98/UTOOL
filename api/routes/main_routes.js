var db        = require("../models");
var passport  = require("../config/passport");

var express   = require('express');
var router    = express.Router();
var jwt       = require('jsonwebtoken');

router.post("/register", function(req, res) {
 console.log(req.body);
 console.log(req);
 db.user.create({
   email: req.body.email,
   password: req.body.password
 }).then(function(){
   res.json({message: 'please login'});
 }).catch(function(err){
   console.log(err);
   console.log(res);
   res.json(err);
 });
});

module.exports = router;