import React, { useState } from 'react';
import styled from 'styled-components';
import { TextInput } from 'react-native';
const customInput = ({ value, onChangeText, ...props}) => {
  // some code
  return (
    <TextInput
      {...props}
      multiline
      value={value}
      onChangeText={onChangeText}
    />
  )
}

const Form = styled.View`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 30px 20px 10px;
  margin: 10px 0;
  background-color: ${props => props.theme.colors.formBackground};
`;

const TextInputS = styled(customInput)`
  width: 100%;
  height: 60px;
  border-radius: 2px;
  border: 1px solid ${props => props.theme.colors.textInputBorder};
`;

const NameInput = styled.TextInput`
  width: 100%;
  height: 20px;
  border-radius: 2px;
  border: 1px solid ${props => props.theme.colors.textInputBorder};
  margin-bottom: 10px;
`;

const Button = styled.Button`
  background: ${props => props.primary ? props.theme.colors.main : "#fff"};
  color: ${props => props.primary ? "#fff" : props.theme.colors.main};

  margin: 18px;
  padding: 4px 18px;
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

const ButtonContainer = styled.View`
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

  return `${date.getDate()} ${months[date.getMonth()].toLowerCase()} ${date.getFullYear()}`;
}

export default ({ sendData }) => {
  const [name, setName] = useState('');
  const [text, setText] = useState('');

  return (
    <Form>
      <NameInput
        value={name}
        onChangeText={(value) => {
          setName(value);
        }}
        placeholder="Your name"
      />
      <TextInputS
        value={text}
        onChangeText={(value) => {
          setText(value)
        }}
      />
      <ButtonContainer>
        <Button
        title="Очистить"
        onPress={() => {
          setText('');
          setName('');
        }} />
        <Button
          primary
          title="Отправить"
          onPress={() => {
            if (name) {
              sendData({
                name,
                text,
                date: getDate(),
              });
            }
            setText('');
            setName('');
          }}
        />
      </ButtonContainer>
    </Form>
  );
}
