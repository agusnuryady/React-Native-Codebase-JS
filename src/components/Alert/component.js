//package import
import React, { memo, useEffect, useState, useCallback } from 'react';
import { View, Text, Animated, Platform } from 'react-native';
import PropTypes from 'prop-types';

//local import
import styles from './styles';

const Component = ({ close, color, text, visible }) => {
  //variable value
  const [bounceValue] = useState(new Animated.Value(-150));

  //native effect
  useEffect(() => {
    if (visible) {
      _show();
      setTimeout(close, 3000);
    }
  }, [_show, close, visible]);

  //place your function in here
  const _show = useCallback(() => {
    Animated.sequence([
      Animated.spring(bounceValue, {
        toValue: 0,
        velocity: 3,
        tension: 2,
        friction: 8,
        useNativeDriver: Platform.OS === 'android',
      }),
      Animated.delay(1000),
      Animated.spring(bounceValue, {
        toValue: -150,
        velocity: 3,
        tension: 2,
        friction: 8,
        useNativeDriver: Platform.OS === 'android',
      }),
    ]).start();
  }, [bounceValue]);

  return (
    <Animated.View
      style={[
        { transform: [{ translateY: bounceValue }] },
        {
          backgroundColor: color,
          ...styles.container,
        },
      ]}
    >
      <View style={styles.action} />
      <View style={styles.flex1}>
        <Text style={styles.text}>{text}</Text>
      </View>
    </Animated.View>
  );
};

Component.propTypes = {
  visible: PropTypes.bool,
  color: PropTypes.string,
  text: PropTypes.string,
  close: PropTypes.func,
};

Component.defaultProps = {
  visible: false,
  color: '',
  text: '',
  close: () => {},
};

export default memo(Component);
