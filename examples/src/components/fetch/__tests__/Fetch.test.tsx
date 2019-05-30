import React from 'react'
import { render, waitForElement } from '@testing-library/react';

import Fetch from '../Fetch';

const ATOM_URL = 'https://github.githubassets.com/images/icons/emoji/atom.png?v8';

window.fetch = jest.fn().mockImplementation(() => {
  return new Promise((resolve, reject) => {
    resolve({
      json: jest.fn().mockImplementation(() => {
        return new Promise((resolve, reject) => {
          resolve({ atom: ATOM_URL });
        });
      })
    });
  });
});

describe('Fetch Tests', () => {
  const { getByTestId, container } = render(<Fetch/>);

  it('should render Fetch Component', async () => {
    const spanTextNode = await waitForElement(() =>
      getByTestId('fetch-head'),
    );

    expect(spanTextNode.textContent).toBe('Fetch');
  });

  it('should check count value on first render', async () => {
    // https://github.com/testing-library/react-testing-library/issues/281

    expect(container.firstChild).toMatchSnapshot()
  });
});