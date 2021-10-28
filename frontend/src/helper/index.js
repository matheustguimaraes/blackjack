// returns random number from 0 to size of deck
function getRandomNumber(deckLength) {
  return Math.floor(Math.random() * deckLength);
}

// shuffle deck 100 times before returning it in `createDeck`
function shuffleDeck(deck) {
  for (let i = 0; i < 100; i++) {
    const num1 = getRandomNumber(deck.length);
    const num2 = getRandomNumber(deck.length);
    const tmp = deck[num1];
    deck[num1] = deck[num2];
    deck[num2] = tmp;
  }
  return deck;
}

// create 52 cards deck
// this method returns a list with unique values of `rank` and `suit` to each card
export function createDeck() {
  const suitsList = ['Spade', 'Diamond', 'Clover', 'Heart'];
  const ranksList = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
  const deck = [];

  for (let x = 0; x < suitsList.length; x++) {
    for (let y = 0; y < ranksList.length; y++) {
      const card = { rank: ranksList[y], suit: suitsList[x] };
      deck.push(card);
    }
  }
  // shuffle deck before handling cards
  return shuffleDeck(deck);
}

export function takeFiveCards(deck) {
  /*
  returns:
  fiveCards: first five cards
  newDeck: all cards, excluding `fiveCards`
  */
  return { dealtCards: deck.slice(0, 5), newDeck: deck.slice(5) };
}

// set card rotation angle according to card position on rendering list and
// number of cards in the deck
export function setCardRotation(position, deckCardsSum) {
  if (deckCardsSum === 0) {
    return 0;
  }

  switch (position) {
    case 0:
      return 15;
    case 1:
      return 7.5;
    case 2:
      return 0;
    case 3:
      return -7.5;
    case 4:
      return -15;
    default:
      return 0;
  }
}

// set card padding according to card position on rendering list and
// number of cards in the deck
export function setCardPadding(position, deckCardsSum) {
  if (deckCardsSum === 0) {
    return 0;
  }

  switch (position) {
    case 0:
      return 0;
    case 1:
      return 75;
    case 2:
      return 150;
    case 3:
      return 75;
    case 4:
      return 0;
    default:
      return 0;
  }
}
