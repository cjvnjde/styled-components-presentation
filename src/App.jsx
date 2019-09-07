import React from 'react';
import styled from 'styled-components';

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

const Content = styled.div`
  font-size: 1.5em;
  text-align: center;
`;

export default () => (
  <>
    <Title>
      Styled Title
    </Title>
    <Content>
      Lorem ipsum dolor sit amet,
      consectetur adipisicing elit.
      Optio quam, architecto quae dolores
      nesciunt nihil hic eos voluptas, nemo
      error alias quisquam, perferendis animi
      suscipit dolore sapiente. Nemo, ab odit.
    </Content>
  </>
);
