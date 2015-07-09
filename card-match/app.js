// array of strings that are all of our suits - var cards = ['heart', 'spade', 'club']
//find a function that will randomize array, when page loads you have variable eual to all variables in array
//loop through array (fn())
//add a class to variable
//createelement inner html
//create and element that is a div (

var cards = ['spade', 'heart', 'club', 'diamond']

cards.forEach(function(suit){
var card = document.createelement('div');
card.classList.add('card');
card.classList.add(suit)
innerHTML ='<div class="front"><div class="suit"></div></div><div class="back"></div></div>'
});
