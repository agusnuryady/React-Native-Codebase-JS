//package import
import React, { memo } from 'react';
import {
  TouchableOpacity,
  TouchableNativeFeedback,
  Text,
  Platform,
  View,
  ActivityIndicator,
} from 'react-native';
import PropTypes from 'prop-types';

//local import
import styles from './styles';
import { COLORS } from '../../configs';

const Button = ({
  children,
  color,
  styleContainer,
  styleText,
  styleWrap,
  disabled,
  disabledColor,
  isLoading,
  isUpperCase,
  onPress,
  title,
  types,
  ...props
}) => {
  //variable value
  let containerStyle = styles.containerFilled;
  let textStyle = styles.textFilled;
  let loadingColors = COLORS.primaryWhite;

  if (disabled) {
    switch (types) {
      case 'filled':
        containerStyle = styles.containerDisableFilled;
        textStyle = styles.textDisableFilled;
        loadingColors = COLORS.black80;
        break;
      case 'ghost':
        containerStyle = styles.containerDisableGhost;
        textStyle = styles.textDisableGhost;
        loadingColors = COLORS.black60;
        break;
      case 'nude':
        containerStyle = styles.containerDisableNude;
        textStyle = styles.textDisableNude;
        loadingColors = COLORS.black60;
        break;
    }
  } else {
    switch (types) {
      case 'filled':
        containerStyle = styles.containerFilled;
        textStyle = styles.textFilled;
        loadingColors = COLORS.primaryWhite;
        break;
      case 'ghost':
        containerStyle = styles.containerGhost;
        textStyle = styles.textGhost;
        loadingColors = COLORS.primaryBlue;
        break;
      case 'nude':
        containerStyle = styles.containerNude;
        textStyle = styles.textNude;
        loadingColors = COLORS.primaryBlue;
        break;
    }
  }

  if (isUpperCase) {
    title = title.toUpperCase();
  }

  const colors = disabled ? disabledColor : color;

  if (Platform.OS === 'ios') {
    return (
      <View style={[styles.wrapContainer, styleWrap]}>
        <TouchableOpacity
          style={[
            containerStyle,
            styleContainer,
            color && { backgroundColor: colors },
          ]}
          disabled={disabled}
          onPress={onPress}
          activeOpacity={0.8}
          {...props}
        >
          {isLoading ? (
            <ActivityIndicator color={loadingColors} />
          ) : (
            <>
              {children}
              {title ? (
                <Text style={[textStyle, styleText]}>{title}</Text>
              ) : null}
            </>
          )}
        </TouchableOpacity>
      </View>
    );
  } else {
    return (
      <View style={[styles.wrapContainer, styleWrap]}>
        <TouchableNativeFeedback
          disabled={disabled}
          onPress={onPress}
          useForeground={true}
          background={TouchableNativeFeedback.Ripple('rgba(1, 0, 0, 0.2)')}
          {...props}
        >
          <View
            style={[
              containerStyle,
              styleContainer,
              color && { backgroundColor: colors },
            ]}
          >
            {isLoading ? (
              <ActivityIndicator color={loadingColors} />
            ) : (
              <>
                {children}
                {title ? (
                  <Text style={[textStyle, styleText]}>{title}</Text>
                ) : null}
              </>
            )}
          </View>
        </TouchableNativeFeedback>
      </View>
    );
  }
};

Button.propTypes = {
  children: PropTypes.node,
  color: PropTypes.string,
  styleContainer: PropTypes.oneOfType([PropTypes.object, PropTypes.any]),
  styleText: PropTypes.oneOfType([PropTypes.object, PropTypes.any]),
  styleWrap: PropTypes.oneOfType([PropTypes.object, PropTypes.any]),
  disabled: PropTypes.bool,
  disabledColor: PropTypes.string,
  isLoading: PropTypes.bool,
  isUpperCase: PropTypes.bool,
  onPress: PropTypes.func,
  title: PropTypes.string,
  types: PropTypes.oneOf(['filled', 'ghost', 'nude']),
};

Button.defaultProps = {
  children: <View />,
  color: '',
  styleContainer: {},
  styleText: {},
  styleWrap: {},
  disabled: false,
  disabledColor: COLORS.black60,
  isLoading: false,
  isUpperCase: false,
  onPress: () => null,
  title: '',
  types: 'filled',
};

export default memo(Button);
