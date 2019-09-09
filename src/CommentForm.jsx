import React, { useState } from 'react';
import styled from 'styled-components';

const customInput = ({ className, value, onChange}) => {
  // some code
  return (
    <textarea
      className={className}
      value={value}
      onChange={onChange}
    />
  )
}

const Form = styled.div`
  width: calc(100% - 40px);
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 30px 20px 10px;
  margin: 10px 0;
  background-color: ${props => props.theme.colors.formBackground};
`;

const TextInput = styled(customInput)`
  width: 100%;
  height: 60px;
  resize: none;
  border-radius: 2px;
  border: 1px solid ${props => props.theme.colors.textInputBorder};
`;

const NameInput = styled.input`
  width: 100%;
  height: 20px;
  resize: none;
  border-radius: 2px;
  border: 1px solid ${props => props.theme.colors.textInputBorder};
  margin-bottom: 10px;
`;

const Button = styled.button`
  background: ${props => props.primary ? props.theme.colors.main : "#fff"};
  color: ${props => props.primary ? "#fff" : props.theme.colors.main};

  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid ${props => props.theme.colors.main};
  border-radius: 3px;

  :hover {
    background-color: ${props => props.primary ? props.theme.colors.mainActive : "#eee"};
    color: ${props => props.primary ? "#eee" : props.theme.colors.mainActive};
  }

  :active {
    background-color: ${props => props.primary ? props.theme.colors.mainHover : "#eee"};
    color: ${props => props.primary ? "#eee" : props.theme.colors.mainHover};
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
