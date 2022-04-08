// ----------------------------------------------------------------
// ****************** GLOBAL VARIABLES ******************
// ----------------------------------------------------------------
let cards = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
let suits = ["♣", "♦", "♥", "♠"];
let values = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10 , 10, 10];
let deck = [];
let gameStart = false;
let gameOver = false;
let dealerWin = false;
let playerWin = false;
let dealerSum = 0;
let playerSum = 0;
let dealerCards = [];
let dealerInPlayHand = [];
let playerInPlayHand = [];
let playerCards = [];
let newGameBtn = document.getElementById("new_btn");
let hitBtn = document.getElementById("hit_btn");
let dealBtn = document.getElementById("deal_btn")
let dealerText = document.getElementById("dealer_cards")
let playerText = document.getElementById("player_cards")
let nextPlayerCard = "";
let nextDealerCard = "";
// ----------------------------------------------------------------
// ****************** BUTTONS ******************
// ----------------------------------------------------------------

dealBtn.addEventListener("click", () => {
  gameStart = true;
  gameOver = false;
  playerWin = false;

  buildDeck();
  shuffleDeck(deck);
  distributeCards(deck);

  dealerInPlayHand = [dealerCards.shift(), dealerCards.shift()]; // removes the first element/object from dealerCards and added into the array of dealerInPlayHand
  playerInPlayHand = [playerCards.shift(), playerCards.shift()];

  dealerText.innerHTML = (dealerInPlayHand[0].card + dealerInPlayHand[0].suit + " " + dealerInPlayHand[1].card + dealerInPlayHand[1].suit) // displaying the cards for each player and dealer
  playerText.innerHTML = (playerInPlayHand[0].card + playerInPlayHand[0].suit + " " + playerInPlayHand[1].card + playerInPlayHand[1].suit)

  console.log(dealerInPlayHand)
  console.log(playerInPlayHand)
});

hitBtn.addEventListener('click', () => {
  playerInPlayHand.push(playerCards.shift()); // adds the next element/object from playerCards to playerInPlayHand array
  for (let i = 0; i < playerInPlayHand.length; i++) {
    // iterates through each object in the array playerInPlayHand

    nextPlayerCard += playerInPlayHand[i].card + playerInPlayHand[i].suit + " "; // take the next card and create a new string for nextPlayerCard
    playerText.innerHTML = nextPlayerCard; // displays the next card onto the board
  }
  nextPlayerCard = ""; // after the "for loop", reset to an empty string so it doesn't repeat the previous cards
  console.log(playerInPlayHand)
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

function distributeCards(deck) {
    // adds the first 26 cards into the "dealerCards" array
    for (let i = 0; i < 26; i++) {
        dealerCards.push(deck[i])
    }
    // adds the last 26 cards into the "playerCards" array
    for (let i = 26; i < 52; i++) {
        playerCards.push(deck[i])
    }
    console.log(dealerCards)
    console.log(playerCards)
}

function gameStatus() {
  if (gameStart === false) {
    return;
  }

  // displaying current cards for dealer and player
  for (let i = 0; i < dealerCards.length; i++) {
  
  }
  console.log(currentDealerCards)
  for (let i = 0; i < playerCards.length; i++) {
    //something innerHtml
    //display currentBoardLayout
  }

  //update scores...

  if (gameOver) {
    if (playerWin) {
      //display "YOU WIN"
    } else {
      //display "DEALER WINS"
    }
  }
}

// gameStatus();