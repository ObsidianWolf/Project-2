var db = require("../models");

module.exports = function (app) {
  // Load index page
  app.get("/", function (req, res) {
    db.movie.findAll({}).then(function (dbMovie) {
      res.render("index", {
        msg: "Welcome!",
        movie: dbMovie
      });
    });
  });

  // Load example page and pass in an example by id
  app.get("/movie/id", function (req, res) {
    db.movie.findOne({ where: { id: req.params.id } }).then(function (dbMovie) {
      res.render("movie", {
        movie: dbMovie
      });
    });
  });

  // Get to the movie page
  app.get("/view", function (req, res) {
      res.render("view")
    });
  

  // Render 404 page for any unmatched routes
  app.get("*", function (req, res) {
    res.render("404");
  });
};