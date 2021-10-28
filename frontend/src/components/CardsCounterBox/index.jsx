import React from 'react';

import { StyledCardsCounter } from './style';

const CardsCounterBox = ({ cardsLeftNumber }) => {
  return (
    <StyledCardsCounter>
      <p className="count">{cardsLeftNumber}</p>
      <p className="description">Cards left</p>
    </StyledCardsCounter>
  );
};

export default CardsCounterBox;
