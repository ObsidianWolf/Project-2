var db = require("../models");

module.exports = function(app) {
  // Get all examples
  app.get("/api/examples", function(req, res) {
    db.Movie.findAll({}).then(function(Movie) {
      res.json(Movie);
    });
  });

  // Create a new example
  app.post("/api/examples", function(req, res) {
    db.Movie.create(req.body).then(function(Movie) {
      res.json(Movie);
    });
  });

  // Delete an example by id
  app.delete("/api/examples/:id", function(req, res) {
    db.Movie.destroy({ where: { id: req.params.id } }).then(function(Movie) {
      res.json(Movie);
    });
  });
};
