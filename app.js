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
// let dText = document.querySelector('h2');
// let pText = document.querySelector('h3');
// let text = document.querySelector('.text');
// let dealBtn = document.querySelector('#deal_btn');
// let hitBtn = document.querySelector('#hit_btn');
// let standBtn = document.querySelector('#stand_btn');
// let newGameBtn = document.querySelector('#new_btn');
// let dCards = document.querySelector('#dealer_cards');
// let pCards = document.querySelector('#player_cards');
// console.log(deal)

//---------------------------------------------------------------------------------
// ****** GAME VARIABLES ******
//---------------------------------------------------------------------------------

// // let gameStart = false;
// let onHit = true;
// let dealerSum = 0;
// let playerSum = 0;
// let dealerAceCount = 0;
// let playerAceCount = 0;
// let cards = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
// let suits = ["♣", "♦", "♥", "♠"];
// let values = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10 , 10, 10];
// let deck = [];
// let hand = 0;
// let dealerCards = [];
// let playerCards = [];
// let currentDealerHand = null;
// let currentDealerHand1 = null;
// let currentPlayerHand = null;
// let currentPlayerHand1 = null;

// //---------------------------------------------------------------------------------
// // ****** BUTTONS ******
// //---------------------------------------------------------------------------------

// // Start the game
// dealBtn.addEventListener('click', () => {
//     getCard();
//     dCards.innerHTML = currentDealerHand.card + currentDealerHand.suit + "  " + currentDealerHand1.card + currentDealerHand1.suit;
//     pCards.innerHTML = currentPlayerHand.card + currentPlayerHand.suit + "  " + currentPlayerHand1.card + currentPlayerHand1.suit;
//     text.innerHTML = ("Cards are dealt!");
//     dealerSum = currentDealerHand.value + currentDealerHand1.value;
//     playerSum = currentPlayerHand.value + currentPlayerHand1.value;
//     dText.innerHTML = (`Dealer has: ${dealerSum}`);
//     pText.innerHTML = (`Player has: ${playerSum}`);
// })

// hitBtn.addEventListener('click', () => {
    
// })

// // Reset the game when button is clicked
// newGameBtn.addEventListener('click', () => {
//     dCards.innerHTML = "";
//     pCards.innerHTML = "";
//     dText.innerHTML = "Dealer";
//     pText.innerHTML = "Player";
//     text.innerHTML = 'Press "Deal" to play';
//     dealerSum = 0;
// })

// //---------------------------------------------------------------------------------
// // ****** FUNCTIONS ******
// //---------------------------------------------------------------------------------
// buildDeck()
// shuffleDeck(deck)
// distributeCards(deck)

// function buildDeck() {
//     // iterates through each card and suit and pushed into the empty array of "deck"
//     for (let i = 0; i < suits.length; i++) {
//         for (let j = 0; j < cards.length; j++) {
//             deck.push(
//                 {card: cards[j],
//                 suit: suits[i],
//                 value: values[j]}
//             )
//         }
//     }
//     console.log(deck);
// }

// // buildDeck()

// function shuffleDeck(deck) {
//     for (let i = 0; i < deck.length; i++) {
//         let j = Math.floor(Math.random() * deck.length);
//         // Math.random() * deck.length will give a random float number between (0 - 52)
//         // Math.floor will round it to an integer

//         let swap = deck[i]; // grabbing the first element(deck[i])

//         deck[i] = deck[j]; 
//         deck[j] = swap; 
//         // replacing the first element(deck[i]) with the second element(deck[j])
//     }
//     // console.log(deck)
// }

// // shuffleDeck(deck)

// function distributeCards(deck) {
//     // adds the first 26 cards into the "dealerCards" array
//     for (let i = 0; i < 26; i++) {
//         dealerCards.push(deck[i])
//     }
//     // adds the last 26 cards into the "playerCards" array
//     for (let i = 26; i < 52; i++) {
//         playerCards.push(deck[i])
//     }
//     console.log(dealerCards)
//     console.log(playerCards)
// }

// function getCard() {
//     // console.log(hand)
//     // grabbing the objects of the dealerCards array
//     currentDealerHand = dealerCards[hand]
//     currentPlayerHand = playerCards[hand]

//     hand++ // incrementing the objects inside the array

//     currentDealerHand1 = dealerCards[hand]
//     currentPlayerHand1 = playerCards[hand]
// }

// function hitMe() {
//     if (playerSum < 21) {

//     }
// }
