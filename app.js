/*

** homepage will have a play button that will transition into the game **

1) Assigning global variables / DOM
-player
-dealer
- values to "Ace" & "Face cards"

2) Creating arrays
-deck = []
-suits = []

3) addEventListener to buttons
-play - play button will load the game page
-deal - deal cards when it's clicked
-new game - reset game including scoreboard 
-hit - pulling a card from the array
-stand - keep current cards and let dealer hit 

4) Functions 
-startGame() - Main function will load the entire game
-build a deck - get combinations of every card/suit
-shuffle deck - mix the array of the decks
-add up the values when the cards are dealt
-pulling random card from the array / randomize player and dealer cards

5) Winning/losing/draw
-decide the winning, losing and draw conditions / including "bust" condition



*/
//---------------------------------------------------------------------------------
// ****** DOM VARIABLES ******
//---------------------------------------------------------------------------------
let dText = document.querySelector('h2');
let pText = document.querySelector('h3');
let text = document.querySelector('.text');
let deal = document.querySelector('#deal_btn');
let hit = document.querySelector('#hit_btn');
let stand = document.querySelector('#stand_btn');
let newGame = document.querySelector('#new_btn');
let dCards = document.querySelector('#dealer_cards');
let pCards = document.querySelector('#player_cards');
// console.log(deal)

//---------------------------------------------------------------------------------
// ****** GAME VARIABLES ******
//---------------------------------------------------------------------------------

// let gameStart = false;
let onHit = true;
let dealerSum = 0;
let PlayerSum = 0;
let cards = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
let suits = ["♠", "♣", "♥", "♦"];
let deck = [];

//---------------------------------------------------------------------------------
// ****** BUTTONS ******
//---------------------------------------------------------------------------------

deal.addEventListener('click', () => {
    buildDeck();
    shuffleDeck(deck);
    dCards.innerHTML = [getCard() + " " + getCard()];
    dText.innerHTML = ("Dealer (sum)");
    pCards.innerHTML = [getCard() + " " + getCard()];
    pText.innerHTML = ("Player (sum)");
    text.innerHTML = ("Cards are dealt!");
})

newGame.addEventListener('click', () => {
    dCards.innerHTML = "";
    pCards.innerHTML = "";
    dText.innerHTML = "Dealer";
    pText.innerHTML = "Player";
})

//---------------------------------------------------------------------------------
// ****** FUNCTIONS ******
//---------------------------------------------------------------------------------

function buildDeck() {
    // iterates through each card and suit and pushed into the empty array of "deck"
    for (let i = 0; i < suits.length; i++) {
        for (let j = 0; j < cards.length; j++) {
            deck.push(`${cards[j]}${suits[i]}`)
        }
    }
    return deck;
}

// buildDeck()

function shuffleDeck(deck) {
    for (let i = 0; i < deck.length; i++) {
        let j = Math.floor(Math.random() * deck.length);
        // Math.random() * deck.length will give a random float number between (0 - 52)
        // Math.floor will round it to an integer

        let swap = deck[i]; // grabbing the first element(deck[i])

        deck[i] = deck[j]; 
        deck[j] = swap; 
        // replacing the first element(deck[i]) with the second element(deck[j])
    }
    // console.log(deck)
}

// shuffleDeck(deck)

function getCard() {
    return deck.shift(); // grabs the first element of the array ("deck")
}

function getSum(playerSum, dealerSum) {
    
}