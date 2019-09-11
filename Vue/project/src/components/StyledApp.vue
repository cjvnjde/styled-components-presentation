<template>
  <ThemeProvider
    :theme="theme"
  >
    <STitle>
      Styled Title
    </STitle>
    <SContent>
      Lorem ipsum dolor sit amet,
      consectetur adipisicing elit.
      Optio quam, architecto quae dolores
      nesciunt nihil hic eos voluptas, nemo
      error alias quisquam, perferendis animi
      suscipit dolore sapiente. Nemo, ab odit.
    </SContent>
    <CommentForm
      @sendData="addComment"
    />
    <SCommentsList>
      <Comment
        v-for="comment in comments"
        :key="comment.text"
        :name="comment.name"
        :date="comment.date"
        :text="comment.text"
      />
    </SCommentsList>
    <AnimationCat />
  </ThemeProvider>
</template>

<script>
import styled, { ThemeProvider } from 'vue-styled-components';

import { thirdTheme } from './themes';
import CommentForm from './CommentForm';
import Comment from './Comment';
import AnimationCat from './AnimationCat';

const SContent = styled.div`
  font-size: 1.5em;
  text-align: center;
`;

const STitle = styled(SContent)`
  color: palevioletred;
`;

const SCommentsList = styled.div`
  margin: 20px;
`;

export default {
  name: 'StyledApp',

  components: {
    ThemeProvider,
    SContent,
    STitle,
    SCommentsList,
    CommentForm,
    Comment,
    AnimationCat,
  },

  data: () => ({
    theme: thirdTheme,
    comments: [{
      name: 'Zaika',
      text: 'Hmmmm',
      date: '11 сентября 2019',
    }],
  }),

  methods: {
    addComment(comment) {
      this.comments.push(comment);
    },
  },
};
</script>
