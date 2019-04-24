function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
  document.body.style.backgroundColor = "rgba(73,58,50)";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
  document.body.style.backgroundColor = "rgba(73,58,50)";
}

var settings = {
  "async": true,
  "crossDomain": true,
  "url": "https://api.themoviedb.org/3/find/%7Bexternal_id%7D?external_source=imdb_id&language=en-US&api_key=%3C%3Capi_key%3E%3E",
  "method": "GET",
  "headers": {},
  "data": "{}"
}

$.ajax(settings).done(function (response) {
  console.log(response);
  var movie = response.movie[0];
  var title = movie.title;
  var poster = movie.poster;
  var year = movie.year;


  $("#movie").html(title + '<br>' + poster + '<br>' + year);

});
