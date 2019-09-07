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

export default ({ title, content }) => (
  <Card>
    <Title>
      {title}
    </Title>
    <Content>
      {content}
    </Content>
  </Card>
);
