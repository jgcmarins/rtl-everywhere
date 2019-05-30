import React from 'react';
import styled from 'styled-components';

const ClassContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export default class Class extends React.Component {
  state = {
    counter: 0,
  };

  incrementCounter = () => this.setState({ counter: this.state.counter + 1 });

  render() {
    const { counter } = this.state;
    return (
      <ClassContainer>
        <span data-testid="counter-head" >Class Counter</span>
        <span data-testid="counter-value" >{counter}</span>
        <button data-testid="counter-button" onClick={this.incrementCounter} >Count</button>
      </ClassContainer>
    );
  }
}