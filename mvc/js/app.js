
//takes an argument which is user and going to set it as a property on user called model.
//each time we loop through the code we want to push a new user into the controller array
//this is the model
var User = function(user) {
  this.model = user;
};

//our constructor function for each view
//constructing a new instance of a view
var View = function(elem, parent, className) {
  var self = this;
  this.element = document.createElement(elem);
  this.element.classList.add(className);
  parent.appendChild(self.element);
};

View.prototype = {
  setContent : function(content) { //property on an object
    this.element.innerHTML = content; //the argument that is being passed through method on prototype
  },
  fadeViewIn: function(){
    var self = this;
    setTimeout(function(){
      self.element.classList.add('active');
    },1000); //1000 milliseconds equals 1 second.

  }
};

//create a controller - that communicated the model to the view. Controller serves as the constructor/class. where the majority of our logic is.
var Controller = function() {
  this.model = [];
};

//prototype are always equal to an objects with a method on them
//this houses all the methods that actually make the controller useful
//use controller to feth users from JSON and then parse them into JS code get them using HTTPrequest
Controller.prototype = {
  createView: function(){ //delivers model to the view
    this.model.forEach(function(user){ //creating a new view each time object runs
      var v = new View('div', document.getElementById('container'), 'user');
      v.setContent('<h3>'+user.model.name+'</h3><h5>'+user.model.age+'</h5><h5>'+user.model.occupation+'</h5>'); //sets inner html, as we are looping through all the users in model
      v.fadeViewIn();
    });
  },
  fetchUsers: function() {
    var self = this; //the context we want to work with in
    var xhr = new XMLHttpRequest();
    xhr.open('GET', './model/users.json'); //opens the request only
    xhr.setRequestHeader('Content-Type', 'application/json'); //sets the type of contect you want to receive (knows to expect json)
    xhr.onreadystatechange = function(){ //this is what is waiting for the the state change to signal the request
      if(xhr.readyState === 4){
        //parse our JSON
        console.log(xhr.responseText);
        var model = JSON.parse(xhr.responseText); //parsing json into a JS object - turns the raw text from json into a usable JS object
        model.users.forEach(function(user){
          self.model.push(new User(user)); //creating an instance of the user class
        }); //object has a users property already
        self.createView();

      }
    };

    xhr.send(); //actually makes the request.
  }
};

//the new keyword makes a new instance of that Controller class
//every instance is seperate from every other instance
var appController = new Controller();
appController.fetchUsers(); //how we call the fetchUsers function above
