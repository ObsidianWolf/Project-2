var express = require('express');
var path = require('path');
var exphbs = require('express-handlebars');
var bodyParser = require('body-parser');
var db = require("./models");
var app= express();
app.use(express.static("public"));
var PORT = process.env.PORT || 8080;

app.engine(
    "handlebars",
    exphbs({
      defaultLayout: "main"
    })
  );
  app.set("view engine", "handlebars");

require("./routes/apiRoutes.js")(app);
require("./routes/htmlRoutes.js")(app);
  

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

var routes = require('./controllers/movie_controller.js');
app.use('/', routes);


db.sequelize.sync().then(function() {
    app.listen(PORT, function() {
        console.log('listening on port ' + PORT);
    });
});




