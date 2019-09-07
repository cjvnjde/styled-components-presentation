import React from 'react';
import styled from 'styled-components';

const Content = styled.div`
  font-size: 1.5em;
  text-align: center;
`;

const Title = styled(Content)`
  color: palevioletred;
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
