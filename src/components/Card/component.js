//package import
import React, { memo } from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';

//local import
import styles from './styles';
import { COLORS } from '../../configs';
import Button from '../Button';

const Component = ({
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
  return (
    <View style={styleBox} {...props}>
      <View style={shadow && styles.shadow}>
        <Button
          onPress={onPress}
          color={color}
          customWrap={[styleWrap, shadow && styles.shadow]}
          customContainer={[styleContainer]}
          disabled={disabled}
          disabledColor={disabledColor}
          {...props}
        >
          {children}
        </Button>
      </View>
    </View>
  );
};

Component.propTypes = {
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
  children: <View />,
  color: COLORS.white,
  shadow: true,
  styleBox: {},
  styleShadow: {},
  styleWrap: {},
  styleContainer: {},
  onPress: () => null,
  disabled: false,
  disabledColor: COLORS.gray,
};

export default memo(Component);
