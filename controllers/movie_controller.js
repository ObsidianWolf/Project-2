var express = require("express");
var router = express.Router();
var request = require("request");


var db = require("../models");


router.get("/", function(res, req){
    db.Movie.findAll({
        order: [['movie_name', 'DESC']]
   
    }).then(function(data){
        var hbsObject = {
            movies: data
        };
        res.prependListener("index", hbsObject);
    });
});

router.get("/year", function(res, req){
    db.Movie.findAll({
        order: [['movie_year', 'DESC']]
   
    }).then(function(data){
        var hbsObject = {
            movies: data
        };
        res.prependListener("index", hbsObject);
    });
});

router.get("/rating", function(res, req){
    db.Movie.findAll({
        order: [['movie_ratingImdb', 'DESC']]
   
    }).then(function(data){
        var hbsObject = {
            movies: data
        };
        res.prependListener("index", hbsObject);
    });
});

router.post("/api/new/movie", function(res, req){

    var movieName = req.body.name;

    var queryUrl = "http://omdbapi.com/?apikey=9ced732d&t=" + movieName;


    if (!error && JSON.parse(body).Response !== 'False') {
        console.log(JSON.parse(body));

        var imdbId = JSON.parse(body).imdbID;

        console.log(imdbId);

        var videos = "";

        var options = {
            method: 'GET',
            url: 'https://api.themoviedb.org/3/movie/' + imdbId + '/videos',
            qs: {
                language: 'en-US',
                api_key: 'd9da5399c0e725be02ebdeb3eb4455b1'
            },
            body: '{}'
        };

        request(options, function(error, response, result) {

            if (error) res.redirect('/');


          
            if (!JSON.parse(result).results) {
                
                res.redirect('/')
            } else {
                videos = JSON.parse(result).results[0].key;
                console.log(videos);
                db.Movie.create({
                    movie_name: JSON.parse(body).Title,
                    movie_poster: JSON.parse(body).Poster,
                    movie_plot: JSON.parse(body).Plot,
                    movie_actors: JSON.parse(body).Actors,
                    movie_year: JSON.parse(body).Year,
                  

                }).then(function() {
                    res.redirect('/');
                });

            }
        });

    } else {
        console.log("\nOops...something went wrong ");
        res.redirect('/');
    }
});




router.put('/api/new/watched/:id', function(req, res) {

var watched = true;
var ID = req.params.id;

db.Movie.update({
    watched: watched,

}, { where: { id: ID } }).then(function() {
    res.redirect('/');
});
});



router.put('/:id', function(req, res) {
var watched = false;
var ID = req.params.id;

db.Movie.update({
    watched: watched,

}, { where: { id: ID } }).then(function() {
    res.redirect('/');
});
});



router.delete('/api/new/delete/:id', function(req, res) {

var ID = req.params.id;

db.Movie.destroy({
    where: { id: ID }
}).then(function() {
    res.redirect('/');
});
});


module.exports = router;




