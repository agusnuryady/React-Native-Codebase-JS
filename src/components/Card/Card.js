//package import
import React, { memo } from 'react';
import { Platform, View } from 'react-native';
import PropTypes from 'prop-types';

//local import
import styles from './styles';
import { COLORS } from '../../configs';
import Button from '../Button';

const Component = ({
  types,
  children,
  color,
  shadow,
  styleBox,
  styleShadow,
  styleWrap,
  styleContainer,
  onPress,
  disabled,
  disabledColor,
  ...props
}) => {
  let styleShadows =
    Object.keys(styleShadow).length !== 0 ? styleShadow : styles.shadow;

  switch (types) {
    case 'basic':
      return (
        <View
          style={[
            styles.wrapCardBasic,
            shadow && styleShadows,
            styleWrap,
            { backgroundColor: color },
          ]}
        >
          {children}
        </View>
      );
    case 'button':
      return (
        <View
          style={[styleBox, Platform.OS === 'ios' && shadow && styleShadows]}
        >
          <Button
            onPress={onPress}
            color={color}
            styleWrap={[
              styles.wrapCardButton,
              styleWrap,
              shadow && styleShadows,
            ]}
            styleContainer={[styles.containerCardButton, styleContainer]}
            disabled={disabled}
            disabledColor={disabledColor}
            {...props}
          >
            {children}
          </Button>
        </View>
      );
  }
};

Component.propTypes = {
  types: PropTypes.oneOf(['basic', 'button']),
  children: PropTypes.node,
  color: PropTypes.string,
  shadow: PropTypes.bool,
  styleBox: PropTypes.oneOfType([PropTypes.object, PropTypes.any]),
  styleShadow: PropTypes.oneOfType([PropTypes.object, PropTypes.any]),
  styleWrap: PropTypes.oneOfType([PropTypes.object, PropTypes.any]),
  styleContainer: PropTypes.oneOfType([PropTypes.object, PropTypes.any]),
  onPress: PropTypes.func,
  disabled: PropTypes.bool,
  disabledColor: PropTypes.string,
};

Component.defaultProps = {
  types: 'basic',
  children: <View />,
  color: COLORS.primaryWhite,
  shadow: true,
  styleBox: {},
  styleShadow: {},
  styleWrap: {},
  styleContainer: {},
  onPress: () => null,
  disabled: false,
  disabledColor: COLORS.black70,
};

export default memo(Component);
