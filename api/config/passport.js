var passport      = require("passport");
var LocalStrategy = require("passport-local").Strategy;

var passportJWT   = require("passport-jwt");
var JWTStrategy   = passportJWT.Strategy;
var ExtractJWT    = passportJWT.ExtractJwt;

var db            = require("../models");

passport.use(new LocalStrategy(

  function(username, password, done) {

    var bd = db.user.findOne({
      where: {
       email: username
      }
    }).then(function(dbUser) {
      if (!dbUser) {
        return done(null, false, {
          message: "Incorrect username."
        });
      }
      else if (!dbUser.validPassword(password)) {
        console.log("inccorrect password")
        return done(null, false, {
          message: "Incorrect password."
        });
      }
      return done(null, dbUser);
    });
  }
));


passport.use('localLogin',

  new LocalStrategy(
    function(username, password, done) {

    var dbUser = db.user.findOne({
      where: {
       email: username
      }
    }).then(function(dbUser) {
      if (!dbUser) {
        return done(null, false, {
          message: "Incorrect username."
        });
      }
      else if (!dbUser.validPassword(password)) {
        console.log("inccorrect password")
        return done(null, false, {
          message: "Incorrect password."
        });
      }
      return done(null, dbUser);
    });
  }
));



passport.use(new JWTStrategy({
  secretOrKey : 'top_secret',
  jwtFromRequest : ExtractJWT.fromUrlQueryParameter('secret_token')
}, async (token, done) => {
  try {
    console.log(jwtFromRequest);
    return done(null, token.user);
  } catch (error) {
    done(error);
  }
}));

passport.serializeUser(function(user, cb){
  cb(null, user);
});

passport.deserializeUser(function(obj, cb) {
  cb(null, obj);
});

module.exports = passport;
