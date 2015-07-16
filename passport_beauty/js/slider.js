Element.prototype.Slider = function() {
  // console.log("hello");
var slider = this;

this.closeSlider = function() {
  slider.addEventListener('click', function(){
    slider.style.display = 'none';
  });
}

  this.init = function() {
    slider.className='initial';
    this.closeSlider();
    console.log(this);
  }


  this.init();
}
