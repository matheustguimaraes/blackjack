import React from 'react';

// import { createDeck } from '../../helper/index';

import { YellowBoxButton } from './style';

class DealBox extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      deck: this.props.deck,
    };
  }

  componentDidMount() {
    // this.onStartToDeal()
    console.log('🚀 ~ this.props.isButtonDisabled', this.props.isButtonDisabled);
  }

  onStartToDeal = () => {
    this.props.onStartGame(this.props.deck);
  };

  render() {
    return (
      <YellowBoxButton onClick={this.onStartToDeal} disabled={this.props.isButtonDisabled}>
        <span>DEAL</span>
      </YellowBoxButton>
    );
  }
}

export default DealBox;
