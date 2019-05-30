import React from 'react'
import { render, waitForElement, fireEvent } from '@testing-library/react';

import Hooks from '../Hooks';

describe('Hooks Tests', () => {
  const { getByTestId, getByText } = render(<Hooks/>);

  it('should render Hooks Component', async () => {
    const spanTextNode = await waitForElement(() =>
      getByTestId('counter-head'),
    );

    expect(spanTextNode.textContent).toBe('Hooks Counter');
  });

  it('should check count value on first render', async () => {
    const spanTextNode = await waitForElement(() =>
      getByTestId('counter-value'),
    );

    expect(spanTextNode.textContent).toBe('0');
  });

  it('should click and assert counter value', async () => {
    fireEvent.click(getByText('Count'));

    const spanTextNode = await waitForElement(() =>
      getByTestId('counter-value'),
    );

    expect(spanTextNode.textContent).toBe('1');
  });
});