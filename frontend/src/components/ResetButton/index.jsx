import React from 'react';

import { StyledResetButton } from './style';

class DealBox extends React.Component {
  constructor(props) {
    super(props);
  }

  onResetEntireGame = () => {
    this.props.onResetGame(this.props.deck);
  };

  render() {
    return (
      <StyledResetButton onClick={this.onResetEntireGame}>
        <span>Reset</span>
      </StyledResetButton>
    );
  }
}

export default DealBox;
