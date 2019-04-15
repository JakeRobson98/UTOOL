var Sequelize = require('sequelize/types');

var env       = process.env.NODE_ENV || 'development';
var config    = require('../config.json')[env];
var db        = {};


// if (config.use_env_variable) {
 if (config.use_env_variable) {
  var sequelize = new Sequelize(process.env[config.use_env_variable]);
} else {
  var sequelize = new Sequelize(config.database, config.username, config.password, config);
}

// } else {
//  var sequelize = new Sequelize(config.database, config.username, config.password, config);
// }

db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.user = require('./user')(sequelize, Sequelize);
db.item = require('./items')(sequelize, Sequelize);


module.exports = db;