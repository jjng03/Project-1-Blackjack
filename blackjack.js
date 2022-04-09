// ----------------------------------------------------------------
// ****************** GLOBAL VARIABLES ******************
// ----------------------------------------------------------------
let cards = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
let suits = ["♣", "♦", "♥", "♠"];
let values = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10 , 10, 10];
let deck = [];
// let gameStart = false;
// let gameOver = false;
// let dealerWin = false;
// let playerWin = false;
let dealerSum = 0;
let playerSum = 0;
let dealerCards = [];
let playerCards = [];
let nextPlayerCard = "";
let nextDealerCard = "";
let onHit = true;

// ----------------------------------------------------------------
// ****************** DOM VARIABLES ******************
// ----------------------------------------------------------------

let newGameBtn = document.getElementById("new_btn");
let hitBtn = document.getElementById("hit_btn");
let dealBtn = document.getElementById("deal_btn");
let dealerText = document.getElementById("dealer_cards");
let playerText = document.getElementById("player_cards");
let dealerText1 = document.querySelector("h2");
let playerText1 = document.querySelector("h3");

// ----------------------------------------------------------------
// ****************** BUTTONS ******************
// ----------------------------------------------------------------

dealBtn.addEventListener("click", () => {
  // gameStart = true;
  // gameOver = false;
  // playerWin = false;

  buildDeck();
  shuffleDeck(deck);
  // distributeCards(deck);
  
  dealerCards = [deck.pop(), deck.pop()]; // removes the last element of the object from dealerCards and added into the array of dealerCards
  playerCards = [deck.pop(), deck.pop()];

  getSum();

  dealerText.innerHTML = (dealerCards[0].card + dealerCards[0].suit + " " + dealerCards[1].card + dealerCards[1].suit) // displaying the cards for each player and dealer
  playerText.innerHTML = (playerCards[0].card + playerCards[0].suit + " " + playerCards[1].card + playerCards[1].suit)
  
  console.log(dealerCards)
  console.log(playerCards)
});

hitBtn.addEventListener('click', () => {
  playerCards.push(deck.pop()); // adds the next element/object from playerCards to playerInPlayHand array
  for (let i = 0; i < playerCards.length; i++) {
    // iterates through each object in the array playerInPlayHand

    nextPlayerCard += playerCards[i].card + playerCards[i].suit + " "; // take the next card and create a new string for nextPlayerCard
    playerText.innerHTML = nextPlayerCard; // displays the next card onto the board
  }
  nextPlayerCard = ""; // after the "for loop", reset to an empty string so it doesn't repeat the previous cards

  getSum();
  console.log(playerCards)
})

// ----------------------------------------------------------------
// ****************** FUNCTIONS ******************
// ----------------------------------------------------------------
function buildDeck() {
    // iterates through each card and suit and creating objects that's pushed into the empty array of "deck"
    for (let i = 0; i < suits.length; i++) {
        for (let j = 0; j < cards.length; j++) {
            deck.push(
                {card: cards[j],
                suit: suits[i],
                value: values[j]}
            )
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
    console.log(deck)
}

// shuffleDeck(deck)

function getSum() {
  for (let i = 0; i < dealerCards.length; i++) {
    dealerSum += dealerCards[i].value
  }
  dealerText1.innerHTML = (`Dealer has: ${dealerSum}`)

  for (let i = 0; i < playerCards.length; i++) {
    playerSum += playerCards[i].value 
  }
  playerText1.innerHTML = (`Player has: ${playerSum}`)
  dealerSum = 0;
  playerSum = 0;
}

// function stand() {
//   onHit = false;

// }