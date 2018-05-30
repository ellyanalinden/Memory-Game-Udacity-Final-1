/*
 * Create a list that holds all of your cards
 */
 let cards = ["fa-diamond", "fa-diamond", "fa-paper-plane-o", "fa-paper-plane-o", "fa-anchor", "fa-anchor", "fa-bolt", "fa-bolt", "fa-cube", "fa-cube", "fa-leaf", "fa-leaf", "fa-bicycle", "fa-bicycle", "fa-bomb", "fa-bomb"];
 let cardList = document.querySelectorAll('.card');
 let openCardList = [];
 let cardFlipped = 0;
 let moves = 0;
 let counter = document.querySelector(".moves");
 const deck = document.querySelector(".deck");
 const stars = document.getElementsByClassName("stars").item(0);

/*
 * Display the cards on the page
 *   - shuffle the list of cards using the provided "shuffle" method below
 *   - loop through each card and create its HTML
 *   - add each card's HTML to the page
 */

// Shuffle function from http://stackoverflow.com/a/2450976
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}

function newBoard(){
  // Shuffle cards
  shuffledCards = shuffle(cards);

  for (let i=0; i<cardList.length; i++){
    let deckCard = deck.getElementsByTagName("li");
    let cardClass = deckCard[i].getAttribute("class");
    deckCard[i].className='';
    deckCard[i].classList.add('card');

    let deckSymbol = deck.getElementsByTagName("i");
    let symbolClass = deckSymbol[i].getAttribute("class");
    deckSymbol[i].className='';
    deckSymbol[i].classList.add('fa', shuffledCards[i]);
 };

 //Reset move counter
 moves = 0;
 counter.innerHTML = moves;

 //Reset star ranking
 function myFunction(){
   stars.reset();
 }
}
newBoard();

/*
 * set up the event listener for a card. If a card is clicked:
 *  - display the card's symbol (put this functionality in another function that you call from this one)
 *  - add the card to a *list* of "open" cards (put this functionality in another function that you call from this one)
 *  - if the list already has another card, check to see if the two cards match
 *    + if the cards do match, lock the cards in the open position (put this functionality in another function that you call from this one)
 *    + if the cards do not match, remove the cards from the list and hide the card's symbol (put this functionality in another function that you call from this one)
 *    + increment the move counter and display it on the page (put this functionality in another function that you call from this one)
 *    + if all cards have matched, display a message with the final score (put this functionality in another function that you call from this one)
 */

//Following Mike Wales' youtube, 2018

//Card matching functionality
for (let card of cardList) {
	card.addEventListener('click', function(e){
    if(!card.classList.contains('match') && !card.classList.contains('open') && !card.classList.contains('show')){
      openCardList.push(card);
      card.classList.add('open', 'show');

      	//Match Card
        if(openCardList.length === 2){
           moveCounter();
          if(openCardList[0].innerHTML === openCardList[1].innerHTML){
            openCardList[0].classList.add('match');
  					openCardList[1].classList.add('match');
  					openCardList[0].classList.add('open', 'show');
  					openCardList[1].classList.add('open', 'show');
  					openCardList = [];

          } else {

            //Flip over unmatched Card
            	setTimeout(function(){
                openCardList[0].classList.remove('open', 'show');
                openCardList[1].classList.remove('open', 'show');
                openCardList = [];
              }, 700);
          }
        }
    }
    //Move counter functionality
    function moveCounter(){
      moves++;
      counter.innerHTML = moves;
    }
    //Star ranking based on number of moves
      if(moves === 10){
        stars.removeChild(stars.childNodes[0]);
      }else if(moves === 20){
        stars.removeChild(stars.childNodes[0]);
      }else if(moves === 25){
        stars.removeChild(stars.childNodes[0]);
      }
	});
}
