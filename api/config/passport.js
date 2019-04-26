var passport      = require("passport");
var LocalStrategy = require("passport-local").Strategy;

var passportJWT   = require("passport-jwt");
const JWTStrategy   = passportJWT.Strategy;
const ExtractJWT = passportJWT.ExtractJwt;

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



passport.use('jwt', new JWTStrategy({
  jwtFromRequest : ExtractJWT.fromUrlQueryParameter('secret_token'),
  secretOrKey : 'top_secret'
}, async (token, done) => {
  try {
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

// passport.serializeUser(function(user, done) {
//   done(null, user.id);
// });

// passport.deserializeUser(function(id, done) {
// db.user.findById(id).then(user => {
//   done(null, user);
// });
// });

module.exports = passport;
