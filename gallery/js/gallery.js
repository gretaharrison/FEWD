//Define prototypical Gallery function
Element.prototype.Gallery = function(){
  var gallery = this;
  var ul = gallery.children[0];
  var photos = {};
  // {}; means "empty object"
  // Define global variables

  this.singlePhoto = function(ev){
    console.log(ev);
  };


  this.layoutPhotos = function(){
      // add logic for each photo in here

      photos.forEach(function(photo, index){

        console.log(photo);
        var li = document.createElement('li');

        li.style.backgroundImage = 'url("'+photo.image_url+'")';
        li.style.backgroundSize = 'cover';

        li.innerHTML = '<div class="meta"><h5>'+
        photo.name+
        '</h5><h6>'+
        photo.user.fullname+
        '</h6></div><div class="stats"><div>'+
        photo.rating+'</div></div>'+
        '</div>';

        li.addEventListener('click', function()
        {

          li.innerHTML = '<div class="single-photo"></div>';
          li.style.single-photo;
          li.style.width = '100%';
          li.style.backgroundSize = 'cover';



        });

        ul.appendChild(li);

      });

  };

  this.singlePhoto = function(){
    // link to single photo css using innerHTML

  };




  this.connect = function(){
      var xhr = new XMLHttpRequest();
      xhr.open("GET", "./models/popular-photos.json", true);
      xhr.setRequestHeader("Content-Type", "application/json");

      xhr.onreadystatechange = function() {
        if (xhr.readyState == 4) {
          var response = JSON.parse(xhr.responseText);
          photos = response.photos;
          gallery.layoutPhotos();

          // JSON.parse does not evaluate the attacker's scripts via xhr.responseText.

        }
      }
      xhr.send();
  };

  this.init = function(){

    this.connect();

  };


  this.init(); // do tasks on initialization.


};
/* end Gallery */
