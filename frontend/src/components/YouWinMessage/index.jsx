import React from 'react';

import winnerSvg from '../../assets/winner.svg';

import { StyledWinner } from './style';

const YouWin = () => {
  return (
    <StyledWinner>
      <img src={winnerSvg} alt="You win!" />
    </StyledWinner>
  );
};

export default YouWin;
