var db = require("../models");
var axios = require("axios");

module.exports = function(app) {
  // Get all Movie
  app.get("/api/movie", function(req, res) {
    console.log(req);
    Model.findAll({
      where:{movie_name: req.body.search}
    });
  });

  // Create a new Movie
  app.post("/api/movie", function(req, res) {
    // AJAX request to movie API
    var search = req.body.search;
    axios.get( "https://www.omdbapi.com/?t="+ search +"&y=&plot=short&apikey=trilogy")
  .then(function(result) {
      console.log(result.data);
      res.send(result.data);
    });
    // Create a movie object based on the response of the movie api
    // movie name, movie poster, movie year
    // db.Movie.create(req.body).then(function(dbMovie) {
    //   res.json(dbMovie);
    // });
  });

  // Delete an Movie by id
  app.delete("/api/movie/:id", function(req, res) {
    db.Movie.destroy({ where: { id: req.params.id } }).then(function(dbMovie) {
      res.json(dbMovie);
    });
  });
};
