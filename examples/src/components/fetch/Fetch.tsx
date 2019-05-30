import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const ClassContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const API_URL = 'https://api.github.com/emojis';

export default function Fetch() {
  const [emojis, setEmojis] = useState<any>({});

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(API_URL);
      const data = await response.json();
      setEmojis(data);
    }
    fetchData();
  }, []);

  const getAtomSrc = () => !!emojis && emojis.atom ? emojis.atom : 'Fetching...';

  return (
    <ClassContainer>
      <span data-testid="fetch-head" >Fetch</span>
      <img data-testid="fetch-img" src={getAtomSrc()}/>
    </ClassContainer>
  );
}