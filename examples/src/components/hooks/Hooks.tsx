import React, { useState } from 'react';
import styled from 'styled-components';

const ClassContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export default function Hooks() {
  const [counter, setCounter] = useState<number>(0);

  const incrementCounter = () => setCounter(counter + 1);

  return (
    <ClassContainer>
      <span data-testid="counter-head" >Hooks Counter</span>
      <span data-testid="counter-value" >{counter}</span>
      <button data-testid="counter-button" onClick={incrementCounter} >Count</button>
    </ClassContainer>
  );
}