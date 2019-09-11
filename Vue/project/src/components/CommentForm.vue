<template>
  <SForm>
    <SNameInput
      :value="formFields.name"
      @input="formFields.name=$event.target.value"
      name="name"
      type="text"
      placeholder="Your name"
    />
    <STextInput
      :value="formFields.text"
      @input="formFields.text=$event.target.value"
    />
    <SButtonContainer>
      <SButton
        @click="clearForm"
      >
        Очистить
      </SButton>
      <SButton
        primary
        @click="sendData"
      >
        Отправить
      </SButton>
    </SButtonContainer>
  </SForm>
</template>

<script>
import styled from 'vue-styled-components';

const SForm = styled.div`
  width: calc(100% - 40px);
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 30px 20px 10px;
  margin: 10px 0;
  background-color: ${props => props.theme.colors.formBackground};
`;

const STextInput = styled.textarea`
  width: 100%;
  height: 60px;
  resize: none;
  border-radius: 2px;
  border: 1px solid ${props => props.theme.colors.textInputBorder};
`;

const SNameInput = styled.input`
  width: 100%;
  height: 20px;
  resize: none;
  border-radius: 2px;
  border: 1px solid ${props => props.theme.colors.textInputBorder};
  margin-bottom: 10px;
`;

const SButton = styled('button', { primary: Boolean })`
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

const SButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

export default {
  name: 'CommentForm',

  components: {
    SForm,
    STextInput,
    SNameInput,
    SButton,
    SButtonContainer,
  },

  data: () => ({
    name: '',
    formFields: {
      name: '',
      text: '',
      date: '',
    },
  }),

  methods: {
    sendData() {
      if (this.formFields.name || this.formFields.text) {
        this.formFields.date = this.getDate();
        this.$emit('sendData', this.formFields);
        this.clearForm();
      }
    },

    clearForm() {
      this.formFields = {
        name: '',
        text: '',
      };
    },

    getDate() {
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
    },
  },
};
</script>
