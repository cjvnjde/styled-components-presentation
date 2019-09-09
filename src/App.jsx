import React, { useState } from 'react';
import styled, { createGlobalStyle } from 'styled-components';

import Comment from './Comment';
import CommentForm from './CommentForm';
import AnimationCat from './AnimationCat';

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Roboto';
    background: url("/catGay.png");
  }
`;

const Content = styled.div`
  font-size: 1.5em;
  text-align: center;
`;

const Title = styled(Content)`
  color: palevioletred;
`;

const CommentsList = styled.div`
  margin: 20px;
`;

export default () => {
  const [comments, setComments] = useState([]);

  const commentsList = comments.map(comment => (
    <Comment
      name={comment.name}
      date={comment.date}
      text={comment.text}
    />
  ));

  const addComment = (comment) => {
    setComments([
      ...comments,
      comment,
    ]);
  };

  return (
    <>
      <GlobalStyle />
      <Title>
        Styled Title
      </Title>
      <Content>
        Lorem ipsum dolor sit amet,
        consectetur adipisicing elit.
        Optio quam, architecto quae dolores
        nesciunt nihil hic eos voluptas, nemo
        error alias quisquam, perferendis animi
        suscipit dolore sapiente. Nemo, ab odit.
      </Content>
      <CommentForm 
        sendData={addComment}
      />
      <CommentsList>
        {commentsList}
      </CommentsList>
      <AnimationCat />
    </>
  );
}
