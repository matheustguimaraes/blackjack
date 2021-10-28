import React from 'react';

import { setCardRotation, setCardPadding } from '../../helper/index';

import { StyledCard, SmallSuit, BigSuit } from './styleCard';

const DeckCard = ({ cardIndex, cardRank, cardSuit, cardCounter }) => {
  const cardImage = require(`../../assets/${cardSuit}.svg`).default;
  const cardAlt = `${cardRank}, ${cardSuit}`;

  const cardRotation = setCardRotation(cardIndex, cardCounter);
  const cardHeight = setCardPadding(cardIndex, cardCounter);

  return (
    <StyledCard rotation={cardRotation} style={{ marginTop: `${cardHeight}px` }}>
      <span>{cardRank}</span>
      <SmallSuit src={cardImage} alt={cardAlt} />
      <BigSuit src={cardImage} alt={cardAlt} />
    </StyledCard>
  );
};

export default DeckCard;
