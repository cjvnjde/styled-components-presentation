import React from 'react';
import styled from 'styled-components';

const AddButton = styled.div`
  position: absolute;
  right: 32px;
  bottom: 32px;
  height: 36px;
  width: 36px;
  border-radius: 50%;
  background-color: green;

  display: flex;
  justify-content: center;
  align-items: center;

  margin: 5px;
  opacity: 0.3;
  :hover {
    opacity: 1;
  }
  ::before, ::after {
    content: ' ';
    height: 30px;
    width: 2px;
    background-color: #fff;
  }
  ::after {
    transform: rotate(-90deg);
  }
  ::before {
    transform: translateX(1px);
  }
`;



export default ({ openPopup }) => (
  <AddButton
    onClick={() => {
      openPopup();
    }}
  />
);
