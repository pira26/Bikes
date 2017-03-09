require('dotenv').config()

module.exports = {
  "port": process.env.PORT || 4000,	
  "dbUri": `mongodb://${process.env.USER_KEY}:${process.env.PASSWORD_KEY}@ds123080.mlab.com:23080/bikes`,
  "jwtSecret": "a secret phrase !"
}