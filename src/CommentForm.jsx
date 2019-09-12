import React, { useState } from 'react';
import styled from 'styled-components';

const Form = styled.div`
  width: calc(100% - 40px);
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 30px 20px 10px;
  margin: 10px 0;
  background-color: #f2f2f2;
`;

const TextInput = styled.textarea`
  width: 100%;
  height: 60px;
  resize: none;
  border-radius: 2px;
  border: 1px solid #a9a9a9;
`;

const NameInput = styled.input`
  width: 100%;
  height: 20px;
  resize: none;
  border-radius: 2px;
  border: 1px solid #a9a9a9;
  margin-bottom: 10px;
`;

const Button = styled.button.attrs(props => ({
  type: 'button',
  size: props.primary ? '1' : '2',
}))`
  background: ${props => props.primary ? "#fdd639" : "#fff"};
  color: ${props => props.primary ? "#fff" : "#fdd639"};

  font-size: ${props => props.size}em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid #fdd639;
  border-radius: 3px;

  :hover {
    background-color: ${props => props.primary ? "#ffcc00" : "#eee"};
    color: ${props => props.primary ? "#eee" : "#ffcc00"};
  }

  :active {
    background-color: ${props => props.primary ? "#ffde5b" : "#eee"};
    color: ${props => props.primary ? "#eee" : "#ffde5b"};
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const getDate = () => {
  const months = [
    "Января",
    "Февраля",
    "Марта",
    "Апреля",
    "Мая",
    "Июня",
    "Июля",
    "Августа",
    "Сентября",
    "Октября",
    "Ноября",
    "Декабря"
  ];

  const date = new Date();

  return `${date.getDate()} 
  ${months[date.getMonth()].toLowerCase()} 
  ${date.getFullYear()}`;
}

export default ({ sendData }) => {
  const [name, setName] = useState('');
  const [text, setText] = useState('');

  return (
    <Form>
      <NameInput
        value={name}
        onChange={(e) => {
          setName(e.target.value)
        }}
        placeholder="Your name"
      />
      <TextInput
        value={text}
        onChange={(e) => {
          setText(e.target.value)
        }}
      />
      <ButtonContainer>
        <Button onClick={() => {
          setText('');
          setName('');
        }}>
          Очистить
        </Button>
        <Button
          primary
          onClick={() => {
            if (name || text) {
              sendData({
                name,
                text,
                date: getDate(),
              });
            }
            setText('');
            setName('');
          }}
        >
          Отправить
        </Button>
      </ButtonContainer>
    </Form>
  );
}
