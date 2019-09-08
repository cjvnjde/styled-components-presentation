import React from 'react';
import styled from 'styled-components';

const Popup = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  background-color: rgba(0,0,0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const PopupBody = styled.div`
  width: 500px;
  margin: auto;  
  border-radius: 5px;  
  background: white;
`;

const PopupHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const CloseButton = styled.div`
  position: relative;
  width: 32px;
  height: 32px;
  margin: 5px;
  opacity: 0.3;
  :hover {
    opacity: 1;
  }
  ::before, ::after {
    position: absolute;
    left: 15px;
    content: ' ';
    height: 33px;
    width: 2px;
    background-color: #333;
  }
  ::before {
    transform: rotate(45deg);
  }
  ::after {
    transform: rotate(-45deg);
  }
`;

const PopupTitle = styled.h1`
  margin-left: 15px;
`;

const PopupContent = styled.div`
  margin: 15px;
`;

const PopupActions = styled.div`
  border-top: 1px solid gray;
  display: flex;
  justify-content: flex-end;
  padding: 15px;
`;

export default ({
  isHidden,
  close,
  children,
  title,
  actions,
}) => {
  if (isHidden) return null;

  return (
    <Popup>
      <PopupBody>
        <PopupHeader>
          <PopupTitle>
            {title}
          </PopupTitle>
          <CloseButton
            onClick={() => {
              close();
            }}
          />
        </PopupHeader>
        <PopupContent>
          {children}
        </PopupContent>
        <PopupActions>
          {actions}
        </PopupActions>
      </PopupBody>
    </Popup>
  )
};
