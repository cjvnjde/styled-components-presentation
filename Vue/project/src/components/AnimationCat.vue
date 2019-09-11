<template>
<div>
  <SRotatingCat
    src="../../static/rotatingCat.png"
    height="150"
    width="150"
  />
</div>
</template>

<script>
import styled, { keyframes } from 'vue-styled-components';

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const SRotatingCat = styled.img`
  animation: ${rotate} 2s linear infinite;
  position: absolute;
  top: 10px;
  right: 30px;
`;

export default {
  name: 'AnimationCat',

  components: {
    SRotatingCat,
  },
};
</script>
