import React from 'react';
import styled from 'styled-components'
import { space, width, fontSize, color } from 'styled-system';

// Add styled-system functions to your component
const Box = styled.div`
  ${space}
  ${width}
  ${fontSize}
  ${color}
`;

const Title = styled.span`
  font-size: 100px;
  color: #25D7FD;
  margin-left: 50px;
  margin-top: 50px;
`;

// const Row = styled.div`
//   display: flex;
//   flex: 1;
//   flex-direction: column;
//   align-items: center;
//   margin-bottom: 40px;
// `;

const SpaceBetween = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const UrlText = styled.span`
  font-size: 50px;
  color: #fff;
  margin-left: 50px;
  margin-top: 50px;
`;

export const Center = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Root = styled.div([], {
  width: '50vw',
  height: '70vh',
});

export const HandsOn = () => (
  <Root>
    <Center>
      <SpaceBetween>
        <Title>References</Title>
      </SpaceBetween>
      <SpaceBetween>
        <UrlText>https://github.com/testing-library/react-testing-library</UrlText>
      </SpaceBetween>
      <SpaceBetween>
        <UrlText>https://slides.com/rafaelvitor/rtl/</UrlText>
      </SpaceBetween>
      <SpaceBetween>
        <UrlText>https://github.com/facebook/jest</UrlText>
      </SpaceBetween>
    </Center>
  </Root>
);