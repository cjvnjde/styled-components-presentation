<template>
  <SComment>
    <SCaption>
      <SCaptionName>{{name}}</SCaptionName>
      <SCaptionDate>{{date}}</SCaptionDate>
    </SCaption>
    <SCommentText>{{text}}</SCommentText>
  </SComment>
</template>

<script>
import styled from 'vue-styled-components';


const SComment = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 16px;
  margin-bottom: 18px;
`;

const SCaption = styled.div`
  display: flex;
  flex-direction: row;
`;

const SCaptionName = styled.div`
  font-weight: bold;
`;

const SCaptionDate = styled.div`
  color: #808080;
  font-size: 11px;
  margin-left: 9px;
  display: flex;
  align-items: flex-end;
  padding-bottom: 1.8px;
`;

const SCommentText = styled.div`
  background-color: ${props => props.theme.colors.commentTextBackground};
  border: 1px solid ${props => props.theme.colors.commentTextBorder};
  padding: 16px 17px 14px 20px;
  margin-top: 11px;
  line-height: 18px;
  position: relative;

  ::before {
    content: "";
    width: 0;
    height: 0;
    border-bottom: 10px solid ${props => props.theme.colors.commentTextBorder};
    border-right: 10px solid transparent;
    position: absolute;
    left: 22px;
    top: -10px;
  }

  ::after {
    content: "";
    width: 0;
    height: 0;
    border-bottom: 9px solid ${props => props.theme.colors.commentTextBackground};
    border-right: 9px solid transparent;
    position: absolute;
    left: 23px;
    top: -7.5px;
  }
`;

export default {
  name: 'Comment',

  props: {
    name: {
      type: String,
      required: true,
    },

    date: {
      type: String,
      required: true,
    },

    text: {
      type: String,
      required: true,
    },
  },

  components: {
    SComment,
    SCaption,
    SCaptionName,
    SCaptionDate,
    SCommentText,
  },
};
</script>
