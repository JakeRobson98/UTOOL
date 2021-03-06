var db = require("../models");
var passport = require("../config/passport");

var express = require('express');
var router = express.Router();
var jwt = require('jsonwebtoken');

router.post("/register", function (req, res) {
  db.user.create({
    email: req.body.email,
    password: req.body.password,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    // dateofbirth: req.body.firstName
  }).then(function () {
    res.json({ message: 'please login' });
  }).catch(function (err) {
    console.log(err);
    console.log(res);
    res.json(err);
  });
});

router.post("/items", function (req, res) {
  console.log(req.body)
  db.item.create({
    Title: req.body.Title,
    Description: req.body.Description,
    address: req.body.address,
    price: req.body.price
  }).then(function () {
    res.json({ message: 'item created' });
  }).catch(function (err) {
    // console.log(err);
    // console.log(res);
    res.json(err);
  });
});

router.get("/items", function (req, res) {
  console.log(req.body)
  db.item.findAll().then(function (items) {
    res.json({ items: items })
  }).catch(function (err) {
    console.log(err);
    // console.log(res);
    res.json(err);
  });
});

router.get("/userItems", function (req, res) {
  console.log('Fetching users items');
  db.item.findAll({
    where: {
      ownerId: 1
    }
  }).then(function (items) {
    res.json({ items: items })
  }).catch(function (err) {
    res.json(err)
  })
});



router.post("/login", async (req, res, next) => {
  // console.log(req)
  user = req.body;
  console.log(user.email + user.password + " USER ");
  passport.authenticate('localLogin', async (err, user, info) => {
    try {
      if (err || !user) {
        const error = new Error('An Error occured logging in');
        return next(error);
      }
      req.login(user, { session: false }, async (error) => {
        if (error) return next(error);

        //We don't want to store the sensitive information such as the
        //user password in the token so we pick only the email and id
        const body = { email: user.email };
        //Sign the JWT token and populate the payload with the user email and id
        const token = jwt.sign({ user: body }, 'top_secret');
        //Send back the token to the user
        
        return res.json({ token: token, message: 200 });
      })
    } catch (error) {
      return next(error);
    }
  })(req, res, next);
});

module.exports = router;