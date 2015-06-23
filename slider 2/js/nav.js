Element.prototype.nav = function() {
// put logic for opening and closing nav in here.
  var nav = this,
  position = 0,
  width = window.innerWidth,
  navBtn = document.createElement('div'),
  container = document.getElementById('container');
  container.style.marginLeft = "0px";



  this.createButtons = function(){

    navBtn.classList.add('hamburger');
    container.insertBefore(navBtn, document.getElementById('slider'));
    navBtn.addEventListener('mousedown', function(){

  if(container.style.marginLeft === "0px"){
      container.style.marginLeft = (window.innerWidth * 0.2) + "px";
    }

  else{
      container.style.marginLeft = "0px";
    }

    });

  };


  this.init = function() {
    this.createButtons();
  };

  this.init();

};
