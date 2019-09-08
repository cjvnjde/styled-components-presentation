import React, { useState } from 'react';
import { createGlobalStyle } from 'styled-components';

import Card from './Card';
import Popup from './Popup';
import AddCard from './AddCard';

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Roboto';
    margin: 0;
  }
`;

export default () => {
  const [isHiddenPopup, setHidden] = useState(true);

  return (
    <>
      <GlobalStyle />
      <AddCard
        openPopup={() => setHidden(false)}
      />
      <Popup
        isHidden={isHiddenPopup}
        close={() => setHidden(true)}
        title="Add Card"
        actions={<span>Hello</span>}
      >
        <div>
          Hello
        </div>
      </Popup>
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
  )
  };
