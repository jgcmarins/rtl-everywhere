import React from 'react'
import { render, waitForElement} from '@testing-library/react';

import Class from '../Class';

describe('Class Tests', () => {
  it('should render Class Component', async () => {
    const { getByTestId } = render(<Class/>);

    const spanTextNode = await waitForElement(() =>
      getByTestId('class'),
    );

    expect(spanTextNode.textContent).toBe('class');
  })
});