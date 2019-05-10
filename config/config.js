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
              "use_env_variable": "JAWSDB_URL",
              "dialect": "mysql"
            }
          }
        
        
        