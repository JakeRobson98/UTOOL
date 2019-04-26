var db = require("../models");
var passport = require("../config/passport");

var express = require('express');
var router = express.Router();

router.get('/userInfo', (req, res) => {
    res.json({message: req.user});
});

module.exports = router;