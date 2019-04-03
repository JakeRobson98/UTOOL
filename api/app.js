require('dotenv').config()

const express     = require('express');
var session       = require("express-session");

var PORT          = process.env.PORT || 8080;

const bodyParser  = require('body-parser');
var jwt           = require('jsonwebtoken');
var router        = express.Router();

const app         = express();
// const connection  = require('./database');
var db            = require("./models");
var passport      = require("./config/passport");

app.use(function(req, res, next) {
 res.header("Access-Control-Allow-Origin", "*");
 res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
 next();
});

app.use(bodyParser.urlencoded({ extended: true, limit: '10MB',  parameterLimit: 1000000 }));
app.use(bodyParser.json({ limit: '10MB', extended: true }));
app.use(express.static('public'));

app.use(session({ 
 secret: "keyboard cat", 
 resave: true, 
 saveUninitialized: true,
}));

app.use(passport.initialize());
app.use(passport.session());

// app.route('/')
//   .get(function(req, res, next) {
//     connection.query(
//       "SELECT * FROM `ITEMS`", req.params.userId,
//       function(error, results, fields) {
//         if (error) throw error;
//         res.json(results);
//       }
//     );
//   });

// app.route('/getItems')
//   .get(function(req, res, next) {
//    connection.query(
//     "SELECT * FROM `ITEMS`",
//     function(err, results, fields){
//      if(err) throw err;
//      res.json(results);
//     }
//    )
// });

// router.post('/login', async (req, res, next) => {
//  passport.authenticate('local', async (err, user, info) => {  
//    try {
//      if(err || !user){
//        const error = new Error('An Error occured')
//        return next(error);
//      }
//      req.login(user, { session : false }, async (error) => {
//        if( error ) return next(error)
//        //We don't want to store the sensitive information such as the
//        //user password in the token so we pick only the email and id
//        const body = { _id : user.user_id};
//        //Sign the JWT token and populate the payload with the user email and id
//        const token = jwt.sign({ user : body },'top_secret');
//        //Send back the token to the user
//        return res.json({ token: token, message: 200 });
//      });   
//    } catch (error) {
//      return next(error);
//    }
//  })(req, res, next);
// });

var main_routes = require('./routes/main_routes.js');
app.use('/main', main_routes);

app.get('/status', (req, res) => res.send('Working!'));

// Port 8080 for Google App Engine
db.sequelize.sync().then(() => {
 app.listen(PORT, () => {
   console.log("==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.", PORT, PORT);
 });
}) .catch(err => {
 console.log("Error listening to port");
});;

