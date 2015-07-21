var dealButton = document.getElementById("cards"); //gets the deal button

dealButton.onclick = function(){
  //gets the container div
  var cardContainer = document.getElementById('container'); 
  //clears the innerHTML
  cardContainer.innerHTML = ""; 
  displayCards();
  //gets body tag
  var body = document.getElementsByTagName('body')[0];
  //create redeal button
  var redealButton = document.createElement('button');
  redealButton.id = 'redeal';
  redealButton.innerHTML = 'Redeal!';
  //remove deal button
  body.removeChild(dealButton);
  //insert redeal button
  body.insertBefore(redealButton,cardContainer);
  //add redeal button click function
  redealButton.onclick = function(){
    cardContainer.innerHTML = ""; //clears the innerHTML
    displayCards();
  };
  //creates reset button
  var resetButton = document.createElement('button');
  resetButton.id = 'reset';
  resetButton.innerHTML= 'Reset!';
  //inserts reset button
  body.insertBefore(resetButton,cardContainer);
  //add resetButton click function
  resetButton.onclick = function(){
    cardContainer.innerHTML = "";
    body.removeChild(resetButton);
    body.removeChild(redealButton);
    body.insertBefore(dealButton,cardContainer);
  };
};

function displayCards(){
  var deck = newDeck();
  var shuffledCards = shuffleCards(deck);

  for(var i=0; i < deck.length; i++){
    var card = document.createElement('div');//<div class = 'card'></div>
    card.className = "card";
    var cardContainer = document.getElementById('container');
    cardContainer.appendChild(card);
    card.style.backgroundImage = "url(images/" + shuffledCards[i].suit + "-" + shuffledCards[i].card + ".png" + ")";
  }
}

// Creates a deck of 52 cards
function newDeck(){

  var ranks = [
    {card:"a"},
    {card:"2"},
    {card:"3"},
    {card:"4"},
    {card:"5"},
    {card:"6"},
    {card:"7"},
    {card:"8"},
    {card:"9"},
    {card:"10"},
    {card:"j"},
    {card:"q"},
    {card:"k"}
  ];

  var suits = [ "d", "c", "s", "h"];
  var deck = [];

  for (var i=0;i<suits.length;i++){
    for (var k=0;k<ranks.length;k++){
      var obj = {
        card: ranks[k].card,
        suit: suits[i]
      };
      deck.push(obj);
    }
  }
  return deck;
}

// Shuffles the Deck
function shuffleCards(cardDeck){
  var tempDeck = cardDeck.slice();
  var shuffledDeck = [];

  while(tempDeck.length>0){
    var index = Math.floor(Math.random()*tempDeck.length);
    var card = tempDeck.splice(index,1)[0];
    shuffledDeck.push(card);
  }
  return shuffledDeck;
}
