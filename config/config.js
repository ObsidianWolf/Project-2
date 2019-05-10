// const mysql= require('mysql');
// var connection;

// if (process.env.JAWSDB_URL) {
//   connection = mysql.createConnection(process.env.JAWSDB_URL);
// }else{
//   connection = mysql.createConnection({
//     host:'localhost',
//     user:'root',
//     password:'Root',
//     database:'movies_db'
//   });
// };

// connection.connect();
// module.exports = connection;


module.exports = {
    "development": {
          "username": "root",
          "password": "Root",
          "database": "movies_db",
          "host": "127.0.0.1",
          "dialect": "mysql"
      },
      "test": {
            "username": "root",
            "password": "Root",
            "database": "movies_db",
            "host": "localhost",
            "dialect": "mysql",
            "logging": false
          },
          "production": {
            "username": "t6yhuwvglkki5k4f",
            "password": "z8srcan35ip8xkgg",
            "database": "xm9f1btyvlhyl3mb",
            "host": "jw0ch9vofhcajqg7.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
              "use_env_variable": "mysql://t6yhuwvglkki5k4f:z8srcan35ip8xkgg@jw0ch9vofhcajqg7.cbetxkdyhwsb.us-east-1.rds.amazonaws.com:3306/xm9f1btyvlhyl3mb",
              "dialect": "mysql"
            }
          }
        
        
        