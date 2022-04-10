// ----------------------------------------------------------------
// ****************** GLOBAL VARIABLES ******************
// ----------------------------------------------------------------

let cards = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];
let suits = ["♣", "♦", "♥", "♠"];
let values = [2, 3, 4, 5, 6, 7, 8, 9, 10, 10 , 10, 10, 11];
let deck = [];
// let gameStart = false;
// let gameOver = false;
// let dealerWin = false;
// let playerWin = false;
let dealerSum = 0;
let playerSum = 0;
let dealerCards = [];
let playerCards = [];
let playerAceCount = 0;
let dealerAceCount = 0;
let nextPlayerCard = "";
let nextDealerCard = "";
let onHit = true;

// ----------------------------------------------------------------
// ****************** DOM VARIABLES ******************
// ----------------------------------------------------------------

let newGameBtn = document.getElementById("new_btn");
let hitBtn = document.getElementById("hit_btn");
let dealBtn = document.getElementById("deal_btn");
let standBtn = document.getElementById("stand_btn");
let dealerText = document.getElementById("dealer_cards");
let playerText = document.getElementById("player_cards");
let dealerText1 = document.querySelector("h2");
let playerText1 = document.querySelector("h3");
let mainText = document.querySelector(".text")

// ----------------------------------------------------------------
// ****************** BUTTONS ******************
// ----------------------------------------------------------------

dealBtn.addEventListener("click", () => {
  mainText.innerHTML = ('Cards are dealt!')
  deck = [];
  buildDeck();
  shuffleDeck(deck);
  startGame();
  onHit = true;
  playerAceCount = 0;
  dealerAceCount = 0;
});


hitBtn.addEventListener('click', () => {
  hitMe();
})


standBtn.addEventListener('click', () => {
  onHit = false;
  stand();
})

newGameBtn.addEventListener('click', () => {
  playerText.innerHTML = "";
  dealerText.innerHTML = "";
  playerText1.innerHTML = "Player";
  dealerText1.innerHTML = "Dealer";
})

// ----------------------------------------------------------------
// ****************** FUNCTIONS ******************
// ----------------------------------------------------------------

function startGame() {
  dealerCards = [deck.pop(), deck.pop()]; // removes the last element of the object from dealerCards and added into the array of dealerCards
  playerCards = [deck.pop(), deck.pop()];

  getSum();
  
  dealerText.innerHTML = (dealerCards[0].card + dealerCards[0].suit + " " + dealerCards[1].card + dealerCards[1].suit) // displaying the cards for each player and dealer
  playerText.innerHTML = (playerCards[0].card + playerCards[0].suit + " " + playerCards[1].card + playerCards[1].suit)
  
  console.log(dealerCards)
  console.log(playerCards)

}

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


function getSum() {
  // resets the sum so it does not add the values of previous cards that were already added
  dealerSum = 0; 
  playerSum = 0;

  for (let i = 0; i < dealerCards.length; i++) {
    // iterates through dealerCards array

    dealerSum += dealerCards[i].value // adds the card values (dealerSum = dealerSum + dealerCards[i].value)

    if (dealerCards[i].value === 11) {
      dealerAceCount += 1;
    }
    if (dealerSum > 21 && dealerAceCount > 0) {
      dealerSum -= 10;
      dealerAceCount --;
    }
  }
  console.log(dealerAceCount)
  dealerText1.innerHTML = (`Dealer has: ${dealerSum}`)

  for (let i = 0; i < playerCards.length; i++) {
    playerSum += playerCards[i].value 
    if (playerCards[i].value === 11) {
      playerAceCount += 1;
    }
    if (playerSum > 21 && playerAceCount > 0) {
      playerSum -= 10;
      playerAceCount --;
    }
  }
  playerText1.innerHTML = (`Player has: ${playerSum}`)

  // console.log(playerAceCount)
  
}


function hitMe() {
  if (onHit === false) {
    return
  }
  playerCards.push(deck.pop()); // removes the last element in deck array and add it to playerCards array

  for (let i = 0; i < playerCards.length; i++) {
    // iterates through each object in the array of playerCards

    nextPlayerCard += playerCards[i].card + playerCards[i].suit + " "; // take the next card and create a new string for nextPlayerCard
    playerText.innerHTML = nextPlayerCard; // displays the next card onto the board
  }
  nextPlayerCard = ""; // after the "for loop", reset to an empty string so it doesn't repeat the previous cards
  
  getSum();
  
  if (playerSum > 21) {
    onHit = false;
    mainText.innerHTML = ("Player Bust")
  } 
  console.log(playerCards);
}


function stand() {
  while (dealerSum < 17) {
    // if (dealerSum < playerSum) {
      // draw a new card for dealer
      dealerCards.push(deck.pop());
      // calculate the sum of dealer hand
      dealerText.innerHTML +=
      dealerCards[dealerCards.length - 1].card +
      dealerCards[dealerCards.length - 1].suit +
      " ";
      getSum();
  }
    console.log(dealerCards);
    // console.log(playerSum);
    // console.log(dealerSum);
    
    // if dealer has a higher sum than player and is not over 21, DEALER WINS
    if (dealerSum > playerSum && dealerSum < 22) {
      mainText.innerHTML = ("Dealer wins");
    }
    // if dealer goes over 21, DEALER BUSTS
    else if (dealerSum > 21) {
      mainText.innerHTML = ("Dealer bust");
    }
    // if dealer and player have same sum, its a TIE (dealer must hit if less than 17)
    else if (dealerSum === playerSum && dealerSum >= 17 && dealerSum < 22) {
      mainText.innerHTML = ("Push");
    } 
    else if (playerSum > dealerSum && dealerSum >= 17) {
      // onHit = false;
      mainText.innerHTML = ("Player wins")
    }
}
