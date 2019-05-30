import React from 'react'
import { render, waitForElement, fireEvent } from '@testing-library/react';

import Class from '../Class';

describe('Class Tests', () => {
  const { getByTestId, getByText, container } = render(<Class/>);

  it('should render Class Component', async () => {
    const spanTextNode = await waitForElement(() =>
      getByTestId('counter-head'),
    );

    expect(spanTextNode.textContent).toBe('Counter');
  });

  it('should check count value on mount', async () => {
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