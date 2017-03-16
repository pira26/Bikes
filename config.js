const dotenv = require('dotenv').config()

module.exports = {
  "port": process.env.PORT || 8000,	
  "dbUrl": `mongodb://${process.env.USER_KEY}:${process.env.PASSWORD_KEY}@ds123080.mlab.com:23080/bikes`,
  "jwtSecret": "a secret phrase !"
}

//console.log(process.env.USER_KEY);
//console.log(process.env.PASSWORD_KEY);
