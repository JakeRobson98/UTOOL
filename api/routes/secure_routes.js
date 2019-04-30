var db = require("../models");
var passport = require("../config/passport");

var express = require('express');
var router = express.Router();

router.get('/userInfo', (req, res) => {
    userEmail = req.user
    console.log(userEmail.email) ;
    db.user.findOne({
        where: {
            email: userEmail.email
        }
        }).then(function (user) {
            console.log({ user: user })
            res.json({ user: user })
        }).catch(function (err) {
            console.log(err)

            res.json(err)
        })
});

module.exports = router;