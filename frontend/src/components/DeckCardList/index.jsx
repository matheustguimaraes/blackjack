import React from 'react';

import DeckCard from './DeckCard';

import { StyledDeck, StyledColumn } from './style';

const DeckCardList = ({ dealtCards, cardCounter }) => {
  return (
    <StyledDeck className="container mx-auto">
      {dealtCards &&
        dealtCards.map((card, idx) => (
          <StyledColumn key={idx}>
            <DeckCard
              key={idx}
              cardIndex={idx}
              cardCounter={cardCounter}
              cardRank={card.rank}
              cardSuit={card.suit}
            />
          </StyledColumn>
        ))}
    </StyledDeck>
  );
};

export default DeckCardList;
