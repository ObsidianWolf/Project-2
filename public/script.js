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

// Creat an onclick function for the id "submitMovie", have that go to the API endpoint /api/movie
$("#myForm").on("submit", function (event) {
  // You can't press enter or it refreshes the page. Clicking on the button prevents default.
  event.preventDefault();
  // Send the PUT request.
  $.ajax({
    url: "/api/movie",
    method: "POST",
    data: {
      search: $("#movieToSearchFor").val()
    }
  }).then(function (res) {
    // console.log(res);
     displayMovie(res); // You need to make this function
    // Go look at the API class activities that call OMDB
    // Dynamically generate a page that displays the movie info    
  });

  console.log("Search button clicked and executed");
});

// $.ajax(settings).done(function (response) {
//   console.log(response);

//   var movie = response.movie[0];
//   var title = movie.title;
//   var poster = movie.poster;
//   var year = movie.year;


function displayMovie(res) {
  var title = res.Title;
  var poster = res.Poster;
  var year = res.Year;

  console.log(title);
  console.log(poster);
  console.log(year);

}

// });

