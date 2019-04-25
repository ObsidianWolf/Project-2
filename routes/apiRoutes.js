var db = require("../models");

module.exports = function(app) {
  // Get all Movie
  app.get("/api/movie", function(req, res) {
    console.log(req);
    Model.findAll({
      where:{title: req}
    });
  });

  // Create a new Movie
  app.post("/api/movie", function(req, res) {
    db.Movie.create(req.body).then(function(dbMovie) {
      res.json(dbMovie);
    });
  });

  // Delete an Movie by id
  app.delete("/api/movie/:id", function(req, res) {
    db.Movie.destroy({ where: { id: req.params.id } }).then(function(dbMovie) {
      res.json(dbMovie);
    });
  });
};
