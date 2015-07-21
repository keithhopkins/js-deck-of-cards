if(!localStorage.getItem('deck')){
  localStorage.setItem('deck',JSON.stringify(newDeck()));
}
//gets the deal button
var dealButton = document.getElementById("cards");
//gets cardContainer
var cardContainer = document.getElementById('container');
//create input for number of cards to display
var numCardsInput = document.createElement('input');
numCardsInput.type = 'text';
document.body.insertBefore(numCardsInput,dealButton);
//create redealbutton
var redealButton = document.createElement('button');
redealButton.id = 'redeal';
redealButton.innerHTML = 'Redeal!';
//create reset button
var resetButton = document.createElement('button');
resetButton.id = 'reset';
resetButton.innerHTML = 'Reset!';

var numCards;
dealButton.onclick = function(){
  numCards=Number(numCardsInput.value);
  //remove deal button
  document.body.removeChild(dealButton);
  //remove numCards input
  document.body.removeChild(numCardsInput);
  //add redeal button
  document.body.insertBefore(redealButton,cardContainer);
  //add reset button
  document.body.insertBefore(resetButton,cardContainer);
  cardContainer.innerHTML='';
  displayCards(numCards);
};

redealButton.onclick = function(){
  cardContainer.innerHTML='';
  displayCards(numCards);
};

resetButton.onclick = function(){
  document.body.removeChild(redealButton);
  document.body.removeChild(resetButton);
  document.body.insertBefore(numCardsInput,cardContainer);
  document.body.insertBefore(dealButton,cardContainer);
  cardContainer.innerHTML='';
};

function displayCards(numCards){
  var deck = JSON.parse(localStorage.getItem('deck'));
  var shuffledCards = shuffleCards(deck);

  for(var i=0; i < numCards; i++){
    var card = document.createElement('div');
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
  console.log(tempDeck);
  while(tempDeck.length>0){
    var index = Math.floor(Math.random()*tempDeck.length);
    var card = tempDeck.splice(index,1)[0];
    shuffledDeck.push(card);
  }
  return shuffledDeck;
}
