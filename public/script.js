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
$("#submitMovie").on("click", function (event) {
  event.preventDefault();
   // Send the PUT request.
   $.ajax({
    url:"/api/Movie",
    method: "POST",
    data:{
      search: $("#movieToSearchFor").val()
    }
}).then(function (res) {
      console.log("movie information: " + res);
      // Reload the page to get the updated list
      location.reload();
    
});

  console.log("Search button clicked and executed");
});

// $.ajax(settings).done(function (response) {
//   console.log(response);

//   var movie = response.movie[0];
//   var title = movie.title;
//   var poster = movie.poster;
//   var year = movie.year;




// });

