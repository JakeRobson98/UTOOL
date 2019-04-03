var bcrypt = require("bcrypt-nodejs");

module.exports = function(sequelize, DataTypes){
 var user = sequelize.define("user", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false,
    autoIncrement: true,
    unique: true
  },
  firstName:{
    type: DataTypes.INTEGER,
    allowNull: true
  },
  lastName:{
    type: DataTypes.INTEGER,
    allowNull: true
  },
  firstName:{
    type: DataTypes.TEXT,
    allowNull: true
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  },
  dateofbirth:{
    type: DataTypes.DATE,
    allowNull: true
  },
 },
{
  timestamps: false
});

 user.prototype.validPassword = function(password){
  return bcrypt.compareSync(password, this.password);
 };

 user.beforeCreate(function(user, options){
  user.password = bcrypt.hashSync(user.password, bcrypt.genSaltSync(10), null);
 });

 return user;

}