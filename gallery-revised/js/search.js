Element.prototype.Search = function () {

  var search = this,
  searchInput = document.getElementById('search-container');
  var gallery = document.getElementById('gallery');

  // gallery.getFilteredLis() // this is how to access gallery.js functions
  //when the user focuses (clicks on) on the input, clear its conents

  gallery.getFilteredPhotos = function () {

    searchInput.addEventListener('click', function(ev) {
      if(ev.keyCode == 13) {
        input = document.getElementById("search-container").value;

      }
    });

  };

//after the user presses enter/return, filter the gallery <li> using tags from the JSON model

this.connect = function () {
  var xhr = new XMLHttpRequest();
  xhr.open("GET", "./models/popular-photos.json", true);
  xhr.setRequestHeader("Content-Type", "application/json");

  xhr.onreadystatechange = function () {
    if (xhr.readystate == 4) {
      var response = JSON.parse(xhr.responseText);
      photos = response.photos;
      gallery.getFilteredPhotos();
    }
  }
  xhr.send();
  };
};
