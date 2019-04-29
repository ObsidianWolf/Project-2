var db = require("../models");

module.exports = function(app) {
  // Get all Movie
  app.get("/api/Movie", function(req, res) {
    Model.findAll({
      attributes: ['', '']
    });
  });

  // Create a new Movie
  app.post("/api/Movie", function(req, res) {
    db.Movie.create(req.body).then(function(dbMovie) {
      res.json(dbMovie);
    });
  });

  // Delete an Movie by id
  app.delete("/api/Movie/:id", function(req, res) {
    db.Movie.destroy({ where: { id: req.params.id } }).then(function(dbMovie) {
      res.json(dbMovie);
    });
  });
};