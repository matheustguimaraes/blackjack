import React from 'react';

import CardsCounterBox from 'components/CardsCounterBox/index';
import DealBox from 'components/DealButton/index';
import DeckCardList from 'components/DeckCardList/index';
import ResetButton from 'components/ResetButton/index';
import YouWinMessage from 'components/YouWinMessage';
import YouLoseMessage from 'components/YouLoseMessage';

import { createDeck, takeFiveCards } from '../../helper/index';

class GameTable extends React.Component {
  state = {
    playerWon: false,
    playerLost: false,

    deck: [],
    dealtCards: [],
    cardCounter: 47,
  };

  componentDidMount() {
    this.onStartGame();
  }

  // start game with normal deck, then deal first 5 cards
  onStartGame = () => {
    const newDeck = createDeck();
    const deck = this.onDealCards(newDeck);
    this.setState({ deck: deck, cardCount: deck.length });
  };

  onDealCards = (oldDeck) => {
    // get deck, take five cards, and count deck size
    const { dealtCards, newDeck } = takeFiveCards(oldDeck);
    this.setState({ deck: newDeck, cardCounter: newDeck.length, dealtCards: dealtCards });

    if (this.areTwoCardsLeft(dealtCards)) {
      return this.isGameWon(dealtCards);
    }

    // return deck minus five cards dealt
    return newDeck;
  };

  // reset game to 52 cards on the deck and five cards dealt
  onResetGame = () => {
    this.onStartGame();
  };

  // check if there are only two cards on the table
  areTwoCardsLeft = (dealtCards) => {
    if (dealtCards.length === 2) {
      return true;
    }
    return false;
  };

  // render different components if the player won or lose the game
  isGameWon = (dealtCards) => {
    if (dealtCards[0].rank === 'A' || dealtCards[1].rank === 'A') {
      this.setState({ playerWon: true });
    } else {
      this.setState({ playerLost: true });
    }
  };

  render() {
    const { cardCounter, deck, dealtCards, playerWon, playerLost } = this.state;

    return (
      <React.Fragment>
        <CardsCounterBox cardsLeftNumber={cardCounter} />

        {playerWon && <YouWinMessage />}

        <DeckCardList dealtCards={dealtCards} cardCounter={cardCounter} />

        {playerLost && <YouLoseMessage />}

        <DealBox
          isButtonDisabled={playerWon || playerLost}
          deck={deck}
          onStartGame={this.onDealCards}
        />

        <ResetButton onResetGame={this.onResetGame} />
      </React.Fragment>
    );
  }
}

export default GameTable;
