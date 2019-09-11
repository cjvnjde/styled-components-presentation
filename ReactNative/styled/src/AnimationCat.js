import React, { Component } from 'react';
import styled from 'styled-components';
import { Animated, Easing } from 'react-native';

class SpinCat extends Component {
  state = {
    rotateAnimation: new Animated.Value(0)
  }

  componentDidMount() {
    Animated.timing(
      this.state.rotateAnimation,
      {
        toValue: 1000,
        duration: 3000000,
        easing: Easing.linear,
        useNativeDriver: true
      }
    ).start();
  }

  render() {
    const spin = this.state.rotateAnimation.interpolate({
      inputRange: [0, 1],
      outputRange: ['0deg', '360deg']
    })

    return (
      <Animated.Image
        style={{
          transform: [{rotate: spin}],
          width: 150,
          height: 150,
        }}
        source={{ uri: 'asset:/images/rotatingCat.png' }}
      />
    )
  }
}

export default SpinCat;