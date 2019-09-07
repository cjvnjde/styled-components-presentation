import React from 'react';
import { createGlobalStyle } from 'styled-components';

import Card from './Card';

const GlobalStyle = createGlobalStyle`
  body {
    background-color: #cffffa;
    margin: 0;
  }
`;

export default () => (
  <>
    <GlobalStyle />
    <Card
      title="Styled Title"
      content="Lorem ipsum dolor sit amet,
        consectetur adipisicing elit.
        Optio quam, architecto quae dolores nesciunt
        nihil hic eos voluptas, nemo error alias
        quisquam, perferendis animi suscipit dolore
        sapiente. Nemo, ab odit."
    />
  </>
);
