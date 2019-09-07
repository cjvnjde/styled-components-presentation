import React from 'react';
import styled from 'styled-components';

const Content = styled.div`
  font-size: 1.5em;
  text-align: center;
`;

const Title = styled(Content)`
  color: palevioletred;
`;

const Card = styled.div`
  background-color: #d1d1d1;
  border-radius: 1em;
  font-weight: 600;
  padding: 0.5em 0.5em 3em;
  width: 500px;
`;

export default () => (
  <Card>
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
  </Card>
);
