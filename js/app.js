/*
 * Create a list that holds all of your cards
 */
 let cards = ["fa fa-diamond", "fa fa-diamond", "fa fa-paper-plane-o", "fa fa-paper-plane-o", "fa fa-anchor", "fa fa-anchor", "fa fa-bolt", "fa fa-bolt", "fa fa-cube", "fa fa-cube", "fa fa-leaf", "fa fa-leaf", "fa fa-bicycle", "fa fa-bicycle", "fa fa-bomb", "fa fa-bomb"];
 let cardList = document.querySelectorAll('.card');
 let openCardList = [];
 let cardFlipped = 0;

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

//Shuffle array
function newBoard () {
  let shuffledArray = shuffle(cards);
  for(let card of cards) {
    let deckListElements = deck.getElementsByTagName("li");
    let listElementsClass = deckListElements[i].getAttribute("class");
    deckListElements[i].className='';
    deckListElements[i].classList.add('card');

    let deckIconElements = deck.getElementsByTagName("i"); /*shuffle the icons*/
    let iconElementsClass = deckIconElements[i].getAttribute("class");
    deckIconElements[i].className='';
    deckIconElements[i].classList.add('fa',shuffledCards[i]);
  }
}
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

for (let card of cardList) {
	card.addEventListener('click', function(e){
    if(!card.classList.contains('match') && !card.classList.contains('open') && !card.classList.contains('show')){
      openCardList.push(card);
      card.classList.add('open', 'show');

      	//Match Card
        if(openCardList.length === 2){
          if(openCardList[0].innerHTML === openCardList[1].innerHTML){
            openCardList[0].classList.add('match');
  					openCardList[1].classList.add('match');
  					openCardList[0].classList.add('open', 'show');
  					openCardList[1].classList.add('open', 'show');
  					openCardList = [];

          } else {

            //Flip over unmatch Card
            	setTimeout(function(){
                openCardList[0].classList.remove('open', 'show');
                openCardList[1].classList.remove('open', 'show');
                openCardList = [];
              }, 500);
          }
        }
    }
	});
}
