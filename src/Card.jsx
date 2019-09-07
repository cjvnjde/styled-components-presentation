import React from 'react';
import styled from 'styled-components';

const Content = styled.div`
  font-family: 'Roboto';
  font-size: 1.5em;
  text-align: center;
`;

const Title = styled(Content)`
  color: palevioletred;
  margin-bottom: 1em;
`;

const Card = styled.div`
  background-color: #fff;
  border: 1px solid #255c27;
  border-radius: 1em;
  font-weight: 600;
  padding: 1em 1em 3em;
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
